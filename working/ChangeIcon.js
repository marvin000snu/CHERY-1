import React from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import BadgedIcon from "./svg/BadgedIcon";
const Styled = {
    background: styled.View`
        width: ${wp(100)}px;
        height: ${hp(70)}px;
        margin-top: ${hp(30)}px;
        flex-flow: row;
        justify-content:space-between;
        align-items: center;
        flexWrap: wrap;
        background-color: white;
    `,
    bg: styled.View`
        width: ${wp(90)}px;
        height: ${hp(70)}px;
        flex-flow: row;
        justify-content:space-between;
        align-items: center;
        flexWrap: wrap;
        margin-left: ${wp(5)}px;
    `,

    icon: styled.TouchableOpacity`
    width: ${hp(10)}px;
    height: ${hp(10)}px;
    justify-content: center;
    align-items: center;
    `,

}

const ChangeIcon = (props) => { //25개
    //                <BadgedIcon iconType={6}/>
    const {setIconNo, setModalVisible} = props;
    let iconIndex = [];
    for(let i =1; i<25; i++)
        iconIndex.push(i);
    let Icons = iconIndex.map((v, idx) => {
        return(
        <Styled.icon onPress={() => {
            setIconNo(v)
            setModalVisible(false);
        }} >
        <BadgedIcon iconType = {v} size = {wp(20)}/>
        </Styled.icon>)
    })
    return (
        <Styled.background>
            <Styled.bg>
            {Icons}
            </Styled.bg>
        </Styled.background>
    )
}
export default ChangeIcon