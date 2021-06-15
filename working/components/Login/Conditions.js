import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Conditions_Item from "./atoms/Conditions_Item"
import SignUpMark from "../../svg/SignUpMark";

const Styled = {
    Wrap: styled.View`
        width:100%;
        height:240px;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        margin-top:30px;
        background-color:#fff;
    `,
    Section: styled.View`
        width:84%;
        height:180px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
    `,
    allCheck: styled.View`
        width:auto;
        height:19px;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:row;
    `,
    CheckBox: styled.TouchableOpacity`
        width:20px;
        height:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-radius:3px;
        border:1px solid #DBDCDC;
    `,
    CheckText: styled.Text`
        font-size:12px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
        margin-left:10px;
    `,
}
const Conditions = (props) => {
    const { acceptList, setAcceptList } = props;
    const [allCheck, setAllCheck] = useState(false)
    useEffect(() => {
        if(allCheck === false){
            var temp = [...acceptList]
            temp[0] = false
            temp[1] = false
            temp[2] = false
            temp[3] = false
            setAcceptList(temp)
        }else{
            var temp = [...acceptList]
            temp[0] = true
            temp[1] = true
            temp[2] = true
            temp[3] = true
            setAcceptList(temp)
        }
        
    }, [allCheck])
    
    if (allCheck === false) {
        return (
            <Styled.Wrap>
                <Styled.Section>
                    <Styled.allCheck>
                        <Styled.CheckBox onPress={() => setAllCheck(!allCheck)}>

                        </Styled.CheckBox>
                        <Styled.CheckText>전체동의</Styled.CheckText>
                    </Styled.allCheck>
                    <Conditions_Item
                        text="만 14세 이상이며, 약관에 모두 동의합니다."
                        acceptList={acceptList}
                        setAcceptList={setAcceptList}
                        index="0"
                    />
                    <Conditions_Item
                        text="(필수) 이용약관"
                        acceptList={acceptList}
                        setAcceptList={setAcceptList}
                        index="1"
                    />
                    <Conditions_Item
                        text="(필수) 개인정보 취급방침"
                        acceptList={acceptList}
                        setAcceptList={setAcceptList}
                        index="2"
                    />
                    <Conditions_Item
                        text="(필수) 마케팅 수신동의"
                        acceptList={acceptList}
                        setAcceptList={setAcceptList}
                        index="3"
                    />
                </Styled.Section>
            </Styled.Wrap>
        )
    } else {
        return (
            <Styled.Wrap>
                <Styled.Section>
                    <Styled.allCheck>
                        <Styled.CheckBox onPress={() => setAllCheck(!allCheck)}>
                            <SignUpMark size={15} fill="#5571FF"></SignUpMark>
                        </Styled.CheckBox>
                        <Styled.CheckText>전체동의</Styled.CheckText>
                    </Styled.allCheck>
                    <Conditions_Item
                        text="만 14세 이상이며, 약관에 모두 동의합니다."
                        acceptList={acceptList}
                        setAcceptList={setAcceptList}
                        index="0"
                    />
                    <Conditions_Item
                        text="(필수) 이용약관"
                        acceptList={acceptList}
                        setAcceptList={setAcceptList}
                        index="1"
                    />
                    <Conditions_Item
                        text="(필수) 개인정보 취급방침"
                        acceptList={acceptList}
                        setAcceptList={setAcceptList}
                        index="2"
                    />
                    <Conditions_Item
                        text="(필수) 마케팅 수신동의"
                        acceptList={acceptList}
                        setAcceptList={setAcceptList}
                        index="3"
                    />
                </Styled.Section>
            </Styled.Wrap>
        )
    }

}
export default Conditions