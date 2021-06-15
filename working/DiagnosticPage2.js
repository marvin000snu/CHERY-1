import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import useAPI from "../src/hooks/useAPI";
import { Quizlist } from "../src/components/Molecules/Quizlist";
import jwt_decode from "jwt-decode";
import { WordQuizAnswer } from "../src/components/Molecules/WordQuizAnswer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PrevNextBtn from "../src/components/Molecules/PrevNextBtn";
import TestTitle from "./headerfailed";
import { useSharedValue, withTiming, runOnJS } from "react-native-reanimated";

const Styled = {
  background: styled.View`
    background-color: #5571ff;
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  header: styled.View`
    width: ${wp(100)};
    height: ${hp(27)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,

  body: styled.View`
    width: ${wp(100)}px;
    height: ${hp(73)}px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  contentBox: styled.View`
    width: ${wp(100)}px;
    flex: 1;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  textBox: styled.View`
    margin-top: ${hp(2)}px;
  `,
  infoText: styled.Text`
    font-size: 16px;
  `,
  summit: styled.View`
    margin-bottom: ${hp(5)}px;
  `,
};

const DiagnosticPage2 = ({ navigation }) => {
  const progress = useSharedValue(0);
  const [quizInfos, setQuizInfos] = useState([{ name: "" }, { name: "" }, { name: "" }]);
  const [quizOptions, setQuizOptions] = useState(["", ""]);
  const [API] = useCallback(useAPI(), []);
  const [wordResult, setWordResult] = useState([]);
  const [userName, setUserName] = useState("");
  const [level, setLevel] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const [select, setSelect] = useState(-1);
  const [onLoading, setOnLoading] = useState(true);

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

  const nextProblemHandler = async () => {
    try {
      if (select === -1) {
        alert("답을 선택하세요");
      } else {
        if (level >= 5) {
          const params = {
            userId: userName,
            body: {
              wordResult: JSON.stringify(wordResult),
            },
          };
          await API.test.insertWordResult(params);
          console.log("!")
          const pageMove = (v)=>{
            if(v){
              navigation.navigate("DiagnosticPage3");
            }
          }
          progress.value= withTiming(progress.value + 0.08, {duration:500}, (v)=>{
            runOnJS(pageMove)(v)
          });
        } else {
          progress.value = withTiming(progress.value + 0.08);
          setLevel(level + 1);
          setSelect(-1);
          const useEffectAsyncFunction = async () => {
            try {
              setOnLoading(true);
              setDisabled(true);
              const params = {
                userID: 1,
                body: {
                  input: {
                    inputArray: wordResult,
                  },
                  ans: select + 1,
                },
              };
              const result = await API.test.getWord(params).then((res) => res.data.result.inputArray);
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
        }
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
  };

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
              inputArray: [],
            },
          },
        };
        const result = await API.test.getWord(params).then((res) => res.data.result.inputArray);
        setQuizInfos(
          result[0].quiz.quiz.map((v) => {
            return { name: v };
          })
        );
        setQuizOptions(result[0].quiz.option);
        setWordResult(result);
        setOnLoading(false);
      } catch (err) {}
    };
    useEffectAsyncFunction();
  }, []);

  return (
    <Styled.background>
      <Styled.header>
        <TestTitle
          {...{
            Title: "STEP 1",
            SubTitle: "단어 TEST",
          }}
          value={level * 8 - 8}
          progress={progress}
        />
      </Styled.header>
      <Styled.body>
        <Styled.textBox>
          <Styled.infoText>주어진 단어 3가지와 연관성 있는 단어를 골라주세요</Styled.infoText>
        </Styled.textBox>
        <Styled.contentBox>
          <Quizlist infos={quizInfos} onLoading={onLoading} />
          <WordQuizAnswer disabled={disabled} onLoading={onLoading} select={select} leftSelectHandler={leftSelectHandler} rightSelectHandler={rightSelectHandler} options={quizOptions} />
        </Styled.contentBox>
        <Styled.summit>
          <PrevNextBtn onPrev={nextProblemHandler} onNext={nextProblemHandler} disabled={onLoading} btnType/>
        </Styled.summit>
      </Styled.body>
    </Styled.background>
  );
};

export default DiagnosticPage2;
