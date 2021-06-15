import React, {useState} from "react"
import styled from "styled-components"
import Inputdata from "./scoreInputdata"
const Styled={
    Wrap:styled.View`
        width:345px;
        height:176px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-direction:column;
        border:1px solid #DBDCDC;
        border-radius:10px;
        margin-top:40px;
    `,
}
const InputWrap =(props)=>{
    const {name, setName, number, setNumber} = props;
    const [Title, setTitle] = useState(["시험1","시험2","시험3", "시험4"])
    return(
        <Styled.Wrap>
            {Title.map((v)=>{ 
                return(
                    <Inputdata 
                        title={v} 
                        name={name} 
                        setName={setName} 
                        number={number} 
                        setNumber={setNumber} 
                    />
                )
            })}
        </Styled.Wrap>
    )
}
export default InputWrap