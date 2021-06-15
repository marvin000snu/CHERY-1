import React from "react"
import styled from "styled-components"
const Styled = {
    Wrap: styled.View`
        height:60px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
    `,
    Title:styled.Text`
        font-size:16px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    TextInput: styled.TextInput`
        width:100%;
        height:30px;
        font-size:16px;
        font-weight:400;
        font-family:NotoSansKR-Bold;
        border-radius:4px;
        border:1px solid #979CA7;
        padding:0 0 0 10px;
    `,
}
const SettingInput = (props) => {
    const {marginTop, width, data, setData} = props

    return (
        <Styled.Wrap style={{width:width+"%"}}>
            <Styled.Title>{props.title}</Styled.Title>
            <Styled.TextInput 
                value={data}
                onChangeText={setData}
                placeholder={props.placeholder} 
                placeholderTextColor="#777" 
            />
        </Styled.Wrap>
    )
}
SettingInput.defaultProps = {
    marginTop:"0",
    width:"90"
}
export default SettingInput