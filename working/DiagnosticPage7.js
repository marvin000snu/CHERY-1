import React, { useMemo } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import PrevNextBtn from "../src/components/Molecules/PrevNextBtn";
import TestTitle from "./headerfailed";
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
};

const DiagnosticPage7 = ({ navigation }) => {
  const progress = useSharedValue(0.8);

  const prevPageHandler = () => {
    navigation.navigate("DiagnosticPage5");
  };

  const nextPageHandler = () => {
    navigation.navigate("DiagnosticPage9");
  };

  const titleProps = useMemo(() => {
    //얘는 call 안되는게 맞다.
    return {
      Title: "STEP 4",
      SubTitle: "나의 시험정보",
      value: 85,
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
          value={80}
          progress={progress}
        />
      </Styled.header>

      <Styled.body>
        <Styled.contentBox>
          <Text>작업중</Text>
        </Styled.contentBox>
        <Styled.summit>
          <PrevNextBtn onPrev={prevPageHandler} onNext={nextPageHandler} disabled={false} />
        </Styled.summit>
      </Styled.body>
    </Styled.background>
  );
};
export default DiagnosticPage7;
