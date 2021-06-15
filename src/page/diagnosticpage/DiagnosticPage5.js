import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import jwt_decode from "jwt-decode";
import Constants from "expo-constants";
import { Text } from "react-native";
import { ChoiceBoxList } from "../../components/Molecules/ChoiceBoxList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import useAPI from "../../hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyled from "../../style/GlobalStyled";
const diagnosticTestPage5 = ({ navigation, route }) => {
  const { weak } = route.params;
  const [API] = useCallback(useAPI(), []);
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
    info: styled.View`
      margin-left: 20px;
      width: 100%;
      height: 30px;
      font-size: 17px;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #1b2c49;
    `,
    infotitle: styled.View`
      width: 100%;
      height: 36px;
      font-size: 21px;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #1b2c49;
      background-color: #fff;
    `,
    bar: styled.View`
      width:95%;
      height:8px;
      background:linear-gradient(to left, #2684ff, #47C4EE);
      margin-top:15px;
      border:1px; solid #eee;
      border-radius:5px;
    `,
    info2: styled.View`
      margin-left: 20px;
      width: 100%;
      height: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #a4b6d6;
    `,
    infoselect: styled.View`
      width: 85%;
      height: 10px;
      margin: 24px 0 0 17px;
      background-color: #fff;
    `,
    select: styled.View`
      width: 100%;
      height: 340px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-flow: column;
    `,
    btnbox: styled.View`
      width: 100%;
      height: 67px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
    button: styled.View`
      width: 45%;
      height: 40px;
      background-color: #fff;
      border: 2px solid #bfcce2;
      border-radius: 10px;
      font-size: 16px;
      color: #bfcce2;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    summit: styled.View`
      width: 100%;
      height: 75px;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      flex-direction: row;
      justify-content: space-around;
    `,
    summitbtn: styled.View`
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-direction: row;
    `,
    prevbtn: styled.TouchableOpacity`
      width: 40%;
      height: 45px;
      background-color: #fff;
      border-radius: 10px;
      border: 1px solid #6F87FF;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    `,
    nextbtn: styled.TouchableOpacity`
    width: 40%;
    height: 45;
    background-color: #6F87FF;
    border-radius: 10px;
    border: 1px solid #d4d7dc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
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
    p1: styled.Text`
      width: 100%;
      background-color: #fff;
      font-size: 21px;
      font-weight: bold;
    `,
    p2: styled.Text`
      color: #a4b6d6;
      font-size: 16px;
      width: 100%;
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
    word: styled.View`
      width: 90%;
      height: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      margin-top: 15px;
    `,
  };
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
      const frontBox = [
        "빈칸추론",
        "어휘추론",
        "순서추론",
        "장문독해",
        "어법추론",
      ];
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
          weakType: weak,
          strongType: JSON.stringify(box),
        },
      };
      await API.test.insertType(params);
      navigation.navigate("DiagnosticPage7");
    } catch (err) {
      console.log(err);
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
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            backgroundColor: "white",
          }}
        >
          <Styled.contentBox>
            <Styled.word>
              <Styled.info>
                <Styled.p1>3. 내 시험정보 입력</Styled.p1>
              </Styled.info>
              <Styled.info2>
                <Styled.p2>
                  강한 유형 선택하세요. 중복 선택 가능합니다.
                </Styled.p2>
              </Styled.info2>
            </Styled.word>
            <Text style={{width:"100%", paddingLeft:30,fontSize:17, marginTop:10}}>강한 유형 선택</Text>
            <ChoiceBoxList
              infos={activeInfo}
              frontHandler={frontHandler}
              backHandler={backHandler}
            />
          </Styled.contentBox>
          <Styled.summit>
            <Styled.prevbtn
              onPress={() => {
                navigation.navigate("DiagnosticPage4");
              }}
            >
              <Text>이전</Text>
            </Styled.prevbtn>
            <Styled.nextbtn onPress={nextPageHandler}>
              <Text>다음</Text>
            </Styled.nextbtn>
          </Styled.summit>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};
export { diagnosticTestPage5 };
