import React from "react"
import styled from "styled-components"

const Styled = {
    Wrap: styled.View`
        width:295px;
        height:60px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
    `,
    TitleBox: styled.View`
        width:100%;
        height:22px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
    `,
    Title: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:500;
        color:#1b2c49;
    `,
    LittleTitle: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:13px;
        font-weight:400;
        color:#1b2c49;
    `,
    Input: styled.TextInput`
        width:100%;
        height:30px;
        border:1px solid #979CA7;
        border-radius:4px;
        padding:0 0 0 5px;
        margin:0;
    `,
    InputWrap: styled.View`
        width:100%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
    `,
    PhoneInput:styled.TextInput`
        width:66px;
        height:30px;
        padding:0 0 0 5px;
        margin:0;
        border:1px solid #979CA7;
        border-radius:4px;
    `,
    Certified_input:styled.TextInput`
        width:219px;
        height:30px;
        padding:0 0 0 5px;
        margin:0;
        border:1px solid #979CA7;
        border-radius:4px;
    `,
    Btn:styled.TouchableOpacity`
        width:66px;
        height:30px;
        border-radius:4px;
        background-color:#6F87FF;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    `,
    BtnText:styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:15px;
        font-weight:500;
        color:#fff;
    `,
    Touch: styled.TouchableOpacity`
        width:auto;
        height:auto;
    `,
}
const PW_Data = (props) => {
    const { 
        Title, 
        Number1, 
        setNumber1, 
        Number2, 
        setNumber2, 
        Number3, 
        setNumber3, 
        Certified, 
        setCertified,
        setPassNumber,
        PassNumber
    } = props
    const CheckPhone=()=>{
        if(Number1.length === 3){
            if(Number2.length === 4){
                if(Number3.length === 4){
                    setPassNumber("OK")
                }else{
                    alert("번호를 다시 확인해 주세요")
                }
            }else{
                alert("번호를 다시 확인해 주세요")
            }
        }else{
            alert("번호를 다시 확인해 주세요")
        }
    }
    const OKBtn=()=>{
        if(PassNumber === "OK"){
        }else{
            alert("핸드폰 번호를 다시 확인해 주세요")
        }
    }
    if (Title === "아이디") {
        return (
            <Styled.Wrap>
                <Styled.TitleBox>
                    <Styled.Title>{Title}</Styled.Title>
                    <Styled.Touch>
                        <Styled.LittleTitle>아이디 찾기</Styled.LittleTitle>
                    </Styled.Touch>
                </Styled.TitleBox>
                <Styled.Input placeholder="가입된 아이디 입력" />
            </Styled.Wrap>
        )
    }else if(Title==="이름"){
        return(
            <Styled.Wrap>
                <Styled.TitleBox>
                    <Styled.Title>{Title}</Styled.Title>
                </Styled.TitleBox>
                <Styled.Input placeholder={Title}/>
            </Styled.Wrap>
        )
    }else if(Title==="휴대전화"){
        return (
            <Styled.Wrap>
                <Styled.TitleBox>
                    <Styled.Title>{Title}</Styled.Title>
                </Styled.TitleBox>
                <Styled.InputWrap>
                    <Styled.PhoneInput 
                        placeholder="010"
                        value={Number1}
                        onChangeText={text=>setNumber1(text)}
                    />
                    <Styled.PhoneInput 
                        placeholder="1234"
                        value={Number2}
                        onChangeText={text=>setNumber2(text)}
                    />
                    <Styled.PhoneInput 
                        placeholder="5678"
                        value={Number3}
                        onChangeText={text=>setNumber3(text)}
                    />
                    <Styled.Btn onPress={CheckPhone}>
                        <Styled.BtnText>인증번호</Styled.BtnText>
                    </Styled.Btn>
                </Styled.InputWrap>
            </Styled.Wrap>
        )
    }
    else {
        return (
            <Styled.Wrap>
                <Styled.TitleBox>
                    <Styled.Title>{Title}</Styled.Title>
                </Styled.TitleBox>
                <Styled.InputWrap>
                    <Styled.Certified_input 
                        value={Certified}
                        onChangeText={text=>setCertified(text)}
                    />
                    <Styled.Btn onPress={OKBtn}>
                        <Styled.BtnText>확인</Styled.BtnText>
                    </Styled.Btn>
                </Styled.InputWrap>
            </Styled.Wrap>
        )
    }
}
export default PW_Data