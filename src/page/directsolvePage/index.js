import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, TouchableWithoutFeedback, ActivityIndicator, PixelRatio, TouchableOpacity, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Constants from "expo-constants";
import { ProblemBoard } from "../../components/Molecules/ProblemBoard";
import Timer from "../../components/Molecules/Timer";
import DirectSolveSlidingPanel from "../../components/Molecules/DirectSolveSlidingUpPanel";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import useAPI from "../../hooks/useAPI";
import GlobalStyled from "../../style/GlobalStyled";
import SolveModal from "../../components/Organisms/SolveModal";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";
import DirestSolveChery from "../../images/iconSvg/direstSolveChery";
import Pencil from "../../../working/svg/Pencil";
import Highlight from "../../../working/svg/Highlight";
import Eraser from "../../../working/svg/Eraser";
import OmrLeft from "../../../working/svg/OmrLeft";
import OmrRight from "../../../working/svg/OmrRight";
import Modal from "react-native-modal";
import AnswerSheet from "../../../working/AnswerSheet";
import useInterval from "../../hooks/useInterval";
import TimerSelect from "../../components/Molecules/TimerSelect";
import AnswerPannel from "../../components/Molecules/AnswerPannel";
const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100)}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    background-color: #5571ff;
  `,
  section: styled.View`
    height: ${hp(100) - Constants.statusBarHeight}px;
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    background-color: white;
  `,
  contentBox: styled.View`
    width: 100%;
    flex: 1;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
    border-radius: 20px;
  `,
  word: styled.View`
    width: 90%;
    height: 65px;
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
  `,
  p1: styled.Text`
    width: 100%;
    background-color: #fff;
    font-size: 21px;
    font-weight: bold;
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
  summit: styled.View`
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-top-width: 2px;
    border-top-color: #dbe5ea;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  `,
  btnCover: styled.TouchableOpacity`
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  svgCover: styled.View`
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  panelHider: styled.View`
    height: 80px;
  `,
};

