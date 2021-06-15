import React, { useState, useRef, useCallback } from "react";
import GlobalStyled from "../../style/GlobalStyled";
import { Text, View, ScrollView, TouchableOpacity as TO, Animated as RNAnimated, TextInput } from "react-native";
import { PanGestureHandler, State, TouchableOpacity } from "react-native-gesture-handler";
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// import CardFlip from "react-native-card-flip";
// import CheryRank from "../../images/iconSvg/cheryRank";
// import SolveProblemRank from "../../images/iconSvg/solveProblemRank";
// import TimeRank from "../../images/iconSvg/timeRank";
// import DailyEmpty from "../../images/iconSvg/dailyEmpty";
// import DailyNotSolve from "../../images/iconSvg/DailyNotSolve";
// import WeakEmpty from "../../images/iconSvg/WeakEmpty";
// import SearchEmpty from "../../images/iconSvg/SearchEmpty";
import moment from "moment";
import SearchLense from "../../images/iconSvg/SearchLense";
import { RFValue } from "react-native-responsive-fontsize";
import Carousel, { Pagination } from "react-native-snap-carousel";
import useAPI from "../../hooks/useAPI";
import { useFocusEffect } from "@react-navigation/native";
const CardSet = (props) => {
  const [API] = useCallback(useAPI(), []);
  translateX = new RNAnimated.Value(wp(37.5));
  const translateXRef = useRef(translateX).current;
  translateY = new RNAnimated.Value(0);
  lastOffset = { x: wp(37.5), y: 0 };
  const [searchCode, setSearchCode] = useState("");
  handleGesture = RNAnimated.event([{ nativeEvent: { translationX: translateX, translationY: translateY } }], { useNativeDriver: true });
  // alert("100")
  // const cardOffset = useSharedValue(wp(37.5));
  // const cardRotate = useSharedValue(0);
  // const progress = props.progress;
  const homePageInfo = props.homePageInfo;
  const select = props.select;
  const navigation = props.navigation;
  const scrollHandler = props.scrollHandler;
  const userName = props.userName;
  const realName = props.realName;
  const state = props.state;
  const setState = props.setState;
  // const CarouselRef = useRef(null);

  // useFocusEffect(
  //   useCallback(() => {
  //     return () => {
  //       // setSelectCard(0);
  //       // scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
  //       CarouselRef.current.snapToItem (1, true,false)
  //     };
  //   }, [])
  // );
  const TextInputRef = useRef();

  const searchBtnHandler = async () => {
    try {
      const params = {
        userId: userName,
        code: searchCode,
        body: {},
      };
      const result = await API.search.isValid(params);
      const valid = result.data.result;
      if (valid === 1) {
        const result = await API.search.getSearchInfo(params);
        navigation.navigate("AfterLoginGradeSolve", {
          screen: "QuestionAnalysisStack",
          params: {
            screen: "QuestionAnalysis8",
            params: {
              result: result.data,
              searchCode:searchCode
            },
          },
        });
      } else {
        alert("유효하지 않은 문항코드입니다.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  renderItem = ({ item, index }) => {
    const daily = Object.values(homePageInfo.daily)[select] ? Object.values(homePageInfo.daily)[select] : { is_graded: "" };
    const weak = Object.values(homePageInfo.weak)[select] ? Object.values(homePageInfo.weak)[select] : [];
    const search = Object.values(homePageInfo.search)[select] ? Object.values(homePageInfo.search)[select] : [];

    if (index === 0) {
      return (
        <GlobalStyled.ViewCol
          style={{
            backgroundColor: "#E6EBFF",
            height: hp(16),
            borderRadius: 15,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <GlobalStyled.ViewCol
            height="30px"
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
            width="auto"
          >
            <Text style={{ marginHorizontal: 10 }}>6월 모의고사 D{parseInt(moment.duration(moment().diff(moment("2021-06-03"))).asDays())}</Text>
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol height="30%" style={{}}>
            <Text
              style={{
                fontSize: RFValue(19),
                width: "100%",
                marginLeft: 30,
                textAlign: "left",
                fontFamily: "NotoSansKR-Bold",
              }}
            >
              {item.name}
            </Text>
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol height="40%" style={{}}>
            <Text
              style={{
                fontSize: RFValue(13),
                width: "100%",
                textAlign: "left",
                fontFamily: "NotoSansKR-Regular",
                marginLeft: 30,
                redHeight: 25,
              }}
            >
              인공지능이 오답데이터를 바탕으로
              <Text
                style={{
                  fontSize: RFValue(13),
                  width: "100%",
                  fontFamily: "NotoSansKR-Bold",
                  lineHeight: 25,
                }}
              >
                {" "}
                매일매일 {"\n"}나에게 가장 필요한 7문항을{" "}
              </Text>
              추천합니다.
            </Text>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      );
    } else if (index === 2) {
      return (
        <GlobalStyled.ViewCol
          style={{
            height: hp(16),
            borderRadius: 15,
          }}
        >
          <GlobalStyled.ViewCol
            height="60%"
            style={{
              backgroundColor: "#E6EBFF",
              borderRadius: 15,
              justifyContent: "flex-start",
            }}
          >
            <GlobalStyled.ViewCol height="50%" style={{}}>
              <Text
                style={{
                  fontSize: RFValue(19),
                  width: "100%",
                  marginLeft: 30,
                  textAlign: "left",
                  fontFamily: "NotoSansKR-Bold",
                }}
              >
                {item.name}
              </Text>
            </GlobalStyled.ViewCol>
            <GlobalStyled.ViewCol height="50%" style={{}}>
              <Text
                style={{
                  fontSize: RFValue(12),
                  width: "100%",
                  textAlign: "left",
                  fontFamily: "NotoSansKR-Regular",
                  marginLeft: 20,
                }}
              >
                문항의 자세한 해설을 볼 수 있습니다.{"\n"}문항돋보기가 {realName}님만의 자습서가 되어드릴게요.
              </Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol height="5%"></GlobalStyled.ViewCol>
          <GlobalStyled.ViewRow
            height="30%"
            style={{
              backgroundColor: "white",
              borderRadius: hp(2.7),
            }}
          >
            <TouchableOpacity onPress={searchBtnHandler}>
              <SearchLense size={40} style={{ marginLeft: 0 }}></SearchLense>
            </TouchableOpacity>
            <TextInput ref={TextInputRef} style={{ flex: 1, height: hp(5.4) }} value={searchCode} keyboardType="numeric" onChangeText={setSearchCode} placeholder="Ex) 190031130"></TextInput>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else {
      return (
        <GlobalStyled.ViewCol
          style={{
            backgroundColor: "#E6EBFF",
            height: hp(16),
            borderRadius: 15,
          }}
        >
          <GlobalStyled.ViewCol style={{ flex: 1, margin: 3 }} justifyContent="flex-start">
            <GlobalStyled.ViewCol height="30%" style={{}}>
              <Text
                style={{
                  fontSize: RFValue(19),
                  width: "100%",
                  marginLeft: 30,
                  textAlign: "left",
                  fontFamily: "NotoSansKR-Bold",
                }}
              >
                {item.name}
              </Text>
            </GlobalStyled.ViewCol>
            {(() => {
              if (index === 0) {
                2;
                return (
                  <GlobalStyled.ViewCol height="40%" style={{}}>
                    <Text
                      style={{
                        fontSize: RFValue(11),
                        width: "100%",
                        textAlign: "left",
                        fontFamily: "NotoSansKR-Regular",
                        marginLeft: 20,
                      }}
                    >
                      인공지능이 오답데이터를 바탕으로 매일매일 {"\n"} 나에게 가장 필요한 7문항을 추천합니다.
                    </Text>
                  </GlobalStyled.ViewCol>
                );
              } else if (index === 1) {
                return (
                  <GlobalStyled.ViewCol height="40%" justifyContent="flex-end" style={{}}>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        width: "100%",
                        textAlign: "left",
                        fontFamily: "NotoSansKR-Regular",
                        lineHeight: RFValue(12) + 10,
                        marginLeft: 30,
                      }}
                    >
                      내가{" "}
                      <Text
                        style={{
                          lineHeight: RFValue(13) + 10,
                          fontSize: RFValue(12),
                          fontFamily: "NotoSansKR-Bold",
                        }}
                      >
                        자주 틀렸던 유형을
                      </Text>{" "}
                      바탕으로
                      <Text
                        style={{
                          fontSize: RFValue(13),
                          lineHeight: RFValue(13) + 10,
                          fontFamily: "NotoSansKR-Bold",
                        }}
                      >
                        {"\n"}시험에 출제되면 틀릴만한
                      </Text>{" "}
                      약점문항을 추천합니다.
                    </Text>
                  </GlobalStyled.ViewCol>
                );
              } else if (index === 3) {
                return (
                  <GlobalStyled.ViewCol height="40%" justifyContent="flex-end" style={{}}>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        width: "100%",
                        textAlign: "left",
                        fontFamily: "NotoSansKR-Regular",
                        lineHeight: RFValue(13) + 10,
                        marginLeft: 30,
                      }}
                    >
                      <Text
                        style={{
                          lineHeight: RFValue(13) + 10,
                          fontSize: RFValue(13),
                          fontFamily: "NotoSansKR-Bold",
                        }}
                      >
                        자체 알고리즘을 이용하여
                      </Text>{" "}
                      {realName}님이 원하는 {"\n"}모든 종류의 시험지를 만들수 있어요.
                    </Text>
                  </GlobalStyled.ViewCol>
                );
              } else {
                return (
                  <GlobalStyled.ViewCol height="40%" style={{}}>
                    <Text
                      style={{
                        fontSize: RFValue(13),
                        width: "100%",
                        textAlign: "left",
                        fontFamily: "NotoSansKR-Regular",
                        marginLeft: 20,
                      }}
                    >
                      인공지능이 오답데이터를 바탕으로 매일매일 {"\n"}나에게 가장 필요한 5문항을 추천합니다.
                    </Text>
                  </GlobalStyled.ViewCol>
                );
              }
            })()}
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      );
    }
  };

  return (
    <View style={{ height: hp(17) +10, width: "100%", alignItems: "center", flexDirection: "column", display: "flex", justifyContent: "flex-start" }}>
      <Carousel
        // ref={CarouselRef}
        data={[{ name: "오늘의 문항" }, { name: "약점추천" }, { name: "문항 돋보기" }, { name: "AI 시험지" }]}
        renderItem={renderItem}
        sliderWidth={1400}
        itemWidth={wp(85)}
        onSnapToItem={(index) => {
          setState(index);
          scrollHandler(index);
          TextInputRef.current.blur();
        }}
      />
      <GlobalStyled.ViewRow style={{ height: 10, width: 70, justifyContent: "space-around", marginTop: hp(1) }}>
        <GlobalStyled.ViewRow style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 0 === state ? "black" : "white" }}></GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 1 === state ? "black" : "white" }}></GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 2 === state ? "black" : "white" }}></GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 3 === state ? "black" : "white" }}></GlobalStyled.ViewRow>
      </GlobalStyled.ViewRow>
    </View>
  );
};

export { CardSet };
