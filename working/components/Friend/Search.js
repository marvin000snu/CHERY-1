import React from "react"
import styled from "styled-components"
import FriendSearch from "../../svg/FriendSearch"

const Styled = {
    Wrap: styled.View`
        width:90%;
        height:30px;
        margin-top:15px;
    `,
    SearchBox: styled.View`
        width:100%;
        height:30px;
        border-radius:15px;
        background-color:#EDEDED;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
    `,
    SearchInput: styled.TextInput`
        width:80%;
        height:100%;
        margin-left:7px;
        padding-left:10px;
    `,
    SearchBtn: styled.TouchableOpacity`
        width:auto;
        height:auto;
        margin-right:11px;
    `,
}
const Search = (props) => {
    const {SearchText, setSearchText} = props
    return (
        <Styled.Wrap>
            <Styled.SearchBox>
                <Styled.SearchInput 
                    value={SearchText}
                    onChangeText={text => setSearchText(text)}
                    placeholder="이름으로 검색"
                />
                <Styled.SearchBtn>
                    <FriendSearch/>
                </Styled.SearchBtn>
            </Styled.SearchBox>
        </Styled.Wrap>
    )
}
export default Search