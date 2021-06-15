import React from "react";
import styled from "styled-components/native";
import { StyleSheet, View, Text } from "react-native";
const Difficulty = function (props) {
  const { use, dif, diftext } = props;
  const styles = StyleSheet.create({
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderTopWidth: 10,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderTopColor: "#F16FA7",
      marginLeft: 100,
      marginBottom: 5,
      transform: [{ translateX: -Number(dif) }]
    }
  });
  const Styled = {
    box: styled.View`
      width: 85%;
      maxWidth: 324px;
      height: 128px;
      background-color: #f7f9fd;
      display: flex;
      justify-content: flex-start
      align-items: flex-start;
      border-radius: 10px;
      flex-direction : column;
      margin-bottom : 30px;
    `,
    difficultybox: styled.View`
      width: 100%;
      height: 28px;
      display: flex;
      justify-content: flex-start
      align-items: flex-start;
      flex-direction:row;
      margin-top:19px;
      margin-bottom:8px;
    `,
    difficultybox1: styled.Text`
      height: 30px;
      width: 100px;
      text-align: left;
      line-height: 30px;
      font-size: 15px;
      color: #1b2c49;
      font-weight: 500;
      margin-horizontal: 10px;
    `,
    difficulty: styled.View`
      width: 100%;
      flex:1;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-flow: row;
    `,
    difficultybar: styled.View`
      width: 100px;
      margin-horizontal: 10;
      height: 15px;
      border-radius: 7.5px;
      display: flex;
      justify-content: flex-start;
      flex-flow: column;
      background-color: #D1D9FF;
      align-items: flex-start;
      overflow: hidden;
    `,
    difficultyText: styled.Text`
      flex: 1;
      height: 100%;
      font-size: 28px;
      color: #1b2c49;
      font-weight: bold;
      margin-left: 10px;
    `,
    difficyltyTbox: styled.View`
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 11px;
      color: #1b2c49;
      font-weight: 400;
      padding-horizontal: 10px;
    `,
    progressBar: styled.View`
      background-color: #333BCC;
      width: 100px;
      height: 15px;
      border-radius: 7.5px;
    `,
    triangle: styled.View`
    width: 0,
    height: 0,
    border-style: solid,
    border-left-width: 50,
    border-right-width: 50,
    border-bottom-width: 100,
    border-left-color: transparent,
    border-right-color: transparent,
    border-bottom-color: red,
      `
  };
  return (
    <Styled.box>
      <Styled.difficultybox>
        <Styled.difficultybox1>{use} 난이도</Styled.difficultybox1>
        <Styled.difficultyText>{dif}</Styled.difficultyText>
      </Styled.difficultybox>
      <View style={[styles.triangle,{ transform: [{ translateX: -Number(dif)-5 }] }]}></View>
      <Styled.difficulty>
        <Styled.difficultybar>
          <Styled.progressBar
            style={{ transform: [{ translateX: -Number(dif) }] }}
          />
        </Styled.difficultybar>
        <Styled.difficyltyTbox>
          <Text style={{fontSize:15, color: "#1b2c49"}}>{diftext}</Text>
        </Styled.difficyltyTbox>
      </Styled.difficulty>
    </Styled.box>
  );
};
export { Difficulty };
