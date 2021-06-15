import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Molecules/Header";
import { QuestionAnalysisBox } from "../../components/Molecules/QuestionAnalysisBox";
import Constants from "expo-constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import {
  Text,

  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import useAPI from "../../hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import GlobalStyled from "../../style/GlobalStyled";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  runOnJS,
  withSpring
} from "react-native-reanimated";
import Table from "../../components/Organisms/table";
import { useFocusEffect } from "@react-navigation/native";
import Modal from "react-native-modal";
import Xicon from "../../images/iconSvg/Xicon";
import codeParser from "../../function/codeParser";
const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100) - 70}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    background-color: #f0f2f7;
  `,
  section: styled.View`
    height: ${hp(100) - 80 - Constants.statusBarHeight}px;
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  `,
  centerView: styled.View`
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 90%;
    background-color: white;
  `,
  closerView: styled.View`
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 10%;
    background-color: white;
  `,
  table: styled.View`
    width: 80%;
    height: 430px;
    margin-top: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  tabletop: styled.View`
    width: 100%;
    height: 27px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  `,
  tablebox: styled.View`
    width: 100%;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `,
  tabletext: styled.Text`
    width: 25%;
    height: 27px;
    font-size: 12px;
    color: #1b2c49;
    display: flex;
    text-align: center;
    font-weight: bold;
  `,
  tabletext1: styled.View`
    width: 30%;
    height: 27px;
    font-size: 12px;
    color: #1b2c49;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  `,
  tabledate: styled.View`
    width: 100%;
    height: 37px;
    background-color: #fff;
    margin-top: 9px;
    border-radius: 10px;
    border: 1px solid #eff2f7;
    flex-direction: row;
  `,
  tabledatetext: styled.Text`
    width: 31%;
    height: 100%;
    background-color: #eff2f7;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    text-align: center;
    line-height: 30px;
  `,
  tabledateicon: styled.View`
    width: 23%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  modalTitle: styled.Text`
    width: 100%;
    text-align: center;
    color: #2786ff;
    font-size: 25px;
    font-weight: bold;
    margin-top: 30px;
  `,
  View: styled.View`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
  `
};
const QuestionAnalysisPage1 = function ({ navigation }) {
  const [detail, setDetail] = useState([]);
  const [testList, setTestList] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const useEffectAsyncFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const deCode = jwt_decode(token);
          setUserName(deCode["cognito:username"]);
          setRealName(deCode.name);
          const params = {
            userId: deCode["cognito:username"],
            body: {}
          };
          const history = await API.search.getSearchTestInfo(params);
          const result = await API.search.getNumOfSearchQ(params);
          const historyList = history.data.testlist;
          const params2 = {
            userId: deCode["cognito:username"],
            type: 3,
            gradeType: 0,
            body: {}
          };
          const { data: searchTest } = await API.weak.getTestName(params2);

          setTestList(
            searchTest.testlist.map((v) => {
              return v.value;
            })
          );
          setWeakInfo(historyList);
          setsavedNumber(result.data.length);
          setDetail(result.data.detail);
        } catch (err) {}
      };
      useEffectAsyncFunction();
      return ()=>{setCode("")}
    }, [])
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const opacity = useSharedValue(0);
  const backGroundOpacity = useSharedValue(0);
  const backGroundOffset = useSharedValue(0);
  const [savedProblemModalVisible, setSavedProblemModalVisible] = useState(
    false
  );
  const backgroundStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: backGroundOffset.value }],
      opacity: backGroundOpacity.value
    };
  });
  const detailOffset1 = useSharedValue(0, false);
  const detailOffset2 = useSharedValue(0, false);
  const detailOffset3 = useSharedValue(0, false);
  const detailOffset4 = useSharedValue(0, false);
  const detailOffset5 = useSharedValue(0, false);
  const detailOffset6 = useSharedValue(0, false);
  const detailOffset7 = useSharedValue(0, false);
  const tableOffset1 = useSharedValue(0, false);
  const tableOffset2 = useSharedValue(0, false);
  const tableOffset3 = useSharedValue(0, false);
  const tableOffset4 = useSharedValue(0, false);
  const tableOffset5 = useSharedValue(0, false);
  const tableOffset6 = useSharedValue(0, false);
  const tableOffset7 = useSharedValue(0, false);
  const tableOpacity1 = useSharedValue(1, false);
  const tableOpacity2 = useSharedValue(1, false);
  const tableOpacity3 = useSharedValue(1, false);
  const tableOpacity4 = useSharedValue(1, false);
  const tableOpacity5 = useSharedValue(1, false);
  const tableOpacity6 = useSharedValue(1, false);
  const tableOpacity7 = useSharedValue(1, false);
  const tableOffsetStyles = [
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset1.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset2.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset3.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset4.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset5.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset6.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset7.value }] };
    })
  ];
  const detailOffsetStyles = [
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset1.value }],
        opacity: tableOpacity1.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset2.value }],
        opacity: tableOpacity2.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset3.value }],
        opacity: tableOpacity3.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset4.value }],
        opacity: tableOpacity4.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset5.value }],
        opacity: tableOpacity5.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset6.value }],
        opacity: tableOpacity6.value
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset7.value }],
        opacity: tableOpacity7.value
      };
    })
  ];

  const detailDown = () => {
    detailOffset1.value = withTiming(0);
    tableOffset1.value = withTiming(0);
    detailOffset2.value = withTiming(0);
    tableOffset2.value = withTiming(0);
    detailOffset3.value = withTiming(0);
    tableOffset3.value = withTiming(0);
    detailOffset4.value = withTiming(0);
    tableOffset4.value = withTiming(0);
    detailOffset5.value = withTiming(0);
    tableOffset5.value = withTiming(0);
    detailOffset6.value = withTiming(0);
    tableOffset6.value = withTiming(0);
    detailOffset7.value = withTiming(0);
    tableOffset7.value = withTiming(0);
    tableOpacity1.value = withTiming(0);
    tableOpacity2.value = withTiming(0);
    tableOpacity3.value = withTiming(0);
    tableOpacity4.value = withTiming(0);
    tableOpacity5.value = withTiming(0);
    tableOpacity6.value = withTiming(0);
    tableOpacity7.value = withTiming(0);
  };

  const detailUp = (i) => {
    detailOffset1.value = withTiming(i >= 0 ? 46 : 0);
    tableOffset1.value = withTiming(i >= 0 ? 0 : 46);
    detailOffset2.value = withTiming(i >= 1 ? 46 : 0);
    tableOffset2.value = withTiming(i >= 1 ? 0 : 46);
    detailOffset3.value = withTiming(i >= 2 ? 46 : 0);
    tableOffset3.value = withTiming(i >= 2 ? 0 : 46);
    detailOffset4.value = withTiming(i >= 3 ? 46 : 0);
    tableOffset4.value = withTiming(i >= 3 ? 0 : 46);
    detailOffset5.value = withTiming(i >= 4 ? 46 : 0);
    tableOffset5.value = withTiming(i >= 4 ? 0 : 46);
    detailOffset6.value = withTiming(i >= 5 ? 46 : 0);
    tableOffset6.value = withTiming(i >= 5 ? 0 : 46);
    detailOffset7.value = withTiming(i >= 6 ? 46 : 0);
    tableOffset7.value = withTiming(i >= 6 ? 0 : 46);
    tableOpacity1.value = withTiming(i === 0 ? 1 : 0, { duration: 10 });
    tableOpacity2.value = withTiming(i === 1 ? 1 : 0, { duration: 10 });
    tableOpacity3.value = withTiming(i === 2 ? 1 : 0, { duration: 10 });
    tableOpacity4.value = withTiming(i === 3 ? 1 : 0, { duration: 10 });
    tableOpacity5.value = withTiming(i === 4 ? 1 : 0, { duration: 10 });
    tableOpacity6.value = withTiming(i === 5 ? 1 : 0, { duration: 10 });
    tableOpacity7.value = withTiming(i === 6 ? 1 : 0, { duration: 10 });
  };

  const gradeHandler = (name) => {
    navigation.navigate("GradeStack", {
      screen: "GradePage1",
      params: {
        testType: 2,
        testName: name
      }
    });
  };
  const [API] = useCallback(useAPI(), []);
  const [savedNumber, setsavedNumber] = useState(0);
  const [userName, setUserName] = useState("");
  const [realName, setRealName] = useState("");
  const [weekInfo, setWeakInfo] = useState([
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" }
  ]);
  const modalOffset = useSharedValue(hp(100));
  const modalStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: modalOffset.value }]
    };
  });
  useEffect(() => {}, []);

  const [code, setCode] = useState("");
  const backHandler = () => {
    navigation.navigate("Home", { screen: "DailyLearningPage0" });
  };
  const solveNowHandler = async (name, length) => {
    const token = await AsyncStorage.getItem("@userToken");
    const deCode = jwt_decode(token);
    const params = {
      userId: deCode["cognito:username"]
    };
    try {
      const { data } = await API.tempSave.getTempData(params);
      Alert.alert(
        "바로풀기",
        `${moment(data["created_at"]).format("MM월 DD일에 풀던")} ${
          ["", "매일학습", "약점학습", "문항분석"][Number(data.testType)]
        } ${data.testName}이 있습니다.
        `,
        [
          {
            text: "이어풀기",
            onPress: async () => {
              await AsyncStorage.setItem("@timeData", data.timeData);
              await AsyncStorage.setItem("@drawData", data.drawData);
              await AsyncStorage.setItem("@answerList", data.answerData);
              await API.tempSave.clearTempData(params);
              navigation.navigate("DirectSolveStack", {
                screen: "DirectSolvePage",
                params: {
                  testType: 3,
                  testName: data.testName,
                  length: JSON.parse(data.answerData).length,
                  number: Number(data.number)
                }
              });
            }
          },
          {
            text: "선택한 시험지 풀기",
            onPress: async () => {
              Alert.alert(
                "기존 시험 정보 삭제",
                `${moment(data["created_at"]).format("MM월 DD일에 풀던")} ${
                  ["", "매일학습", "약점학습", "문항분석"][
                    Number(data.testType)
                  ]
                } ${data.testName}정보가 삭제됩니다.
                `,
                [
                  { text: "취소", onPress: () => {} },
                  {
                    text: "선택한 시험지 풀기",
                    onPress: async () => {
                      const alpha = new Array(length).fill({
                        second: 0,
                        minute: 0
                      });
                      await AsyncStorage.setItem(
                        "@timeData",
                        JSON.stringify(alpha)
                      );
                      await AsyncStorage.setItem(
                        "@answerList",
                        JSON.stringify(new Array(length).fill(0))
                      );
                      await AsyncStorage.setItem(
                        "@drawData",
                        JSON.stringify(new Array(length).fill([]))
                      );
                      await API.tempSave.clearTempData(params);
                      navigation.navigate("DirectSolveStack", {
                        screen: "DirectSolvePage",
                        params: {
                          testType: 3,
                          testName: name,
                          length: length,
                          number: 0
                        }
                      });
                    }
                  }
                ]
              );
            }
          }
        ],
        { cancelable: false }
      );
    } catch (err) {
      if (err.response.data.msg === "noTestFind") {
        const alpha = new Array(length).fill({ second: 0, minute: 0 });
        await AsyncStorage.setItem("@timeData", JSON.stringify(alpha));
        await AsyncStorage.setItem(
          "@answerList",
          JSON.stringify(new Array(length).fill(0))
        );
        await AsyncStorage.setItem(
          "@drawData",
          JSON.stringify(new Array(length).fill([]))
        );
        await API.tempSave.clearTempData(params);
        navigation.navigate("DirectSolveStack", {
          screen: "DirectSolvePage",
          params: {
            testType: 3,
            testName: name,
            length: length,
            number: 0
          }
        });
      }
      console.log(err);
    } finally {
    }
  };
  const hide = () => {
    setIsModalOpen(false);
  };
  const closeModal = () => {
    "worklet";
    backGroundOpacity.value = withTiming(0, { toValue: 0 }, () => {
      "worklet";
      runOnJS(hide)();
    });
    modalOffset.value = withTiming(hp(100));
    detailDown();
  };
  const openModal = () => {
    setIsModalOpen(true);
    backGroundOpacity.value = withTiming(1);
    modalOffset.value = withSpring(0);
  };
  const closeSavedProblemModalHandler = () => {
    setsavedNumber(detail.length);
    setSavedProblemModalVisible(false);
  };
  const openSavedProblemModalHandler = () => {
    setSavedProblemModalVisible(true);
  };
  const deleteSavedProblemHandler = async (idx) => {
    try {
      const temp = [...detail];
      const params = {
        userId: "adsjfhl",
        body: {
          id: temp[idx].id
        }
      };
      await API.search.deleteSearchQ(params);
      temp.splice(idx, 1);

      setDetail(temp);
    } catch (err) {
      console.log(err);
    } finally {}
  };
  return (
    <Styled.body>
      <Modal isVisible={savedProblemModalVisible} animationType="slide">
        <View
          style={{
            width: wp(90),
            height: hp(70),
            backgroundColor: "white",
            borderRadius: 10
          }}
        >
          <GlobalStyled.ViewRow style={{ height: 50, marginBottom: 10 }}>
            <GlobalStyled.ViewRow
              width="50px"
              as={TouchableOpacity}
              onPress={closeSavedProblemModalHandler}
            >
              <Xicon size={30} />
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow style={{ flex: 1 }}>
              <Text style={{ fontSize: 20 }}>담은 문항</Text>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow width="50px"></GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center"
            }}
            showsVerticalScrollIndicator= {false}
          >
            {detail.map((v, idx) => {
              return (
                <GlobalStyled.ViewRow
                  height="70px"
                  width="90%"
                  style={{
                    borderRadius: 5,
                    backgroundColor: "#F0F2F7",
                    marginBottom: 10
                  }}
                >
                  <GlobalStyled.ViewCol style={{ flex: 1 }}>
                    <GlobalStyled.ViewRow height="33%">
                      <Text>{codeParser(v.reasonQ)}의</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow height="33%">
                      <Text>유사 {v.reason} 문항</Text>
                    </GlobalStyled.ViewRow>
                    <GlobalStyled.ViewRow height="33%">
                      <Text>{codeParser(v.code)}</Text>
                    </GlobalStyled.ViewRow>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewRow
                    width="50px"
                    style={{ marginRight: 10 }}
                    justifyContent="flex-end"
                  >
                    <GlobalStyled.ViewRow
                      as={TouchableOpacity}
                      onPress={() => {
                        deleteSavedProblemHandler(idx);
                      }}
                      height="40px"
                      style={{ backgroundColor: "#6F87FF", borderRadius: 5 }}
                    >
                      <Text style={{ color: "white" }}>삭제</Text>
                    </GlobalStyled.ViewRow>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewRow>
              );
            })}
          </ScrollView>
        </View>
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
              height: 0
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
        >
          <Header
            HeaderTitle="문항분석"
            detail="분석할 문항을 검색해주세요."
            backHandler={backHandler}
          />
          <GlobalStyled.ViewCol
            justifyContent="flex-start"
            style={{
              flex: 1,
              backgroundColor: "white",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10
            }}
          >
            <Text
              style={{
                color: "#1B2C49",
                fontSize: 18,
                fontWeight: "bold",
                width: "100%",
                paddingLeft: 20,
                marginTop: hp(2.5)
              }}
            >
              분석문항 설정
            </Text>
            <QuestionAnalysisBox
              closeSavedProblemModalHandler={closeSavedProblemModalHandler}
              openSavedProblemModalHandler={openSavedProblemModalHandler}
              openModal={openModal}
              code={code}
              setCode={setCode}
              navigation={navigation}
              savedNumber={savedNumber}
              testList={testList}
            />
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
        {isModalOpen ? (
          <GlobalStyled.ViewCol
            as={Animated.View}
            style={[
              { position: "absolute", backgroundColor: "#414141" },
              backgroundStyle
            ]}
          ></GlobalStyled.ViewCol>
        ) : (
          <View></View>
        )}

        <GlobalStyled.ViewCol
          as={Animated.View}
          width="95%"
          height="550px"
          justifyContent="flex-start"
          style={[
            modalStyle,
            {
              position: "absolute",
              backgroundColor: "white",
              top: (hp(100) - 650) / 2,
              borderRadius: 10
            }
          ]}
        >
          <GlobalStyled.ViewCol height="50px" justifyContent="space-around">
            <Text
              style={{
                color: "#1B2C49",
                fontSize: 18,
                width: "100%",
                paddingLeft: 20
              }}
            >
              {realName}님의 시험지 생성 이력입니다.
            </Text>
            <Text
              style={{
                color: "#A4B6D6",
                fontSize: 16,
                width: "100%",
                paddingLeft: 20
              }}
            >
              최근 7개의 시험지만 확인할 수 있습니다.
            </Text>
          </GlobalStyled.ViewCol>

          <Table
            weekInfo={weekInfo}
            tableOffsetStyles={tableOffsetStyles}
            detailOffsetStyles={detailOffsetStyles}
            detailDown={detailDown}
            detailUp={detailUp}
            solveNowHandler={solveNowHandler}
            gradeHandler={gradeHandler}
            navigation={navigation}
            type={3}
          />
          <GlobalStyled.ViewRow
            as={TouchableOpacity}
            style={{
              marginTop: 50,
              borderTopWidth: 1,
              borderColor: "#B2B8C2",
              flex: 1
            }}
            onPress={closeModal}
          >
            <Text
              style={{ color: "#5E9EFF", fontSize: 20, fontWeight: "bold" }}
            >
              확인
            </Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};
export { QuestionAnalysisPage1 };
