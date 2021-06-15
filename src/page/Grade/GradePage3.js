import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Molecules/Header";
import Constants from "expo-constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ScrollView, Text, TouchableOpacity, Image, Alert, ActivityIndicator, Modal } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
import useAPI from "../../hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import GlobalStyled from "../../style/GlobalStyled";
import LinearGradient from "react-native-linear-gradient";
import Bracket from "../../images/iconSvg/Bracket";
import moment from "moment";
import Xicon from "../../images/iconSvg/Xicon";
import AnswerSheet from "../../components/Organisms/AnswerSheet";

const GradePage3 = function ({ navigation, route }) {
  const { testName, testType } = route.params;
  const [wordList, setWordList] = useState(["12", "sdabjads", "asdf", "Adfaf", "Asdfsaf", "asdf", "qedfggsdg", "asdfas", "af", "sadfasdg"]);
  const [userName, setUserName] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [API] = useCallback(useAPI(), []);
  const [type, setType] = useState([]);
  const [wrongType, setWrongType] = useState([]);
  const [select, setSelect] = useState(1);
  const [typeOfAnswer, setTypeOfAnswer] = useState("");
  const [result, setResult] = useState({});
  const offset = useSharedValue(0);
  const cardOffset = useSharedValue(0);
  const cardStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: cardOffset.value }] };
  });
  const [width, setWidth] = useState(0);

  const selectHandler = (i) => {
    offset.value = withTiming((i - 1) * wp(24.2), {}, () => {
      cardOffset.value = withTiming((1 - i) * width);
    });
  };
  const offsetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: offset.value }] };
  });
  const backHandler = () => {
    navigation.navigate("Home", { screen: "DailyLearningPage0" });
  };
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        setUserName(deCode["cognito:username"]);
        const params = {
          userId: deCode["cognito:username"],
          body: { type_of_test: testType, name_of_test: testName },
        };
        const { data } = await API.grade.getScoreInfo(params);
        const params2 = {
          body: {
            codeList: data["Q_list"]
              .filter((v) => {
                return v.correct == 0;
              })
              .map((v) => {
                return v.code;
              }),
          },
        };
        const { data: wordData } = await API.problemInfo.getWrongProblemWord(params2);
        setWordList(wordData.result);
        setType(data["Q_list"]);
        setWrongType(
          data["Q_list"].filter((v) => {
            return v.correct == 0;
          })
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    useEffectAsyncFunction();
  }, []);
  const Styled = {
    body: styled.View`
      width: 100%;
      height: ${hp(100)}px;
      background-color: white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
    `,
    section: styled.View`
      height: ${hp(100) - Constants.statusBarHeight}px;
      margin-top: ${Constants.statusBarHeight}px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
    `,
    tableWrap: styled.View`
      width: 96%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      border: 1.5px solid #eee;
    `,
    btn: styled.TouchableOpacity`
      background-color: #8e5ffa;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      height: 45px;
      color: #fff;
    `,
    wordBox2: styled.View`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 80%;
      height: 30%;
      margin-top: 1%;
      flex-direction: row;
    `,
    wordtitle: styled.Text`
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 3%;
      color: #1b2c49;
      font-size: 12px;
      font-weight: 600;
    `,
    btnText: styled.Text`
      color: #fff;
      font-size: 20px;
      font-weight: 400;
    `,
    btnWrapper: styled.View`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100px;
    `,
  };

  const nextHandler = () => {
    navigation.navigate("afterLogin", {
      screen: "Home",
      params: {
        screen: "DailyLearningPage0",
      },
    });
  };
  const Word = ({ word }) => {
    return (
      <TouchableOpacity
        style={{
          height: 30,
          borderRadius: 15,
          backgroundColor: "#EAE1FC",
          justifyContent: "center",
          alignItems: "center",
          minWidth: 40,
          margin: 5,
        }}
        onPress={() => {
          addWord(word);
        }}
      >
        <Text
          style={{
            fontFamily: "12lottemartdreammedium",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          {word}
        </Text>
      </TouchableOpacity>
    );
  };

  const addWord = (v) => {
    Alert.alert("단어장 추가", `${v}를 단어장에 추가할까요?\n이미 단어장에 있는 단어는 추가되지 않습니다.`, [
      { text: "취소" },
      {
        text: "추가",
        onPress: async () => {
          try {} catch (err) {
            console.log(err.response.data);
          }
        },
      },
    ]);
  };
  const answerHandler = async (v) => {
    try {
      const params = {
        userId: userName,
        code: v,
      };
      const result = await API.answerSheet.getAnswerSheetInfo(params);
      setResult(result.data.result);
      setTypeOfAnswer(result.data.type);
      setModalVisible(true);
    } catch (err) {
      alert("해설을 준비중인 문항입니딩!");
      console.log(err);
    } finally {
    }
  };
  return (
    <Styled.body>
      <Modal visible={modalVisible}>
        <GlobalStyled.ViewCol height={hp(100)} width={wp(100)} style={{}} justifyContent="flex-start">
          <GlobalStyled.ViewRow style={{ marginTop: 30, height: 100 }}>
            <GlobalStyled.ViewCol
              width="15%"
              as={TouchableOpacity}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Xicon size={30} />
            </GlobalStyled.ViewCol>
            <GlobalStyled.ViewCol width="70%">
              <Text style={{ color: "#1B2C49", fontSize: 30, fontFamily: "NotoSansKR-Bold" }}>문항해설</Text>
            </GlobalStyled.ViewCol>
            <GlobalStyled.ViewCol width="15%"></GlobalStyled.ViewCol>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewCol style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ width: wp(100), flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start" }} showsVerticalScrollIndicator= {false}>
              <AnswerSheet type={typeOfAnswer} result={result}/>
            </ScrollView>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Modal>
      <Styled.section>
        <GlobalStyled.ViewCol
          width="91%"
          height="95%"
          justifyContent="flex-start"
          style={{
            borderRadius: 10,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Header HeaderTitle="결과 분석" detail="틀린 문항을 확인하세요." backHandler={backHandler} />
          <GlobalStyled.ViewCol
            justifyContent="flex-start"
            style={{
              flex: 1,
              backgroundColor: "white",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <GlobalStyled.ViewRow height="60">
              <GlobalStyled.ViewRow
                height="45"
                width="80%"
                justifyContent="flex-start"
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  borderRadius: 22.5,
                  backgroundColor: "white",
                }}
              >
                <GlobalStyled.ViewCol as={Animated.View} width="33.3%" style={[{ position: "absolute" }, offsetStyle]}>
                  <LinearGradient
                    colors={["#AC8AFA", "#5471FF"]}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 22.5,
                    }}
                  ></LinearGradient>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewCol
                  width="33.3%"
                  as={TouchableOpacity}
                  onPress={() => {
                    selectHandler(1);
                  }}
                >
                  <Text
                    style={{
                      color: select === 1 ? "black" : "black",
                      fontSize: 16,
                    }}
                  >
                    전체
                  </Text>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewCol
                  width="33.3%"
                  as={TouchableOpacity}
                  onPress={() => {
                    selectHandler(2);
                  }}
                >
                  <Text
                    style={{
                      color: select === 2 ? "black" : "black",
                      fontSize: 16,
                    }}
                  >
                    오답
                  </Text>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewCol
                  width="33.3%"
                  as={TouchableOpacity}
                  onPress={() => {
                    selectHandler(3);
                  }}
                >
                  <Text
                    style={{
                      color: select === 3 ? "black" : "black",
                      fontSize: 16,
                    }}
                  >
                    어휘
                  </Text>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewRow>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewCol height="30">
              <Text style={{ fontFamily: "12lottemartdreammedium", width: "90%" }}>
                {testType == 1 ? moment(testName).format("MM월 DD일 오늘의 문항") : testName}-{["오늘의 문항", "약점 추천", "AI시험지"][Number(testType) - 1]}
              </Text>
            </GlobalStyled.ViewCol>
            <GlobalStyled.ViewCol style={{ flex: 1 }}>
              <GlobalStyled.ViewCol
                style={{
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  borderRadius: 10,
                }}
                width="95%"
              >
                <GlobalStyled.ViewCol
                  width="100%"
                  style={{
                    overflow: "hidden",
                  }}
                  alignItems="flex-start"
                >
                  <GlobalStyled.ViewRow width="300%" as={Animated.View} style={[cardStyle, { backgroundColor: "white" }]}>
                    <GlobalStyled.ViewCol
                      width="33.33%"
                      onLayout={(event) => {
                        setWidth(event.nativeEvent.layout.width);
                      }}
                    >
                      <ScrollView style={{ width: width }} showsVerticalScrollIndicator= {false}>
                        <GlobalStyled.ViewCol
                          width={width}
                        >
                          {type.map((v) => {
                            return (
                              <GlobalStyled.ViewRow
                                height="50"
                                style={{
                                  borderBottomWidth: 1,
                                  paddingBottom: 5,
                                  paddingTop: 5,
                                  borderColor: "#707070",
                                }}
                              >
                                <GlobalStyled.ViewCol width="15%">
                                  <Text style={{ color: "#707070", fontSize: 16 }}>Q{v.number}</Text>
                                </GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol width="30%">
                                  <GlobalStyled.ViewRow height="15px">
                                    <Text style={{ fontSize: 10, width: "100%" }}>문항코드</Text>
                                  </GlobalStyled.ViewRow>
                                  <GlobalStyled.ViewRow height="25px">
                                    <Text style={{ fontSize: 15, width: "100%" }}>{v.code}</Text>
                                  </GlobalStyled.ViewRow>
                                </GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol width="15%">
                                  <GlobalStyled.ViewRow height="15px">
                                    <Text style={{ fontSize: 10, width: "100%" }}>선택한 답</Text>
                                  </GlobalStyled.ViewRow>
                                  <GlobalStyled.ViewRow height="25px">
                                    <Text style={{ fontSize: 15, width: "100%" }}>{v["selected_ans"]}번</Text>
                                  </GlobalStyled.ViewRow>
                                </GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol width="15%">
                                  <GlobalStyled.ViewRow height="15px">
                                    <Text style={{ fontSize: 10, width: "100%" }}>정답</Text>
                                  </GlobalStyled.ViewRow>
                                  <GlobalStyled.ViewRow height="25px">
                                    <Text style={{ fontSize: 15, width: "100%" }}>{v.ans}번</Text>
                                  </GlobalStyled.ViewRow>
                                </GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol width="15%">{v.correct == 0 ? <Image source={require("../../images/icon/purpleX.png")} /> : <Image source={require("../../images/icon/purpleO.png")} />}</GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol
                                  width="10%"
                                  as={TouchableOpacity}
                                  onPress={() => {
                                    answerHandler(v.code);
                                  }}
                                >
                                  <Bracket
                                    style={{
                                      transform: [{ rotate: "180deg" }],
                                    }}
                                  />
                                </GlobalStyled.ViewCol>
                              </GlobalStyled.ViewRow>
                            );
                          })}
                        </GlobalStyled.ViewCol>
                      </ScrollView>
                    </GlobalStyled.ViewCol>
                    <GlobalStyled.ViewCol width="33.33%">
                      <ScrollView style={{ width: width }} showsVerticalScrollIndicator= {false}>
                        <GlobalStyled.ViewCol
                          width={width}
                        >
                          {wrongType.map((v, idx) => {
                            return (
                              <GlobalStyled.ViewRow
                                height="50"
                                style={{
                                  borderBottomWidth: 1,
                                  paddingBottom: 5,
                                  paddingTop: 5,
                                  borderColor: "#707070",
                                }}
                              >
                                <GlobalStyled.ViewCol width="15%">
                                  <Text style={{ color: "#707070", fontSize: 16 }}>Q{v.number}</Text>
                                </GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol width="30%">
                                  <GlobalStyled.ViewRow height="15">
                                    <Text style={{ fontSize: 10, width: "100%" }}>문항코드</Text>
                                  </GlobalStyled.ViewRow>
                                  <GlobalStyled.ViewRow height="25">
                                    <Text style={{ fontSize: 15, width: "100%" }}>{v.code}</Text>
                                  </GlobalStyled.ViewRow>
                                </GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol width="15%">
                                  <GlobalStyled.ViewRow height="15">
                                    <Text style={{ fontSize: 10, width: "100%" }}>선택한 답</Text>
                                  </GlobalStyled.ViewRow>
                                  <GlobalStyled.ViewRow height="25">
                                    <Text style={{ fontSize: 15, width: "100%" }}>{v["selected_ans"]}번</Text>
                                  </GlobalStyled.ViewRow>
                                </GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol width="15%">
                                  <GlobalStyled.ViewRow height="15">
                                    <Text style={{ fontSize: 10, width: "100%" }}>정답</Text>
                                  </GlobalStyled.ViewRow>
                                  <GlobalStyled.ViewRow height="25">
                                    <Text style={{ fontSize: 15, width: "100%" }}>{v.ans}번</Text>
                                  </GlobalStyled.ViewRow>
                                </GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol width="15%">
                                  <Image source={require("../../images/icon/purpleX.png")} />
                                </GlobalStyled.ViewCol>
                                <GlobalStyled.ViewCol width="10%">
                                  <Bracket
                                    style={{
                                      transform: [{ rotate: "180deg" }],
                                    }}
                                  />
                                </GlobalStyled.ViewCol>
                              </GlobalStyled.ViewRow>
                            );
                          })}
                        </GlobalStyled.ViewCol>
                      </ScrollView>
                    </GlobalStyled.ViewCol>
                    <GlobalStyled.ViewCol width="33.33%" justifyContent="flex-start">
                      <GlobalStyled.ViewCol height="70">
                        <Text
                          style={{
                            fontFamily: "12lottemartdreammedium",
                            color: "#5471FF",
                            fontSize: 20,
                          }}
                        >
                          오답문항 포함 주요 어휘
                        </Text>
                        <Text
                          style={{
                            fontFamily: "12lottemartdreammedium",
                            color: "#1B2C49",
                            fontSize: 12,
                          }}
                        >
                          단어를 터치하여 단어장에 담으세요.
                        </Text>
                      </GlobalStyled.ViewCol>
                      <ScrollView style={{ width: width }} showsVerticalScrollIndicator= {false}>
                        <GlobalStyled.ViewRow style={{ flexWrap: "wrap" }}>
                          {wordList.map((v) => {
                            return <Word word={v}></Word>;
                          })}
                        </GlobalStyled.ViewRow>
                      </ScrollView>
                    </GlobalStyled.ViewCol>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewCol>
            <Styled.btnWrapper>
              <Styled.btn onPress={nextHandler}>
                <Styled.btnText>완료하기</Styled.btnText>
              </Styled.btn>
            </Styled.btnWrapper>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Styled.section>
      {loading && (
        <Styled.section
          style={{
            position: "absolute",
            backgroundColor: "#3B385C",
            bottom: 0,
            height: hp(100),
            elevation: 10,
            zIndex: 10,
          }}
        >
          <GlobalStyled.ViewCol>
            <Text style={{ color: "white", fontSize: 25 }}>{route.params.type ? "시험지 정보를 불러오고 있습니다." : "채점을 진행하고 있습니다."}</Text>
            <ActivityIndicator size="large" color="white" style={{ marginTop: 20 }}></ActivityIndicator>
          </GlobalStyled.ViewCol>
        </Styled.section>
      )}
    </Styled.body>
  );
};
export { GradePage3 };
