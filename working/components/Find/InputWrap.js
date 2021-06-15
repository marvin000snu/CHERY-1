import React, {useState} from "react"
import styled from "styled-components"
import Inputdata from "./atom/Inputdata"

const Styled={
    Wrap:styled.View`
        width:80%;
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
    const [Title, setTitle] = useState(["이름","휴대전화"])
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