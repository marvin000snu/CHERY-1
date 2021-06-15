import React from "react";
import styled from "styled-components/native";
import { Text, Image, TouchableOpacity } from "react-native";
import GlobalStyled from "../../style/GlobalStyled";
import { RFValue } from "react-native-responsive-fontsize";
import {heightPercentageToDP as hp} from "react-native-responsive-screen"
const Header = function (props) {
  const { HeaderTitle, detail, backHandler } = props;
  const Styled = {
    header: styled.View`
      width: 100%;
      height: 82px;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-flow: row;
      border-bottom-width:1px;
      border-color :#D2DCEA
      border-top-left-radius:10px;
      border-top-right-radius:10px;
    `,
    headerWrap: styled.View`
      width: 250px;
      height: 40px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 10px;
      margin-left: 1%;
      flex-direction: row;
    `,
    prev: styled.TouchableOpacity`
      width: 23px;
      height: 28px;
      justify-content: center;
      align-items: center;
    `,
    p: styled.Text`
      font-size: 24px;
      font-weight: bold;
      width: auto;
    `,
  };
  return (
    <Styled.header>
      <GlobalStyled.ViewCol as={TouchableOpacity} width="40px" onPress={backHandler}>
        <Image source={require("../../images/icon/backBracket.png")}></Image>
      </GlobalStyled.ViewCol>
      <GlobalStyled.ViewCol style={{ flex: 1, }} justifyContent="flex-start" alignItems="flex-end">
        <GlobalStyled.ViewRow height="30px" style={{marginVertical :10,}}>
          <Text style={{fontSize:24, color: "#1B2C49", fontWeight: "bold", width:"100%", textAlign:"left"}}>{HeaderTitle}</Text>
        </GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow height="20px" style={{marginBottom :10,}} alignItems="flex-start">
          <Text style={{fontSize:RFValue(16,hp(100)), color:"#A4B6D6", width:"100%", textAlign:"left" }}>{detail}</Text>
        </GlobalStyled.ViewRow>
      </GlobalStyled.ViewCol>
    </Styled.header>
  );
};
export { Header };
