//일단 잘 몰라서 9으로 했는데 마지막입니다.
//일단 onchange value 부터 고친다 -> 완료
// 이미지 하나 만들어서, value 값을 주고, 이걸 이동시키는 형태

import React, { useEffect, useState, useCallback, useMemo } from "react";
import styled from "styled-components/native";
import jwt_decode from "jwt-decode";
import Slider from "@react-native-community/slider";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PrevNextBtn from "../src/components/Molecules/PrevNextBtn";
import TestTitle from "./headerfailed";
import { ScrollValue } from "../src/components/Atoms/ScrollValue";
import sliderThumb from "../src/images/icon/sliderThumb.png";
import { useSharedValue, withTiming, runOnJS } from "react-native-reanimated";


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
  body: styled.View`
    width: ${wp(100)}px;
    height: ${hp(73)}px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  grades: styled.View`
    width: 90%;
    height: ${hp(17)}px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  cover: styled.View`
    width: 100%;
    height: ${hp(7)}px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column wrap;
  `,
  contentBox: styled.View`
    width: 100%;
    height: ${hp(55)}px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column;
  `,
  View: styled.View`
    width: ${wp(88)};
    height: ${hp(3)}px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
  `,
  scale: styled.Text`
    font-size: 12px;
    color: gray;
  `,
  btn: styled.TouchableOpacity`
    width: ${wp(40)};
    height: 45;
    background-color: #6f87ff;
    border-radius: 25px;
    border: 1px solid #d4d7dc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
  `,
  header: styled.View`
    width: ${wp(100)};
    height: ${hp(27)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  summit: styled.View`
    margin-bottom: ${hp(4)}px;
  `,
  p1: styled.Text`
    font-size: 18px;
    font-weight: bold;
  `,
  p2: styled.Text`
    margin-top: 5px;
    font-size: 15px;
    color: #a4b6d6;
  `,
  scrolls: styled.View`
    width: 100%;
    align-items: center;
  `,
  horizontalLine: styled.View`
    width: ${wp(80)};
    height: 0.5px;
    background-color: gray;
    margin: 5px;
  `,
};
const DiagnosticPage9 = ({ navigation }) => {
  const [API] = useCallback(useAPI(), []);
  const progress = useSharedValue(0.9);

  const [school, setSchool] = useState(3.1);
  const [final, setFinal] = useState(90);
  const [avgFinal, setAvgFinal] = useState(3.1);
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

  const prevPageHandler = () => {
    navigation.navigate("DiagnosticPage7");
  };

  const nextPageHandler = async () => {
    try {
      const params = {
        userId: userName,
        body: {
          schoolGrade: school,
          presentGrade: avgFinal,
          goalScore: final,
          scoreResult: 90,
        },
      };
      await API.test.insertAdditionalInfo(params);
      await API.test.insertIsTested(params);
      await API.test.insertScoreResult(params);
      navigation.navigate("DiagnosticPage10");
    } catch (err) {
      console.log(err);
    }
  };

  const schoolLoc = wp(((school - 1) * 88) / 8);
  const finalHopeLoc = wp(((final - 60) * 88) / 40);
  const avgFinalLoc = wp(((avgFinal - 1) * 88) / 8);

  const titleProps = useMemo(() => {
    //얘는 call 안되는게 맞다.
    return {
      Title: "STEP 3",
      SubTitle: "1:1 맞춤형 유형",
      value: 90,
    };
  }, []);

  //school 은 1 ~ 9 => 8 1일 때 5, 9일때 95
  return (
    <Styled.background>
      <Styled.header>
        <TestTitle
          {...{
            Title: "STEP 1",
            SubTitle: "단어 TEST",
          }}
          value={90}
          progress={progress}
        />
      </Styled.header>
      <Styled.body>
        <Styled.contentBox>
          <Styled.grades>
            <Styled.cover>
              <Styled.p1>목표 수능점수</Styled.p1>
              <Styled.p2>수능 영어 목표 점수</Styled.p2>
            </Styled.cover>

            <Styled.scrolls>
              <ScrollValue value={Math.round(final)} loc={finalHopeLoc} />
              <Slider
                style={{ width: wp(90), height: 40 }}
                thumbImage={sliderThumb}
                minimumTrackTintColor="#5571FF"
                maximumTrackTintColor="gray"
                minimumValue={60}
                maximumValue={100}
                step={1}
                color="black"
                value={final}
                onValueChange={(value) => {
                  setFinal(value);
                }}
              />
            </Styled.scrolls>
            <Styled.View>
              <Styled.scale>60</Styled.scale>
              <Styled.scale>70</Styled.scale>
              <Styled.scale>80</Styled.scale>
              <Styled.scale>90</Styled.scale>
              <Styled.scale>100</Styled.scale>
            </Styled.View>
          </Styled.grades>
          <Styled.horizontalLine />
          <Styled.grades>
            <Styled.cover>
              <Styled.p1> 평균 모의고사 등급 </Styled.p1>
              <Styled.p2>영어 모의고사 평균 등급</Styled.p2>
            </Styled.cover>
            <Styled.scrolls>
              <ScrollValue value={Math.round(avgFinal * 10) / 10} loc={avgFinalLoc} />
              <Slider
                style={{ width: wp(90), height: 40 }}
                thumbImage={sliderThumb}
                minimumTrackTintColor="#5571FF"
                maximumTrackTintColor="gray"
                minimumValue={1}
                maximumValue={9}
                step={0.1}
                color="black"
                value={avgFinal}
                onValueChange={(value) => {
                  setAvgFinal(value);
                }}
              />
            </Styled.scrolls>
            <Styled.View>
              <Styled.scale>1</Styled.scale>
              <Styled.scale>9</Styled.scale>
            </Styled.View>
          </Styled.grades>
          <Styled.horizontalLine />

          <Styled.grades>
            <Styled.cover>
              <Styled.p1> 현재 내신등급 </Styled.p1>
              <Styled.p2>영어 과목 내신 평균 등급</Styled.p2>
            </Styled.cover>
            <Styled.scrolls>
              <ScrollValue value={Math.round(school * 10) / 10} loc={schoolLoc} />
              <Slider
                style={{ width: wp(90), height: 40 }}
                thumbImage={sliderThumb}
                minimumTrackTintColor="#5571FF"
                maximumTrackTintColor="gray"
                minimumValue={1}
                maximumValue={9}
                step={0.1}
                color="black"
                value={school}
                onValueChange={(value) => {
                  setSchool(value);
                }}
              />
            </Styled.scrolls>
            <Styled.View>
              <Styled.scale>1</Styled.scale>
              <Styled.scale>9</Styled.scale>
            </Styled.View>
          </Styled.grades>
        </Styled.contentBox>
        <Styled.summit>
          <PrevNextBtn onPrev={prevPageHandler} onNext={nextPageHandler}/>
        </Styled.summit>
      </Styled.body>
    </Styled.background>
  );
};
export default DiagnosticPage9;
