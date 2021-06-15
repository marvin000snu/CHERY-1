import React from "react";
import styled from "styled-components";
import { TouchableWithoutFeedback } from "react-native";
  
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const Styled = {
    square: styled.View`
      width: ${wp(29)}px;
      height: ${wp(29)}px;
      border: solid;
      border-color: #DBDCDC;
      border-radius: 10;
      justify-content: center;
      align-items: center;
    `,
    words: styled.Text`
    margin-top: ${wp(2)}px;
    font-size: ${wp(6)}px;

    `,
};  

const HomeMainButton = (props) => {
    const {Img, title, navigation, navTo} = props;
    const onNav = () => {
    navigation.navigate(navTo); 
    }
    return(
    <TouchableWithoutFeedback onPress={onNav}>
        <Styled.square>
            <Img size = {wp(14)}></Img>
            <Styled.words> {title}</Styled.words>
        </Styled.square>
    </TouchableWithoutFeedback>
    );
}

export default HomeMainButton;