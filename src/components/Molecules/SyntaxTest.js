import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import styled from "styled-components";
const SyntaxTest = (props) => {
  const {
    isLoading,
    interpretbtnHandler,
    sentence,
    korean,
    interpretActive,
  } = props;
  const styles = StyleSheet.create({
    Wrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 10,
      fontSize:20
    },
  });
  const Styled = {
    interpret: styled.View`
      width: 85%;
      height: 40%;
      border: 1px solid #5471FF;
      border-radius: 10px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    `,
    interpretbtn: styled.TouchableOpacity`
      width: 30%;
      height: 34px;
      border: 2px solid ${props=> props.isLoading ? "#5471FF": "#5471FF"}
      border-radius: 15px;
      text-align: center;
      line-height: 34px;
    `,
    interpretbtnText: styled.Text`
      color: #5471FF;
      text-align: center;
      line-height: 34px; 
      font-size: 20px;
    `,
    textbox: styled.View`
      margin-top: 15px;
      width: 85%;
      height: 45%;
      border: 1px solid #5471FF;
      border-radius: 10px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
  };

  return (
    <View style={styles.Wrapper}>
      <Styled.textbox>
        {isLoading ? (
          <ActivityIndicator color="#AC8AFA" size="large" />
        ) : (
          <Text style={{fontSize:16, lineHeight:20, color :"#1B2C49"}}>{sentence}</Text>
        )}
      </Styled.textbox>
      <Styled.interpret>
        {interpretActive ? (
          <Styled.interpretbtn onPress={interpretbtnHandler} disabled={isLoading}>
            <Styled.interpretbtnText>해석보기</Styled.interpretbtnText>
          </Styled.interpretbtn>
        ) : (
          <Text style={styles.sentence}>{korean}</Text>
        )}
      </Styled.interpret>
    </View>
  );
};

export { SyntaxTest };
