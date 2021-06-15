import React from "react";
import styled from "styled-components/native";

import { Text, TouchableWithoutFeedback, StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import DoubleCircle from "../../images/iconSvg/DoubleCircle";


const WordQuizAnswer = (props) => {
  const {
    select,
    leftSelectHandler,
    rightSelectHandler,
    options,
    onLoading,
    disabled
  } = props;
  const Styled = {
    answer: styled.View`
      width: ${wp(90)}px;
      height: ${hp(14)}px;
      margin-top: ${hp(5)}px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    `
  };
  const styles = StyleSheet.create({
    right: { //not chosen
      width: "90%",
      height: hp(5),
      borderRadius: 10,
      backgroundColor: "#fff",
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: "#bfcce2",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      paddingLeft: "3%"
    },
    left: { //chosen
      width: "90%",
      height: hp(5),
      borderRadius: 10,
      backgroundColor: "#fff",
      borderWidth: 3,
      borderStyle: "solid",
      borderColor: "#6F87FF",
      justifyContent: "space-between",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: "3%"
    },
    rightText: {
      width: "100%",
      color: "#bfcce2",
      fontSize: hp(2.5),
      marginLeft: "1.5%",
    },
    leftText: {
      width: "100%",
      color: "#6F87FF",
      fontSize: hp(2.5),
      marginLeft: "1.5%",
    }
  });

  return (
    <Styled.answer>
      <TouchableWithoutFeedback onPress={leftSelectHandler} disabled={disabled}>
        <View style={!(select === 0) ? styles.right : styles.left}>
          <DoubleCircle chosen = {select === 0}/>
          <Text style={!(select === 0) ? styles.rightText : styles.leftText}>
            {onLoading ? null : options[0]}
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        disabled={disabled}
        onPress={rightSelectHandler}
      >
        <View style={select === 1 ? styles.left : styles.right}>
        <DoubleCircle chosen = {select === 1}/>
          <Text style={select === 1 ? styles.leftText : styles.rightText}>
            {onLoading ? null : options[1]}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Styled.answer>
  );
};

export { WordQuizAnswer };
