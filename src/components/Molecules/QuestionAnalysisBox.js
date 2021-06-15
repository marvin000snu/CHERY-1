import React, { useState, useCallback, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  Image,
  TextInput,
  Button
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import useAPI from "../../hooks/useAPI";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import GlobalStyled from "../../style/GlobalStyled";
import CodePopUp from "../../images/iconSvg/CodePopUp";
import SearchLense from "../../images/iconSvg/SearchLense";
import SearchCode from "../../images/iconSvg/SearchCode";
import moment from "moment";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Snackbar from "react-native-snackbar";
const Styled = {
  section: styled.View`
    width: 100%;
    flex: 1;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
  `,
  wrap: styled.View`
    width: 100%;
    height: 50%;
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  wrapbox: styled.View`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  `,
  slidedown: styled.TextInput`
    width: 150px;
    border-radius: 5px;
    height: 36px;
    background-color: #f5f5f7;
  `,
  createBtn: styled.View`
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: column;
  `,
  createBox: styled.View`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    margin-top: 0px;
  `,
  createText: styled.Text`
    width: 100%;
    height: 36px;
    text-align: center;
    line-height: 36px;
    font-size: 18px;
    color: #1b2c49;
  `,
  create: styled.View`
    width: 80%;
    color: #a4b6d6;
    height: 30px;
    color: #fff;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #6f87ff;
    text-align: center;
    line-height: 36px;
  `,
  createLog: styled.View`
    width: 80%;
    height: 44px;
    background-color: #6f87ff;
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  createLogText: styled.Text`
    color: #fff;
    text-align: center;
    line-height: 36px;
    font-size: 16px;
    font-weight: bold;
    margin-right: 5px;
  `,
  p: styled.Text`
    font-size: 9px;
    font-weight: bold;
    margin: 10px;
    margin-left: 30px;
  `,
  ChoiceButton: styled.View`
    height: 85%;
    width: 45%;
    border-radius: 4px;
    border: 1px solid
      ${(props) => (props.isSelected === selected ? "#2786FF" : "#B2B8C2")};
  `,
  ChoiceButtonText: styled.Text`
    color: ${(props) =>
      props.isSelected === selected ? "#2786FF" : "#B2B8C2"};
    font-size: 18px;
    text-align: center;
    line-height: 40px;
  `
};
const width = new Animated.Value(0);
const opacity = new Animated.Value(0);

const QuestionAnalysisBox = function (props) {
  const [userName, setUserName] = useState("");
  const [testName, setTestName] = useState(
    moment().format("MM/DD 문항분석")
  );
  const {
    openModal,
    code,
    setCode,
    navigation,
    savedNumber,
    openSavedProblemModalHandler,
    testList
  } = props;
  const [searchType, setSearchType] = useState(1);
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
  const show = () => {
    Animated.spring(opacity, {
      toValue: 1
    }).start();
  };

  const hide = () => {
    Animated.spring(opacity, {
      toValue: 0
    }).start();
  };
  const animatedRef = useRef();
  const [API] = useCallback(useAPI(), []);
  const goLeft = () => {
    Animated.timing(width, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true
    }).start();
  };
  const goRight = () => {
    Animated.timing(width, {
      toValue: -wp("90%"),
      duration: 150,
      useNativeDriver: true
    }).start();
  };
  const [year, setYear] = useState(2020);
  const [test, setTest] = useState(1);
  const [isFlip, setIsFlip] = useState(false);
  const [selected, setSelected] = useState(1);
  const searchBtnHandler = async () => {
    const params = {
      userId: userName,
      code: code,
      body: {}
    };
    const result = await API.search.isValid(params);
    const valid = result.data.result;
    if (valid === 1) {
      const result = await API.search.getSearchInfo(params);
      navigation.navigate("QuestionAnalysis8", {
        result: result.data,
        searchCode: code
      });
    } else {
      animatedRef.current?.swing();
      Snackbar.show({
        text: "올바른 문항코드를 입력하세요.",
        duration: 1000
      });
    }
  };
  const makeTestHandler = async () => {
    if (savedNumber === 0) {
      alert("먼저 문항을 담아주세요.");
    } else if (testList.includes(testName)) {
      Snackbar.show({
        text: "중복된 시험지 이름입니다.",
        duration: 1000
      });
    } else {
      navigation.navigate("LoadingPage1", {
        type: 3,
        testName: testName
      });
    }
  };
  const moveHandler = (i) => {
    setSearchType(i);
    if (i === 1) {
      goLeft();
    } else {
      goRight();
    }
  };
  var popUpShow = false;
  const showHideHandler = () => {
    if (popUpShow) {
      popUpShow = !popUpShow;
      hide();
    } else {
      popUpShow = !popUpShow;
      show();
    }
  };

  return (
    <Styled.section>
      <KeyboardAwareScrollView
        scrollEnabled={false}
        extraHeight={200}
        resetScrollToCoords={{ x: 0, y: 0 }}
        style={{
          width: "100%",
          height: 600
        }}
        contentContainerStyle={{
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          display: "flex",
          height: "100%"
        }}
      >
        <Styled.wrap>
          <View style={{ width: "100%" }}>
            <Text style={{ marginLeft: 20, fontSize: 16, color: "#1B2C49" }}>
              검색유형
            </Text>
          </View>
          <GlobalStyled.ViewRow
            height="30"
            justifyContent="flex-start"
            style={{ marginTop: 20 }}
          >
            <GlobalStyled.ViewRow
              as={TouchableOpacity}
              onPress={() => {
                setSearchType(1);
                goLeft();
              }}
              width="120"
              style={{
                borderWidth: searchType === 1 ? 2 : 1,
                borderRadius: 10,
                marginHorizontal: 20,
                borderColor: searchType === 1 ? "#5471FF" : "#BBC2CF"
              }}
            >
              <Text style={{ fontSize: 16 }}>문항코드 검색</Text>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow
              as={TouchableOpacity}
              onPress={() => {
                // setSearchType(2);
                // goRight();
                alert("업데이트 준비중입니다.");
              }}
              width="120"
              style={{
                borderWidth: searchType === 2 ? 2 : 1,
                borderRadius: 10,
                marginHorizontal: 20,
                borderColor: searchType === 2 ? "#5471FF" : "#BBC2CF"
              }}
            >
              <Text style={{ fontSize: 16 }}>교재이름 검색</Text>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <View style={{ width: wp("90%"), overflow: "hidden" }}>
            <Animated.View
              style={[
                {
                  height: 200,
                  width: "200%",
                  display: "flex",
                  flexDirection: "row",
                  overflow: "hidden"
                },
                { transform: [{ translateX: width }] }
              ]}
            >
              <View
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <GlobalStyled.ViewRow
                  height="30"
                  justifyContent="flex-start"
                  style={{
                    marginTop: 15,
                    marginBottom: 15
                  }}
                >
                  <GlobalStyled.ViewRow
                    width="100"
                    style={{ marginHorizontal: 20 }}
                    justifyContent="flex-start"
                  >
                    <Text
                      style={{ marginRight: 5, fontSize: 16, color: "#1B2C49" }}
                    >
                      문항코드
                    </Text>
                    <TouchableWithoutFeedback onPress={showHideHandler}>
                      <SearchCode size={18} />
                    </TouchableWithoutFeedback>
                  </GlobalStyled.ViewRow>
                  <GlobalStyled.ViewRow
                    as={TextInput}
                    width="120"
                    style={{
                      marginHorizontal: 20,
                      borderWidth: 1,
                      borderColor: "#1B2C49",
                      borderRadius: 10
                    }}
                    height="30"
                    justifyContent="flex-start"
                    onChangeText={setCode}
                    value={code}
                  ></GlobalStyled.ViewRow>
                  <TouchableWithoutFeedback onPress={searchBtnHandler}>
                    <SearchLense size={30} />
                  </TouchableWithoutFeedback>
                </GlobalStyled.ViewRow>
                <GlobalStyled.ViewRow
                  height="100"
                  as={Animated.View}
                  style={{ opacity: opacity }}
                >
                  <CodePopUp />
                </GlobalStyled.ViewRow>
              </View>
              <View style={{ width: "50%" }}>
                <Styled.wrapbox>
                  <View
                    style={{
                      width: 150,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <Styled.p>출제년도</Styled.p>
                  </View>
                  <Picker
                    selectedValue={year}
                    style={{ height: 36, width: 160 }}
                    itemStyle={{ height: 44 }}
                    onValueChange={(itemValue, itemIndex) => setYear(itemValue)}
                  >
                    <Picker.Item label="2020" value={2020} />
                    <Picker.Item label="2019" value={2019} />
                    <Picker.Item label="2018" value={2018} />
                    <Picker.Item label="2017" value={2017} />
                    <Picker.Item label="2016" value={2016} />
                  </Picker>
                </Styled.wrapbox>
                <Styled.wrapbox>
                  <View
                    style={{
                      width: 150,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <Styled.p>시험지 종류</Styled.p>
                  </View>
                  <Picker
                    selectedValue={test}
                    style={{ height: 36, width: 160 }}
                    itemStyle={{ height: 44 }}
                    onValueChange={(itemValue, itemIndex) => setTest(itemValue)}
                  >
                    <Picker.Item label="매일학습 시험지" value={1} />
                    <Picker.Item label="약점학습 시험지" value={2} />
                    <Picker.Item label="문항분석 시험지" value={3} />
                  </Picker>
                </Styled.wrapbox>
                <Styled.wrapbox>
                  <View
                    style={{
                      width: 150,
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center"
                    }}
                  >
                    <Styled.p>문항번호</Styled.p>
                  </View>
                  <Styled.slidedown></Styled.slidedown>
                </Styled.wrapbox>
              </View>
            </Animated.View>
          </View>
        </Styled.wrap>
        <Styled.createText>현재 담은 문제 수: {savedNumber}</Styled.createText>
        <Button
          title="담은 문항 보기"
          onPress={openSavedProblemModalHandler}
        ></Button>
        <Styled.createBtn>
          <Styled.createBox>
            <TextInput
              placeholder="시험지 이름을 입력하세요."
              style={{
                width: "80%",
                height: 30,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: "white",
                borderTopWidth: 1,
                borderRightWidth: 1,
                borderLeftWidth: 1,
                borderColor: "#6F87FF",
                textAlign: "center"
              }}
              onChangeText={setTestName}
              value={testName}
            ></TextInput>
            <TouchableWithoutFeedback onPress={makeTestHandler}>
              <Styled.create as={Animatable.View} ref={animatedRef}>
                <Styled.createLogText>시험지 생성하기</Styled.createLogText>
              </Styled.create>
            </TouchableWithoutFeedback>
          </Styled.createBox>
          <Styled.createBox>
            <TouchableWithoutFeedback onPress={openModal}>
              <Styled.createLog>
                <Styled.createLogText>
                  시험지 생성이력
                </Styled.createLogText>
              </Styled.createLog>
            </TouchableWithoutFeedback>
          </Styled.createBox>
        </Styled.createBtn>
      </KeyboardAwareScrollView>
    </Styled.section>
  );
};
export { QuestionAnalysisBox };
