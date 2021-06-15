import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import GlobalStyled from "../../style/GlobalStyled";
import MainIcon from "../../images/iconSvg/MainIcon";
const Feed = (props) => {
  const { name, msg, before, icon } = props;
  const Styled = {
    content: styled.View`
      height: 80px;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `
  };
  return (
    <Styled.content>
      <View
        style={{
          width: "90%",
          height: "90%",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "row",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          backgroundColor: "white",
          elevation: 28,
          borderRadius: 10
        }}
      >
        <GlobalStyled.ViewRow
          height={72}
          width={72}
        >
          <MainIcon size={65} type={icon}/>
        </GlobalStyled.ViewRow>
        <GlobalStyled.ViewCol style={{ flex: 1 }}>
          <View
            style={{
              width: "100%",
              height: "40%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 18, color: "#1B2C49", marginLeft: 10 }}>
              {name}
            </Text>
            <Text style={{ fontSize: 16, color: "#707070", marginRight: 10 }}>
              {before}
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: "60%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 10
            }}
          >
            <Text
              style={{
                textAlign: "left",
                width: "100%",
                color: "#1B2C49",
                fontSize: 12
              }}
            >
              {msg}
            </Text>
          </View>
        </GlobalStyled.ViewCol>
      </View>
    </Styled.content>
  );
};

export default Feed;
