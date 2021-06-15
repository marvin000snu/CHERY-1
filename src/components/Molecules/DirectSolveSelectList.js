import React from 'react';
import styled from 'styled-components'
import {DirectSolveSelect} from '../Atoms/DirectSolveSelect'
const Styled = {
    Wrapper : styled.View`
    margin-top: 50px;
    width : 100%;
    height : 50%;
    `
}
const DirectSolveSelectList = (props)=>{
    const {selectHandler, infos, value} = props

    return (
        <Styled.Wrapper>
            {infos.map((v, idx)=>{ return(<DirectSolveSelect value={value} index={idx+1} key={idx*100} text={v} selectHandler={selectHandler}></DirectSolveSelect>)})}
        </Styled.Wrapper>
    )
}



export {DirectSolveSelectList}