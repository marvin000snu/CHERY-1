import React from "react"
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FilledCircle from "../../src/images/iconSvg/filledCircle"
const Styled = {
    box: styled.View`
    width: ${wp(93)};
    height: ${hp(5)};
    border: solid;
    border-color: #CCCCCC;
    border-radius: ${hp(1.2)};
    align-items: center;
    justify-content: center;

    `,
    space: styled.View`
    width: ${wp(85)};
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    `,
    title: styled.Text`
    font-size: ${wp(5)};
    font-family:NotoSansKR-regular;
 
    `,
    number: styled.Text`
    font-size: ${wp(4)};
    font-family:NotoSansKR-Bold;
    color: #AD9E81;

    `,
    mid: styled.View`
    flex-flow: row;
    justify-content: center;
    align-items: center;
    `,

};
const SolvedOne = (props) => {

    const {title, numberList,color} = props;
    return(
        <Styled.box>
            <Styled.space>
            <Styled.mid>
            <FilledCircle size={wp(3)} color = {color} marginRight = {wp(3)}/>
            <Styled.title>
                {title}
            </Styled.title>
            </Styled.mid>
            <Styled.number>
                {numberList+"문항"}
            </Styled.number>
            </Styled.space>
        </Styled.box>
    )
}

export default SolvedOne;