import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import { View, ScrollView, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import Pencil from "./img/Pencil";
import Investigate from "./img/Investigate";
import OpenedBook from "./img/OpenedBook";

import { HomeMenu } from "./Molecules/HomeMenu";
import { Dday } from "./Molecules/Dday";
import { StudyStatus } from "./Molecules/StudyStatus";
import { Upper } from "./Molecules/Upper";
import HomeUserBanner from "./Molecules/HomeUserBanner";
import HomeMyMenu from "./HomeMyMenu";
import Drawer from "react-native-drawer";
import moment from "moment";
import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import Modal from "react-native-modal";
import Tutorial from "./components/Tutorial"

const Styled = {
  background: styled.View`
  width: ${wp(100)}px;
  height: ${hp(100)}px;
  background-color: white;
  padding-bottom:100px;
  `,
  body: styled.View`
    margin-top: ${hp(2)};
    width: ${wp(100)}px;
    flex: 1;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
  `,
};

const HomePage = (props) => {
  const navigation = props.navigation;
  const menuImg = [Pencil, OpenedBook, Investigate];
  const menuTitle = ["학습하기", "이어풀기", "문항분석"];
  const date = -parseInt(moment.duration(moment().diff(moment("2021-09-03"))).asDays()); //DDay 남은 날짜입니다.
  const Ment = "학습하러 가볼까요?";
  const [userInfo, setUserInfo] = useState({school:"", name: "", data: { grade1: 0, grade2: 0, grade3: 0, kice: 0, swa: 0 } });
  const [homepageInfo, setHomepageInfo] = useState({});
  const [API] = useCallback(useAPI(), []);
  const [tutorial, setTutorial] = useState(false);
  const [alarmInfos, setAlarmInfos] = useState([{"alarm_at": "2021-05-23T18:56:06.000Z", "fri": 0, "info": "매일 학습풀시간", "mon": 1, "onoff": 1, "sat": 0, "sun": 0, "thu": 0, "tue": 1, "wed": 0}])

  useEffect(() => {
    asyncFunction = async () => {
      try {
        const result = await API.user.login({userId: "dl842685", password: "dl842685"});
        await AsyncStorage.setItem("@openTutorial", "true");
        const tuto = await AsyncStorage.getItem("@openTutorial");
        if(tuto === "true")
          setTutorial(true);
        await AsyncStorage.setItem("@userToken", result[0]);
        await AsyncStorage.setItem("@accessToken", result[1]);
        const userToken = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(userToken);
        const params = {
          userId: deCode["cognito:username"],
        };
        const { data: homepageData } = await API.daily.getHomePageInfo(params);
        setHomepageInfo(homepageData);
        const { data } = await API.progress.progressinfo(params);
        setUserInfo({
          school: deCode["custom:school"],
          name: deCode.name,
          data: data,
        });
        const getAlarm = await API.info.getAlarmInfo(params);
        setAlarmInfos(getAlarm.data.result);
      } catch (err) {
        alert("ERR12");
        console.log(err);
      } finally {
      }
    };
    asyncFunction();
  }, []);
  const drawerStyles = {
    drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 8 },
    main: { paddingLeft: 3 },
  };
  const [isOpened, setIsOpened] = useState(false);
  const onOpen = () => {
    setIsOpened(true);
  };
  const onClose = () => {
    setIsOpened(false);
  };
  const closeHandler = () => {
    setTutorial(false);
  };

  const styles = StyleSheet.create({

    Scroll: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        width: '100%',
        backgroundColor: "#fff",
    },

});
  return (
    <Drawer
      type="overlay"
      content={<HomeMyMenu onClose={onClose} userName={userInfo.name} userSchool={userInfo.school} chery={homepageInfo.cheryNum} membership="프렌즈" level={0} navigation={props.navigation} icon = {homepageInfo.icon} alarmInfos = {alarmInfos} setAlarmInfos = {setAlarmInfos} />}
      tapToClose={true}
      openDrawerOffset={0.1} // 20% gap on the right side of drawer
      styles={drawerStyles}
      panCloseMask={0.2}
      closedDrawerOffset={0} //숨겨져있을 때 튀어나오는 정도
      open={isOpened}
      side="right"
      onClose={onClose}
      tweenHandler={(ratio) => ({
        main: { opacity: (2 - ratio) / 2 },
        mainOverlay: {
          opacity: ratio,
          backgroundColor: "black",
        },
      })}
    >
      <Styled.background>
        <Upper onOpen={onOpen} onClose={onClose} />
        <ScrollView showsVerticalScrollIndicator= {false} contentContainerStyle={styles.Scroll}>
        <Styled.body>
          <HomeUserBanner username={userInfo.name} ment={Ment} iconType={homepageInfo.icon} level={1} />
            <HomeMenu img={menuImg} title={menuTitle} navigation={navigation} />
            <Dday month="9월 모의고사" dday={date} />
            <StudyStatus data={userInfo.data} navigation={navigation} allNum={homepageInfo.solveAllNumNum} weekNum={homepageInfo.solvedWeekNum} studyTime={homepageInfo.studyTime} direct={true} />
          </Styled.body>
        </ScrollView>
        <View id="bottom" />
      </Styled.background>
      <Modal isVisible={tutorial} onBackdropPress={closeHandler} style={{ margin: 0, padding: 0 }}>
      <Tutorial closeHandler = {closeHandler} setTutorial = {setTutorial}/>
    </Modal>

    </Drawer>
  );
};

export default HomePage;
