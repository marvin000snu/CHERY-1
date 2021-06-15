import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";
import Bracket from "../../images/iconSvg/Bracket";
import GlobalStyled from "../../style/GlobalStyled";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import useAPI from "../../hooks/useAPI";
import useSchoolAPI from "../../hooks/useSchoolAPI";
import { default as PartialModal } from "react-native-modal";
import MainIcon from "../../images/iconSvg/MainIcon";
import MainIconChange from "../../images/iconSvg/MainIconChange";
import EditPencil from "../../images/iconSvg/EditPencil";
const SettingStyled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100) - 70}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
  `,
  section: styled.View`
    width: 100%;
    height: ${hp(100) - 70 - Constants.statusBarHeight}px;
    margin-top: 17px;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    align-items: center;
    overflow: hidden;
    opacity: 1;
    margin-top: ${Constants.statusBarHeight}px;
  `
};


const Setting = (props) => {
  const [schoolAPI] = useCallback(useSchoolAPI(), []);
  const [schoolArray, setSchoolArray] = useState([]);
  const [schoolName, setSchoolName] = useState();
  const [grade, setGrade] = useState();
  const [msg, setMsg] = useState("");
  const [finishSchoolName, setFinishSchoolName] = useState(false);
  const [API] = useCallback(useAPI(), []);
  const [deCode, setDeCode] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [iconModalVisible, setIconModalVisible] = useState(false);
  const [icon, setIcon] = useState(-1);
  const {setSettingModal, navigation} = props
  const schoolSearch = async () => {
    try {
      if (!finishSchoolName) {
        setFinishSchoolName(true);
      } else {
        setFinishSchoolName(true);
        setModalVisible(true);
        const params = {
          search: schoolName
        };
        const { data } = await schoolAPI.school.highSchool(params);
        setSchoolArray(data.dataSearch.content);
      }
    } catch (err) {
      console.log(err);
      console.log(err);
    }
  };
  useFocusEffect(
    useCallback(() => {
      const callBackFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const tempDeCode = jwt_decode(token);
          setDeCode(tempDeCode);
          const params = {
            userId: tempDeCode["cognito:username"],
            body: {}
          };
          const { data } = await API.info.getSettingInfo(params);
          setGrade(data.userInfo.grade);
          setSchoolName(data.userInfo.school);
          setIcon(data.userInfo.icon);
          setMsg(data.userInfo["chery_msg"]);
        } catch (err) {
          console.log(err);
        }
      };
      callBackFunction();
    }, [])
  );
  const selectSchoolHandler = (id, name) => {
    setModalVisible(false);
    setSchoolName(name);
    setFinishSchoolName(false);
  };

  const [modifyText, setModifyText] = useState("수정");
  const modifyHandler = async () => {
    try {
      if (modifyText === "수정") {
        setModifyText("저장");
      } else {
        if (!finishSchoolName) {
          const params = {
            userId: deCode["cognito:username"],
            body: {
              grade: grade,
              school: schoolName,
              msg: msg
            }
          };
          const { data } = await API.info.editSettingInfo(params);
          const attributeData = [{ name: "custom:school", value: schoolName }];
          const token = await AsyncStorage.getItem("@AccessToken");
          await API.user.updateAttribute(attributeData, token);
          setModifyText("수정");
        } else {
          alert("먼저 학교 이름을 검색해주세요.");
        }
      }
    } catch (err) {
      console.log(err);
      // alert(err);
    }
  };
  const gradeHandler = (i) => {
    setGrade(i);
  };

  const modalClose = () => {
    setModalVisible(false);
  };
  const logoutHandler = async () => {
    try {
      await API.user.logout();
      await AsyncStorage.clear();
      navigation.navigate("beforeLogin", { screen: "login" });
    } catch (err) {
      console.log(err);
    }
  };
  const colorArray = [
    "red",
    "blue",
    "green",
    "gray",
    "purple",
    "yellow",
    "orange",
    "black"
  ];
  const changeIcon = async () => {
    try {
      const params = {
        userId: deCode["cognito:username"],
        body: {
          icon: icon
        }
      };
      const { data } = await API.info.editIcon(params);
    } catch (err) {
      console.log(err);
    } finally {
      setIconModalVisible(false);
    }
  };
  return (
    <SettingStyled.body>
      <Modal visible={modalVisible} animationType="slide">
        <SettingStyled.body>
          <SettingStyled.section>
            <GlobalStyled.ViewRow
              as={TouchableOpacity}
              height={30}
              justifyContent="flex-start"
              onPress={modalClose}
            >
              <Bracket style={{ marginLeft: 20 }} />
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow height={200}>
              <Text
                style={{ color: "#5571FF", fontSize: 25, fontWeight: "bold" }}
              >
                학교 목록
              </Text>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewCol style={{ flex: 1 }}>
              <ScrollView showsVerticalScrollIndicator= {false}>
                <GlobalStyled.ViewCol width={wp(90)}>
                  {schoolArray.map((v) => {
                    return (
                      <GlobalStyled.ViewRow
                        height={60}
                        style={{
                          borderBottomWidth: 1,
                          borderColor: "#E6ECEF",
                          marginBottom: 10,
                          marginTop: 10
                        }}
                      >
                        <GlobalStyled.ViewCol width="80%">
                          <GlobalStyled.ViewRow height={40}>
                            <Text style={{ lineHeight: 40, fontSize: 20 }}>
                              {v.schoolName}
                            </Text>
                          </GlobalStyled.ViewRow>
                          <GlobalStyled.ViewRow height={20}>
                            <Text style={{ fontSize: 10 }}>{v.adres}</Text>
                          </GlobalStyled.ViewRow>
                        </GlobalStyled.ViewCol>
                        <GlobalStyled.ViewCol width="20%">
                          <GlobalStyled.ViewCol
                            onPress={() => {
                              selectSchoolHandler(v.seq, v.schoolName);
                            }}
                            width="90%"
                            height="90%"
                            as={TouchableOpacity}
                            style={{
                              backgroundColor: "#AC8AFA",
                              borderRadius: 5
                            }}
                          >
                            <Text
                              style={{
                                color: "white",
                                fontSize: 15,
                                fontWeight: "bold"
                              }}
                            >
                              선택
                            </Text>
                          </GlobalStyled.ViewCol>
                        </GlobalStyled.ViewCol>
                      </GlobalStyled.ViewRow>
                    );
                  })}
                </GlobalStyled.ViewCol>
              </ScrollView>
            </GlobalStyled.ViewCol>
          </SettingStyled.section>
        </SettingStyled.body>
      </Modal>
      <PartialModal
        isVisible={iconModalVisible}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            width: wp(90),
            height: 280,
            backgroundColor: "white",
            borderRadius: 10,
            alignItems: "center"
          }}
        >
          <GlobalStyled.ViewRow height="31px" style={{ marginTop: 9 }}>
            <Text
              style={{
                fontSize: 18,
                color: "#1B2C49",
                flex: 1,
                marginLeft: 10
              }}
            >
              프로필 아이콘을 선택하세요.
            </Text>
            <GlobalStyled.ViewRow
              width="40px"
              as={TouchableOpacity}
              onPress={() => {
                setIconModalVisible(false);
              }}
            >
              <Image source={require("../../images/icon/iconX.png")} />
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow
            style={{ flexWrap: "wrap", flex: 1, alignItems: "center" }}
          >
            {colorArray.map((v, idx) => {
              return (
                <GlobalStyled.ViewRow
                  as={TouchableOpacity}
                  onPress={() => {
                    setIcon(idx);
                  }}
                  width="25%"
                  height="80px"
                  style={{
                    backgroundColor: icon === idx ? "#AC8AFA" : "white",
                    borderRadius: 5
                  }}
                >
                  <MainIcon size={wp(20) > 72 ? 72 : wp(20)} type={idx} />
                </GlobalStyled.ViewRow>
              );
            })}
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow
            height="50px"
            width="90%"
            style={{ borderTopWidth: 1, borderColor: "#D2DCEA" }}
          >
            <TouchableOpacity onPress={changeIcon}>
              <Text style={{ color: "#5E9EFF", fontSize: 15 }}>변경하기</Text>
            </TouchableOpacity>
          </GlobalStyled.ViewRow>
        </View>
      </PartialModal>
      <SettingStyled.section>
        <View
          style={{
            height: 240,
            width: "100%",
            alignItems: "center"
          }}
        >
          <View
            style={{
              height: 60,
              width: "100%",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={()=>{setSettingModal(false)}}
              style={{ height: 60, width: "20%", justifyContent: "center" }}
            >
              <Bracket style={{ marginLeft: 10 }} />
            </TouchableOpacity>
            <View
              style={{ height: 60, width: "60%", justifyContent: "center" }}
            >
              <Text
                style={{
                  textAlign: "center",
                  width: "100%",
                  fontSize: 24,
                  color: "#1B2C49",
                  fontWeight: "bold"
                }}
              >
                설정
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: 60,
                width: "20%",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={modifyHandler}
            >
              <Text style={{ fontSize: 20, color: "#1B2C49" }}>
                {modifyText}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: 100,
              width: wp(100),
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              setIconModalVisible(true);
            }}
          >
            <MainIcon size={72} type={icon} />
            <MainIconChange
              size={28}
              style={{
                position: "absolute",
                transform: [{ translateY: 22 }, { translateX: 22 }]
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: wp(30),
              height: 40,
              flexDirection: "row",
              borderColor: "#B2B8C2",
              borderBottomWidth: 1,
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 20,
                color: "#1B2C49"
              }}
            >
              {deCode ? deCode.name : ""}
            </Text>
          </View>
          <View
            style={{
              width: wp(70),
              height: 40,
              flexDirection: "row",
              borderColor: "#B2B8C2",
              borderBottomWidth: 1,
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <TextInput
              value={msg}
              onChangeText={setMsg}
              maxLength={25}
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 20,
                color: "#1B2C49"
              }}
              editable={modifyText === "저장"}
            ></TextInput>
            <EditPencil size={15} />
          </View>
        </View>
        <GlobalStyled.ViewRow
          as={TouchableOpacity}
          onPress={() => {
            alert(1);
          }}
          width="90%"
          height="45px"
          style={{
            marginBottom: 15,
            marginTop: 15,
            backgroundColor: "#8E5FFA",
            borderRadius: 15,
            justifyContent: "space-between"
          }}
        >
          <Text style={{ color: "white", fontSize: 15, marginLeft: 20 }}>
            이용권 변경
          </Text>
          <Image
            source={require("../../images/icon/changeRight.png")}
            style={{ marginRight: 20 }}
          />
        </GlobalStyled.ViewRow>
        <View
          style={{
            width: "100%",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <GlobalStyled.ViewCol
            justifyContent="flex-start"
            width="90%"
            height="95%"
            style={{
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
              borderRadius: 10,
              maxHeight: 250
            }}
          >
            <Text style={{ width: "95%", margin: 10 }}>회원 정보</Text>
            <GlobalStyled.ViewCol style={{ flex: 1 }}>
              <GlobalStyled.ViewCol height="50%" style={{}}>
                <GlobalStyled.ViewRow height="50%">
                  <Text style={{ width: "90%" }}>학교</Text>
                </GlobalStyled.ViewRow>
                <GlobalStyled.ViewRow height="50%" alignItems="flex-start">
                  {modifyText === "저장" ? (
                    <GlobalStyled.ViewRow>
                      <TextInput
                        style={{
                          width: "60%",
                          borderRadius: 4,
                          borderWidth: 1,
                          height: "100%",
                          maxHeight: 30,
                          borderColor: "#E6ECEF",
                          color: "black",
                          padding: 0
                        }}
                        value={schoolName}
                        onChangeText={setSchoolName}
                        editable={modifyText === "저장" && finishSchoolName}
                      ></TextInput>
                      <GlobalStyled.ViewCol
                        width="20%"
                        style={{
                          backgroundColor: "#8E5FFA",
                          height: "60%",
                          width: "20%",
                          marginLeft: "10%",
                          borderRadius: 4
                        }}
                        onPress={schoolSearch}
                        as={TouchableOpacity}
                      >
                        <Text style={{ color: "white" }}>
                          {finishSchoolName ? "검색" : "수정"}
                        </Text>
                      </GlobalStyled.ViewCol>
                    </GlobalStyled.ViewRow>
                  ) : (
                    <GlobalStyled.ViewRow>
                      <TextInput
                        style={{
                          width: "90%",
                          borderRadius: 4,
                          borderWidth: 1,
                          height: "100%",
                          maxHeight: 30,
                          borderColor: "#E6ECEF",
                          color: "black",
                          padding: 0
                        }}
                        value={schoolName}
                        onChangeText={setSchoolName}
                        editable={modifyText === "저장" && finishSchoolName}
                      ></TextInput>
                    </GlobalStyled.ViewRow>
                  )}
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewCol>
              <GlobalStyled.ViewCol height="3px" width="90%" style={{borderTopWidth:1, borderColor:"#A0A2A7"}}></GlobalStyled.ViewCol>
              <GlobalStyled.ViewCol height="50%" style={{}}>
                <GlobalStyled.ViewRow height="50%">
                  <Text style={{ width: "90%", }}>학년</Text>
                </GlobalStyled.ViewRow>
                <GlobalStyled.ViewRow height="50%" alignItems="flex-start">
                  <GlobalStyled.ViewRow
                    width="90%"
                    justifyContent="space-between"
                  >
                    <GlobalStyled.ViewRow
                      as={TouchableOpacity}
                      onPress={() => {
                        gradeHandler("예비고1");
                      }}
                      disabled={modifyText === "수정"}
                      width="17%"
                      height="70%"
                      style={{
                        borderColor: grade === "예비고1" ? "#8E5FFA" : "#E6ECEF",
                        borderRadius: 5,
                        borderWidth: grade === "예비고1" ? 3 : 1
                      }}
                    >
                      <Text>예비고1</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow
                      as={TouchableOpacity}
                      onPress={() => {
                        gradeHandler("1학년");
                      }}
                      disabled={modifyText === "수정"}
                      width="17%"
                      height="70%"
                      style={{
                        borderColor: grade === "1학년" ? "#8E5FFA" : "#E6ECEF",
                        borderRadius: 5,
                        borderWidth: grade === "1학년" ? 3 : 1
                      }}
                    >
                      <Text>1 학년</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow
                      as={TouchableOpacity}
                      disabled={modifyText === "수정"}
                      onPress={() => {
                        gradeHandler("2학년");
                      }}
                      width="17%"
                      height="70%"
                      style={{
                        borderColor: grade === "2학년" ? "#8E5FFA" : "#E6ECEF",
                        borderRadius: 5,
                        borderWidth: grade === "2학년" ? 3 : 1
                      }}
                    >
                      <Text>2 학년</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow
                      as={TouchableOpacity}
                      disabled={modifyText === "수정"}
                      onPress={() => {
                        gradeHandler("3학년");
                      }}
                      width="17%"
                      height="70%"
                      style={{
                        borderColor: grade === "3학년" ? "#8E5FFA" : "#E6ECEF",
                        borderRadius: 5,
                        borderWidth: grade === "3학년" ? 3 : 1
                      }}
                    >
                      <Text>3 학년</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow
                      as={TouchableOpacity}
                      disabled={modifyText === "수정"}
                      onPress={() => {
                        gradeHandler("N수생");
                      }}
                      width="17%"
                      height="70%"
                      style={{
                        borderColor: grade === "N수생" ? "#8E5FFA" : "#E6ECEF",
                        borderRadius: 5,
                        borderWidth: grade === "N수생" ? 3 : 1
                      }}
                    >
                      <Text>N수생</Text>
                    </GlobalStyled.ViewRow>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </View>
        <GlobalStyled.ViewRow style={{ height: 88 }}>
          <GlobalStyled.ViewRow
            onPress={logoutHandler}
            as={TouchableOpacity}
            height="50%"
            width="90%"
            style={{
              backgroundColor: "#A4B6D6",
              borderRadius: 6,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10
            }}
          >
            <Text style={{ color: "white", fontSize: 15 }}>로그아웃</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewRow>
      </SettingStyled.section>
    </SettingStyled.body>
  );
};

export default Setting;
