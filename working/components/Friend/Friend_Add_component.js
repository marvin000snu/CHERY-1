import React, { useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import BadgedIcon from "../../svg/BadgedIcon";
import useAPI from "../../../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert, C} from "react-native";
import jwt_decode from "jwt-decode";
const Styled={
    Info:styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:15px;
        font-weight:400;
        color:#787A7E;
        margin-top:10px;
    `,
    Wrap: styled.View`
        width:85%;
        height:52px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        border-bottom-width:1px;
        border-color:#CDCDCD;
    `,
    InfoWrap: styled.View`
        width:auto;
        height:42px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        margin-left:10px;
    `,
    FriendAddBtn:styled.TouchableOpacity`
        width:95px;
        border-radius:5px;
        background-color:#5571FF
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        height:30px;
    `,
    AddBtnText:styled.Text`
        font-size:16px;
        font-weight:500;
        color:#fff;
        font-family:NotoSansKR-Bold;
    `,
    Profile: styled.View`
        width:42px;
        height:42px;
    `,
    ProfileBox: styled.View`
        width:auto;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:flex-start;
        flex-direction:column;
        margin-left:10px;
    `,
    NameText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:15px;
        font-weight:500;
        color:#1b2c49;
    `,
    ProfileMessage: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:14px;
        font-weight:100;
        color:#1b2c49;
    `,
}

//이거 다 상위 컴포로 올려라
const Friend_Add_component=(props)=>{
    const [API] = useCallback(useAPI(), []);
    const [friendData, setFriendData] = useState({"attend": 0, "daily": 1, "icon": 1, "level": 1, "msg": "", "name": ""});
    const {friendId} = props
    useEffect(() => {
        const useEffectAsyncFunction = async () => {
          try {
            if(! friendId) return;
            const { data } = await API.info.getSettingInfo({userId: friendId});
            setFriendData(data.userInfo);
            if(data.userInfo === undefined)
                return;
          } catch (err) {
            console.warn(err);
            console.warn(err.body);
            setFriendData({"attend": 0, "daily": 1, "icon": 1, "level": 1, "msg": "", "name": ""})
          }
        };
        useEffectAsyncFunction();
      }, [friendId]);
      const addAlert = async () => {
        Alert.alert(
            "친구추가",
            `${friendData["name"]}님에게 친구요청을 보내시겠습니까?`,
            [
              { text: "아니요", style: "cancel" },
              { text: "네", onPress: () => addFriend() },
            ],
            { cancelable: false }
          );      }

      const addFriend = async () => {
          if(! friendId) return;
          try{
          const token = await AsyncStorage.getItem("@userToken");
          const deCode = await jwt_decode(token);
        const params = {
            userId: deCode["cognito:username"],
            body: {
              sendId: deCode["cognito:username"],
              respondId: friendId,
              sendName: deCode["name"],
            }
          };
          const addResult = await API.friend.addFriend(params);
          alert("친구요청을 보냈습니다.");
          //navigate 하면 좋을듯
        } catch(err) {
            if (err.response.data.msg === "alreadyFriend") {
                alert("이미 친구입니다.");
              }
              if (err.response.data.msg === "idNotFound") {
                alert("존재하지 않는 아이디 입니다.");
              }
              if (err.response.data.msg === "alreadySend") {
                alert("이미 친구추가 요청을 보냈습니다.");
              }
              if (err.response.data.msg === "cannotAddSelf") {
                alert("나 자신과 체리는 당신의 영원한 친구!");
              }
                    }
      }
    if(friendId === ""){
        return(
            <Styled.Info>친구 ID를 입력해주세요.</Styled.Info>
        )
    }else if(friendData["name"] !==""){
        return (
            <Styled.Wrap>
                <Styled.InfoWrap>
                    <Styled.Profile>
                        <BadgedIcon iconType = {friendData["icon"]} size = {38} />
                    </Styled.Profile>
                    <Styled.ProfileBox>
                        <Styled.NameText>{friendData["name"]}</Styled.NameText>
                        <Styled.ProfileMessage>{friendData["chery_msg"]}</Styled.ProfileMessage>
                    </Styled.ProfileBox>
                </Styled.InfoWrap>
                <Styled.FriendAddBtn onPress = {addAlert}>
                    <Styled.AddBtnText>친구요청</Styled.AddBtnText>
                </Styled.FriendAddBtn>
            </Styled.Wrap>
        )
    }else{
        return(
            <Styled.Info>없는 아이디입니다.</Styled.Info>
        )
    }

}
export default Friend_Add_component