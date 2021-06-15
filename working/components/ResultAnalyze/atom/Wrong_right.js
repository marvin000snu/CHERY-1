import React from "react"
import styled from "styled-components"
import Ok from "../../../svg/Ok"
import No from "../../../svg/No"

const Styled={
    ReasultInfo: styled.View`
        width:25%;
        height:100%;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
    `,
}
const Wrong_right=(props)=>{
    const {data} = props
    if(data === "OK"){
        return(
            <Styled.ReasultInfo>
                <Ok />
            </Styled.ReasultInfo>
        )
    }else{
        return(
            <Styled.ReasultInfo>
                <No />
            </Styled.ReasultInfo>
        )
    }

}
export default Wrong_right