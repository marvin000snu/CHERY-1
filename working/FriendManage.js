import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import Header from "./components/MyInfo/Header"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Friend_Manage_add from "./components/Friend/Friend_Manage_add"
import Friend_Manage_send from "./components/Friend/Friend_Manage_send"
import { StyleSheet, ScrollView } from "react-native"
import jwt_decode from "jwt-decode";
import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
        background-color:#fff;
    `,
    FriendManageWrap: styled.View`
        width:90%;
        height:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        margin:20px 0 20px 0;
    `,
    TitleBox: styled.View`
        width:100%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
    `,
    Title: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size:20px;
        font-weight:bold;
        color:#1b2c49;
    `,
    MoreInfoBtn: styled.TouchableOpacity`
        width:auto;
        height:auto;
    `,
    MoreInfo: styled.Text`
        font-size:15px;
        font-weight:500;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    FriendWrap: styled.View`
        width:100%;
        height:225px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
    `,
}
/*
router.post("/:id/getSendList", getSendList);
router.post("/:id/getReceiveList", getReceiveList);

*/
const FriendManage = () => {    
    const [API] = useCallback(useAPI(), []);
    const [receivedFriends, setReceivedFriends] = useState([{"created_at": "2021-05-22T07:26:54.000Z", "dbId": 87, "id": "apple1111"}]);
    const [SendFriends, setSendFriends] = useState([{"created_at": "2021-05-22T07:26:54.000Z", "dbId": 87, "id": "apple1111"}]);
    useEffect(() => {
        const useEffectAsyncFunction = async () => {
          try {
            const result = await API.user.login({userId: "dl842685", password: "dl842685"});
            await AsyncStorage.setItem("@userToken", result[0]);
            await AsyncStorage.setItem("@accessToken", result[1]);    
            const token = await AsyncStorage.getItem("@userToken");
            const deCode = jwt_decode(token);
            const receiveList = await API.friend.getReceiveList({userId: deCode["cognito:username"]});
            setReceivedFriends(receiveList.data.result);
            const sendList = await API.friend.getSendList({userId: deCode["cognito:username"]});
            setSendFriends(sendList.data.result);
            } catch (err) {
            console.log(err);
          }
        };
        useEffectAsyncFunction();
      }, []);

    const styles = StyleSheet.create({
        Scroll: {
            display: "flex",
            justifyContent: "flex-start",
            height:hp(100)+20,
            alignItems: "center",
            flexDirection: "column",
            width: '100%',
            backgroundColor: "#fff"
        },

    });
    
    return (
        <ScrollView contentContainerStyle={styles.Scroll} showsVerticalScrollIndicator= {false}>
            {/* <Styled.background> */}
                <Header title="친구관리" />
                <Styled.FriendManageWrap>
                    <Styled.TitleBox>
                        <Styled.Title>받은 요청</Styled.Title>
                        <Styled.MoreInfoBtn>
                            <Styled.MoreInfo>더보기</Styled.MoreInfo>
                        </Styled.MoreInfoBtn>
                    </Styled.TitleBox>
                    <Styled.FriendWrap>
                        {receivedFriends.map((v) => {
                            return (
                                <Friend_Manage_add friend={v} />
                            )
                        })}
                    </Styled.FriendWrap>
                </Styled.FriendManageWrap>
                <Styled.FriendManageWrap>
                    <Styled.TitleBox>
                        <Styled.Title>대기 중인 요청</Styled.Title>
                        <Styled.MoreInfoBtn>
                            <Styled.MoreInfo>더보기</Styled.MoreInfo>
                        </Styled.MoreInfoBtn>
                    </Styled.TitleBox>
                    <Styled.FriendWrap>
                        {SendFriends.map((v) => {
                            return (
                                <Friend_Manage_send friend={v} />
                            )
                        })}
                    </Styled.FriendWrap>
                </Styled.FriendManageWrap>
            {/* </Styled.background> */}
        </ScrollView>
    )
}
export default FriendManage