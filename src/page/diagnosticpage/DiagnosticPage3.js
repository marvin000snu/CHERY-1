import React, { useRef, useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import {
  Animated,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Slider from "@react-native-community/slider";
import { SyntaxTest } from "../../components/Molecules/SyntaxTest";
import useAPI from "../../hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import GlobalStyled from "../../style/GlobalStyled";
const diagnosticTestPage3 = ({ navigation }) => {
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
    wrap: styled.View`
      width: auto;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,

    title: styled.View`
      width: 85%;
      height: 40px;
      background-color: #fff;
      margin-top: 15px;
    `,
    subtitle: styled.View`
      width: 88%;
      height: 14px;
      background-color: #fff;
      margin: 3% 0 0 17px;
      color: #a4b6d6;
    `,
    bar: styled.View`
      width:95%;
      height:8px;
      background:linear-gradient(to left, #2684ff, #47C4EE);
      margin-top:15px;
      border:1px; solid #eee;
      border-radius:5px;
    `,
    textbox: styled.View`
      margin-top: 15px;
      width: 85%;
      height: 115px;
      background-color: #eff2f7;
      border: 1px solid #eff2f7;
      border-radius: 10px;
      padding: 10px;
    `,
    interpret: styled.View`
      width: 85%;
      height: 115px;
      background-color: #eff2f7;
      border: 1px solid #f7f9fd;
      border-radius: 10px;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    `,
    interpretbtn: styled.TouchableOpacity`
      width: 40%;
      height: 34px;
      border: 1px solid #a4b6d6;
      border-radius: 15px;
      color: #a4b6d6;
      text-align: center;
      line-height: 34px;
    `,
    interpretbtnText: styled.Text`
      color: #a4b6d6;
      text-align: center;
      line-height: 34px;
    `,
    slidebar: styled.View`
      width: 90%;
      height: 90px;
      background-color: #eee;
      margin-top: 30px;
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
      height: 100%;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #121b50;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    nextbtn: styled.TouchableOpacity`
      width: 80%;
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
    p1: styled.Text`
      width: 100%;
      background-color: #fff;
      font-size: 21px;
      font-weight: bold;
    `,
    p2: styled.Text`
      color: #A4B6D6;
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
    test: styled.View`
      margin-left: 10px;
      width: 100%;
      height: 30px;
      font-size: 21px;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #1b2c49;
    `,
    contentBox: styled.View`
      width: 100%;
      height: 95%;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      border-radius: 20px;
    `,
    Text: styled.Text`
      margin-top: 30px;
      width: 90%;
      text-align: left;
    `,
    View: styled.View`
      width: ${wp(85)};
      height: 40px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color:red;
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
  };
  const styles = StyleSheet.create({
    background: {
      width: "10%",
      height: 8,
      marginTop: 15,
      borderWidth: 0,
      borderStyle: "solid",
      borderRadius: 0,
      display: "flex",
    },
    bar: {
      width: "100%",
      marginTop: -1,
      height: 8,
      borderRadius: 0,
      display: "flex",
      width: "100%",
    },
    barBackground: {
      width: "100%",
      display: "flex",
      height: 8,
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    sentence: {
      backgroundColor: "#EFF2F7",
      fontSize: 14,
      color: "#768092",
      marginTop: -5,
    },
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      width: wp("100%"),
      height: hp("100%") - Constants.statusBarHeight,
    },
    scrollView: {
      backgroundColor: "pink",
    },
  });
  const interpretbtnHandler = () => {
    setInterpretActive(false);
  };
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeIn = (x) => {
    Animated.timing(fadeAnim, {
      toValue: x,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  const [level, setLevel] = useState(1);
  const [interpretActive, setInterpretActive] = useState(true);
  const nextProblemHandler = async () => {
    try {
      if (level > 8) {
        setNList([...nList, sliderLevel - 4]);
        const params = {
          userId: userName,
          body: {
            syntaxResult: JSON.stringify({
              solvedlist: solvedlist,
              nList: nList,
            }),
          },
        };
        await API.test.insertSyntaxResult(params);
        navigation.navigate("DiagnosticPage4");
      } else {
        if (interpretActive) {
          alert("먼저 해석을 보고 이해한 정도를 선택해주세요.");
        } else {
          setSliderLevel(4);
          const useEffectAsyncFunction = async () => {
            try {
              setIsLoading(true);
              const params = {
                userId: 1,
                body: {
                  target: 100,
                  solvedlist: solvedlist,
                  iscorrect: 0,
                  n: sliderLevel - 4,
                },
              };
              const result = await API.test
                .getSentence(params)
                .then((res) => res.data);
              setKorean(result.korea);
              setSentence(result.english);
              setSolvedlist([...solvedlist, result.idx]);
              setNList([...nList, sliderLevel - 4]);
            } catch (err) {
              console.log(err);
            } finally {
              setIsLoading(false);
            }
          };
          setIsLoading(false);
          useEffectAsyncFunction();
          setInterpretActive(true);
          fadeIn(level + 1);
          setLevel(level + 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      const params = {
        userId: 1,
        body: {
          target: 100,
          solvedlist: [],
          iscorrect: 0,
          n: 0,
        },
      };
      const result = await API.test.getSentence(params).then((res) => res.data);
      setKorean(result.korea);
      setSentence(result.english);
      setSolvedlist([result.idx]);
      setIsLoading(false);
    };
    useEffectAsyncFunction();
  }, []);
  const [sentence, setSentence] = useState(
    "아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다."
  );
  const [korean, setKorean] = useState(
    "아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다. 아무 의미 없는 문장입니다."
  );
  const [sliderLevel, setSliderLevel] = useState(4);
  const [solvedlist, setSolvedlist] = useState([]);
  const [nList, setNList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
              <Styled.test>
                <Styled.p1>2. 구문해석 TEST</Styled.p1>
              </Styled.test>
              <Styled.choice>
                <Styled.p2>
                  주어진 문장을 읽고 해석정도를 선택해주세요!
                </Styled.p2>
              </Styled.choice>
            </Styled.word>
            <View style={styles.barBackground}>
              <Animated.View
                style={[
                  styles.background,
                  { transform: [{ scaleX: fadeAnim }, { translateX: wp(4.6) }] },
                ]}
              >
                  <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#A687FF", "#5471FF"]}
                  style={styles.bar}
                />
              </Animated.View>
            </View>
            <SyntaxTest
              interpretbtnHandler={interpretbtnHandler}
              sentence={sentence}
              interpretActive={interpretActive}
              korean={korean}
              isLoading={isLoading}
            />
            <Styled.Text>문장을 이해한 정도를 선택해주세요.</Styled.Text>
            <Slider
              disabled={isLoading}
              style={{ width: wp(85), height: 40 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#5471FF"
              maximumTrackTintColor="gray"
              minimumValue={1}
              maximumValue={7}
              step={1}
              value={sliderLevel}
              onSlidingComplete={(value) => {
                setSliderLevel(value);
              }}
            />

            <Styled.View>
              <Text style={{textAlign: "center"}}>하나도{"\n"}모르겠어요.</Text>
              {/* <Text style={{textAlign: "center"}}> 중간</Text> */}
              <Text style={{textAlign: "center"}}>완벽히{"\n"}해석 했어요.</Text>
            </Styled.View>
          </Styled.contentBox>
          <Styled.summit>
            <Styled.nextbtn onPress={nextProblemHandler}>
              <Text style={{ color: "white", fontSize: 16 }}>다음</Text>
            </Styled.nextbtn>
          </Styled.summit>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};
export { diagnosticTestPage3 };
