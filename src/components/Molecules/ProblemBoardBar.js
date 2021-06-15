import React, { useState } from "react";
import styled from "styled-components";
import FlipCard from "react-native-flip-card";
import Eraser from "../../images/iconSvg/Eraser";
import Pen from "../../images/iconSvg/Pen";
import {
  View,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";
import GlobalStyled from "../../style/GlobalStyled";
import TopDirectSolve from "../../images/iconSvg/topDirectSolve";
import BottomDirectSolve from "../../images/iconSvg/bottomDirecrtSolve.js"
const ProblemBoardBar = (props) => {
  // const {size, color, colorHandler, sizeHandler} = props
  const {
    handleBrushSizeChange,
    handleColorChange,
    moveDownBtnHandler,
    moveUpBtnHandler
  } = props;
  const Styled = {
    wrapper: styled.View`
        flex : 1
        width : 95%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        `,
    menuBar: styled.View`
      display: flex;
      width: 100%;
      height: 6%;
      background-color: #5471FF;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      overflow: visible;
      z-index: 1;
    `,
    mainText: styled.View`
      width: 100%;
      height: 85%;
      background-color: white;
      display: flex;
      flex-direction: column;
      border: 1px solid #5471FF;
    `,
    mainQuestion: styled.Text`
      font-size: 15px;
      text-align: justify;
      color: #1b2c49;
      line-height: 25px;
    `,
    buttonCover: styled.View`
      flex-wrap: wrap;
      width: 82px;
      height: 84%;
      background-color: white;
      border-radius: 5px;
      margin-right: 10px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `,
    button: styled.View`
      width: 30%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    buttonThreeSize: styled.View`
      width: 33%;
      height: 27%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) =>
        props.id === size ? " #5471FF" : "white"};
    `,
    buttonThreeColor: styled.View`
      width: 33%;
      height: 27%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) =>
        props.id === color ? " #5471FF" : "white"};
    `,
    buttonThree: styled.View`
      width: 33%;
      height: 27%;
      display: flex;
      justify-content: center;
      align-items: center;
    `
  };
  const [state, setState] = useState({
    color: ["black", "blue", "red"][color],
    strokeWidth: [1, 2, 3][size]
  });

  const [color, setColor] = useState(0);
  const [size, setSize] = useState(0);
  // var color = 0;
  // var size = 0;
  // var state = 0 ;
  // const setState = (i)=>{
  //     state = i
  // }

  // const setColor = (i)=>{
  //     color = i
  // }
  // const setSize = (i)=>{
  //     size = i
  // }

  const colorHandler = (i) => {
    // alert(`color: ${i}`)
    handleColorChange(["black", "blue", "red"][i]);
    setColor(i);
  };
  const sizeHandler = (i) => {
    // alert(`size: ${i}`)
    handleBrushSizeChange([1, 3, 5][i]);
    setSize(i);
  };
  return (
    <Styled.menuBar>
      <GlobalStyled.ViewRow width="100px">
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            backgroundColor: "white",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            borderRightWidth: 1
          }}
          onPress={moveUpBtnHandler}
        >
          <TopDirectSolve size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            backgroundColor: "white",
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5
          }}
          onPress={moveDownBtnHandler}
        >
          <BottomDirectSolve size={30} />
        </TouchableOpacity>
      </GlobalStyled.ViewRow>
      <GlobalStyled.ViewRow width="100px">
      </GlobalStyled.ViewRow>
    </Styled.menuBar>
  );
};

export { ProblemBoardBar };
