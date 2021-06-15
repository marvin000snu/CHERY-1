import React from "react";
import styled from "styled-components/native";
import {
  View,
  SafeAreaView,
  ScrollView
} from "react-native";
import RNDrawOnScreen from "../../page/mainpage/index1";
import { ProblemBoardBar } from "./ProblemBoardBar";
import ScrollViewIndicator from 'react-native-scroll-indicator';

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
    width: 100%;
    height: 6%;
    background-color: #6881FF;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
    border: 1px solid #6881FF;
  `,
  mainQuestion: styled.Text`
    font-family: "12LotteMartDreamMedium";
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
    background-color: ${(props) => (props.id === size ? " #6881FF" : "white")};
  `,
  buttonThreeColor: styled.View`
    width: 33%;
    height: 27%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.id === color ? " #6881FF" : "white")};
  `,
  buttonThree: styled.View`
    width: 33%;
    height: 27%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
};

class ProblemBoard extends React.Component {
  componentDidMount() {
    
  }


  state = {
    color: "black",
    strokeWidth: 2
  };

  number = this.props.number;
  changeColor = (color) => {
    this.setState({ color });
  };

  changeBrushSize = (strokeWidth) => {
    this.setState({ strokeWidth });
  };

  undo = () => {
    this.RNDraw.undo();
  };

  clear = () => {
    this.RNDraw.clear();
  };

  sendData = () => {
    this.RNDraw.sendData();
  };

  nextBtnHandler = async () => {
    try {
      if (this.props.number >= this.props.imgSrcData.length) {
        alert("마지막 문제입니다.");
      } else {
        await this.RNDraw.sendData();
      }
    } catch (err) {}
  };

  prevBtnHandler = async () => {
    try {
      if (this.props.number < 0) {
        alert("첫 번째 문제입니다.");
      } else {
        await this.RNDraw.test();
        await this.RNDraw.sendPrevData();
      }
    } catch (err) {
      ////console.log(err);
    }
  };
  moveDownBtnHandler = () => {
    this.scrollView.scrollToEnd({ animated: true });
  };
  moveUpBtnHandler = () => {
    this.scrollView.scrollTo({ x: 0, y: 0, animated: true });
  };
  handleGesture = (evt) => {
    let { nativeEvent } = evt;
  };
  onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      alert('Longpress');
      sharedVal.value = withSpring(
        sharedVal.value + nativeEvent.translationX * 3 >
          snapPoints[snapPoints.length - 1]
          ? snapPoints[snapPoints.length - 1]
          : sharedVal.value + nativeEvent.translationX * 3 < snapPoints[0]
          ? snapPoints[0]
          : sharedVal.value + nativeEvent.translationX * 3
      );
    }
    if (nativeEvent.state === State.END) {
      alert("end")
    }
  };
  render() {
    
    return (
      <Styled.wrapper>
        <Styled.mainText>
          <SafeAreaView style={{ flex: 1 }}>
              <ScrollViewIndicator
                ref={(view) => {
                  this.scrollView = view;
                }}
                scrollEnabled={true}
              >
                <View
                  style={{
                    width: "100%",
                    height: 400,
                    flex: 1,
                    flexGrow: 1,
                    border: "solid",
                    borderWidth: 2,
                    borderColor: "#ccc",
                  }}
                >
                  <RNDrawOnScreen
                    number={this.props.number}
                    setNumber={this.props.handleNumber}
                    imgSrc={this.props.imgSrcData[this.props.number]}
                    penColor={this.state.color}
                    strokeWidth={this.state.strokeWidth}
                    ref={(r) => (this.RNDraw = r)}
                    testName={this.props.testName}
                    testType={this.props.testType}
                    API = {this.props.API}
                    userName={this.props.userName}
                  />
                </View>
              </ScrollViewIndicator>
          </SafeAreaView>
        </Styled.mainText>
      </Styled.wrapper>
    );
  }
}
   

export { ProblemBoard };