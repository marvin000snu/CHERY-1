import React from "react"
import styled from "styled-components"

const Styled={
    Wrap:styled.View`
        width:95%;
        height:63px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
    `,
    DataName:styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:500;
        color:#1b2c49;
    `,
    Data_Input:styled.TextInput`
        width:100%;
        height:30px;
        border:1px solid #979CA7;
        border-radius:4px;
        padding:0 0 0 5px;
        margin:0;
    `,
}
const Inputdata=(props)=>{
    const {title, name, setName, number, setNumber} = props
    if(title === "이름"){
        return(
            <Styled.Wrap>
                <Styled.DataName>{title}</Styled.DataName>
                <Styled.Data_Input 
                    placeholder="이름을 입력해 주세요" 
                    value={name} 
                    onChangeText={text=>setName(text)}
                />
            </Styled.Wrap>
        )
    }else{
        return(
            <Styled.Wrap>
                <Styled.DataName>{title}</Styled.DataName>
                <Styled.Data_Input 
                    placeholder="핸드폰 번호를 입력해 주세요" 
                    value={number}
                    onChangeText={text=>setNumber(text)}
                />
            </Styled.Wrap>
        )
    }
    
}
export default Inputdata