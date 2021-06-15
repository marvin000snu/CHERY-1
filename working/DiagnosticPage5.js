import React, { useState, useCallback, useEffect, useMemo } from "react";
import styled from "styled-components/native";
import jwt_decode from "jwt-decode";
import { ChoiceBoxList } from "../src/components/Molecules/ChoiceBoxList";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import useAPI from "../src/hooks/useAPI";
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
  body: styled.View`
    width: ${wp(100)}px;
    height: ${hp(73)}px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  info: styled.View`
    width: ${wp(100)}px;
    height: ${hp(5)}px;
    justify-content: flex-start;
    flex-flow: row;
    display: flex;
    align-items: flex-end;
  `,

  contentBox: styled.View`
    flex: 1;
    margin-top: ${hp(2)}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  p1: styled.Text`
    margin-left: ${wp(4)}px;
    font-size: 21px;
  `,
  p2: styled.Text`
    margin-left: 20px;
    color: #a4b6d6;
    font-size: 16px;
  `,
  header: styled.View`
    width: ${wp(100)};
    height: ${hp(27)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  summit: styled.View`
    margin-bottom: ${hp(4)}px;
  `,
};

const diagnosticTestPage4 = ({ navigation }) => {
  const [API] = useCallback(useAPI(), []);
  const [userName, setUserName] = useState("");
  const progress = useSharedValue(0.8);

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


  const [activeInfo, setActiveInfo] = useState([
    { front: true, back: true },
    { front: true, back: true },
    { front: true, back: true },
    { front: true, back: true },
    { front: true, back: true },
  ]);
  const frontHandler = (idx) => {
    var temp = [...activeInfo];
    const { front, back } = temp[idx - 1];
    temp[idx - 1] = { front: !front, back: back };
    setActiveInfo(temp);
  };
  const backHandler = (idx) => {
    var temp = [...activeInfo];
    const { front, back } = temp[idx - 1];
    temp[idx - 1] = { front: front, back: !back };
    setActiveInfo(temp);
  };

  const nextPageHandler = async () => {
    try {
      const box = [];
      const frontBox = ["빈칸추론", "어휘추론", "순서추론", "장문독해", "어법추론"];
      const backBox = ["문장삽입", "요약문", "무관문", "주장찾기", "밑줄의미"];
      for (var i = 0; i < 5; i++) {
        if (!activeInfo[i].front) {
          box.push(frontBox[i]);
        }
        if (!activeInfo[i].back) {
          box.push(backBox[i]);
        }
      }
      const params = {
        userId: userName,
        body: {
          strongType: JSON.stringify(box),
        },
      };
      await API.test.insertType(params);
      navigation.navigate("DiagnosticPage9", {});
    } catch (err) {
      alert("err");
      console.log(err);
    }
  };
  const prevPageHandler = () => {
    navigation.navigate("DiagnosticPage4");
  };

  return (
    <Styled.background>
      <Styled.header>
        <TestTitle
          {...{
            Title: "STEP 1",
            SubTitle: "단어 TEST",
          }}
          value={80}
          progress={progress}
        />
      </Styled.header>
      <Styled.body>
        <Styled.info>
          <Styled.p1>강한유형</Styled.p1>
          <Styled.p2>중복 선택 가능</Styled.p2>
        </Styled.info>
        <Styled.contentBox>
          <ChoiceBoxList infos={activeInfo} frontHandler={frontHandler} backHandler={backHandler} />
        </Styled.contentBox>
        <Styled.summit>
          <PrevNextBtn onPrev={prevPageHandler} onNext={nextPageHandler} />
        </Styled.summit>
      </Styled.body>
    </Styled.background>
  );
};

export default diagnosticTestPage4;
