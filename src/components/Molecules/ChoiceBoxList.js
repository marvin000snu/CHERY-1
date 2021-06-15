import React from 'react'
import { ChoiceBox } from './ChoiceBox'
import styled from 'styled-components/native'
const ChoiceBoxList = (props) => {
    const {infos, frontHandler, backHandler} = props
    const Styled = {
        select : styled.View`      
        width: 90%;
        height: 60%;
        maxHeight: 500;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-flow: column;
        `
    }

    return (
        <Styled.select>
            <ChoiceBox front="빈칸추론" back="문장삽입" frontHandler={()=>{frontHandler(1)}} backHandler={()=>{backHandler(1)}} activeInfo={infos[0]}/>
            <ChoiceBox front="어휘추론" back="요약문" frontHandler={()=>{frontHandler(2)}} backHandler={()=>{backHandler(2)}} activeInfo={infos[1]}/>
            <ChoiceBox front="순서추론" back="무관문" frontHandler={()=>{frontHandler(3)}} backHandler={()=>{backHandler(3)}} activeInfo={infos[2]}/>
            <ChoiceBox front="어법" back="주장찾기" frontHandler={()=>{frontHandler(4)}} backHandler={()=>{backHandler(4)}}activeInfo={infos[3]}/>
            <ChoiceBox front="어휘" back="밑줄의미" frontHandler={()=>{frontHandler(5)}} backHandler={()=>{backHandler(5)}}activeInfo={infos[4]}/>
        </Styled.select>
    )
}

export {ChoiceBoxList}