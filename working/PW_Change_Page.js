
import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import PW_Change_Curr from "./Molecules/PW_Change_Curr";
const Styled = {
    background: styled.View`
      background-color: #fff;
      width: ${wp(100)};
      height: ${hp(100)};
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    `,
};  
const PW_Change_Page = () => {
    return (
        <Styled.background>
                <PW_Change_Curr />
        </Styled.background>)
}

export default PW_Change_Page;