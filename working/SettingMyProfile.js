import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import SettingHeader from "./components/Setting/SettingHeader";
import SettingInput from "./components/Setting/atom/SettingInput";
import SettingGrade from "./components/Setting/SettingGrade";
import ChangePW from "./components/Setting/atom/ChangePW";
import BadgedIcon from "./svg/BadgedIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import ChangeIcon from "./ChangeIcon.js";
import jwt_decode from "jwt-decode";
import useAPI from "../src/hooks/useAPI";

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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    background-color: #fff;
  `,
  ProfileImgWrap: styled.View`
    width: 100%;
    height: 257px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 15px 0 15px 0;
  `,
  MemberInfoWrap: styled.View`
    width: 90%;
    height: 273px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  `,
  Title: styled.Text`
    font-size: 16px;
    font-weight: bold;
    font-family: NotoSansKR-Bold;
    color: #1b2c49;
    margin-top: 20px;
  `,
  ApplicationBtn: styled.TouchableOpacity`
    width: 140px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 22px;
    border: 1px solid #5471ff;
    margin-top: 70px;
  `,
  ApplicationBtnText: styled.Text`
    font-size: 18px;
    font-weight: 500;
    font-family: NotoSansKR-Bold;
    color: #5471ff;
  `,
  ProfileImage: styled.TouchableOpacity`
    width: 72px;
    height: 72px;
    border-radius: 72px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
  `,
};

const SettingMyProfile = (props) => {
  const [GradeList, setGradeList] = useState(["예비고1", "1학년", "2학년", "3학년", "N수생"]);
  const [Grade, setGrade] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [school, setSchool] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [iconNo, setIconNo] = useState(6);
  const [API] = useCallback(useAPI(), []);
  const { navigation } = props;

  const Apply = async () => {
    try {
      if (!(Grade && name && message && school && iconNo)) throw new Error("not fulfilled");
      //token이 없을지 어떻게 할지 처리
      const accessToken = await AsyncStorage.getItem("@accessToken");
      const userId = jwt_decode(accessToken)["username"];

      //학년, 학교, 메세지 변경
      const editSettingInfoResult  = await API.info.editSettingInfo({
        userId: userId,
        body: { grade: Grade, name: name, school: school, msg: message },
      });
      console.log(editSettingInfoResult.data)
      //아이콘 변경
      const { editIconResult } = await API.info.editIcon({
        userId: userId,
        body: { icon: iconNo },
      });

      //이름 변경
      const cogNameChangeParams = [{ name: "name", value: name }];
      const cogNameChangeResult = await API.user.updateAttribute(cogNameChangeParams, accessToken);
      const sqlNameParams = { userId: userId, body: { full_name: name } };
      const { editFullNameResult } = await API.info.editFullName(sqlNameParams);
      alert("!")
      //결과 Print
    } catch (err) {
      if (err.message === "not fulfilled") alert("정보를 모두 채워주세요");
      console.error("err,", err);
      alert("!")
    }
  };
  const openHandler = () => {
    setModalVisible(true);
  };
  const closeHandler = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        //여기는 지워도 됨
        const result = await API.user.login({ userId: "dl842685", password: "dl842685" });
        await AsyncStorage.setItem("@userToken", result[0]);
        await AsyncStorage.setItem("@accessToken", result[1]);
        // 이후 지워도 됨

        const accessToken = await AsyncStorage.getItem("@accessToken");
        const deCode = jwt_decode(accessToken);
        const params = {
          userId: deCode["username"],
          body: {},
        };
        const { data } = await API.info.getSettingInfo(params);
        setName(data.userInfo["name"]);
        setGrade(data.userInfo["grade"]);
        setSchool(data.userInfo["school"]);
        setIconNo(data.userInfo["icon"]);
        setMessage(data.userInfo["chery_msg"]);
      } catch (err) {
        console.log(err);
      }
    };
    useEffectAsyncFunction();
  }, []);

  return (
    <Styled.background>
      <SettingHeader text="개인정보 수정" />
      <Styled.Section>
        <Styled.ProfileImgWrap>
          <Styled.ProfileImage onPress={openHandler}>
            <BadgedIcon iconType={iconNo} />
          </Styled.ProfileImage>
          <SettingInput title="이름" placeholder="김도은" data={name} setData={setName} />
          <SettingInput title="상태메시지" placeholder="상태메세지를 입력해주세요." data={message} setData={setMessage} />
        </Styled.ProfileImgWrap>
      </Styled.Section>
      <Styled.Section>
        <Styled.MemberInfoWrap>
          <Styled.Title>회원정보</Styled.Title>
          <SettingInput title="학교" placeholder="송림고등학교" style={{ marginTop: 10 }} width="100" data={school} setData={setSchool} />
          <SettingGrade title="학년" style={{ marginTop: 10 }} width="100" Grade={GradeList} color={Grade} setColor={setGrade} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Setting_PW_Change");
            }}
            style={{ width: "100%" }}
          >
            <ChangePW title="비밀번호 변경" width="100" style={{ marginTop: 10 }} />
          </TouchableOpacity>
        </Styled.MemberInfoWrap>
      </Styled.Section>
      <Styled.ApplicationBtn onPress={Apply}>
        <Styled.ApplicationBtnText>적용하기</Styled.ApplicationBtnText>
      </Styled.ApplicationBtn>
      <Modal isVisible={modalVisible} onBackdropPress={closeHandler} backdropOpacity={0.5} style={{ margin: 0, padding: 0 }} animationType="slide">
        <ChangeIcon setIconNo={setIconNo} setModalVisible={setModalVisible} />
      </Modal>
    </Styled.background>
  );
};
export default SettingMyProfile;
