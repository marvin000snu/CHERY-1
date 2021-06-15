import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import jwt_decode from "jwt-decode";
import Constants from "expo-constants";
import Slider from "@react-native-community/slider";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import useAPI from "../../hooks/useAPI";
import GlobalStyled from "../../style/GlobalStyled";
import AsyncStorage from "@react-native-async-storage/async-storage";
const diagnosticTestPage6 = ({ navigation, route }) => {
  const { box } = route.params;
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
    bar: styled.View`
      width:95%;
      height:8px;
      background:linear-gradient(to left, #2684ff, #47C4EE);
      margin-top:15px;
      border:1px; solid #eee;
      border-radius:5px;
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
    infomation: styled.View`
      width: 100%;
      height: 36px;
      font-size: 17px;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #1b2c49;
      background-color: #fff;
    `,
    select: styled.View`
      width: 95%;
      height: 100px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom-width: 2px;
      border-bottom-color: #dbe5ea;
    `,
    selectinfo: styled.View`
      width: 90%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      flex-direction: row;
    `,
    selectbox: styled.View`
      width: 60%;
      height: 30px;
      background-color: #eee;
    `,
    grades: styled.View`
      width: 85%;
      height: 180px;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
    `,
    cover: styled.View`
      width: 100%;
      height: 100px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-flow: column wrap;
    `,
    covertext: styled.View`
      width: 95%;
      height: 45px;
      background-color: #fff;
      font-weight: 600;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-flow: column;
    `,
    btnbox: styled.View`
      width: 100%;
      height: 75px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
    `,
    btn: styled.TouchableOpacity`
      width: 80%;
      height: 45px;
      background-color: #1b2c49;
      border: 1px solid #fff;
      border-radius: 10px;
      font-family: "Noto Sans CJK KR";
      font-size: 13px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    slidebar: styled.View`
      width: 80%;
      height: 55px;
      background-color: #eee;
      margin-left: 30px;
      margin-top: 15px;
    `,
    p: styled.Text`
      font-size: 14px;
      width: 100%;
    `,
    contentBox: styled.View`
      width: 100%;
      flex:1
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
    View: styled.View`
      width: ${wp(85)};
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    `,
    Text: styled.Text`
      font-size: 20px;
      font-weight: bold;
    `,
    TextMap: styled.Text`
      font-size: 20px;
      font-weight: bold;
      color: #5471FF;
    `,
    TextComplete: styled.Text`
      color: white;
      font-weight: bold;
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
    summitbtn: styled.View`
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    `,
    prevbtn: styled.TouchableOpacity`
      width: 40%;
      height: 45;
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
    info2: styled.View`
      margin-left: 20px;
      width: 100%;
      height: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #a4b6d6;
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
  };
  const moveToAfterLogin = async () => {
    try {
      var revisedBox = box.filter((v) => {
        return v !== "";
      });
      const params = {
        userId: userName,
        body: {
          schoolGrade: school,
          testList: JSON.stringify(box),
          goalScore: final,
          scoreResult: revisedBox[revisedBox.length - 1],
        },
      };
      await API.test.insertAdditionalInfo(params);
      await API.test.insertIsTested(params);
      await API.test.insertScoreResult(params);
      navigation.navigate("DiagnosticPage8");
    } catch (err) {
     console.log(err)
    }
  };
  const prevPageHandler = () => {
    navigation.navigate("DiagnosticPage7");
  };
  const [school, setSchool] = useState(3);
  const [final, setFinal] = useState(90);
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
                <Styled.p2>현재 성적과 목표 성적을 입력하세요.</Styled.p2>
              </Styled.info2>
            </Styled.word>
            <Styled.grades>
              <Styled.cover>
                <Styled.covertext>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    내신 성적 입력
                  </Text>
                  <View class="tbox1">
                    <Styled.p>영어 과목 내신 평균 등급</Styled.p>
                  </View>
                </Styled.covertext>
              </Styled.cover>
              <Slider
                style={{ width: wp(85), height: 40 }}
                minimumTrackTintColor="#5471FF"
                maximumTrackTintColor="gray"
                minimumValue={1}
                maximumValue={9}
                step={0.1}
                value={school}
                onSlidingComplete={(value) => {
                  setSchool(value);
                }}
              />
              <Styled.View>
                <Text>1.0</Text>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#5471FF" }}
                >
                  {Math.round(school * 10) / 10}등급
                </Text>
                <Text>9.0</Text>
              </Styled.View>
            </Styled.grades>
            <Styled.grades>
              <Styled.cover>
                <Styled.covertext>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    목표 수능 성적 입력
                  </Text>
                  <View class="tbox1">
                    <Styled.p>수능 영어 목표 점수</Styled.p>
                  </View>
                </Styled.covertext>
              </Styled.cover>
              <Slider
                style={{ width: wp(85), height: 40 }}
                minimumValue={60}
                maximumValue={100}
                minimumTrackTintColor="#5471FF"
                maximumTrackTintColor="gray"
                step={1}
                value={final}
                onSlidingComplete={(value) => {
                  setFinal(value);
                }}
              />
              <Styled.View>
                <Text>60점</Text>
                <Styled.TextMap>{Math.round(final * 10) / 10}점</Styled.TextMap>
                <Text>100점</Text>
              </Styled.View>
            </Styled.grades>
          </Styled.contentBox>
          <Styled.summit>
            <Styled.summitbtn>
              <Styled.prevbtn onPress={prevPageHandler}>
                <Text>이전</Text>
              </Styled.prevbtn>
              <Styled.nextbtn onPress={moveToAfterLogin}>
                <Text>다음</Text>
              </Styled.nextbtn>
            </Styled.summitbtn>
          </Styled.summit>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};
export { diagnosticTestPage6 };
