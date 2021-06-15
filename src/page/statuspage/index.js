import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Constants from "expo-constants";
import { Header } from "../../components/Molecules/Header";
import { StatusNavBar } from "../../components/Molecules/StatusNavBar";
import { Animated, ScrollView } from "react-native";
import useAPI from "../../hooks/useAPI";
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyled from "../../style/GlobalStyled";
import moment from "moment";
import _ from "lodash";
import DirestSolveChery from "../../images/iconSvg/direstSolveChery"

const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100) - 70}px;
    background-color: #f4f5f7;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  section: styled.View`
    height: ${hp(100) - 70 - Constants.statusBarHeight}px;
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  bar: styled.View`
    width: 100%;
    height: 2px;
    background: #5471FF
    border: 1px solid #5471FF
    border-radius: 5px;
  `,
  holder: styled.View`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow: hidden;
  `,
  summit: styled.View`
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-bottom: 30px;
  `,
  summitbtn: styled.View`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  `,
  prevbtn: styled.View`
    width: 40%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #6f87ff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  `,
  nextbtn: styled.View`
    width: 40%;
    height: 100%;
    background-color: #6f87ff;
    border-radius: 10px;
    border: 1px solid #d4d7dc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #fff;
  `,
  wrap: styled.View`
    width: ${wp(95)};
    height:100%
    justify-content: flex-start;
    flex-flow: column;
    align-items: center;
    border-radius: 6px;
    
  `,
  StatusBarWrapper: styled.View`
    height: 16.66%;
    max-height:100;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    display: flex;
  `,
  StatusTitle: styled.View`
    width: 100%;
    height: ${(props) => props.height}%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `,
  statusText: styled.Text`
    font-family:NotoSansKR-Bold;
    font-size: 16px;
    color: #1b2c49;
    margin-left: 10px;
    font-weight: bold;
  `,
  numberText: styled.Text`
    font-size: 13px;
    color: #1b2c49;
    margin-left: 10px;
    margin-top: 2px;
    font-family: NotoSansKR-Bold;
    height: 25px;
    line-height:20;
  `,
  View: styled.View`
    width: 100%;
  `,
  WrapView: styled.View`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    background-color: white;
  `,
  WrapView1: styled.View`
    width: 0;
    height: 0;
    border-bottom-width: 24px;
    border-bottom-color: #8e5ffa;
    border-left-width: 24px;
    border-left-color: transparent;
    border-right-width: 24px;
    border-right-color: transparent;
    margin-top: 20px;
  `,
  WrapViewBox: styled.View`
    flex: 1;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  WrapViewBox1: styled.View`
    width: 100%;
    height: 10%;
    background-color: #6F87FF;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  `,
  WrapViewBox2: styled.View`
    width: 100%;
    height: 80%;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-color: #ddd;
    justify-content: center;
    align-items: center;
  `,
  Text: styled.Text`
    width: 95%;
    font-size: 15px;
    text-align: justify;
    line-height: 23px;
    font-family: NotoSansKR-Regular;
  `,
};
const grade3Animation = new Animated.Value(0);
const grade2Animation = new Animated.Value(0);
const grade1Animation = new Animated.Value(0);
const kiceAnimation = new Animated.Value(0);
const swaAnimation = new Animated.Value(0);

