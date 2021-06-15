import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Molecules/Header";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import useAPI from "../../hooks/useAPI";
import jwt_decode from "jwt-decode";
import GlobalStyled from "../../style/GlobalStyled";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle
} from "react-native-reanimated";
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
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
    margin-top: 15px;
  `,
  createBtn: styled.TouchableOpacity`
    width: 60%;
    height: 50px;
    background-color: #6F87FF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 10px;
  `,
  BtnText: styled.Text`
    font-size: 16px;
    color: #fff;
    line-height: 30px;
    text-align: center;
  `,
  dropDownWrapper: styled.View`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  `,
  dropDownTitle: styled.Text`
    width: 90%;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 13px;
    margin-bottom: 10px;
    color: #1b2c49;
  `,
  selectBar: styled.View`
    width: 90%;
    height: 35px;
    background-color: #eee;
    border-radius: 4px;
  `,
  btnWrapper: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100px;
  `,
  selectWrapper: styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30%;
    min-height: 120px;
    max-height: 200px;
    align-items: center;
    margin-top: ${hp(1)}px;
  `,
  selectWrapper1: styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    align-items: center;
  `,
  selectBtn: styled.TouchableOpacity`
    width: 90%;
    height: 30px;
    border-width: ${(props) => props.borderWidth};
    border-color: ${(props) => props.borderColor};
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  `,
  selectBtnText: styled.Text`
    width: 100%;
    text-align: center;
    font-size: 13px;
    color: ${(props) => props.color};
  `,
  subTitle: styled.Text`
    font-size: 13px;
    color: #1b2c49;
    width: 100%;
    margin-left: 30px;
    margin-top: ${hp(2)}px;
  `
};
const GradePage1 = ({ navigation, route }) => {

  const { testType } = route.params;
  const opacity = useSharedValue(0);
  if (testType) {
    opacity.value = withSpring(1);
  }
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    };
  });
  const [selected, setSelected] = useState(Number(testType));
  const [selectedName, setSelectedName] = useState(null);

  const [testData, setTestData] = useState([
    {
      label: "먼저 시험지 종류를 선택하세요.",
      value: null
    }
  ]);
  const StyledSelect = {
    wrap: styled.View`
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,
    title: styled.Text`
      width: 90%;
      height: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 13px;
      margin-bottom: 10px;
      color: #1b2c49;
    `,
    selectBtn: styled.TouchableOpacity`
      width: 30%;
      height: 35px;
      border-radius: 4px;
      font-size: 13px;
      color: #1b2c49;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid
        ${(props) => (props.id === selected ? "#48a3ff" : "#E6ECEF")};
    `,
    Btnbox: styled.View`
      width: 93%;
      height: 35px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    `,
    BtnText: styled.Text`
      font-size: 13px;
      color: ${(props) => (props.id === selected ? "#48a3ff" : "#E6ECEF")};
      width: 100%;
      line-height: 35px;
      text-align: center;
    `
  };
  const [API] = useCallback(useAPI(), []);
  const backHandler = () => {
    navigation.navigate("Home", { screen: "DailyLearningPage0" });
  };
backHandler
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        const params = {
          userId: deCode["cognito:username"],
          type: selected,
          gradeType: 0,
          body: {}
        };
        const result = await API.weak.getTestName(params);
        const data = result.data.testlist;
        if (data.length === 0) {
          setTestData([
            {
              label: "시험지가 없습니다.",
              value: "null"
            }
          ]);
          setSelectedName("null"); //
        } else {
          setTestData(
            data.map((v) => {
              return { label: v.label, value: v.value };
            })
          );
          setSelectedName(data[0].value);
        }

      } catch (err) {
        console.log(err);
        console.log(err)
      }
    };
    useEffectAsyncFunction();
  }, [selected]);

  const nextStepHandler = () => {
    navigation.navigate("GradePage2", {
      testName: selectedName,
      testType: selected,
      length: 10
    });
  };
  const selectHandler = (i) => {
    setSelected(i);
    opacity.value = withSpring(1);
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
            HeaderTitle="채점하기"
            detail="채점할 시험지를 선택해주세요."
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
            <Styled.title>시험지 종류 및 이름 선택</Styled.title>
            <StyledSelect.title>
              먼저 시험지 종류를 선택해주세요.
            </StyledSelect.title>
            <Styled.selectWrapper>
              <Styled.selectBtn
                borderWidth={1 === selected ? "2px" : "1px"}
                borderColor={1 === selected ? "#8348FD" : "#BBC2CF"}
                onPress={() => {
                  selectHandler(1);
                }}
                id={1}
              >
                <Styled.selectBtnText
                  id={1}
                  color={1 === selected ? "#8348FD" : "#BBC2CF"}
                >
                  오늘의 문항 시험지
                </Styled.selectBtnText>
              </Styled.selectBtn>
              <Styled.selectBtn
                borderWidth={2 === selected ? "2px" : "1px"}
                borderColor={2 === selected ? "#8348FD" : "#BBC2CF"}
                onPress={() => {
                  selectHandler(2);
                }}
              >
                <Styled.selectBtnText
                  id={1}
                  color={2 === selected ? "#8348FD" : "#BBC2CF"}
                >
                  약점추천 시험지
                </Styled.selectBtnText>
              </Styled.selectBtn>
              <Styled.selectBtn
                borderWidth={3 === selected ? "2px" : "1px"}
                borderColor={3 === selected ? "#8348FD" : "#BBC2CF"}
                onPress={() => {
                  selectHandler(3);
                }}
                id={3}
              >
                <Styled.selectBtnText
                  id={1}
                  color={3 === selected ? "#8348FD" : "#BBC2CF"}
                >
                  AI 시험지
                </Styled.selectBtnText>
              </Styled.selectBtn>
            </Styled.selectWrapper>
            <GlobalStyled.ViewCol style={{ flex: 1 }}>
              <GlobalStyled.ViewCol
                as={Animated.View}
                style={[{ flex: 1 }, animatedStyles]}
                justifyContent="flex-start"
              >
                <Styled.subTitle>시험지 이름을 선택해주세요.</Styled.subTitle>
                <Styled.selectWrapper1>
                  <GlobalStyled.ViewRow
                    width="100%"
                    style={{ height: 40, marginTop: 10 }}
                  >
                    <DropDownPicker
                      style={{ width: wp(81.5), height: 40 }}
                      dropDownStyle={{ zIndex: 1 }}
                      items={testData.map((v) => {
                        return { label: v.label, value: v.value };
                      })}
                      itemStyle={{
                        justifyContent: "flex-start",
                        zIndex: 1
                      }}
                      defaultValue={selectedName}
                      onChangeItem={(item) => setSelectedName(item.value)}
                    />
                  </GlobalStyled.ViewRow>
                </Styled.selectWrapper1>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewCol>
            <Styled.btnWrapper>
              <Styled.createBtn onPress={nextStepHandler}>
                <Styled.BtnText>답안 입력하기</Styled.BtnText>
              </Styled.createBtn>
            </Styled.btnWrapper>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};

export { GradePage1 };
