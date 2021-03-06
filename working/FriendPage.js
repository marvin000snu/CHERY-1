import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import FriendHeader from "./components/Friend/FriendHeader";
import Search from "./components/Friend/Search";
import FriendSetting from "./components/Friend/FriendSetting";
import AddFriend from "./components/Friend/AddFriend";
import FriendListScroll from "./components/Friend/FriendListScroll";
import Modal from "react-native-modal";
import FriendAdd from "../working/FriendAdd";
import Event from "./svg/Event";
import Next from "./svg/Next";
import { ScrollView, StyleSheet } from "react-native";
import jwt_decode from "jwt-decode";
import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Styled = {
  background: styled.View`
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    background-color: #fff;
    padding-bottom: 85px;
  `,
  Section: styled.View`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  Slider: styled.TouchableOpacity`
    width: 100%;
    height: 240px;
    background-color: #ffe554;
  `,
  TitleWrap: styled.View`
    width: 90%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 20px 0 20px 0;
  `,
  Title: styled.Text`
    font-size: 20px;
    font-weight: bold;
    font-family: NotoSansKR-Bold;
    color: #1b2c49;
  `,
  SlideWrap: styled.View`
    width: 90%;
    height: 125px;
    display: flex;
  `,
  AvatarWrap: styled.View`
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 0px 5px 0px 5px;
  `,
  AvatarBox: styled.View`
    width: 100px;
    height: 100px;
    border-radius: 5px;
    background-color: #f0f5fb;
  `,
  AvatarInfo: styled.Text`
    font-size: 11px;
    font-weight: 400;
    font-family: NotoSansKR-Bold;
    color: #1b2c49;
  `,
};
const styles = StyleSheet.create({
  Scroll: {
    display: "flex",
    justifyContent: "flex-start",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    width: "120%",
    backgroundColor: "#fff",
  },
});
const FriendPage = () => {
  const [API] = useCallback(useAPI(), []);
  const [SearchText, setSearchText] = useState("");
  const [originalFriendList, setOriginalFriendList] = useState([{ name: "?????????", icon: 1, msg: "????????? ?????? ??????! ?????? ??????, ??? ?????? ??????, ????????? ??????" }]);
  const [Friend, setFriend] = useState([{ name: "?????????", icon: 1, msg: "?????? ???????????????" }]);
  const [SelectHeaderBtn, setSelectHeaderBtn] = useState(0);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [AvatarList, setAvatarList] = useState(["????????? ?????????", "???????????? ?????????", "?????? ????????? ?????????", "???????????? ???????????????"]);
  const [modalType, setModalType] = useState(0)
  const [myName, setMyName] = useState("");
  // const [Frame, setFrame] = useState(["??? ?????????", "?????? ?????????", "??? ?????????", "?????? ?????????"]);
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = await jwt_decode(token);
        setMyName(deCode["name"]);
        const params = {
          userId: deCode["cognito:username"],
          body: {},
        };
        const { data } = await API.friend.getFriendList(params);
        if (!data.length)
          //empty list??? filter error???
          setOriginalFriendList(data["friendList"]);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    useEffectAsyncFunction();
  }, []);
  useEffect(() => {
    searchResult = originalFriendList.filter((v) => {
      return v.name.includes(SearchText);
    });
    setFriend(searchResult);
  }, [SearchText, originalFriendList]);
  // ????????? ?????? ???????????????
  const openModalHandler = () => {
    setAddModalVisible(true);
    setModalType(0);
  };
  const openSettingModalHandler = () => {
    setAddModalVisible(true);
    setModalType(1);
  };
  const backHandler = () => {
    setAddModalVisible(false);
  };
  return (
    <Styled.background>
      <Modal style={{ margin: 0, padding: 0 }} isVisible={addModalVisible}>
        {modalType === 0 ? <FriendAdd backHandler={backHandler} /> : <FriendManage backHandler={backHandler} />}
      </Modal>
      <Styled.Section>
        <FriendHeader SelectHeaderBtn={SelectHeaderBtn} setSelectHeaderBtn={setSelectHeaderBtn} />

        {SelectHeaderBtn === 0 ? (
          <>
            <Search SearchText={SearchText} setSearchText={setSearchText} />
            <FriendSetting name={myName} />
            <AddFriend openModalHandler={openModalHandler} />
            <FriendListScroll Friend={Friend} />
          </>
        ) : (
          <>
            <Styled.Slider>
              <Event />
            </Styled.Slider>
            <Styled.TitleWrap>
              <Styled.Title>????????? ?????????</Styled.Title>
              <Next />
            </Styled.TitleWrap>
            <Styled.SlideWrap>
              <ScrollView contentContainerStyle={styles.Scroll} showsVerticalScrollIndicator= {false}>
                {AvatarList.map((v) => {
                  return (
                    <Styled.AvatarWrap>
                      <Styled.AvatarBox></Styled.AvatarBox>
                      <Styled.AvatarInfo>{v}</Styled.AvatarInfo>
                    </Styled.AvatarWrap>
                  );
                })}
              </ScrollView>
            </Styled.SlideWrap>
            <Styled.TitleWrap>
              <Styled.Title>????????? ?????? ????????? ?????????</Styled.Title>
              <Next />
            </Styled.TitleWrap>
            <Styled.SlideWrap>
              <ScrollView contentContainerStyle={styles.Scroll} showsVerticalScrollIndicator= {false}>
                {AvatarList.map((v) => {
                  return (
                    <Styled.AvatarWrap>
                      <Styled.AvatarBox></Styled.AvatarBox>
                      <Styled.AvatarInfo>{v}</Styled.AvatarInfo>
                    </Styled.AvatarWrap>
                  );
                })}
              </ScrollView>
            </Styled.SlideWrap>
          </>
        )}
      </Styled.Section>
    </Styled.background>
  );
};
export default FriendPage;
