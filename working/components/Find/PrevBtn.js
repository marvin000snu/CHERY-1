import React from "react"
import styled from "styled-components"
import PrevIcon from "../../svg/PrevIcon"
const Styled = {
    Wrap: styled.View`
        width:100%;
        height:26px;
    `,
    Btn: styled.TouchableOpacity`
        width:20px;
        height:26px;
        margin-left:12px;
    `,
}
const PrevBtn = ({backHandler, marginTop}) => {
    return (
        <Styled.Wrap style={{marginTop:marginTop===0?marginTop:49}}>
            <Styled.Btn onPress={backHandler}>
                <PrevIcon width="20" height="26" color="#000"/>
            </Styled.Btn>
        </Styled.Wrap>
    )
}
export default PrevBtn