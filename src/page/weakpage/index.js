import React, { useState } from 'react'
import { ImageBackground, StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native'
import styled from 'styled-components/native'
import GestureRecognizer from 'react-native-swipe-gestures';
import GlobalStyled from '../../style/GlobalStyled'
import PageHeader from '../../components/Atoms/PageHeader'
import SelectNative from "../../components/Atoms/Select";
import IncorrectQuestionList from "../../components/Molecules/IncorrectQuestionList";
import CreateTestPaperInput from "../../components/Atoms/CreateTestPaperInput";
import moment from 'moment'
import LearningButtons from '../../components/Molecules/LearningButtons'
import TestPaperCreateHistory from "../../components/Organisms/TestPaperCreateHistory";
import Constants from 'expo-constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import CardHeaderCustom from "../../components/Molecules/CardHeaderCustom";


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
    },
    scrollView: {
        backgroundColor: 'pink',
    },
});

function WeakScreen({ navigation }) {
    const Styled = {
        ContentWrapper: styled.View`
        margin-top : ${hp("3")};
        display: flex;
        flex-direction: column;
        width: 100%;
        padding : ${wp("4")}px;
      `,
        StartLink: styled.View`
        color: ${(props) => props.theme.color.sky};
        font-size: 1rem;
      `,
        CardWrapper: styled.View`
        margin-top : 0; 
        display: flex;
        width: 100%;
        flex-direction: column;
      `,
        SelectDateWrapper: styled.View`
        width : ${wp("92")}px ;
        display : flex ; 
        flex-direction: row;
        justify-content: center
        align-items : flex-start;
        margin-top : ${hp("1.5")}px;
        margin-bottom : ${hp("1.5")}px;
      `,
        ProblemContentsWrapper: styled.View`
        display: flex;
        flex-direction: column;
        width: 100%;
      `,
        CreateTestPaperWrapper: styled.View`
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.theme.color.realWhiteColor};
        border-top-width: 1px;
        border-style : solid ;
        border-top-color : ${(props) => props.theme.color.lightGray};
        border-bottom-width: 1px ;
        border-bottom-color: ${(props) => props.theme.color.lightGray};
      `,

        LearningButtonsWrapper: styled.View`
        display: ${(props) => (props.isActive ? "flex" : "none")};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-bottom-width: 1px;
        border-style: solid; 
        border-bottom-color: ${(props) => props.theme.color.lightGray};
        padding: 0;
        h1 {
          font-size: 1.25rem;
          font-weight: 400;
        }
      `,

        CreateTestPaperHistoryWrapper: styled(GlobalStyled.CenterRow)`
        padding: 5px;
      `,
    };
    const [testPaperOptions] = useState([
        { value: 1, label: "???????????? ?????????" },
        { value: 2, label: "???????????? ?????????" },
        { value: 3, label: "???????????? ?????????" },
    ]);
    const [testPaperSelectValue, setTestPaperSelectValue] = useState({
        value: "",
        label: "????????? ?????? ??????",
    });
    const [testPaperNameOption, setTestPaperNameOption] = useState([
        {
            value: "?????? ????????? ????????? ???????????????",
            label: "?????? ????????? ????????? ???????????????",
        },
    ]);

    const [testPaperNameSelectValue, setTestPaperNameSelectValue] = useState({
        value: "?????? ????????? ????????? ???????????????",
        label: "?????? ????????? ????????? ???????????????",
    });
    const [addIncorrectQuestionInfos, setAddIncorrectQuestionInfos] = useState(
        [{
            date: "2018???",
            name: "11??? ???????????? 30???",
            divisionNumber: 190011130,
            isDuplicate: false,
        },
        {
            date: "2018???",
            name: "11??? ???????????? 30???",
            divisionNumber: 190011130,
            isDuplicate: false,
        }, {
            date: "2018???",
            name: "11??? ???????????? 30???",
            divisionNumber: 190011130,
            isDuplicate: false,
        },]
    );
    const handleOnChangeTestPaperNameSelectValue = (e) => {
        setTestPaperNameSelectValue(e);
    };
    const handleOnClickWeakLearningScoring = (info) => {
        window.open(`/grading?name=${info.title}&type=2`, "_self");
    };
    const handleOnClickWeakLearningDownload = async (info) => {};
    const handleOnClickWeakLearningSolve = (info) => {
        window.open(`/solve?name=${info.title}&type=2`, "_self");
    };
    const handleOnSubmitCreateTestPaper = (e) => {
        setRemoveIncorrectQuestionInfos([]);
        setCreateTestPaperInfos({
            name : e,
            infos : []
        })
    };

    const [
        removeIncorrectQuestionInfos,
        setRemoveIncorrectQuestionInfos,
    ] = useState([]);

    const [isCreateTestPaperHistory, setIsCreateTestPaperHistory] = useState(
        false
    );

    const handleOnClickRemoveIncorrectQuestionButton = (info) => {
        setRemoveIncorrectQuestionInfos((prevState) =>
            prevState.filter((res) => res.divisionNumber !== info.divisionNumber)
        );
    };

    const handleOnClickAddIncorrectQuestionButton = (info) => {
        setRemoveIncorrectQuestionInfos((prevState) => prevState.concat(info));
    };
    const handleOnClickAllAddIncorrectQuestionButton = () => {
        setRemoveIncorrectQuestionInfos((prevState) =>
            prevState.concat(addIncorrectQuestionInfos)
        );
    };

    const handleOnClickAllRemoveIncorrectQuestionButton = () => {
        setRemoveIncorrectQuestionInfos([]);
    };

    const [createTestPaperInfos, setCreateTestPaperInfos] = useState({
        name: "",
        infos: [],
    });

    const pdfLinkHandler = () => {
        window.open(pdfLink, "_blank");
    };

    const [testPaperHistoryInfos, setTestPaperHistoryInfos] = useState([{
        title: "?????????",
        isActive: true,
        isToday: false,
        isMakingTestPaper: true,
        isScoring: true,
        result: "1",
    }]);

    const handleOnClickCreateTestPaperHistory = () => {
        setIsCreateTestPaperHistory(!isCreateTestPaperHistory);
    };
    const [testPaperName, onChangeTestPaperName] = useState("");

    const [ab, setA] = useState({label: "????????? ?????? ??????", value: ""})
    return (
        <GestureRecognizer
            onSwipeLeft={() => { navigation.navigate("Search") }}
            onSwipeRight={() => { navigation.navigate("Daily") }}
            style={{ flex: 1, backgroundColor: "white" }}
            congig={{ velocityThreshold: 30, gestureIsClickThreshold: 1 }}

        >
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <ImageBackground source={require("../../images/background/backgrounnd.png")} resizeMode="cover" style={styles.image} showsVerticalScrollIndicator= {false}>
                        <GlobalStyled.Body>
                            <PageHeader title={"????????????"} />
                            <GlobalStyled.Container>
                                <Styled.ContentWrapper>
                                    <GlobalStyled.Card>
                                        <Styled.CardWrapper>
                                            <CardHeaderCustom
                                                title={"????????? ??????"}
                                                content={"????????? ????????? ????????? ???????????????."}
                                                marginTop={0}
                                            >
                                                <Styled.SelectDateWrapper>
                                                    <GlobalStyled.CenterCol width="50" flexDirection="row">
                                                        <SelectNative
                                                            placeHolder="????????? ?????? ??????"
                                                            options={testPaperOptions}
                                                            value={ab}
                                                            onChange={setA}
                                                            width={wp("40%")}
                                                            isActive={true}
                                                            dropDownWidth={wp("40%")}
                                                        />
                                                    </GlobalStyled.CenterCol>
                                                    <GlobalStyled.CenterCol width="50" flexDirection="row">
                                                        <SelectNative
                                                            placeHolder="????????? ?????? ??????"
                                                            isActive={true}
                                                            options={testPaperNameOption}
                                                            value={testPaperNameSelectValue}
                                                            onChange={handleOnChangeTestPaperNameSelectValue}
                                                            width={wp("40%")}
                                                            dropDownWidth={wp("40%")}

                                                        />
                                                    </GlobalStyled.CenterCol>
                                                </Styled.SelectDateWrapper>
                                            </CardHeaderCustom>
                                            <Styled.ProblemContentsWrapper>
                                                <GlobalStyled.Row>
                                                    <IncorrectQuestionList
                                                        addInfos={addIncorrectQuestionInfos}
                                                        removeInfos={removeIncorrectQuestionInfos}
                                                        onClickAddButton={handleOnClickAddIncorrectQuestionButton}
                                                        onClickRemoveButton={
                                                            handleOnClickRemoveIncorrectQuestionButton
                                                        }
                                                        onClickAllAddButton={
                                                            handleOnClickAllAddIncorrectQuestionButton
                                                        }
                                                        onClickAllRemoveButton={
                                                            handleOnClickAllRemoveIncorrectQuestionButton
                                                        }
                                                    />
                                                </GlobalStyled.Row>
                                                <Styled.CreateTestPaperWrapper>
                                                    <CreateTestPaperInput
                                                        width={wp("70")}
                                                        name="createTestPaper"
                                                        value={testPaperName}
                                                        onChange={onChangeTestPaperName}
                                                        onSubmit={handleOnSubmitCreateTestPaper}
                                                        placeholder={moment().format("MM??? DD??? ????????????")}
                                                    />
                                                </Styled.CreateTestPaperWrapper>
                                                <Styled.LearningButtonsWrapper
                                                    isActive={createTestPaperInfos.name}
                                                >
                                                    <GlobalStyled.CenterRow>
                                                        <Text>{createTestPaperInfos.name}</Text>
                                                    </GlobalStyled.CenterRow>
                                                    <LearningButtons
                                                        isActive={createTestPaperInfos.name}
                                                        onClickPdfDownloadButton={pdfLinkHandler}
                                                    />
                                                </Styled.LearningButtonsWrapper>
                                            </Styled.ProblemContentsWrapper>
                                            <Styled.CreateTestPaperHistoryWrapper>
                                                <TestPaperCreateHistory
                                                    infos={testPaperHistoryInfos}
                                                    isActive={isCreateTestPaperHistory}
                                                    onClickButton={handleOnClickCreateTestPaperHistory}
                                                    handleOnClickTodayLearningScoring={
                                                        handleOnClickWeakLearningScoring
                                                    }
                                                    handleOnClickTodayLearningSolve={
                                                        handleOnClickWeakLearningSolve
                                                    }
                                                    handleOnClickTodayLearningDownload={
                                                        handleOnClickWeakLearningDownload
                                                    }
                                                />
                                            </Styled.CreateTestPaperHistoryWrapper>
                                        </Styled.CardWrapper>
                                    </GlobalStyled.Card>
                                </Styled.ContentWrapper>
                            </GlobalStyled.Container>
                        </GlobalStyled.Body>
                    </ImageBackground>
                </ScrollView>
            </SafeAreaView >
        </GestureRecognizer >
    );
}

export default WeakScreen