const LearningStatusPage1 = ({ navigation }) => {
  const scrollRef = useRef(null)
  const [API] = useCallback(useAPI(), []);
  const [infos, setInfos] = useState({
    progressData: [],
    chartData: [],
    heatMap: [],
    comment: [],
  });

  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        const params = {
          userId: deCode["cognito:username"],
          body: {
            datelist: [0, 1, 2, 3, 4, 5, 6].map((v) => {
              return parseInt(moment().subtract(v, "day").format("YYYYMMDD"));
            }),
          },
        };
        const { data } = await API.progress.progressinfo(params);
        const { data: chart } = await API.progress.getChartInfo(params);
        const { data: heatMapTemp } = await API.progress.getHeatMapInfo(params);
        const { data: commentData } = await API.progress.getCommentInfo(params);

        setInfos({
          comment: commentData.result,
          heatMap: heatMapTemp,
          chartData: chart.result.map((v) => {
            return Object.values(v);
          }),
          progressData: data,
        });
        Animated.spring(grade3Animation, {
          toValue: Number(data.grade3 / 200),
          useNativeDriver: true,
        }).start();
        Animated.spring(grade2Animation, {
          toValue: Number(data.grade2 / 200),
          useNativeDriver: true,
        }).start();
        Animated.spring(grade1Animation, {
          toValue: Number(data.grade1 / 200),
          useNativeDriver: true,
        }).start();
        Animated.spring(swaAnimation, {
          toValue: Number(data.swa / 200),
          useNativeDriver: true,
        }).start();
        Animated.spring(kiceAnimation, {
          toValue: Number(data.kice / 200),
          useNativeDriver: true,
        }).start();
      } catch (err) {
        console.log(err);
      }
    };
    useEffectAsyncFunction();
  }, []);
  const [presentValue, setPresentValue] = useState(0);
  const movePage= (i) => {
    scrollRef.current.scrollTo({x:wp(95)*i, y:0})
  };

  const backHandler = () => {
    navigation.navigate("Home", { screen: "DailyLearningPage0" });
  };
  return (
    <Styled.body>
      <Styled.section>
        <GlobalStyled.ViewCol
          width="95%"
          height="98%"
          justifyContent="flex-start"
          style={{
            borderRadius: 10,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <Header HeaderTitle="학습현황" detail="현재까지 푼 문제 한눈에 보기" backHandler={backHandler} />
          <GlobalStyled.ViewCol
            justifyContent="flex-start"
            style={{
              flex: 1,
              backgroundColor: "white",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <Styled.bar></Styled.bar>
            <StatusNavBar setPresentValue={setPresentValue} presentValue={presentValue} movePage={movePage} />
            <Styled.holder>
              <ScrollView onScroll={(e)=>{setPresentValue(Math.round(e.nativeEvent.contentOffset.x/wp(95)))}} horizontal showHorizontalScrollIndicator= {false} pagingEnabled style={{flex:1}} contentContainerStyle={{flexGrow:1, width:wp(190), flexDirection: "row" }} scrollEventThrottle={16} ref={scrollRef}>
                <Styled.wrap>
                  <Styled.StatusBarWrapper>
                    <Styled.StatusTitle height="25">
                        <Styled.statusText>평가원 기출문제</Styled.statusText>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25">
                      <GlobalStyled.ViewRow width="90%" justifyContent="center" alignItems="center">
                        <GlobalStyled.ViewRow
                          width={String(wp(80)) + "px"}
                          height="15px"
                          style={{
                            borderColor: "#5471FF",
                            borderRadius: 5,
                            overflow: "hidden",
                            backgroundColor: "#F2F2F2",
                          }}
                          justifyContent="flex-end"
                        >
                          <Animated.View
                            style={[
                              {
                                width: wp(160),
                                height: 15,
                                backgroundColor: "#5471FF",
                              },
                              {
                                transform: [{ scaleX: kiceAnimation }, { translateX: 0 }],
                              },
                            ]}
                          ></Animated.View>
                        </GlobalStyled.ViewRow>
                      </GlobalStyled.ViewRow>
                      <GlobalStyled.ViewRow width="10%" justifyContent="flex-start"  alignItems="center">
                        <Styled.numberText>{infos.progressData.kice}</Styled.numberText>
                      </GlobalStyled.ViewRow>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25"></Styled.StatusTitle>
                  </Styled.StatusBarWrapper>
                  <Styled.StatusBarWrapper>
                    <Styled.StatusTitle height="25">
                      <Styled.View>
                        <Styled.statusText>3학년 교육청 문제</Styled.statusText>
                      </Styled.View>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25">
                      <GlobalStyled.ViewRow width="90%" justifyContent="center" alignItems="center">
                        <GlobalStyled.ViewRow
                          width={String(wp(80)) + "px"}
                          height="15px"
                          style={{
                            borderColor: "#5471FF",
                            borderRadius: 5,
                            overflow: "hidden",
                            backgroundColor: "#F2F2F2",
                          }}
                          justifyContent="flex-end"
                        >
                          <Animated.View
                            style={[
                              {
                                width: wp(160),
                                height: 15,
                                backgroundColor: "#5471FF",
                              },
                              {
                                transform: [{ scaleX: grade3Animation }, { translateX: 0 }],
                              },
                            ]}
                          ></Animated.View>
                        </GlobalStyled.ViewRow>
                      </GlobalStyled.ViewRow>
                      <GlobalStyled.ViewRow width="10%" justifyContent="flex-start"  alignItems="flex-start">
                        <Styled.numberText>{infos.progressData.grade3}</Styled.numberText>
                      </GlobalStyled.ViewRow>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25"></Styled.StatusTitle>
                  </Styled.StatusBarWrapper>
                  <Styled.StatusBarWrapper>
                    <Styled.StatusTitle height="25">
                      <Styled.View>
                        <Styled.statusText>2학년 교육청 문제</Styled.statusText>
                      </Styled.View>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25">
                      <GlobalStyled.ViewRow width="90%" justifyContent="center" alignItems="center">
                        <GlobalStyled.ViewRow
                          width={String(wp(80)) + "px"}
                          height="15px"
                          style={{
                            borderColor: "#5471FF",
                            borderRadius: 5,
                            overflow: "hidden",
                            backgroundColor: "#F2F2F2",
                          }}
                          justifyContent="flex-end"
                        >
                          <Animated.View
                            style={[
                              {
                                width: wp(160),
                                height: 15,
                                backgroundColor: "#5471FF",
                              },
                              {
                                transform: [{ scaleX: grade2Animation }, { translateX: 0 }],
                              },
                            ]}
                          ></Animated.View>
                        </GlobalStyled.ViewRow>
                      </GlobalStyled.ViewRow>
                      <GlobalStyled.ViewRow width="10%" justifyContent="flex-start"  alignItems="flex-start">
                        <Styled.numberText>{infos.progressData.grade2}</Styled.numberText>
                      </GlobalStyled.ViewRow>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25"></Styled.StatusTitle>
                  </Styled.StatusBarWrapper>
                  <Styled.StatusBarWrapper>
                    <Styled.StatusTitle height="25">
                      <Styled.View>
                        <Styled.statusText>1학년 교육청 문제</Styled.statusText>
                      </Styled.View>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25">
                      <GlobalStyled.ViewRow width="90%" justifyContent="center" alignItems="center">
                        <GlobalStyled.ViewRow
                          width={String(wp(80)) + "px"}
                          height="15px"
                          style={{
                            borderColor: "#5471FF",
                            borderRadius: 5,
                            overflow: "hidden",
                            backgroundColor: "#F2F2F2",
                          }}
                          justifyContent="flex-end"
                        >
                          <Animated.View
                            style={[
                              {
                                width: wp(160),
                                height: 15,
                                backgroundColor: "#5471FF",
                              },
                              {
                                transform: [{ scaleX: grade1Animation }, { translateX: 0 }],
                              },
                            ]}
                          ></Animated.View>
                        </GlobalStyled.ViewRow>
                      </GlobalStyled.ViewRow>
                      <GlobalStyled.ViewRow width="10%" justifyContent="flex-start"  alignItems="flex-start">
                        <Styled.numberText>{infos.progressData.grade1}</Styled.numberText>
                      </GlobalStyled.ViewRow>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25"></Styled.StatusTitle>
                  </Styled.StatusBarWrapper>
                  <Styled.StatusBarWrapper>
                    <Styled.StatusTitle height="25">
                      <Styled.View>
                        <Styled.statusText>CHERY 자체문항</Styled.statusText>
                      </Styled.View>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25">
                      <GlobalStyled.ViewRow width="90%" justifyContent="center" alignItems="center">
                        <GlobalStyled.ViewRow
                          width={String(wp(80)) + "px"}
                          height="15px"
                          style={{
                            borderColor: "#5471FF",
                            borderRadius: 5,
                            overflow: "hidden",
                            backgroundColor: "#F2F2F2",
                          }}
                          justifyContent="flex-end"
                        >
                          <Animated.View
                            style={[
                              {
                                width: wp(160),
                                height: 15,
                                backgroundColor: "#5471FF",
                              },
                              {
                                transform: [{ scaleX: swaAnimation }, { translateX: 0 }],
                              },
                            ]}
                          ></Animated.View>
                        </GlobalStyled.ViewRow>
                      </GlobalStyled.ViewRow>
                      <GlobalStyled.ViewRow width="10%" justifyContent="flex-start"  alignItems="flex-start">
                        <Styled.numberText>{infos.progressData.swa}</Styled.numberText>
                      </GlobalStyled.ViewRow>
                    </Styled.StatusTitle>
                    <Styled.StatusTitle height="25"></Styled.StatusTitle>
                  </Styled.StatusBarWrapper>
                
                </Styled.wrap>
                <Styled.wrap>
                  <Styled.WrapView1></Styled.WrapView1>
                  <Styled.WrapViewBox>
                    <Styled.WrapView
                      style={[
                        {
                          position: "absolute",
                          shadowColor: "#000",
                          shadowOffset: {
                            width: 0,
                            height: 3,
                          },
                          shadowOpacity: 0.29,
                          shadowRadius: 4.65,

                          elevation: 7,
                          zIndex: 1,
                        },
                        { transform: [{ translateY: -40 }] },
                      ]}
                    >
                    <DirestSolveChery size={30} />
                    </Styled.WrapView>
                    <Styled.WrapViewBox1>

                    </Styled.WrapViewBox1>
                    <Styled.WrapViewBox2>
                      <Styled.Text>{infos.comment}</Styled.Text>
                    </Styled.WrapViewBox2>
                  </Styled.WrapViewBox>
                </Styled.wrap>
              </ScrollView>
            </Styled.holder>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};

export { LearningStatusPage1 };
