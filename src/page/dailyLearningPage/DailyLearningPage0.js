import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import styled from "styled-components";
import { State } from "react-native-gesture-handler";
import moment from "moment";
import { useSharedValue, withSpring, withTiming, useAnimatedStyle } from "react-native-reanimated";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, View, StyleSheet, Text, Image } from "react-native";
import useAPI from "../../hooks/useAPI";
import { useFonts } from "@use-expo/font";
import GlobalStyled from "../../style/GlobalStyled";
import { CardSet } from "../../components/Organisms/cardSet";
import { setCustomText } from "react-native-global-props";
import messaging from "@react-native-firebase/messaging";
import { useFocusEffect } from "@react-navigation/native";
import HomeBackGround from "../../images/iconSvg/homeBackGround";
import LinearGradient from "react-native-linear-gradient";
import MainIcon from "../../images/iconSvg/MainIcon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeDaily from "../../page/HomePage/homedaily";
import HomeWeak from "../../page/HomePage/homeweak";
import HomeSearch from "../../page/HomePage/homesearch";
import HomeMake from "../../page/HomePage/homemake";
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
  plz: require("../../assets/eHuUMAua8YbPQSdv9tN6m8q8IIg.ttf"),
};

const customTextInputProps = {
  style: {
    color: "#1B2C49",
  },
};
const dayIndex = moment().day() === 0 ? 6 : moment().day() - 1;
setCustomText(customTextInputProps);

const snapPoints = [0, 1, 2, 3, 4, 5, 6, 7].map((v) => {
  return -v * wp(18) + 3.5 * wp(18);
});

const DailyLearningPage0 = ({ navigation }) => {
  const scrollRef = useRef();
  const [API] = useCallback(useAPI(), []);
  const [searchCode, setSearchCode] = useState("");
  const [userName, setUserName] = useState("");
  const [realName, setRealName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [cheryLevel, setCheryLevel] = useState(0);
  const [selectCard, setSelectCard] = useState(0);
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
  const [infos, setInfos] = useState([]);
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
      setUserName(deCode["cognito:username"]);
      setRealName(deCode["name"]);
      setSchoolName(deCode["custom:school"])
      
      const fcmToken = await messaging().getToken();
      const params = {
        userId: deCode["cognito:username"],
        body: {
          token: String(fcmToken),
        },
      };
      await API.push.upDateToken(params);
      const { data } = await API.friend.makeFeed(params);
      setInfos(data.feedList);
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
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: sharedVal.value }],
    };
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      resizeMode: "cover",
      justifyContent: "center",
      opacity: 1,
      flex: 1,
      borderBottomLeftRadius: 25,
    },
    image2: {
      resizeMode: "cover",
      justifyContent: "center",
      opacity: 1,
      flex: 1,
      borderBottomLeftRadius: 25,
    },
  });

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
    cheryIcon = <Image source={require("../../images/icon/cheryLevel0.png")}></Image>;
    text = "체리 씨앗";
  } else if (cheryLevel === 1) {
    cheryIcon = <Image source={require("../../images/icon/cheryLevel1.png")}></Image>;
    text = "체리 새싹";
  } else if (cheryLevel === 2) {
    cheryIcon = <Image source={require("../../images/icon/cheryLevel2.png")}></Image>;
    text = "체리 꽃";
  } else if (cheryLevel === 3) {
    cheryIcon = <Image source={require("../../images/icon/cheryLevel3.png")}></Image>;
    text = "체리 열매";
  } else if (cheryLevel === 4) {
    cheryIcon = <Image source={require("../../images/icon/cheryLevel4.png")}></Image>;
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
            showsHorizontalScrollIndicator= {false}
            pagingEnabled
            ref={scrollRef}
            scrollEnabled={false}
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

export { DailyLearningPage0 };
