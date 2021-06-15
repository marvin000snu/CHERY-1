import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Dday = (props) => {
    const {month, dday} = props;
    const ddays = dday.toString().split('');
    const len = ddays.length;
    const Styled = {
        body: styled.View`
          margin-top: ${hp(2)}px;
          width: ${wp(93)};
          height: ${wp(15)}px;
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          border: solid;
          border-color: #DBDCDC;
          border-radius: 10px;
        `,
        head: styled.Text`
        font-size: ${wp(6)};
        margin-left: ${wp(5)};
        color: #5E78FD;
        `,
        texts: styled.View`
        width: ${wp(7*(len+2))}; 
        height: ${wp(7)};
        flex-flow: row;
        `,
        onetextBox: styled.View`
        width: ${wp(6)};
        height: ${wp(6)};
        background-color: #D8EAFF; 
        border-radius: 5px;
        align-items: center;
        margin: 2px;
        `,
        onetext: styled.Text`
        color: #5571FF;
        font-size: ${wp(5)};
        `,
    };  
    
return(
    <Styled.body>
        <Styled.head>{month}</Styled.head>
        <Styled.texts>
            <Styled.onetextBox>
                <Styled.onetext> D </Styled.onetext>
            </Styled.onetextBox>
                <Styled.onetext> - </Styled.onetext>
            <Styled.onetextBox>
                <Styled.onetext> {ddays[0]} </Styled.onetext>
            </Styled.onetextBox>
            <Styled.onetextBox display = {(ddays[1] === undefined)? "none" : ""}>
                <Styled.onetext> {ddays[1]} </Styled.onetext>
            </Styled.onetextBox>
            <Styled.onetextBox display = {(ddays[2] === undefined)? "none" : ""}>
                <Styled.onetext> {ddays[2]} </Styled.onetext>
            </Styled.onetextBox>

        </Styled.texts>
    </Styled.body>
)
}

export {Dday};