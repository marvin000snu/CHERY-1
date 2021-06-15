import moment from "moment"
import React, {useCallback} from "react"
import styled from "styled-components"
import Time from "./atom/Time"
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import useAPI from "../../../src/hooks/useAPI";

const Styled = {
    Wrap: styled.View`
        width:100%;
        height:68px;
        display:flex;
        justify-content:center;
        flex-direction:row;
        align-items:center;
        border-radius:10px;
        border:1px solid #CDCDCD;
    `,
    FriendBox: styled.View`
        width:90%;
        height:48px;
        display:flex;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        align-items:center;
    `,
    FriendProfile: styled.View`
        width:48px;
        height:48px;
        background-color:red;
        border-radius:24px;
    `,
    FriendInfoWrap: styled.View`
        width:80%;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
    `,
    FriendInfoWrapTop: styled.View`
        width:100%;
        height:25px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
    `,
    FriendInfoWrapBottom: styled.View`
        width:100%;
        height:auto;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:row;
    `,
    FriendAddText: styled.Text`
        font-size:13px;
        font-weight:100;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    NameTimeBox: styled.View`
        width:auto;
        height:100%;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction:row;
    `,
    Name: styled.Text`
        font-size:15px;
        font-weight:400;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    Time: styled.Text`
        font-size:13px;
        font-weight:100;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    BtnWrap: styled.View`
        width:150px;
        height:100%;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        flex-direction:row;
    `,
    CancelBtn: styled.TouchableOpacity`
        width:77px;
        height:25px;
        border-radius:5px;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border:1px solid #BBC2CF;
    `,
    CancelText: styled.Text`
        font-size:15px;
        font-weight:400;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
}
const Friend_Manage_send = (props) => {
    const [API] = useCallback(useAPI(), []);
        const onCancel = async (id) => {
            try{
            const token = await AsyncStorage.getItem("@userToken");
            const deCode = jwt_decode(token);
            const result = API.friend.cancelSend({id: deCode["cognito:username"], body: {id: id}}); 
            alert("삭제를 완료했습니다")
            } catch (err) {
                console.log(err);
                console.log(err.msg);
            }
        }
    
    const {friend} = props;
        return (
        <Styled.Wrap>
            <Styled.FriendBox>
                <Styled.FriendProfile></Styled.FriendProfile>
                <Styled.FriendInfoWrap>
                    <Styled.FriendInfoWrapTop>
                        <Styled.NameTimeBox>
                            <Styled.Name>{friend.id}</Styled.Name>
                            <Time setTime={moment().diff(friend.created_at, "minutes")}/>
                        </Styled.NameTimeBox>
                        <Styled.BtnWrap>
                            <Styled.CancelBtn onPress = {()=> {onCancel(friend.dbId)}}>
                                <Styled.CancelText>요청 취소</Styled.CancelText>
                            </Styled.CancelBtn>
                        </Styled.BtnWrap>
                    </Styled.FriendInfoWrapTop>
                    <Styled.FriendInfoWrapBottom>
                        <Styled.FriendAddText>{friend.id} 님에게 친구 요청을 하였습니다.</Styled.FriendAddText>
                    </Styled.FriendInfoWrapBottom>
                </Styled.FriendInfoWrap>
            </Styled.FriendBox>
        </Styled.Wrap>
    )
}
export default Friend_Manage_send