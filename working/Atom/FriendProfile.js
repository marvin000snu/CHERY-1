import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
import BadgedIcon from "../svg/BadgedIcon";
const H = hp(6);
const FriendProfile = (props) => {
    const {iconType, message, name} =props;
    const Styled = {
        background: styled.View`
        margin-top: ${hp(2)};
        width: 100%;
        height: ${H};
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
        `,
        texts: styled.View`
        width: 60%;
        height: ${H*0.8};
        justify-content: space-between;
        align-items: flex-start;
        `,
        icon: styled.View`
        `,
        name: styled.Text`
        font-weight: bold;
        font-size: ${H/3};
        `,
        message: styled.Text`
        font-size: ${H/4};
        `,
      };
      
      const buttonPress = () => {
      }
  return (
    <TouchableWithoutFeedback onPress = {buttonPress}>
        <Styled.background>
            <Styled.icon>
            <BadgedIcon iconType={iconType} levelType={0} size={58}/>
            </Styled.icon>
            <Styled.texts>
                <Styled.name>
                    {name}
                </Styled.name>
                <Styled.message>
                    {message}
                </Styled.message>
            </Styled.texts>
        </Styled.background>
        </TouchableWithoutFeedback>

  );
};

export default FriendProfile;