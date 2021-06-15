import React from "react"
import styled from "styled-components"


const HeaderSelectBtn=(props)=>{
    const {SelectHeaderBtn, setSelectHeaderBtn, text, index} = props
    const Styled = {
        SelectBtn:styled.TouchableOpacity`
            width:50%;
            height:100%;
            border-bottom-width:${SelectHeaderBtn === index ? "5px":"2px"};
            border-color:${SelectHeaderBtn === index ? "#5471FF":"#CDCDCD"};
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:row;
        `,
        SelectBtnText:styled.Text`
            font-size:16px;
            font-weight:400;
            color:${SelectHeaderBtn === index ? "#5471FF":"#909398"};
            font-family:NotoSansKR-Bold;
        `,
    }
    return(
        <Styled.SelectBtn onPress={()=>
        {   if(index ==1){
            alert("열심히 공부해서 체리를 모아두세요! \n 멋진 샵이 곧 찾아갑니다 :)");
            return;
        }
            setSelectHeaderBtn(index);
        }}>
            <Styled.SelectBtnText>{text}</Styled.SelectBtnText>
        </Styled.SelectBtn>
    )
}
export default HeaderSelectBtn