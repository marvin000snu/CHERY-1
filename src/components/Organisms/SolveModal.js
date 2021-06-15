import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components/native";
import { Text, View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
//import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyled from "../../style/GlobalStyled";
import Animated from "react-native-reanimated";

const SolveModal = forwardRef((props, ref) => {
  alert("call");
  const styles = StyleSheet.create({
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 30,
      borderRightWidth: 30,
      borderTopWidth: 30,
      borderLeftColor: "transparent",
      borderRightColor: "transparent",
      borderTopColor: "#5471FF",
    },
  });
  const numberList = [1, 2, 3, 4, 5];
  const [answerList, setAnswerList] = useState([]);
  const { length, answerPanelStyle } = props;
  useEffect(() => {
    let setData = true;
    const useEffectAsyncFunction = async () => {
      alert("CALL");
      try {
        const value = await AsyncStorage.getItem("@answer");
        if (value === null) {
          alert("NULL!");
          if (setData) {
            setAnswerList(new Array(length).fill(0));
          }
        } else {
          alert("NOTNULL");
          if (setData) {
            setAnswerList(JSON.parse(value));
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    useEffectAsyncFunction();
    return () => {
      setData = false;
    };
  }, []);
  const Styled = {
    body: styled.View`
      width: 100%;
      height: ${hp("100") - 20.04};
      background-color: #f9fafc;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: ${20.04};
    `,
    section: styled.View`
      width: 100%;
      height: 100%;
      background-color: #f9fafc;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-radius: 20px;
    `,
    answerBoxWrapper: styled.View`
      width: 90%;
      height: 40px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      margin-bottom: 5px;
    `,
    answerbox: styled.View`
      width: 100%;
      height: 100%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      flex-direction: row;
    `,
    numbox: styled.View`
      width: 20%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    `,
    span1: styled.Text`
      font-family: "12LotteMartDreamMedium";
      font-size: 16px;
      color: #1b2c49;
      font-weight: 500;
      color: #a4b6d6;
      width: 10%;
    `,
  };

  useImperativeHandle(ref, () => ({
    onChange(v, i) {
      const asyncFunction = async () => {
        alert("CALL!")
        var temp = [...answerList];
        temp[i] = v;
        setAnswerList(temp);
        await AsyncStorage.setItem("@answer", JSON.stringify(temp));
      };
      asyncFunction();
    },
    setAnswerList() {
      const asyncFunction = async () => {
        alert("CALL2")
        const temp = await AsyncStorage.getItem("@answer");
        setAnswerList(JSON.parse(temp));
      };
      asyncFunction();
    },
  }));

  const answerHandler = async (index, answer) => {
    var temp = [...answerList];
    temp[index] = answer;
    setAnswerList([...temp]);
    await AsyncStorage.setItem("@answer", JSON.stringify(temp));
  };
  return (
    <GlobalStyled.ViewCol
      elevation={130}
      as={Animated.View}
      style={[
        {
          position: "absolute",
          bottom: 130,
          maxHeight: 600,
          height: hp(100) - 200,
          minHeight: 400,
          borderRadius: 10,
          width: wp("90"),
          zIndex: 130,
          elevation: 130,
        },
        answerPanelStyle,
      ]}
    >
      <GlobalStyled.ViewCol width="95%" style={{ backgroundColor: "white", borderRadius: 10, flex: 1 }}>
        <GlobalStyled.ViewCol height="50px">
          <Text
            style={{
              fontFamily: "12lottemartdreammedium",
              fontSize: 16,
              color: "#1B2C49",
            }}
          >
            답안을 입력해주세요.
          </Text>
        </GlobalStyled.ViewCol>
        <ScrollView containerStyle={{ backgroundColor: "red" }} showsVerticalScrollIndicator= {false}>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {answerList.map((v, idx) => {
              return (
                <Styled.answerBoxWrapper key={idx * 10}>
                  <Styled.answerbox>
                    <Styled.span1>Q{String(idx + 1)}:</Styled.span1>
                    {numberList.map((i, t) => {
                      return (
                        <TouchableWithoutFeedback
                          style={{
                            backgroundColor: "blue",
                            width: "30px",
                            height: "24px",
                          }}
                          onPress={() => {
                            answerHandler(idx, i);
                          }}
                          key={t}
                        >
                          <Styled.numbox>
                            <AnswerBox
                              isChecked={v === i}
                              text={String(i)}
                              size={30}
                              themeColor="#5471FF"
                              onToggle={() => {
                                answerHandler(idx, i);
                              }}
                            />
                          </Styled.numbox>
                        </TouchableWithoutFeedback>
                      );
                    })}
                  </Styled.answerbox>
                </Styled.answerBoxWrapper>
              );
            })}
          </View>
        </ScrollView>
        <GlobalStyled.ViewCol
          height="40px"
          style={{
            backgroundColor: "#5471FF",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        ></GlobalStyled.ViewCol>
      </GlobalStyled.ViewCol>
      <View style={styles.triangle}></View>
    </GlobalStyled.ViewCol>
  );
});

export default React.memo(SolveModal);

const AnswerBox = (props) => {
  const { themeColor, isChecked, size, text, onToggle } = props;
  return (
    <TouchableOpacity
      onPress={onToggle}
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 1,
        borderColor: themeColor,
        backgroundColor: isChecked ? themeColor : "white",
      }}
    >
      <Text
        style={{
          fontSize: size * 0.8,
          color: isChecked ? "white" : themeColor,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
