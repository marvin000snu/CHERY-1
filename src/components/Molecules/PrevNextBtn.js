import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const PrevNextBtn = (props) => {
  const { onPrev, onNext } = props;
  const btnType = props.btnType ? props.btnType : false;
  const Styled = {
    BottomBtn: styled.View`
      width: ${wp(75)}px;
      background-color: white;
      flex-direction: row;
      justify-content: space-between;
    `,
    PrevBtn: styled.View`
      width: ${wp(35)}px;
      height: ${hp(5)}px;
      color: #6f87ff;
      min-height: 40px;
      border-radius: 10px;
      border: 1px solid #6f87ff;
      margin-bottom: ${hp(3)}px;
      text-align: center;
      justify-content: center;
      display: flex;
      align-items: center;
      flex-direction: row;
    `,
    NextBtn: styled.View`
      width: ${wp(35)}px;
      height: ${hp(5)}px;
      min-height: 40px;
      background-color: #6f87ff;
      border-radius: 10px;
      margin-bottom: ${hp(3)}px;
      justify-content: center;
      display: flex;
      align-items: center;
      flex-direction: row;
    `,
    PrevText: styled.Text`
      color: #6f87ff;
      text-align: center;
      line-height: 20px;
      font-weight: bold;
      font-size: ${hp(2)};
    `,
    NextText: styled.Text`
      color: #fff;
      text-align: center;
      line-height: 20px;
      font-weight: bold;
      font-size: ${hp(2)};
    `,
  };

  return (
    <Styled.BottomBtn>
      {btnType ? (
        <>
          <TouchableWithoutFeedback onPress={onNext}>
            <Styled.NextBtn style={{width:wp(75)}}>
              <Styled.NextText >다음</Styled.NextText>
            </Styled.NextBtn>
          </TouchableWithoutFeedback>
        </>
      ) : (
        <>
          <TouchableWithoutFeedback onPress={onPrev}>
            <Styled.PrevBtn>
              <Styled.PrevText>이전</Styled.PrevText>
            </Styled.PrevBtn>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onNext}>
            <Styled.NextBtn>
              <Styled.NextText>다음</Styled.NextText>
            </Styled.NextBtn>
          </TouchableWithoutFeedback>
        </>
      )}
    </Styled.BottomBtn>
  );
};

export default PrevNextBtn;
