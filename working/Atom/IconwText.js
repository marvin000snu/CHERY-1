import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback } from "react-native";
const IconwText = (props) => {
    const {size, Icon, text, onPress, color} = (props);
    const Styled = {
        background: styled.View`
          align-items: center;
          justify-content: center;
          height: ${size};
          width: ${size};
        `,
        icon: styled.View`
        height: ${size*0.8};
        width: ${size*0.8};
        align-items: center;
        justify-content: center;
        
        `,
        font: styled.Text`
        font-size: ${size*0.2};
        `,
        spacing: styled.View`
        align-items: center;
        justify-content: center;
        `,
    };
      
      
  return (
    <Styled.background>
        <TouchableWithoutFeedback onPress = {onPress}>
            <Styled.spacing>
            <Styled.icon>
                <Icon size = {size*0.5} color = {color}/>
            </Styled.icon>
            <Styled.font> {text}</Styled.font>
            </Styled.spacing>
        </TouchableWithoutFeedback>
    </Styled.background>

  );
};

export default IconwText;
