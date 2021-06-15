import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import SolvedOne from "../Atom/SolvedOne";
const Styled = {
    Collection: styled.View`
    width: ${wp(93)}px;
    height: ${hp(30)}px;
    justify-content: space-between;
    flex-flow: column;
    align-items: center;
    margin-top:30px;
    `,
}
const Solved = (props) => {
    const {titleList, numberList, colors} = props;
    let collections = titleList.map( (value, idx) => {
        return( <SolvedOne title= {titleList[4-idx]} numberList= {numberList[4-idx]} color = {colors[4-idx]}/>);
    });

    return(
    <Styled.Collection>
        {collections}
    </Styled.Collection>
    );
}

export default Solved;