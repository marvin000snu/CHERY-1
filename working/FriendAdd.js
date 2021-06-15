import React, { useState } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import PrevImg from "./svg/PrevImg"
import Search2 from "./svg/Search2"
import Friend_Add_component from "./components/Friend/Friend_Add_component"

const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
        overflow:hidden;
        background-color:#fff;
    `,
    Header: styled.View`
        width:100%;
        height:132px;
        display:flex;
        justify-content:flex-start;
        align-items:flex-end;
        flex-direction:row;
        border-bottom-width: 3px;
        border-color:#DBDCDC;
    `,
    HeaderTitleWrap: styled.View`
        width:55%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        margin-left:15px;
        margin-bottom:30px;
    `,
    HeaderTitle: styled.Text`
        font-size:20px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    PrevBtn: styled.TouchableOpacity`
        width:auto;
        height:auto;
    `,
    SearchInputWrap: styled.View`
        width:90%;
        height:74px;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
        margin-top:15px;
    `,
    SearchText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:16px;
        font-weight:500;
        color:#1b2c49;
    `,
    SearchInputBox: styled.View`
        width:100%;
        height:40px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        background-color:#EDEDED;
        border-radius:5px;
        border:1px solid #CDCDCD;
    `,
    SearchInput: styled.TextInput`
        width:85%;
        height:100%;
        padding:0 0 0 10px;
        color:#000;
    `,
    SearchBtn:styled.TouchableOpacity`
        width:auto;
        height:auto;
        margin-right:10px;
    `,
    
}
const FriendAdd = (props) => {
    const {backHandler} = props
    const [search, setSearch] = useState("")
    const [searchId, setSearchId] = useState("")
    const searchedResult = (friendId) => {
        
    }
    return (
        <Styled.background>
            <Styled.Header>
                <Styled.HeaderTitleWrap>
                    <Styled.PrevBtn onPress={backHandler}>
                        <PrevImg width="20" height="30" color="#000" />
                    </Styled.PrevBtn>
                    <Styled.HeaderTitle>마이체리</Styled.HeaderTitle>
                </Styled.HeaderTitleWrap>
            </Styled.Header>
            <Styled.SearchInputWrap>
                <Styled.SearchText>친구 ID</Styled.SearchText>
                <Styled.SearchInputBox>
                    <Styled.SearchInput 
                        value={search}
                        onChangeText = {text=>{setSearch(text)}}
                        placeholder="친구 ID를 입력해주세요."
                    />
                    <Styled.SearchBtn onPress = {()=> {setSearchId(search)}}>
                        <Search2 />
                    </Styled.SearchBtn>
                </Styled.SearchInputBox>
            </Styled.SearchInputWrap>
            <Friend_Add_component friendId={searchId}/>
        </Styled.background>
    )
}
export default FriendAdd