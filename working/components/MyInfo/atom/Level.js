import React from "react"
import styled from "styled-components"
import Level1 from "../../../svg/level1"
import Level2 from "../../../svg/level2"
import Level3 from "../../../svg/level3"
import Level4 from "../../../svg/level4"
import Level5 from "../../../svg/level5"


const Styled = {
    TrImg: styled.View`
        width:100%;
        height:71px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `,
}
const Level = (props) => {
    const {level} = props
    if(level === 1){
        return (
            <Styled.TrImg>
                <Level1 />
            </Styled.TrImg>
        )
    }else if(level === 2){
        return (
            <Styled.TrImg>
                <Level2 />
            </Styled.TrImg>
        )
    }else if(level === 3){
        return (
            <Styled.TrImg>
                <Level3 />
            </Styled.TrImg>
        )
    }else if(level === 4){
        return (
            <Styled.TrImg>
                <Level4 />
            </Styled.TrImg>
        )
    }else if(level === 5){
        return (
            <Styled.TrImg>
                <Level5 />
            </Styled.TrImg>
        )
    }
    
}
export default Level