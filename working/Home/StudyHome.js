import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import styled from "styled-components";
import moment from "moment";
import { useSharedValue } from "react-native-reanimated";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, View, Text, Image } from "react-native";
import useAPI from "../../src/hooks/useAPI";
import { useFonts } from "@use-expo/font";
import GlobalStyled from "../../src/style/GlobalStyled";
import { CardSet } from "../../src/components/Organisms/cardSet";
import { setCustomText } from "react-native-global-props";
import messaging from "@react-native-firebase/messaging";
import { useFocusEffect } from "@react-navigation/native";
import HomeBackGround from "../../src/images/iconSvg/homeBackGround";
import LinearGradient from "react-native-linear-gradient";
import MainIcon from "../../src/images/iconSvg/MainIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeDaily from "../../src/page/HomePage/homedaily"; //밑에 친구 
import HomeWeak from "../../src/page/HomePage/homeweak"; //header 같이 생김
import HomeSearch from "../../src/page/HomePage/homesearch";
import HomeMake from "../../src/page/HomePage/homemake";

const Styled = {
  body: styled.View`
    width: 100%;
    margin-top: ${0}px;
    height: ${hp(100) - 70}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f0f2f7;
  `,
  section: styled.View`
    height: ${hp(100) - 80}px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
};

const customFonts = {
  plz: require("../..//src/assets/eHuUMAua8YbPQSdv9tN6m8q8IIg.ttf"),
};

const customTextInputProps = {
  style: {
    color: "#1B2C49",
  },
};
const dayIndex = moment().day() === 0 ? 6 : moment().day() - 1;
setCustomText(customTextInputProps);


const StudyHome = ({ navigation }) => {
  const scrollRef = useRef();
  const [API] = useCallback(useAPI(), []);
  const [userName, setUserName] = useState("");
  const [realName, setRealName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [cheryLevel, setCheryLevel] = useState(0);
  const [state, setState] = useState(0);

  useFocusEffect(
    useCallback(() => {
      useEffectAsyncFunction();
      return ()=>{}
    }, [])
  );
  const [homePageInfo, setHomePageInfo] = useState({
    daily: { 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} },
    weak: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [] },
    search: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [] },
    weakType: [],
    wrongProblemWeak: [],
    wrongProblem: [],
    frequentSearch: [],
  });
  async function requestUserPermission() {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
      }
    } catch (err) {}
  }



  const useEffectAsyncFunction = async () => {
    try {
      const token = await AsyncStorage.getItem("@userToken");
      const deCode = jwt_decode(token);
      requestUserPermission();
      setUserName("dl842680");
      setRealName("이태원");
      setSchoolName("가좌고");
      
      const fcmToken = await messaging().getToken();
      const params = {
        userId: deCode["dl842680"],
        body: {
          token: String(fcmToken),
        },
      };
      await API.push.upDateToken(params);
      const { data } = await API.friend.makeFeed(params);
      const result = await API.info.getCheryLevel(params);
      const { data: homePageInfo1 } = await API.daily.getHomePageInfo(params);
      setHomePageInfo(homePageInfo1);
      setCheryLevel(result.data.level);
    } catch (err) {
      console.log(err);
    }
  };
  const [select, setSelect] = useState(7);
  const sharedVal = useSharedValue(-3.5 * wp(18));
  useEffect(() => { }, [select]);
  const [isLoaded] = useFonts(customFonts);
  
  if (!isLoaded) {
    return <View></View>;
  }
  var dateList = [];
  var monthList = [];
  var dayList = [];
  for (var i = 0; i < 8; i++) {
    monthList.push(
      moment()
        .subtract(-i + 7, "dat")
        .format("MM")
    );
    dateList.push(
      ["일", "월", "화", "수", "목", "금", "토"][
        moment()
          .subtract(-i + 7, "day")
          .weekday()
      ]
    );
    dayList.push(
      moment()
        .subtract(-i + 7, "day")
        .format("DD")
    );
  }

  if (cheryLevel === 0) {
    cheryIcon = <Image source={require("../../src/images/icon/cheryLevel0.png")}></Image>;
    text = "체리 씨앗";
  } else if (cheryLevel === 1) {
    cheryIcon = <Image source={require("../../src/images/icon/cheryLevel1.png")}></Image>;
    text = "체리 새싹";
  } else if (cheryLevel === 2) {
    cheryIcon = <Image source={require("../../src/images/icon/cheryLevel2.png")}></Image>;
    text = "체리 꽃";
  } else if (cheryLevel === 3) {
    cheryIcon = <Image source={require("../../src/images/icon/cheryLevel3.png")}></Image>;
    text = "체리 열매";
  } else if (cheryLevel === 4) {
    cheryIcon = <Image source={require("../../src/images/icon/cheryLevel4.png")}></Image>;
    text = "체리 나무";
  }
  const scrollHandler = (i) => {
    scrollRef.current.scrollTo({ x: wp(100) * i, y: 0, animated: true });
  };

  return (
    <Styled.body>
      <Styled.section>
        <LinearGradient
          colors={["#A687FF", "#6F87FF"]}
          style={{
            height: hp(17) + 170,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 25,
            justifyContent: "flex-start",
          }}
        >
          <GlobalStyled.ViewCol justifyContent="flex-start" width="100%" height="100%">
            <HomeBackGround size={wp(100)} />
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol style={{ position: "absolute" }} justifyContent="flex-start">
            <GlobalStyled.ViewRow height="70px" style={{ marginTop: 60, marginBottom:20 }}>
              <GlobalStyled.ViewRow width="70" style={{ marginLeft: wp(7.5) }}>
                <GlobalStyled.ViewRow
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    backgroundColor: "white",
                  }}
                >
                  <MainIcon size={70} type={homePageInfo.icon} />
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewRow>
              <GlobalStyled.ViewRow style={{ flex: 1, marginLeft: 20}}>
                <Text
                  style={{
                    marginLeft: 0,
                    color: "white",
                    fontSize: 25,
                    fontFamily: "NotoSansKR-Bold",
                    width: "100%",
                    textAlign: "left",
                  }}
                >
                  {homePageInfo.name} 님
                  <Text
                    style={{
                      marginLeft: 20,
                      flex: 1,
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    {"\n"}테스터 | {schoolName}
                  </Text>
                </Text>
              </GlobalStyled.ViewRow>
            </GlobalStyled.ViewRow>
            <CardSet 
              realName={realName} 
              select={select} 
              homePageInfo={homePageInfo} 
              navigation={navigation} 
              scrollHandler={scrollHandler} 
              userName={userName} 
              state={state} 
              setState={setState} 
            />
          </GlobalStyled.ViewCol>
        </LinearGradient>
        <GlobalStyled.ViewCol style={{ width: wp(100) }}>
          <ScrollView
            horizontal={true}
            style={{ width: wp(100), height: hp(83) - 260 }}
            contentContainerStyle={{
              height: hp(83) - 260,
              width: wp(400),
              flexDirection: "row",
            }}
            pagingEnabled
            ref={scrollRef}
            scrollEnabled={false}
            showsHorizontalScrollIndicator= {false}
          >
            <HomeDaily dayIndex={dayIndex} realName={realName} navigation={navigation} userName={userName} state={state}></HomeDaily>
            <HomeWeak
              state={state}
              userName={userName}
              navigation={navigation}
            ></HomeWeak>
            <HomeSearch frequentSearch={homePageInfo.frequentSearch} wrongProblemWeak={homePageInfo.wrongProblemWeak} wrongProblem={homePageInfo.wrongProblem} navigation={navigation} realName={realName}></HomeSearch>
            <HomeMake userName={userName} navigation={navigation} state={state}></HomeMake>
          </ScrollView>
        </GlobalStyled.ViewCol>
      </Styled.section>
    
    </Styled.body>
  );
};

export { StudyHome };
