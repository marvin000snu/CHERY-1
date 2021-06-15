import React, { useCallback } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { TouchableWithoutFeedback, Text, TimePickerAndroid } from "react-native";
import NextBracket from "../../src/images/iconSvg/NextBracket";
import OIcon from "../../working/svg/Oicon";
import XIcon from "../../working/svg/Xicon";
import useAPI from "../../src/hooks/useAPI";

const Styled = {
  background: styled.View`
    width: ${wp(93)};
    height: ${hp(4)}px;
    flex-flow: row;
    justify-content: space-between;
    border: solid 1px #999;
    border-radius: ${hp(2)}px;
    align-items: center;
    padding-left: ${wp(2)}px;
    padding-right: ${wp(2)}px;
    margin-top: ${hp(1)}px;
  `,
  font: styled.Text`
    width:25%;
    text-align: center;
    font-size: ${hp(1.8)}px;
  `,
  icon: styled.View`
    width:25%;
    align-items: center;
    justify-content: center;
  `,
};

const ResultAnalysisBox = (props) => {
  const { QCode, ox, timeSpent, difficulty, userName, setCode,setModalVisible } = props;
  const Result = ox ? OIcon : XIcon;
  const [API] = useCallback(useAPI(), []);

  const answerHandler = async () => {
    setModalVisible(true)
    setCode(QCode)
  };

  return (
    <TouchableWithoutFeedback onPress={answerHandler}>
      <Styled.background>
        <Styled.font> {QCode} </Styled.font>
        <Styled.icon>
          <Result size={hp(2.5)}/>
        </Styled.icon>
        <Styled.font> {Math.floor(timeSpent/60)+"m "+timeSpent%60+"s"} </Styled.font>
        <Styled.font> {difficulty>0.6 ? "hard" : difficulty>0.3 ? "normal" : "hard"} </Styled.font>
      </Styled.background>
    </TouchableWithoutFeedback>
  );
};

export default ResultAnalysisBox;
