import React, { useCallback } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import SettingHeader from "./components/Setting/SettingHeader";
import SettingSelect from "./components/Setting/SettingSelect";
import useAPI from "../src/hooks/useAPI"
import AsyncStorage from "@react-native-async-storage/async-storage"
const Styled = {
  background: styled.View`
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f0f2f7;
  `,
  Section: styled.View`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 15px;
  `,
  Btn: styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    margin-top: 10px;
  `,
};
const Setting = (props) => {
  const { navigation } = props;
  const [API] = useCallback(useAPI(), []);
  const SettingList1 = ["개인정보 수정", "오류 제보", "공지사항"];
  const pressList1 = [
    () => {
      navigation.navigate("SettingMyProfile");
    },
    () => {
      alert("오류제보는\ncontact@mise.team\n으로 해주세요.")
    },
    () => {
      navigation.navigate("NotificationPage");
    },
  ];
  const SettingList2 = ["비밀번호 변경", "로그아웃"];
  const pressList2 = [
    () => {
      navigation.navigate("Setting_PW_Change");
    },
    async () => {
      try {
        await API.user.logout();
        //저장된게 암것도 없으면 오류 뜨기도 함
        await AsyncStorage.clear();
        navigation.navigate("beforeLogin", { screen: "login" });
      } catch (err) {
        console.log(err);
      }
    },
  ];
  const SettingList3 = ["회원탈퇴"];
  const pressList3 = [
    () => {
      navigation.navigate("Membership_Withdrawal");
    },
  ];
  return (
    <Styled.background>
      <SettingHeader text="설정" />
      <Styled.Section>
        {SettingList1.map((v, idx) => {
          return <SettingSelect text={v} pressHandler={pressList1[idx]} />;
        })}
      </Styled.Section>
      <Styled.Section>
        {SettingList2.map((v, idx) => {
          return <SettingSelect text={v} pressHandler={pressList2[idx]} />;
        })}
      </Styled.Section>
      <Styled.Section>
        {SettingList3.map((v, idx) => {
          return <SettingSelect text={v} pressHandler={pressList3[idx]} />;
        })}
      </Styled.Section>
    </Styled.background>
  );
};
export default Setting;
