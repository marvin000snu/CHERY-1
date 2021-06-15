import React from "react"
import styled from "styled-components"
import Next from "../../svg/Next"
import Smile from "../../svg/Smile"

const Styled = {
    Wrap: styled.View`
        width:90%;
        height:62px;
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction:row;
        border-bottom-width: 1px;
        border-color: #CDCDCD;
    `,
    MainBox: styled.TouchableOpacity`
        width:95%;
        height:42px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        flex-direction:row;
    `,
    Section:styled.View`
        width:auto;
        height:auto;
        display:flex;
        justify-content:space-between;
        align-items: center;
        flex-direction:row;
    `,
    AddFriendText:styled.Text`
        font-size:15px;
        font-weight:bold;
        color:#1b2c49;
        font-family:NotoSansKR-Bold;
        margin-left:10px;
    `,
    NextBtn: styled.TouchableOpacity`
        width:auto;
        height:auto;
    `,
}
const AddFriend = (props) => {
    const  {openModalHandler } = props
    return (
        <Styled.Wrap>
            <Styled.MainBox onPress={openModalHandler}>
                <Styled.Section>
                    <Smile />
                    <Styled.AddFriendText>새로운 친구를 만들어 볼까요?</Styled.AddFriendText>
                </Styled.Section>
                <Styled.NextBtn>
                    <Next />
                </Styled.NextBtn>
            </Styled.MainBox>
        </Styled.Wrap>
    )
}
export default AddFriend