const DirectSolvePage = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [API] = useCallback(useAPI(), []);
  const pannelRef = useRef(null);
  const { testName, testType, length, tempSave } = route.params;
  const [number, setNumber] = useState(0);
  const [userName, setUserName] = useState("");
  const blackBoardOffset = useSharedValue(wp(100));
  const blackBoardOpacity = useSharedValue(1);
  const blackBoardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: blackBoardOffset.value }],
      opacity: blackBoardOpacity.value,
    };
  });

  const [drawData, setDrawData] = useState(new Array(length).fill(null));
  const [infos, setInfos] = useState({
    imgSrcData: [0],
    userName: "",
    selectTextInfo: [{}],
  });

  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        setUserName(deCode["cognito:username"]);
        const params = {
          userId: deCode["cognito:username"],
          body: { name_of_test: testName, type_of_test: testType },
        };
        const { data } = await API.grade.getScoreInfo(params);

        const wrongList = data["Q_list"];
        const param3 = {
          body: {
            codeList: data["Q_list"].map((v) => {
              return v.code;
            }),
          },
        };
        const textResult = await API.directSolve.selectList(param3);
        const selectTextInfo = textResult.data.textList;
        setDrawData(
          wrongList.map((v) => {
            return null;
          })
        );
        var size;
        const ratio = PixelRatio.get();
        const revisedWidth = (wp(130) * 5) / 10;
        if (revisedWidth >= 235) {
          size = 240;
        } else if (revisedWidth < 235 && revisedWidth >= 225) {
          size = 230;
        } else if (revisedWidth < 225 && revisedWidth >= 215) {
          size = 220;
        } else if (revisedWidth < 215 && revisedWidth >= 205) {
          size = 210;
        } else if (revisedWidth < 205 && revisedWidth >= 195) {
          size = 200;
        } else if (revisedWidth < 195 && revisedWidth >= 185) {
          size = 190;
        } else if (revisedWidth < 185 && revisedWidth >= 175) {
          size = 180;
        } else if (revisedWidth < 175 && revisedWidth >= 165) {
          size = 170;
        } else if (revisedWidth < 165 && revisedWidth >= 155) {
          size = 160;
        } else if (revisedWidth < 155) {
          size = 150;
        }
        const imgSrcData = wrongList.map((v) => {
          return `https://problem-img.s3.ap-northeast-2.amazonaws.com/${v.code}${240 * ratio}-${ratio}.jpg`;
        });
        setInfos({
          imgSrcData: imgSrcData,
          userName: deCode["cognito:username"],
          selectTextInfo: selectTextInfo,
        });
        if (tempSave) {
          const params = {
            userId: deCode["cognito:username"],
            body: { testName: testName, testType: testType },
          };
          const { data: result } = await API.tempSave.getTempSave(params);
          console.log("!result!")
          console.log(result);
          setNumber(result.result.number);
          await AsyncStorage.setItem("@answer", result.result.answerData);
          await AsyncStorage.setItem("@time", result.result.timeData);
          await AsyncStorage.setItem("@prevTime", result.result.timeData);
        } else {
          await AsyncStorage.setItem("@time", "0");
          await AsyncStorage.setItem("@prevTime", "0");
          await AsyncStorage.setItem("@answer", JSON.stringify(new Array(length).fill(null)));
        }
      } catch (err) {
        alert("!!");
        console.log(err);
        alert(err.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    useEffectAsyncFunction();
    return () => {};
  }, []);
  const boardRef = useRef(null);
  const timeRef = useRef(null);

  const nextProblemHandler = async () => {
    try {
      if (number === length - 1) {
        const answerList = await AsyncStorage.getItem("@answer");
        if (JSON.parse(answerList).includes(null)) {
          alert("정답을 입력하지 않은 문항이 있습니다.");
        } else {
          const prevTime = await AsyncStorage.getItem("@time");
          await AsyncStorage.setItem("@prevTime", prevTime);
          const time = timeRef.current.getTime();
          await AsyncStorage.setItem("@time", JSON.stringify(time));
          const params = {
            userId: userName,
            body: { testName: testName, testType: testType, num: number + 1, time: time - parseInt(prevTime) },
          };
          await API.directSolve.insertDirectSolveQ(params);
          alert("시험이 종료되었습니다.");
          const params2 = {
            userId: userName,
            body: {
              name_of_test: testName,
              type_of_test: testType,
              inputArray: JSON.parse(answerList),
            },
          };

          await API.grade.grade(params2);

          navigation.navigate("testResultPage", {
            params: {
              testName: testName,
              testType: testType,
              userName: userName,
            },
          });
        }
      } else {
        const prevTime = await AsyncStorage.getItem("@time");
        const time = timeRef.current.getTime();
        await AsyncStorage.setItem("@time", JSON.stringify(time));
        const params = {
          userId: userName,
          body: { testName: testName, testType: testType, num: number + 1, time: time - parseInt(prevTime) },
        };
        await API.directSolve.insertDirectSolveQ(params);
        await boardRef.current.nextBtnHandler();
      }
    } catch (err) {
      alert(err);
      console.log(err.response.data);
    } finally {
    }
  };

  const prevProblemHandler = async () => {
    try {
      if (number === 0) {
        alert("첫 번째 문항입니다.");
      } else {
        await timeRef.current.timeHandler();
        await boardRef.current.prevBtnHandler();
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  const handleNumber = (i) => {
    setNumber(i);
  };

  return (
    <Styled.body>
      <AnswerPannel ref={pannelRef} length={length} />
      <Styled.section>
        <Timer timeRef={timeRef} number={number} length={length} testType={testType} testName={testName} navigation={navigation} userName={infos.userName} />
        <ScrollView style={{ width: wp(100), flex: 1 }} contentContainerStyle={{ flexGrow: 1, width: wp(100), flexDirection: "column" }} showsVerticalScrollIndicator= {false}>
          <GlobalStyled.ViewCol style={{ paddingHorizontal: 10, height: 50 }}>
            <Text style={{ fontSize: 16, width: "100%", textAlign: "left" }}>다음 글에서 밑줄 친 None이 의미하는 바로 가장 적절한것은?{number}</Text>
          </GlobalStyled.ViewCol>
          <TimerSelect ref={timeRef} />
          <Styled.contentBox
            as={TouchableOpacity}
            onPress={() => {
              alert("!@");
            }}
          >
            <ProblemBoard ref={boardRef} imgSrcData={infos.imgSrcData} number={number} testType={testType} testName={testName} handleNumber={handleNumber} API={API} userName={userName}></ProblemBoard>
          </Styled.contentBox>
          <GlobalStyled.ViewCol
            as={Animated.View}
            style={[
              {
                position: "absolute",
                width: wp(100),
                height: hp(100),
                backgroundColor: "#414141",
                opacity: 0.8,
                zIndex: 130,
                elevation: 130,
              },
              blackBoardStyle,
            ]}
          ></GlobalStyled.ViewCol>
        </ScrollView>
        <GlobalStyled.ViewCol height="80px" style={{ backgroundColor: "#5571FF", paddingBottom: 30 }}>
          <GlobalStyled.ViewRow height="50px" justifyContent="space-around">
            <GlobalStyled.ViewCol style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: "white" }} as={TouchableOpacity}>
              <OmrLeft />
            </GlobalStyled.ViewCol>
            <GlobalStyled.ViewCol
              style={{ width: "50%", height: 36, borderRadius: 18, backgroundColor: "white" }}
              as={TouchableOpacity}
              onPress={() => {
                pannelRef.current.openHandler();
              }}
            >
              <Text style={{ color: "#5571FF", fontSize: 18, fontWeight: "bold" }}>OMR</Text>
            </GlobalStyled.ViewCol>
            <GlobalStyled.ViewCol style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: "white" }} as={TouchableOpacity} onPress={nextProblemHandler}>
              <OmrRight />
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      </Styled.section>
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
    </Styled.body>
  );
};

export { DirectSolvePage };
