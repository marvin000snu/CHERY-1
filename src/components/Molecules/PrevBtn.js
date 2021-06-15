import * as React from "react";
import styled from 'styled-components/native'
import {View} from 'react-native'
const PrevBtn = () => {
    const Styled = {
        PrevBtn: styled.View`
            width:23px;
            height:28px;
            background-color:red;
        `,
    };
    
    return(
        <View>
            <Styled.PrevBtn></Styled.PrevBtn>
        </View>
    );
};
export {PrevBtn}