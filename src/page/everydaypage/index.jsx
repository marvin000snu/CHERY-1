import React, { useState, useEffect, useCallback } from 'react'
import moment from 'moment'
import { SafeAreaView, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import GlobalStyled from '../../style/GlobalStyled'
import theme from '../../style/theme'
import PageHeader from "../../components/Atoms/PageHeader";
import styled from 'styled-components/native'
import  AsyncStorage  from "@react-native-community/async-storage"
import useAPI from '../../hooks/useAPI'
import TodayLearningList from "../../components/Organisms/TodayLearningList";
import ImageCard from "../../components/Molecules/ImageCard";
import LearningButtons from "../../components/Molecules/LearningButtons.jsx";
import Constants from 'expo-constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import * as Linking from 'expo-linking';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
    },
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        width: wp("100%"),
        height: hp("100%") - Constants.statusBarHeight
    },
    scrollView: {
        backgroundColor: 'pink',
    },
});

const Styled = {
    ContentWrapper: styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding : ${parseInt(wp("5%"))}px;
    `,
    LearningButtonCover: styled(GlobalStyled.ButtonCard)`
    justify-content : center ;
    margin-top : ${parseInt(hp("1.5%"))} ;
    `

}
function DailyScreen({ navigation }) {
    const [API] = useCallback(useAPI(), [])

    const [everydayInfos, setEverydayInfos] = useState([
        {
            id: 0,
            title: "12/1",
            isActive: true,
            isToday: false,
            isMakingTestPaper: true,
            isScoring: true,
            result: "1/1",
        }, {
            id: 0,
            title: "12/2",
            isActive: true,
            isToday: false,
            isMakingTestPaper: true,
            isScoring: true,
            result: "3/11",
        }, {
            id: 0,
            title: "12/3",
            isActive: true,
            isToday: false,
            isMakingTestPaper: true,
            isScoring: true,
            result: "3/11",
        }, {
            id: 0,
            title: "12/4",
            isActive: true,
            isToday: false,
            isMakingTestPaper: true,
            isScoring: true,
            result: "3/11",
        }, {
            id: 0,
            title: "12/5",
            isActive: true,
            isToday: false,
            isMakingTestPaper: true,
            isScoring: true,
            result: "9/11",
        }, {
            id: 0,
            title: "12/6",
            isActive: true,
            isToday: false,
            isMakingTestPaper: true,
            isScoring: true,
            result: "3/11",
        }, {
            id: 0,
            title: "12/7",
            isActive: true,
            isToday: false,
            isMakingTestPaper: true,
            isScoring: true,
            result: "3/11",
        }
    ]);


    const [selectEveryDayInfos, setSelectEveryDayInfos] = useState({});

    const [pdfLink, setpdfLink] = useState("");

    const [isClickTodayProblem, setIsClickTodayProblem] = useState(false);

    const [dailyTestName, setDailyTestName] = useState("");

    const handleClickTodayProblem = (e) => {
        setSelectEveryDayInfos(e);
        setIsClickTodayProblem(true);
    };

    const pdfLinkHandler = () => {
        Linking.openURL("https://www.naver.com/");
    };
 
    const handleOnClickTodayLearningSolve = (info) => {
        const formatThisWeekInfos = getThisWeek(new Date());
        window.open(
            `/solve?name=${moment(formatThisWeekInfos[info.id]).format(
                "YYYYMMDD"
            )}&type=1`,
            "_self"
        );
    };

    const handleOnClickTodayLearningDownload = async (info) => {
        window.open("/");
    };

    const handleOnClickTodayLearningScoring = (info) => {
        const formatThisWeekInfos = getThisWeek(new Date());
        window.open(
            `/grading?name=${moment(formatThisWeekInfos[info.id]).format(
                "YYYYMMDD"
            )}&type=1`,
            "_self"
        );
    };

    const onClickSolveNowButton = () => {
        window.open(`/solve?type=1&name=${dailyTestName}`, "_self");
    };

    const onClickGradingButton = () => {
        window.open(`/grading?type=1&name=${dailyTestName}`, "_self");
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@storage_Key')
                if (value !== null) {}
            } catch (e) {}
        }
        getData()
    }, [])
    useEffect(() => {
        const storeData = async (value) => {
            try {
              await AsyncStorage.setItem('@storage_Key', value)
            } catch (e) {}
          }
        const asyncFunction = async () => {
            const result = await API.daily.getWeekInfo({
                userId: "marvin00",
                body: {}
            }).then(res => res.data)
            setEverydayInfos(Object.values(result).map((v, idx)=>{
                return {
                    id: idx,
                    title: Object.keys(result)[idx],
                    isActive: true,
                    isToday: false,
                    isMakingTestPaper: v.is_tested,
                    isScoring: v.is_graded,
                    result: v.result ,
                }
            }))
        }
        asyncFunction()
        storeData("1")
    }, [])
    const dailyTestHandler = async () => {
        try {
            setIsClickTodayProblem(true)
            setDailyTestName(moment().format("YYYYMMDD"));
            const params1 = {
              userId: "marvin00",
              body: {},
            };
            const result1 = await API.daily.makeDailyTest1(params1);
            const params2 = {
              userId: "marvin00",
              body: result1.data,
            };
            const result2 = await API.daily.makeDailyTest2(params2);
            const params3 = {
              userId: "marvin00",
              body: result2.data,
            };
            const result3 = await API.daily.makeDailyTest3(params3);
            const params4 = {
              userId: "marvin00",
              body: result3.data,
            };
            const result = await API.daily.makeDailyTest4(params4);
            const link = result.data.link;
            setpdfLink(link);
            handleClickTodayProblem();
        } catch (err) {
            console.log(err)
        } finally {}
    };
    return (
        <GestureRecognizer
            onSwipeLeft={() => { navigation.navigate("Weak") }}
            onSwipeRight={() => { navigation.navigate("Home") }}
            style={{ flex: 1, backgroundColor: "white" }}
            congig={{ velocityThreshold: 30, gestureIsClickThreshold: 1 }}
        >
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator= {false}>
                    <ImageBackground source={require("../../images/background/backgrounnd.png")} resizeMode="cover" style={styles.image}>
                        <GlobalStyled.Body>
                            <PageHeader title={"매일학습"} theme={theme} />
                            <GlobalStyled.Container>
                                <Styled.ContentWrapper>
                                    <GlobalStyled.Row>
                                        <TodayLearningList
                                            infos={everydayInfos}
                                            onClickTodayProblem={handleClickTodayProblem}
                                            isClickTodayProblem={isClickTodayProblem}
                                            onClickSolve={handleOnClickTodayLearningSolve}
                                            onClickDownload={handleOnClickTodayLearningDownload}
                                            onClickScoring={handleOnClickTodayLearningScoring}
                                        />
                                    </GlobalStyled.Row>
                                    <GlobalStyled.Row>
                                        <ImageCard title="오늘의 문제 풀기" isEffect={false}>
                                            <GlobalStyled.ActiveButton
                                                fontSize="12.5"
                                                padding="4"
                                                isActive={!isClickTodayProblem}
                                                marginBottom="3rem"
                                                onPress={dailyTestHandler}
                                                title="오늘의 문제 다운로드"
                                            >
                                            </GlobalStyled.ActiveButton>
                                        </ImageCard>
                                        {isClickTodayProblem && <Styled.LearningButtonCover>
                                            <LearningButtons
                                                isActive={isClickTodayProblem}
                                                onClickPdfDownloadButton={pdfLinkHandler}
                                                onClickSolveNowButton={onClickSolveNowButton}
                                                onClickGradingButton={onClickGradingButton}
                                            />
                                        </Styled.LearningButtonCover>}
                                    </GlobalStyled.Row>
                                </Styled.ContentWrapper>
                            </GlobalStyled.Container>
                        </GlobalStyled.Body>
                    </ImageBackground>
                </ScrollView>
            </SafeAreaView >
        </GestureRecognizer>
    );
}

export default DailyScreen