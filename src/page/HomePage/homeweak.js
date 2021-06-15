import GlobalStyled from "../../style/GlobalStyled";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import moment from "moment";
import React, { useCallback, useState, useEffect } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import useAPI from "../../hooks/useAPI";
import TypeIcon from "../../images/iconSvg/TypeIcon";
import TimeSmall from "../../images/iconSvg/TimeSmall";
import ProblemSmall from "../../images/iconSvg/ProblemSmall";
const HomeWeak = (props) => {
  const { userName, navigation, state } = props;
  const [API] = useCallback(useAPI(), []);
  const [weakInfos, setWeakInfos] = useState({ weakTypeArray: [], recentDailyQuery: [] });
  const typeMakeHandler = (i, num) => {
    navigation.navigate("LoadingPage1", {
      type: 2,
      weakType: 3,
      testName: moment().format("MM월DD일-") + i,
      problemType: i,
      num: num,
      direct: true,
    });
  };
  const dailyMakeHandler = (i) => {
    navigation.navigate("LoadingPage1", {
      type: 2,
      testName: moment(i).format("MM/DD매일학습의 약점추천"),
      weakType: 2,
      dailyName: i,
      direct: true,
    });
  };
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const params = {
          userId: userName,
        };
        const { data } = await API.weak.getWeakPageInfo(params);
        setWeakInfos(data);
      } catch (err) {
        alert(err);
      }
    };
    useEffectAsyncFunction();
  }, [state]);
  return (
    <GlobalStyled.ViewCol width={wp(100)} height="100%" style={{ justifyContent: "flex-start" }}>
      <ScrollView
        contentContainerStyle={{
          width: wp(100),
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
        }}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator= {false}
      >
        <GlobalStyled.ViewRow height="80px" justifyContent="flex-start" >
          <Text
            style={{
              textAlign: "left",
              fontSize: 20,
              fontFamily: "NotoSansCJKkr-Bold",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            취약 유형
            <Text
              style={{
                width: "100%",
                textAlign: "left",
                fontSize: 13,
                fontFamily: "NotoSansCJKkr-Regular",
              }}
            >
              {"\n"}
              {"유형별 뽀개기"}
            </Text>
          </Text>
          <GlobalStyled.ViewCol width="auto" height="25" style={{ backgroundColor: "#94A6FF", paddingHorizontal: 15, borderRadius: 5, marginTop: 2, marginLeft: 10 }}>
            <Text style={{ color: "white" }}>{weakInfos.weakTypeArray.length}</Text>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewRow>
        <ScrollView style={{ height: 160, width: wp(100), marginTop: 10, marginLeft:30 }} contentContainerStyle={{ height: 160, minWidth: wp(100), display: "flex", flexDirection: "row", alignItems: "center" }} horizontal showsHorizontalScrollIndicator={false}>
          {weakInfos.weakTypeArray &&
            weakInfos.weakTypeArray.map((v, idx) => {
              return (
                <GlobalStyled.ViewCol
                  as={TouchableOpacity}
                  onPress={() => {
                    typeMakeHandler("어휘추론"==="어취추론" ? "밑줄어휘":v.name, v.num);
                  }}
                  width="90px"
                  height="145px"
                  style={{
                    marginHorizontal: 5,
                    backgroundColor: "white",
                    borderRadius: 15,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    
                    elevation: 3,
                  }}
                >
                  <GlobalStyled.ViewCol height="20">
                    <Text style={{ fontFamily: "NotoSansKR-Regular", color: "#1B2C49", height:20, lineHeight:20, fontSize:13 }}>{["EASY", "NORMAL", "HARD"][idx% 3]}</Text>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewCol
                    height="120"
                    style={{
                      borderBottomRightRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}
                  >
                    <GlobalStyled.ViewCol height="75">
                      <TypeIcon
                        size={70}
                        style={{
                          marginTop: 10,
                          shadowColor: "#000",
                          shadowOffset: {
                            width: 0,
                            height: 2,
                          },
                          shadowOpacity: 0.25,
                          shadowRadius: 3.84,

                          elevation: 5,
                        }}
                        deepColor={["#E6A0B9", "#B394C6", "#54BEDE", "#86D8CE"][idx]}
                        lightColor={["#F4D9E1", "#E7D2ED", "#B7E3F0", "#CAF2ED"][idx]}
                      />
                    </GlobalStyled.ViewCol>
                    <GlobalStyled.ViewCol height="45" style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }} justifyContent="flex-start">
                      <Text style={{ fontSize: 13, fontFamily: "NotoSansKR-Bold", color: "#1B2C49", height: 21, lineHeight:21 }}>{v.name}</Text>
                      <GlobalStyled.ViewRow height="16px" style={{ marginTop: 4, marginBottom: 10 }}>
                        <TimeSmall size={11} style={{ marginRight: 2}}></TimeSmall>
                        <Text style={{ fontSize: 11, fontFamily: "NotoSansKR-Regular", color: "#1B2C49", textAlign: "center", height: 16, lineHeight: 16 }}>{Math.round(v.num * 1.3)}분</Text>
                        <ProblemSmall size={10} style={{ marginLeft: 5 , marginRight: 1}}></ProblemSmall>
                        <Text style={{ fontSize: 11, fontFamily: "NotoSansKR-Regular", color: "#1B2C49", textAlign: "center", height: 16, lineHeight: 16 }}>{v.num}문제</Text>
                      </GlobalStyled.ViewRow>
                    </GlobalStyled.ViewCol>
                  </GlobalStyled.ViewCol>
                </GlobalStyled.ViewCol>
              );
            })}
        </ScrollView>
        <GlobalStyled.ViewRow height="80px" justifyContent="flex-start">
          <Text
            style={{
              width: "auto",
              textAlign: "left",
              fontSize: 20,
              fontFamily: "NotoSansCJKkr-Bold",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            오답 노트
            <Text
              style={{
                width: "100%",
                textAlign: "left",
                fontSize: 13,
                fontFamily: "NotoSansCJKkr-Regular",
                marginLeft: 20,
              }}
            >
              {"\n"}
              {"오늘의 문항 오답"}
            </Text>
          </Text>
          <GlobalStyled.ViewCol width="auto" height="25" style={{ backgroundColor: "#94A6FF", paddingHorizontal: 15, borderRadius: 5, marginTop: 2, marginLeft: 0 }}>
            <Text style={{ color: "white" }}>{weakInfos.recentDailyQuery.length}</Text>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewRow>
        <ScrollView style={{ height: 160, width: wp(100), marginTop: 10,marginLeft:30 }} contentContainerStyle={{ height: 160, minWidth: wp(100), display: "flex", flexDirection: "row" }} horizontal showsHorizontalScrollIndicator={false}>
          {weakInfos.recentDailyQuery.map((v, idx) => {
            return (
              <GlobalStyled.ViewCol
                as={TouchableOpacity}
                onPress={() => {
                  dailyMakeHandler(moment(v.day).format("YYYYMMDD"));
                }}
                width="90px"
                height="145px"
                style={{
                  marginHorizontal: 5,
                  backgroundColor: "white",
                  borderRadius: 10,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                }}
              >
                <GlobalStyled.ViewCol height="25" style={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                  <Text style={{ fontFamily: "NotoSansKR-Bold", color: "#1B2C49" }}>오늘의 문항</Text>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewCol height="120" style={{ borderBottomRightRadius: 5, borderBottomLeftRadius: 5 }}>
                  <GlobalStyled.ViewCol height="75">
                    <TypeIcon
                      size={70}
                      style={{
                        marginTop: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                      }}
                      deepColor={["#E6A0B9", "#B394C6", "#54BEDE", "#86D8CE"][idx]}
                      lightColor={["#F4D9E1", "#E7D2ED", "#B7E3F0", "#CAF2ED"][idx]}
                    />
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewCol height="35" style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                    <Text style={{ fontSize: 13, fontFamily: "NotoSansKR-Bold", color: "#1B2C49", height: 16 }}>{moment(v.day).format("MM/DD")}</Text>
                    <GlobalStyled.ViewRow height="16px" style={{ marginTop: 4 }}>
                      <Text style={{ fontSize: 13, fontFamily: "NotoSansKR-Regular", color: "#1B2C49", textAlign: "center", height: 16, lineHeight: 16 }}>오답 문항</Text>
                    </GlobalStyled.ViewRow>
                  </GlobalStyled.ViewCol>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
            );
          })}
        </ScrollView>
        <GlobalStyled.ViewRow height="70px"></GlobalStyled.ViewRow>
      </ScrollView>
    </GlobalStyled.ViewCol>
  );
};

export default HomeWeak;
