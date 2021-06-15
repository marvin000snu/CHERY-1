import React from "react"
import styled from "styled-components"
import Graph from "./atom/Graph"
const Styled={
    Wrap:styled.View`
        width:100%;
        height:155px;
        border-bottom-width:1px;
        border-color:#DBDCDC;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:row;
    `,
}
const GraphWrap=(props)=>{
    const {GraphPercentage} = props
    return(
        <Styled.Wrap>
            {GraphPercentage.map((v, idx)=>{
                return(
                    <Graph percent={v} index={idx}/>
                )
            })}
        </Styled.Wrap>
    )
}
export default GraphWrap