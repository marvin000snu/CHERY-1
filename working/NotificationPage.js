import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import SettingHeader from "./components/Setting/SettingHeader"
import NotiOne from "./Atom/NotiOne"
import {ScrollView} from "react-native"
import jwt_decode from "jwt-decode";
import useAPI from "../src/hooks/useAPI";

//아래와 같은 형태로 공지사항을 fetch 하면 될 것 같습니다
//실제 설정은 setNotiInfo() 함수를 이용하시면 됩니다
 let Noti_Info = [{
    title: "title",
    body: "body",
    time: "2021-05-18T04:38:01.000Z"
    },
];
const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
        background-color:#F0F2F7;
    `,
    Section: styled.View`
        width:100%;
        height:auto;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction: column;
        margin-top:10px;
        margin-bottom:15px;
    `,
    Btn:styled.TouchableOpacity`
        width:100px;
        height:100px;
        margin-top:10px;
    `,
}


const NotificationPage = () => {
    const [API] = useCallback(useAPI(), []);
    const [notiInfo, setNotiInfo] = useState(Noti_Info)
    useEffect(() => {
        const useEffectAsyncFunction = async () => {
            try {
//                const token = await AsyncStorage.getItem("@userToken");
//                const deCode = jwt_decode(token);
            const params = {
                userId: "dl842685",
                body: {
                },
              };
            const Noti_Infos = await API.info.getNotification(params);
            setNotiInfo(Noti_Infos.data["noti"])
        } catch (err) {
          //console.log(err);
        }
    }
    useEffectAsyncFunction();
      }, []);
let Notis = notiInfo.map((v, idx) => {
    return <NotiOne info = {v}/>
})
return (
        <Styled.background>
            <SettingHeader text="공지사항" /> 
            <ScrollView style={{width: "100%"}} showsVerticalScrollIndicator= {false}>
            {Notis}
            </ScrollView>
        </Styled.background>
    )
}
export default React.memo(NotificationPage)