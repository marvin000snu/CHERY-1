import React from "react"
import styled from "styled-components"

const Styled = {
    Wrap: styled.View`
        width:315px;
        height:63px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
    `,
    Data_Input: styled.TextInput`
        width:315px;
        height:30px;
        border:1px solid #979CA7;
        border-radius:4px;
        padding:0 0 0 5px;
        margin:0;
    `,
}
const Inputdata = (props) => {
    const { title, setNumber } = props
    return (
        <Styled.Wrap>
            <Styled.Data_Input placeholder={title[0]} keyboardType="number-pad" pattern="[0-9]*"
                onChangeText={(text) => { setNumber(0, text) }} />
            <Styled.Data_Input placeholder={title[1]} keyboardType="number-pad"
                onChangeText={(text) => { setNumber(1, text) }} />
            <Styled.Data_Input placeholder={title[2]} keyboardType="number-pad"
                onChangeText={(text) => { setNumber(2, text) }} />
            <Styled.Data_Input placeholder={title[3]} keyboardType="number-pad"
                onChangeText={(text) => { setNumber(3, text) }} />
        </Styled.Wrap>
    )
}
export default Inputdata