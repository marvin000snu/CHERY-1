import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import PrevNextBtn from "../src/components/Molecules/PrevNextBtn";
import TestTitle from "./headerfailed";
import { useSharedValue, withTiming, runOnJS } from "react-native-reanimated";
import { Image, Text, TouchableOpacity, ScrollView } from "react-native";

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
  `,
  Text: styled.Text`
    margin-top: 30px;
    width: 90%;
    text-align: left;
  `,
  View: styled.View`
    width: ${wp(85)};
    height: 50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
  Questions: styled.View`
    width: ${wp(100)}px;
    height: ${hp(50)}px;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
  `,
  header: styled.View`
    width: ${wp(100)};
    height: ${hp(27)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  textBox: styled.View`
    margin-top: ${hp(2)}px;
  `,
  infoText: styled.Text`
    font-size: ${wp(4.5)}px;
  `,
  summit: styled.View`
    margin-bottom: ${hp(1.2)}px;
  `,
  selectText: styled.Text`
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: black;
  `,
};

const DiagnosticPage3 = ({ navigation }) => {
  const [API] = useCallback(useAPI(), []);
  const progress = useSharedValue(0.4);
  const [userName, setUserName] = useState("");
  const [level, setLevel] = useState(1);
  const [selectData, setSelectData] = useState({});
  const [ans, setAns] = useState(-1);
  const [ansList, setAnsList] = useState([-1,-1,-1])
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        setUserName(deCode["cognito:username"]);
        const params = {
          userId: deCode["cognito:username"],
          body: {
            code: "210000001",
          },
        };
        const { data } = await API.problemInfo.getSelectList(params);
        setSelectData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    console.log(wp(100));
    useEffectAsyncFunction();
  }, []);

  const nextProblemHandler = async () => {
    try {
      if (level >= 3) {
        const temp = [...ansList];
        temp[level-1] = ans;
        const params = {
          userId: userName,
          body: {
            info: temp,
          },
        };
        console.log("params");
        console.log(params);
        await API.test.insertProblemInfo(params);
        navigation.navigate("DiagnosticPage4")
      } else {
        const temp = [...ansList];
        temp[level-1] = ans;
        setAnsList(temp)
        setAns(-1);
        const params = {
          userId: userName,
          body: {
            code: ["","210000002", "210000003"][level],
          },
        };
        const { data } = await API.problemInfo.getSelectList(params);
        setSelectData(data);
        progress.value = withTiming(progress.value + 0.1, { duration: 500 });
        setLevel(level + 1);
      }
    } catch (err) {
      alert("!");
      console.log(err);
    }
  };

  return (
    <Styled.background>
      <Styled.header>
        <TestTitle
          {...{
            Title: "STEP 1",
            SubTitle: "단어 TEST",
          }}
          value={level * 10 + 30}
          progress={progress}
        />
      </Styled.header>
      <Styled.body as={ScrollView} contentContainerStyle={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Image source={{ uri: "https://problem-img.s3.ap-northeast-2.amazonaws.com/" + ["210000001", "210000002", "210000003"][level - 1] + "280-1-v1.jpg" }} style={{ width: wp(90), height: 200 }} />
        <TouchableOpacity
          style={{ width: "100%", height: "auto", backgroundColor: ans === 1 ? "#5471FF" : "white" }}
          onPress={() => {
            setAns(1);
          }}
        >
          <Text style={{ fontSize: 20, lineHeight: 30, width: "100%", padding: 10, textAlign: "left" }}>{selectData["선지1번"]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "100%", height: "auto", backgroundColor: ans === 2 ? "#5471FF" : "white" }}
          onPress={() => {
            setAns(2);
          }}
        >
          <Text style={{ fontSize: 20, lineHeight: 30, width: "100%", padding: 10, textAlign: "left" }}>{selectData["선지2번"]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "100%", height: "auto", backgroundColor: ans === 3 ? "#5471FF" : "white" }}
          onPress={() => {
            setAns(3);
          }}
        >
          <Text style={{ fontSize: 20, lineHeight: 30, width: "100%", padding: 10, textAlign: "left" }}>{selectData["선지3번"]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "100%", height: "auto", backgroundColor: ans === 4 ? "#5471FF" : "white" }}
          onPress={() => {
            setAns(4);
          }}
        >
          <Text style={{ fontSize: 20, lineHeight: 30, width: "100%", padding: 10, textAlign: "left" }}>{selectData["선지4번"]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "100%", height: "auto", backgroundColor: ans === 5 ? "#5471FF" : "white" }}
          onPress={() => {
            setAns(5);
          }}
        >
          <Text style={{ fontSize: 20, lineHeight: 30, width: "100%", padding: 10, textAlign: "left" }}>{selectData["선지5번"]}</Text>
        </TouchableOpacity>
        <Styled.summit>
          <PrevNextBtn onPrev={nextProblemHandler} onNext={nextProblemHandler} btnType />
        </Styled.summit>
      </Styled.body>
    </Styled.background>
  );
};
export default DiagnosticPage3;
