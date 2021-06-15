import * as React from "react";
import styled from 'styled-components/native'
import {View, Text} from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import ScrollFlag from "../../images/iconSvg/ScrollFlag";
    const ScrollValue = (props) => {
        const Styled = {
            flag : styled.View`
            width: ${wp(90)}px;
            justify-content : flex-start;
            margin-right: 30px;
            `,
        };
        const {value, loc} = props;
        return (
            <Styled.flag>
                <ScrollFlag style = {{left: loc}} value={value}/>
        </Styled.flag>
);
};


export {ScrollValue};
