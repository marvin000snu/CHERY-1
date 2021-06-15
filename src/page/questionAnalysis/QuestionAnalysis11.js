import React, {useCallback} from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Molecules/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import { Text, TouchableWithoutFeedback, Alert } from "react-native";
import * as Linking from "expo-linking";
import GlobalStyled from "../../style/GlobalStyled";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import moment from "moment"
import useAPI from "../../hooks/useAPI";
const QuestionAnalysis11 = ({ navigation, route }) => {
  const [API] = useCallback(useAPI(), [])
  const link = route.params.link;
  const name = route.params.name;
  const length = route.params.length;
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
      height: ${hp(100)- Constants.statusBarHeight-70}px;
      margin-top: ${Constants.statusBarHeight}px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
    `,
    toTest: styled.View`
      width: 85%;
      height: 140px;
      border-radius: 6px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow: column;
      border: 2px solid #eee;
    `,
    question: styled.Text`
      width: auto;
      height: 15px;
      font-size: 10px;
      margin-top: 5%;
    `,
    complete: styled.Text`
      width: auto;
      height: 37px;
      font-size: 25px;
      color: #47c4ee;
    `,
    point: styled.View`
      width: 35%;
      height: 10px;
      background-color: #eee;
      margin-bottom: 5%;
    `,
    tbox: styled.View`
      width: 90%;
      height: 80px;
      font-size: 15px;
      margin-top: 20px;
      color: #1b2c49;
    `,
    today: styled.Text`
      width: 100%;
      height: 20px;
      margin-bottom: 5px;
      color: #1b2c49;
      letter-spacing: 5px;
    `,
    study: styled.Text`
      font-size: 15px;
      width: 100%;
      height: 25px;
      color: #1b2c49;
    `,
    btn: styled.View`
      width: 220px;
      height: 50px;
      background-color: #7237fa;
      margin-top: 5%;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    `,
    btn2: styled.View`
      width: 220px;

      height: 50px;
      background-color: #6F87FF;
      margin-top: 13px;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    `,
    btn3: styled.View`
      width: 220px;
      height: 50px;
      margin-top: 13px;
      border-radius: 25px;
      background-color: #6F87FF;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    `,
    btnText: styled.Text`
      color: #fff;
      text-align: center;
      width: 100%;
      height: 100%;
      line-height: 50px;
    `
  };
  const gradeHandler = () => {
    navigation.navigate("GradeStack", {
      screen: "GradePage1",
      params: {
        testType: 3,
        testName: name
      }
    });
  };
  const solveNowHandler = async () => {
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
      console.log(err)
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
    } finally {
    }
  };
  const backHandler = () => {
    navigation.navigate("Home", { screen: "DailyLearningPage0" });
  };
  return (
    <Styled.body>
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
            detail="문항분석 시험지를 생성했습니다."
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
            <GlobalStyled.ViewCol
              as={LinearGradient}
              width="90%"
              height="20%"
              colors={["#AC8AFA", "#5471FF"]}
              style={{ borderRadius: 6, marginTop: 25, minHeight: 100 }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                6월 모의고사
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 32,
                  fontWeight: "bold",
                  marginTop: 12
                }}
              >
            D{parseInt(moment.duration(moment().diff(moment("2021-06-03"))).asDays())}
              </Text>
            </GlobalStyled.ViewCol>
            <Styled.tbox>
              <Styled.today>TODAY</Styled.today>
              <Styled.study>오늘의 문제가 제공되었습니다.</Styled.study>
              <Styled.study>복습과 함께 학습을 시작해 볼까요?</Styled.study>
            </Styled.tbox>
            <GlobalStyled.ViewCol style={{ flex: 1 }}>
              <GlobalStyled.ViewCol
                style={{ maxHeight: 210 }}
                justifyContent="space-around"
              >
                <TouchableWithoutFeedback onPress={solveNowHandler}>
                  <Styled.btn>
                    <Styled.btnText>지금 풀기</Styled.btnText>
                  </Styled.btn>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={gradeHandler}>
                  <Styled.btn2>
                    <Styled.btnText>채점 하기</Styled.btnText>
                  </Styled.btn2>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => {
                    Linking.openURL(link);
                  }}
                >
                  <Styled.btn3>
                    <Styled.btnText>PDF 다운로드</Styled.btnText>
                  </Styled.btn3>
                </TouchableWithoutFeedback>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};

export { QuestionAnalysis11 };
