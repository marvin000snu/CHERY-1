import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { TouchableWithoutFeedback, Text } from "react-native";
const HomeMyMenuLittleButton = (props) => {
  const { color, onPress, title, desc, fontSize, height, width, Icon } = props;
  const Styled = {
    background: styled.View`
      background-color: ${color};
      align-items: center;
      justify-content: center;
      height: ${height};
      width: ${width};
      margin-top: ${hp(1)};
    `,
    font: styled.Text`
      font-size: ${fontSize};
    `,
    button: styled.View`
      height: ${height * 0.7};
      align-items: center;
      justify-content: space-between;
    `,
    Level: styled.View`
      display: ${title === "레벨" ? "flex" : "none"};
      margin-top: 3px;
    `,
    Membership: styled.Text`
      color: #5471ff;
      display: ${title === "이용권" ? "flex" : "none"};
      font-size: ${fontSize};
    `,
    Cheries: styled.Text`
      display: ${title === "체리개수" ? "flex" : "none"};
      color: #5471ff;
      font-size: ${fontSize};
    `,
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Styled.background>
        <Styled.button>
          <Styled.font>{title}</Styled.font>
          <Styled.Level>
            <Icon />
          </Styled.Level>
          <Styled.Membership>{desc}</Styled.Membership>
          <Styled.Cheries>
            {desc} <Text>개</Text>
          </Styled.Cheries>
        </Styled.button>
      </Styled.background>
    </TouchableWithoutFeedback>
  );
};

export default HomeMyMenuLittleButton;
