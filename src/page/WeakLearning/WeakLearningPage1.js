import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Molecules/Header";
import { WrongAnswerBox } from "../../components/Molecules/WrongAnswerBox";
import {
  Text,
  TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import useAPI from "../../hooks/useAPI";
import codeParser from "../../function/codeParser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import GlobalStyled from "../../style/GlobalStyled";
import Input from "../../function/Input";
import moment from "moment";
import { useFocusEffect } from "@react-navigation/native";
import Snackbar from "react-native-snackbar";
const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100) - 70}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  section: styled.View`
    height: ${hp(100) - 80 - Constants.statusBarHeight}px;
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  `,
  btnbox: styled.View`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: column;
  `,
  btnboxa: styled.TextInput`
    width: 85%;
    height: 30px;
    background-color: #fff;
    border: 1px solid #d6dded;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: #000;
    text-align: center;
  `,
  btnboxb: styled.View`
  width: 85%;
  height: 30px
  border: 1px solid #48a3ff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #48a3ff;
  color: #fff;
  font-size: 12px;
  margin-bottom: 5px;
  margin-top : 5px;
`
};
const WeakLearningPage1 = ({ navigation, route }) => {
  const { testType, testName } = route.params;
  const [testNameValid, setTestNameValid] = useState(true);
  const [testList, setTestList] = useState([]);
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      navigation.navigate("afterLogin", {
        screen: "Home",
        params: {
          screen: "DailyLearningPage0"
        }
      });
    });
  }, []);
  const [API] = useCallback(useAPI(), []);
  const [userName, setUserName] = useState("");
  useFocusEffect(
    useCallback(() => {
      const useEffectAsyncFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const deCode = jwt_decode(token);
          setUserName(deCode["cognito:username"]);
          const params = {
            userId: deCode["cognito:username"],
            type_of_test: testType,
            name_of_test: testName
          };
          const { data } = await API.weak.getWrongList(params);
          const wrongList = data.wronglist;
          const revisedWrongList = wrongList.map((v) => {
            return {
              title: codeParser(v.code),
              code: v.code
            };
          });
          const params2 = {
            userId: deCode["cognito:username"],
            type: 2,
            gradeType: 0,
            body: {}
          };
          const { data: weakTest } = await API.weak.getTestName(params2);
          setTestList(
            weakTest.testlist.map((v) => {
              return v.value;
            })
          );
          setWrongList(revisedWrongList);
        } catch (err) {
          console.log(err);
        }
      };

      if (testType !== undefined && testName !== undefined) {
        useEffectAsyncFunction();
      } else {}
    }, [])
  );

  const createHandler = () => {
    if (savedList.length === 0) {
      Snackbar.show({
        text: "적어도 1문항을 담아주세요.",
        duration: 1000
      });
    } else if (testList.includes(testPaperName)) {
      Snackbar.show({
        text: "중복된 시험지 이름입니다.",
        duration: 1000
      });
    } else {
      navigation.navigate("LoadingPage1", {
        type: 2,
        weakType :1,
        testName: testPaperName,
        inputList: savedList.map((v) => {
          return v.code;
        })
      });
    }
  };
  const [wrongList, setWrongList] = useState([]);
  const [savedList, setSavedList] = useState([]);
  const [testPaperName, setTestPaperName] = useState(
    moment().format("MM/DD 약점학습")
  );
  const backHandler = () => {
    navigation.navigate("Weak", { screen: "WeakLearningPage0" });
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
            HeaderTitle="약점학습"
            detail={`${
              testType === 1
                ? moment(testName).format("MM월DD일 매일학습")
                : testName
            }의 오답문항입니다.`}
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
            <GlobalStyled.ViewCol style={{ flex: 1, backgroundColor: "red" }}>
              <WrongAnswerBox
                wrongList={wrongList}
                savedList={savedList}
                setWrongList={setWrongList}
                setSavedList={setSavedList}
              />
            </GlobalStyled.ViewCol>
            <GlobalStyled.ViewRow
              width="80%"
              height="30px"
              style={{ marginBottom: 10 }}
            >
              <Input
                pattern={[/^[가-힣a-zA-Z0-9\s]+$/]}
                value={testPaperName}
                onChangeText={setTestPaperName}
                style={{
                  width: "70%",
                  textAlign: "center",
                  borderWidth: 1,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderColor: "#DBC9FF",
                  height: "100%",
                  color: testNameValid ? "black" : "red"
                }}
                placeholder="시험지 이름을 입력해주세요."
                onValidation={(isValid) => {
                  setTestNameValid(isValid[0]);
                }}
              ></Input>
              <GlobalStyled.ViewRow
                as={TouchableOpacity}
                disabled={!testNameValid}
                width="30%"
                style={{
                  backgroundColor: testNameValid ? "#6F87FF" : "#D1D9FF",
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5
                }}
                onPress={createHandler}
              >
                <Text style={{ color: "white", fontSize: 16 }}>생성</Text>
              </GlobalStyled.ViewRow>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};

export { WeakLearningPage1 };
