import React, { useState, useCallback, useEffect } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { TouchableWithoutFeedback, Text, Image, ActivityIndicator } from "react-native";
import Bracket from "../src/images/iconSvg/Bracket";
import ResultTable from "./Molecules/ResultTable";
import useAPI from "../src/hooks/useAPI";
import GlobalStyled from "../src/style/GlobalStyled";
import testNameParser from "../src/function/testNameParser";
import Modal from "react-native-modal";
import SearchComponent from "../working/Search";

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
  section: styled.View`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    background-color: white;
  `,
  header: styled.View`
    height: ${hp(14)}px;
    flex-flow: row;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: ${hp(2.4)}px;
  `,
  headerText: styled.Text`
    font-size: ${wp(8)}px;
    width: ${wp(80)}px;
    text-align: center;
    color: white;
    font-weight: bold;
  `,
  body: styled.View`
    width: ${wp(100)}px;
    flex: 1;
    background-color: white;
    align-items: center;
  `,
  testInfo: styled.View`
    width: ${wp(93)}px;
    height: ${hp(5)}px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${hp(1)}px;
  `,
  infoTextLeftWrapper: styled.View`
    background-color: #5571ff;
    border: solid 0.2px #000;
    border-radius: ${hp(0.5)}px;
    padding-top: ${hp(0.5)}px;
    padding-bottom: ${hp(0.5)}px;
    justify-content: center;
    align-items: center;
  `,
  infoTextLeft: styled.Text`
    width: ${wp(30)}px;
    color: #fff;
    text-align: center;
    font-size: ${wp(4.5)}px;
    font-weight: bold;
  `,
  infoTextRight: styled.Text`
    width: ${wp(60)}px;
    border-radius: ${hp(0.5)}px;
    border: solid #5571ff;
    text-align: center;
    font-size: ${wp(4.2)}px;
    padding-top: ${hp(0.5)}px;
    padding-bottom: ${hp(0.5)}px;
    justify-content: center;
  `,
  btnText: styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  `,
  btnWrapper: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    margin-bottom: ${hp(5)}px;
  `,
  btn: styled.TouchableOpacity`
    background-color: #8e5ffa;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${wp(45)}px;
    height: 45px;
    color: #fff;
  `,
};
// const TestResultAnalysis = ({ navigation, route }) => { //route 없어서 아래처럼 임으로 설정
const TestResultAnalysis = ({ route, navigation }) => {
  const { testName, testType, userName } = route.params.params;
  // const { testName, testType, userName } = { testName: "20210518", testType: "1", userName: "marvin000" };
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); 
  const [code, setCode] = useState(0);
  const [API] = useCallback(useAPI(), []);
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const params = {
          userId: userName,
          body: { type_of_test: testType, name_of_test: testName },
        };
        const { data } = await API.grade.getScoreInfo(params);
        setList(data["Q_list"]);
      } catch (err) {
        alert("에러얌!");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    useEffectAsyncFunction();
  }, []);

  const nextHandler = () => {
    navigation.navigate("AfterLoginGradeSolve", {
      screen: "afterLogin",
    });
  };

  const backHandler = () => {
    navigation.navigate("afterLogin", {
      screen: "Home",
    });
  };

  return (
    <Styled.background>
      <Modal style={{ padding: 0, margin: 0, backgroundColor: "white" }} isVisible={modalVisible}>
        <SearchComponent backHandler={backHandler} code={code} backHandler={()=>{setModalVisible(false)}}/>
      </Modal>
      <Styled.header>
        <TouchableWithoutFeedback onPress={backHandler}>
          <Bracket color="white" stroke={3} />
        </TouchableWithoutFeedback>
        <Styled.headerText>결과분석</Styled.headerText>
      </Styled.header>
      <Styled.body>
        <Styled.testInfo>
          <Styled.infoTextLeftWrapper>
            <Styled.infoTextLeft>시험정보</Styled.infoTextLeft>
          </Styled.infoTextLeftWrapper>
          <Styled.infoTextRight> {testNameParser(testName)} </Styled.infoTextRight>
        </Styled.testInfo>
        <ResultTable info={list} userName={userName} navigation={navigation} setCode={setCode} setModalVisible={setModalVisible} />
        <Styled.btnWrapper>
          <Styled.btn onPress={nextHandler}>
            <Styled.btnText>완료하기</Styled.btnText>
          </Styled.btn>
        </Styled.btnWrapper>
      </Styled.body>
      {loading && (
        <Styled.section
          style={{
            position: "absolute",
            backgroundColor: "#3B385C",
            bottom: 0,
            height: hp(100),
          }}
        >
          <GlobalStyled.ViewCol>
            <Text style={{ color: "white", fontSize: 25 }}>시험지를 로딩중입니다.</Text>
            <ActivityIndicator size="large" color="white" style={{ marginTop: 20 }}></ActivityIndicator>
          </GlobalStyled.ViewCol>
        </Styled.section>
      )}
    </Styled.background>
  );
};

export default TestResultAnalysis;
