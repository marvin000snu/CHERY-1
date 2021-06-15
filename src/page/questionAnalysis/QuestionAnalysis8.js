import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Molecules/Header";
import { Analysisbox } from "../../components/Molecules/Analysisbox";
import { SelectInfo } from "../../components/Molecules/SelectInfo";
import { Text, Animated , ScrollView} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Constants from "expo-constants";
import { QuestionAnalysis7 } from "./QuestionAnalysis7";
import { QuestionAnalysis10 } from "./QuestionAnalysis10";
import { QuestionAnalysis9 } from "./QuestionAnalysis9";
import { QuestionAnalysis6 } from "./QuestionAnalysis6";
import jwt_decode from "jwt-decode";
import { QuestionNavBar } from "../../components/Molecules/QuestionNavBar";
import useAPI from "../../hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyled from "../../style/GlobalStyled";
import { useFocusEffect } from "@react-navigation/native";
import Snackbar from "react-native-snackbar";
const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100)}px;
    background-color: #f4f5f7;
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
  wrap: styled.View`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    align-items: center;
    border-radius: 6px;
  `,
  wrapper: styled.View`
    width: 500%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    border-radius: 6px;
  `,
  holder: styled.View`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  summit: styled.View`
    width: 100%;
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  `,
  summitbtn: styled.View`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  `,
  prevbtn: styled.TouchableOpacity`
    width: 40%;
    height: 44px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #6f87ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  `,
  nextbtn: styled.TouchableOpacity`
    width: 40%;
    height: 44px;
    background-color: #6f87ff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
  `,
  info: styled.View`
    width: 100%;
    margin-top: 10px;
    height: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
  `,
  bar: styled.View`
    width: 100%;
    height: 2px;
    background: #6f87ff;
    border: 1px solid #6f87ff;
    border-radius: 5px;
  `,
  title: styled.Text`
    width: 100%;
    height: 18px;
    display: flex;
    text-align: center;
    line-height: 18px;
    font-size: 17px;
    font-weight: 500;
    color: #1b2c49;
  `,
  nav: styled.View`
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  `,
  navlist: styled.Text`
    width: 21%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    color: #a4b6d6;
  `,
  navlist1: styled.Text`
    width: 14%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 400;
    color: #a4b6d6;
  `,
  navlist2: styled.Text`
    width: 22%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 500;
    color: #a4b6d6;
  `,
};
const translateX = new Animated.Value(0);
const QuestionAnalysis8 = function ({ route, navigation }) {
  const [API] = useCallback(useAPI(), []);
  const { result, searchCode, } = route.params;
  const [presentValue, setPresentValue] = useState(0);
  const [test, setTest] = useState(1);
  const [testList, setTestList] = useState([]);
  const ScrollRef = useRef()
  const [userName, setUserName] = useState("");
  const [realName, setRealName] = useState("");
  const [savedNumber, setSavedNumber] = useState(0);
  const makeTestHandler = async (testName) => {
    try {
      if (savedNumber === 0) {
        alert("먼저 문항을 담아주세요.");
      } else if (testList.includes(testName)) {
        Snackbar.show({
          text: "중복된 시험지 이름입니다.",
          duration: 1000,
        });
      } else {
        navigation.navigate("LoadingPage1", {
          type: 3,
          testName: testName,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useFocusEffect(
    useCallback(() => {
      const useEffectAsyncFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const deCode = jwt_decode(token);
          setUserName(deCode["cognito:username"]);
          setRealName(deCode.name);
          const params = {
            userId: deCode["cognito:username"],
            body: {},
          };
          const result = await API.search.getNumOfSearchQ(params);
          const params2 = {
            userId: deCode["cognito:username"],
            type: 3,
            gradeType: 0,
            body: {},
          };
          const { data: searchTest } = await API.weak.getTestName(params2);
          setTestList(
            searchTest.testlist.map((v) => {
              return v.value;
            })
          );
          setSavedNumber(result.data.length);
        } catch (err) {
          console.log(err);
        }
      };
      useEffectAsyncFunction();
      return () => {
        setPresentValue(0);
      };
    }, [])
  );

  const movePage = (i) => {
    ScrollRef.current.scrollTo({x:wp(90)*i, y:0,animated:true})
  };

  const addHandler = async (code, type) => {
    try {
      const params = {
        userId: userName,
        body: {
          reason: type,
          reasonQ: searchCode,
          code: code,
        },
      };
      const result = await API.search.saveProblem(params);
      setSavedNumber(savedNumber + 1);
      alert("문항을 담았습니다. 시험지 생성을 눌러 확인하세요.");
    } catch (err) {
      console.log(err);
    }
  };
  const backHandler = () => {
    navigation.navigate("Home", { screen: "DailyLearningPage0" });
  };
  return (
    <Styled.body>
      <Styled.section>
        <GlobalStyled.ViewCol
          width="90%"
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
          }}
        >
          <Header HeaderTitle={`문항 분석`} detail={`${searchCode}번 문항의 세부정보입니다.`} backHandler={backHandler} />
          <GlobalStyled.ViewCol
            justifyContent="flex-start"
            style={{
              flex: 1,
              backgroundColor: "white",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              overflow: "hidden",
            }}
          >
            <Styled.bar></Styled.bar>
            <QuestionNavBar setPresentValue={setPresentValue} presentValue={presentValue} test={test} setTest={setTest} movePage={movePage}  />
            <Styled.holder>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ width:wp(90), flex:1}} contentContainerStyle={{ width: wp(450), flexDirection:"row" }} pagingEnabled ref={ScrollRef} onScroll={(e)=>{setPresentValue(Math.round(e.nativeEvent.contentOffset.x/wp(90)))}} scrollEventThrottle={16}>
                  <QuestionAnalysis6 wordInfo={result.wordresult} userName={userName}/>
                  <QuestionAnalysis7 topicInfo={result.topicresult} addHandler={addHandler} />
                  <Styled.wrap>
                    <Analysisbox name={realName} percent="55" predict={parseInt(result.incrctrateresult * 100)} />
                    <Styled.info>
                      <Styled.title>선지선택률 정보</Styled.title>
                      {Object.values(result.selectresult)
                        .slice(0, 5)
                        .map((v, idx) => {
                          return <SelectInfo num={idx + 1} per={parseInt(v * 100)} />;
                        })}
                    </Styled.info>
                  </Styled.wrap>
                  <QuestionAnalysis9 sentence={result.sentenceresult.sentence} result={result.sentenceresult.finalsentenceresut} addHandler={addHandler} />
                  <QuestionAnalysis10 navigation={navigation} savedNumber={savedNumber} readabilityresult={result.readabilityresult} makeTestHandler={makeTestHandler} />
              </ScrollView>
            </Styled.holder>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};
export { QuestionAnalysis8 };
