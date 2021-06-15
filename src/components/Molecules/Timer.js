import React, { useState, useCallback, useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components/native";
import GlobalStyled from "../../style/GlobalStyled";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, TouchableOpacity } from "react-native";
import jwt_decode from "jwt-decode";
import useAPI from "../../hooks/useAPI";
import BackArrow from "../../../working/svg/backArrow";

const Timer = forwardRef((props, ref) => {
  const [API] = useCallback(useAPI(), []);
  const { number, length, testName, testType, userName ,timeRef} = props;
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  // function useInterval(callback, delay) {
  //   const savedCallback = useRef();
  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   }, [callback]);
  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // }
  const Styled = {
    word: styled.View`
      width: 50%;
      height: 65px;
      margin-left: 15px;
      margin-top: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,
    test: styled.View`
      margin-left: 20px;
      width: 100%;
      height: 30px;
      font-size: 17px;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #1b2c49;
      flex-direction: row;
    `,
    p1: styled.Text`
      width: 100%;
      font-size: 24px;
      font-weight: bold;
      color: white;
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
    p2: styled.Text`
      background-color: #fff;
      font-size: 13px;
      width: 100%;
    `,
  };
  // const secondHandler = () => {
  //   if (second === 59) {
  //     setSecond(0);
  //     setMinute(minute + 1);
  //   } else {
  //     setSecond(second + 1);
  //   }
  // };
  // useInterval(() => {
  //   // Your custom logic here
  //   secondHandler();
  // }, 1000);
  // useImperativeHandle(ref, () => ({
  //   timeHandler() {
  //     const asyncFunction = async () => {
  //       try {
  //         const params = {
  //           userId: userName,
  //           body : {
  //             testName : testName,
  //             testType : testType,
  //             number: number,
  //             timeData : second + minute*60
  //           }
  //         }
  //         await API.tempSave.saveTimeData(params)
  //       } catch (err) {
  //         console.log(err)
  //       }
  //     };
  //     asyncFunction();
  //   }
  // }));

  const quitTest = async () => {
    try {
      const answerList = await AsyncStorage.getItem("@answer");
      const time = timeRef.current.getTime();
      // const timeData = await AsyncStorage.getItem("@timeData");
      // const drawData = await AsyncStorage.getItem("@drawData");
      const params = {
        userId: userName,
        body: {
          number: number,
          length: length,
          testName: testName,
          testType: testType,
          time: time,
          answerData: answerList,
        },
      };
      console.log(params);
      const {data}= await API.tempSave.tempSave(params);
      console.log("!@!@")
      console.log(data)
      alert(data.msg)
      // alert("시험 정보를 저장했습니다. 언제든 이어 풀 수 있어요!");
      props.navigation.navigate("AfterLoginGradeSolve", {
        screen: "afterLogin",
        params: { screen: "Home", params: { screen: "DailyLearningPage0" } },
      });
    } catch (err) {
      console.log(err);
      alert(err);
    } finally {
    }
  };
  return (
    <GlobalStyled.ViewRow height="55px" style={{ backgroundColor: "#5571FF" }}>
      <Styled.word>
        <Styled.test>
          <BackArrow width={25} height={37} style={{ marginRight: 10 }} />
          <Styled.p1>Question {number + 1}</Styled.p1>
        </Styled.test>
      </Styled.word>
      <GlobalStyled.ViewRow width="50%" justifyContent="flex-start">
        <GlobalStyled.ViewCol width="40%" height="30px"></GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol width="90px" height="30px" style={{ backgroundColor: "white", borderRadius: 10, marginRight: 20 }} as={TouchableOpacity} onPress={quitTest}>
          <Text style={{ color: "#5571FF", fontSize: 16 }}>임시저장</Text>
        </GlobalStyled.ViewCol>
      </GlobalStyled.ViewRow>
    </GlobalStyled.ViewRow>
  );
});

export default React.memo(Timer);
