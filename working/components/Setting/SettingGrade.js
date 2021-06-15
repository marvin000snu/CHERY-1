import React from "react"
import styled from "styled-components"
import GradeBtn from "./atom/GradeBtn"

const SettingGrade = (props) => {
    const {marginTop, width, Grade, color, setColor} = props
    const Styled = {
        Wrap: styled.View`
            width:${width}%;
            height:60px;
            display:flex;
            justify-content:space-between;
            align-items:flex-start;
            flex-direction:column;
            margin-top:${marginTop}px;
        `,
        Title:styled.Text`
            font-size:16px;
            font-weight:500;
            font-family:NotoSansKR-Bold;
            color:#1b2c49;
        `,
        BtnWrap: styled.View`
            width:100%;
            height:30px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-direction:row;
        `,
    }
    return (
        <Styled.Wrap>
            <Styled.Title>{props.title}</Styled.Title>
            <Styled.BtnWrap>
                {Grade.map((v)=>{
                    return(
                        <GradeBtn 
                            text={v} 
                            color={color} 
                            setColor={setColor}
                        />
                    )
                })}
            </Styled.BtnWrap>
        </Styled.Wrap>
    )
}
SettingGrade.defaultProps = {
    marginTop:"0",
    width:"90"
}
export default SettingGrade