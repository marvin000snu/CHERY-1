import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import useAPI from "../../hooks/useAPI";
import { Text } from "react-native";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

const LoadingPage1 = ({ navigation, route }) => {
  const { type, testName, inputList, direct, weakType, problemType, dailyName, num } = route.params;
  const [API] = useCallback(useAPI(), []);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        setUserName(deCode["cognito:username"]);
        if (type == 1) {
          const name = moment().format("YYYYMMDD");
          const params = {
            userId: deCode["cognito:username"],
            body: {},
          };
          const result = await API.daily.makeDailyTest(params);
          const link = result.data.link;
          await AsyncStorage.setItem("@answerList", JSON.stringify(new Array(7).fill(0)));
          if (direct) {
            navigation.navigate("DirectSolveStack", {
              screen: "DirectSolvePage",
              params: {
                testType: 1,
                testName: name,
                length: 7,
                number: 0,
                tempSave : result.data.tempSave
              },
            });
          } else {
            navigation.navigate("afterLogin", {
              screen: "Daily",
              params: {
                screen: "DailyLearningPage2",
                params: {
                  link: link,
                  name: name,
                  length: 7,
                },
              },
            });
          }
        } else if (type == 2) {
          const params = {
            userId: deCode["cognito:username"],
            body: {
              weakType: 3,
              problemType: problemType ? problemType : "",
              num: num ? num : 0,
            },
          };
          const result = await API.weak.makeWeakTest(params);
          const link = result.data.link;
          const answerInfo = result.data.answerInfo;
          if (direct) {
            const name = moment().format("YYMMDD")+problemType
            await AsyncStorage.setItem("@answerList", answerInfo ? answerInfo : JSON.stringify(new Array(result.data.length).fill(0)));
            navigation.navigate("DirectSolveStack", { 
              screen: "DirectSolvePage",
              params: {
                testType: 2,
                testName: name,
                length: result.data.length,
                number: 0,
                link: link,
              },
            });
          } else {
            navigation.navigate("afterLogin", {
              screen: "Weak",
              params: {
                screen: "WeakLearningPage2",
                params: {
                  link: link,
                  name: testName,
                  length: result.data.length,
                },
              },
            });
          }
        } else if (type == 3) {
          const params = {
            userId: deCode["cognito:username"],
            body: {
              testName: testName,
            },
          };
          const { data } = await API.search.makeSearchTest(params);
          const link = data.link;
          navigation.navigate("QuestionAnalysis11", {
            link: link,
            name: testName,
            length: data.length,
          });
        } else if (type == 4) {
          const params = {
            userId: deCode["cognito:username"],
            body: {
              test_name: testName,
              inputlist: inputList,
            },
          };
          const { data } = await API.weak.makeweaktestBeta(params);
          const link = data.link;
          if (direct) {
            await AsyncStorage.setItem("@answerList", JSON.stringify(new Array(data.length).fill(0)));

            navigation.navigate("DirectSolveStack", {
              screen: "DirectSolvePage",
              params: {
                testType: 3,
                testName: testName,
                length: data.length,
                number: 0,
              },
            });
          } else {
            navigation.navigate("afterLogin", {
              screen: "Daily",
              params: {
                screen: "QuestionAnalysis11",
                params: {
                  link: link,
                  name: testName,
                  length: data.length,
                },
              },
            });
          }
        }
      } catch (err) {
        console.log(err);
        alert(err);
      }
    };
    useEffectAsyncFunction();
  }, []);
  const Styled = {
    body: styled.View`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
    `,
    LoadingText: styled.Text`
      position: absolute;
      color: #5571ff;
      font-size: 25px;
      width: 100%;
      text-align: center;
      font-weight: bold;
      bottom: 70;
    `,
  };
  return (
    <Styled.body>
      <LottieView
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        source={require("../../assets/LoadingAnimation.json")}
        autoPlay
        loop
      ></LottieView>
      <Styled.LoadingText>시험지를 생성하고 있습니다.</Styled.LoadingText>
      <Text style={{ position: "absolute", bottom: 50, color: "white" }}>10~30초 정도 기다려주세요.</Text>
    </Styled.body>
  );
};

export { LoadingPage1 };
