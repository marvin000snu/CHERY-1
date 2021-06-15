import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Molecules/Header";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity
} from "react-native";
import useAPI from "../../hooks/useAPI";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyled from "../../style/GlobalStyled";

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
  answer: styled.View`
    width: 90%;
    flex: 1;
    margin-top: 10px;
    background-color: #fff;
    border: 2px solid #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column;
  `,
  answerb: styled.View`
    width: 90%;
    height: 7%;
    margin-bottom: 5%;
    border-top-width: 2px;
    border-top-color: #eee;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  `,
  answerBoxWrapper: styled.View`
    width: 90%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    margin-bottom: 5px;
  `,
  answerbox: styled.View`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    flex-direction: row;
  `,

  wrongbox: styled.View`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #eff2f7;
  `,
  wrongboxA: styled.View`
    width: 25%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  wrongboxB: styled.View`
    width: 18.75%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  word: styled.View`
    width: 85%;
    height: 204px;
  `,
  border: styled.View`
    width: 100%;
    height: 2px;
    background-color: #eee;
  `,
  btn: styled.View`
    background-color: #AC8AFA;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 71%;
    height: 40px;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
  `,
  BtnText: styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  `,
  numbox: styled.View`
    width: 20%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `,
  checkbox: styled.View`
    width: 18px;
    height: 18px;
    background-color: #666;
    border-radius: 10px;
    margin-right: 10px;
    margin-left: 5px;
  `,
  span: styled.Text`
    font-size: 16px;
    color: #1b2c49;
    font-weight: 500;
  `,
  span1: styled.Text`
    font-size: 16px;
    color: #1b2c49;
    font-weight: 500;
    color: #a4b6d6;
  `,
  p: styled.Text`
    font-size: 18px;
    background-color: #fff;
    font-weight: 600;
  `,
  btnWrapper: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
  `,
  wrap: styled.View`
    width: 95%;
    height: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    background-color: #fff;
    border-top-width: 1px;
    border-top-color: #eee;
    flex-direction: column;
  `,
  title: styled.Text`
    width: 90%;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    margin-top: 15px;
  `,
  subTitle: styled.Text`
    width: 90%;
    height: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
  `
};

const GradePage2 = function ({ navigation, route }) {
  const { testName, testType,length } = route.params;
  var [answerList, setAnswerList] = useState([]);
  const [API] = useCallback(useAPI(), []);
  const number = [1, 2, 3, 4, 5];
  const answerHandler = (index, answer) => {
    var temp = answerList;
    temp[index] = answer;
    setAnswerList([...temp]);
  };
  const [userName, setUserName] = useState("");
  const backHandler = () => {
    navigation.navigate("Home", { screen: "DailyLearningPage0" });
  };
  useEffect(() => {
    if (testType !== null && testName !== null) {
      const useEffectAsyncFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const deCode = jwt_decode(token);
          setUserName(deCode["cognito:username"]);
          const params = {
            userId: deCode["cognito:username"],
            name_of_test: testName,
            type_of_test: testType,
            body: {}
          };
          console.log(params);
          const { data } = await API.weak.getWrongList(params);
          const wrongList = data.wronglist;
          setAnswerList(new Array(length).fill(0));
        } catch (err) {
          console.log(err);
        }
      };

      useEffectAsyncFunction();
    } else {
      alert("시험지를 불러오는 과정에서 오류가 발생했습니다.");
    }
  }, []);


  const gradeButtonHandler = async () => {
    if (answerList.includes(0)) {
      alert("정답을 입력하지 않은 문제가 있습니다.");
    } else {
      try{
        const params = {
        userId: userName,
        body: {
          name_of_test: testName,
          type_of_test: testType,
          inputArray: answerList
        }
      };
      navigation.navigate("GradePage3", {
        testName: testName,
        testType: testType
      });}catch(err){
        console.log(err)
      }finally{}
    }
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
            HeaderTitle="채점 하기"
            detail="답안을 입력하고 채점하기 버튼을 누르세요."
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
            <Styled.title>{testName}</Styled.title>
            <Styled.subTitle>
              {["매일학습", "약점학습", "문항분석"][Number(testType) - 1]}
            </Styled.subTitle>
            <Styled.answer>
              <ScrollView showsVerticalScrollIndicator= {false}>
                <View
                  style={{
                    width: wp(80),
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  {answerList.map((v, idx) => {
                    return (
                      <Styled.answerBoxWrapper key={idx}>
                        <Styled.answerbox>
                          <Styled.span1>Q{String(idx + 1)}:</Styled.span1>
                          {number.map((i) => {
                            return (
                              <TouchableWithoutFeedback
                                style={{
                                  backgroundColor: "blue",
                                  width: "30px",
                                  height: "24px"
                                }}
                                onPress={() => {
                                  answerHandler(idx, i);
                                }}
                              >
                                <Styled.numbox>
                                  <AnswerBox
                                    isChecked={v === i}
                                    text={String(i)}
                                    size={30}
                                    themeColor="#5471FF"
                                    onToggle={() => {
                                      answerHandler(idx, i);
                                    }}
                                  />
                                </Styled.numbox>
                              </TouchableWithoutFeedback>
                            );
                          })}
                        </Styled.answerbox>
                      </Styled.answerBoxWrapper>
                    );
                  })}
                </View>
              </ScrollView>
            </Styled.answer>

            <GlobalStyled.ViewCol
              height="100px"
            >
              <Styled.btnWrapper>
                <TouchableWithoutFeedback onPress={gradeButtonHandler}>
                  <Styled.btn>
                    <Styled.BtnText>채점하기</Styled.BtnText>
                  </Styled.btn>
                </TouchableWithoutFeedback>
              </Styled.btnWrapper>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};
export { GradePage2 };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32
  },
  section: {
    flexDirection: "row",
    alignItems: "center"
  },
  paragraph: {
    fontSize: 15
  },
  checkbox: {
    margin: 8
  }
});

const AnswerBox = (props) => {
  const { themeColor, isChecked, size, text, onToggle } = props;
  return (
    <TouchableOpacity
      onPress={onToggle}
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 1,
        borderColor: themeColor,
        backgroundColor: isChecked ? themeColor : "white"
      }}
    >
      <Text
        style={{
          fontSize: size * 0.8,
          color: isChecked ? "white" : themeColor
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
