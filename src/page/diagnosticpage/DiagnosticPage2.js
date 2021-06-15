import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import {
  Animated,
  Text,
  StyleSheet,
  View,
} from "react-native";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import useAPI from "../../hooks/useAPI";
import { Quizlist } from "../../components/Molecules/Quizlist";
import jwt_decode from "jwt-decode";

import { WordQuizAnswer } from "../../components/Molecules/WordQuizAnswer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LinearGradient from "react-native-linear-gradient";
import GlobalStyled from "../../style/GlobalStyled";

const diagnosticTestPage2 = ({ navigation }) => {
  const [quizInfos, setQuizInfos] = useState([
    { name: "close" },
    { name: "near" },
    { name: "next" }
  ]);
  const [quizOptions, setQuizOptions] = useState(["12", "12"]);
  const [API] = useCallback(useAPI(), []);
  const [wordResult, setWordResult] = useState([]);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        setUserName(deCode["cognito:username"]);
      } catch (err) {
        console.log(err);
      }
    };
    useEffectAsyncFunction();
  }, []);
  const Styled = {
    body: styled.View`
      width: 100%;
      height: ${hp(100)}px;
      background-color: #F4F5F7;
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
    contentBox: styled.View`
      width: 100%;
      flex: 1;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    `,
    word: styled.View`
      width: 90%;
      height: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      margin-top: 15px;
    `,
    test: styled.View`
      margin-left: 10px;
      width: 100%;
      height: 30px;
      font-size: 21px;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #1b2c49;
    `,
    choice: styled.View`
      margin-left: 20px;
      width: 100%;
      height: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #a4b6d6;
    `,
    bar: styled.View`
      width:95%;
      height:8px;
      background:linear-gradient(to left, #2684ff, #47C4EE);
      margin-top:15px;
      border:1px; solid #eee;
      border-radius:5px;
    `,
    list: styled.View`
      width: 85%;
      height: 200px;
      margin-top: 48px;
      background-color: #f7f9fd;
    `,
    atom: styled.Text`
      width: 100%;
      height: 33.3%;
      font-size: 16px;
      text-align: center;
      line-height: 70px;
      justify-content: center;
      align-items: center;
      color: #768092;
    `,
    answer: styled.View`
      width: 100%;
      height: 40px;
      margin-top: 140px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    `,
    right: styled.TouchableOpacity`
      width: 45%;
      height: 40px;
      border-radius: 20px;
      background-color: #fff;
      border: 2px solid ${select ? "#48a3ff" : "#bfcce2"};
    `,
    left: styled.TouchableOpacity`
      width: 45%;
      height: 40px;
      border-radius: 20px;
      background-color: #fff;
      border: 2px solid ${select ? "#48a3ff" : "#bfcce2"};
    `,
    summit: styled.View`
      width: 100%;
      height: 75px;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
    `,
    prevbtn: styled.TouchableOpacity`
      width: 40%;
      height: 100%;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #121b50;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    `,
    nextbtn: styled.TouchableOpacity`
      width: 80%;
      height: 45;
      background-color: #6f87ff;
      border-radius: 10px;
      border: 1px solid #d4d7dc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #fff;
    `,
    p1: styled.Text`
      width: 100%;
      background-color: #fff;
      font-size: 21px;
      font-weight: bold;
    `,
    p2: styled.Text`
      color: #a4b6d6;
      font-size: 12px;
      width: 100%;
    `,
    rightText: styled.Text`
      width: 100%;
      color: ${select ? "#48a3ff" : "#bfcce2"};
      text-align: center;
      line-height: 40px;
      font-size: 16px;
    `,
    leftText: styled.Text`
      color: ${select ? "#bfcce2" : "#48a3ff"};
      text-align: center;
      line-height: 40px;
      font-size: 16px;
    `
  };
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeIn = (x) => {
    Animated.timing(fadeAnim, {
      toValue: x,
      duration: 400,
      useNativeDriver: true
    }).start();
  };
  const [level, setLevel] = useState(1);
  const styles = StyleSheet.create({
    background: {
      width: "10%",
      height: 8,
      marginTop: 15,
      borderWidth: 0,
      borderStyle: "solid",
      display: "flex",
    },
    bar: {
      width: "100%",
      marginTop: -1,
      height: 8,
      borderRadius: 0,
      display: "flex",
      width: "100%"
    },
    barBackground: {
      width: "100%",
      display: "flex",
      height: 8,
      flexDirection: "row",
      justifyContent: "flex-start"
    },
    right: {
      width: "45%",
      height: 40,
      borderRadius: 20,
      backgroundColor: "#fff",
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "#bfcce2"
    },
    left: {
      width: "45%",
      height: 40,
      borderRadius: 20,
      backgroundColor: "#fff",
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "#48a3ff"
    },
    rightText: {
      width: "100%",
      color: "#bfcce2",
      textAlign: "center",
      lineHeight: 40,
      fontSize: 16
    },
    leftText: {
      width: "100%",
      color: "#48a3ff",
      textAlign: "center",
      lineHeight: 40,
      fontSize: 16
    }
  });
  const nextProblemHandler = async () => {
    try {
      if (select === -1) {
        alert("답을 선택하세요");
      } else {
        if (level > 8) {
          const params = {
            userId: userName,
            body: {
              wordResult: JSON.stringify(wordResult)
            }
          };
          await API.test.insertWordResult(params);
          navigation.navigate("DiagnosticPage3");
        } else {
          setSelect(-1);
          const useEffectAsyncFunction = async () => {
            try {
              setOnLoading(true);
              setDisabled(true);
              const params = {
                userID: 1,
                body: {
                  input: {
                    inputArray: wordResult
                  },
                  ans: select + 1
                }
              };
              const result = await API.test
                .getWord(params)
                .then((res) => res.data.result.inputArray);
              setQuizInfos(
                result[level].quiz.quiz.map((v) => {
                  return { name: v };
                })
              );
              setQuizOptions(result[level].quiz.option);
              setWordResult(result);
              setOnLoading(false);
            } catch (err) {
              console.log(err);
            } finally {
              setDisabled(false);
            }
          };
          useEffectAsyncFunction();
          fadeIn(level + 1);
          setLevel(level + 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [disabled, setDisabled] = useState(false);
  const [select, setSelect] = useState(-1);
  const leftSelectHandler = () => {
    setSelect(0);
  };
  const rightSelectHandler = () => {
    setSelect(1);
  };
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const params = {
          userID: 1,
          body: {
            input: {
              inputArray: []
            }
          }
        };
        const result = await API.test
          .getWord(params)
          .then((res) => res.data.result.inputArray);
        setQuizInfos(
          result[0].quiz.quiz.map((v) => {
            return { name: v };
          })
        );
        setQuizOptions(result[0].quiz.option);
        setWordResult(result);
        setOnLoading(false);
      } catch (err) {
        //console.log(err);
      }
    };
    useEffectAsyncFunction();
  }, []);
  const [onLoading, setOnLoading] = useState(true);
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

            elevation: 5,
            backgroundColor: "white"
          }}
        >
          <Styled.contentBox>
            <Styled.word>
              <Styled.test>
                <Styled.p1>1. 단어TEST</Styled.p1>
              </Styled.test>
              <Styled.choice>
                <Styled.p2>
                  주어진 단어 3가지와 연관성 있는 단어를 골라주세요!
                </Styled.p2>
              </Styled.choice>
            </Styled.word>
            <View style={styles.barBackground}>
              <Animated.View
                style={[
                  styles.background,
                  { transform: [{ scaleX: fadeAnim }, { translateX: wp(4.6) }] }
                ]}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#A687FF", "#5471FF"]}
                  style={styles.bar}
                />
              </Animated.View>
            </View>
            <Quizlist infos={quizInfos} onLoading={onLoading} />
            <WordQuizAnswer
              disabled={disabled}
              onLoading={onLoading}
              select={select}
              leftSelectHandler={leftSelectHandler}
              rightSelectHandler={rightSelectHandler}
              options={quizOptions}
            />
          </Styled.contentBox>
          <Styled.summit>
            <Styled.nextbtn onPress={nextProblemHandler} disabled={onLoading}>
              <Text style={{ color: "white", fontSize: 16 }}>다음</Text>
            </Styled.nextbtn>
          </Styled.summit>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};

export { diagnosticTestPage2 };
