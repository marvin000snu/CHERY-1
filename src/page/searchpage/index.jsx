import React, { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures';
import GlobalStyled from '../../style/GlobalStyled'
import styled from 'styled-components/native'
import theme from "../../style/theme";
import LearningButtons from "../../components/Molecules/LearningButtons";
import CreateTestPaperInput from "../../components/Atoms/CreateTestPaperInput";
import Constants from 'expo-constants'
import moment from "moment";
import HeightSelect from "../../components/Molecules/HeightSelect";
import SearchInput from "../../components/Molecules/SearchInput";
import CardHeaderCustom from "../../components/Molecules/CardHeaderCustom";
import PageHeader from "../../components/Atoms/PageHeader";
import StageVocabularyList from "../../components/Organisms/StageVocabularyList";
import SimilarQuestionCardList from "../../components/Organisms/SimilarQuestionCardList";
import IncorrectPredictionCardList from "../../components/Organisms/IncorrectPredictionCardList";
import MainSyntaxList from "../../components/Organisms/MainSyntaxList";
import TestPaperCreateHistory from "../../components/Organisms/TestPaperCreateHistory";
import ExampleDifficultyCardList from "../../components/Organisms/ExampleDifficultyCardList";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const searchTypeOptions = [
    {
        label: "문항코드 검색",
        value: "questionCode",
    },
    {
        label: "교재이름 검색",
        value: "textbook",
    },
];
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

const Styled = {
    ContentWrapper: styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    min-height : 500px;
    `,
    CardWrapper: styled(GlobalStyled.Row)`
    border-radius : 30px ; 
    flex-direction: column;
  `, CardHeaderWrapper: styled(GlobalStyled.Row)`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  border-bottom-width: 0px; 
  border-style : solid; 
  border-color: ${(props) => props.theme.color.lightGray};
`, CardContentWrapper: styled(GlobalStyled.Row)`
border-bottom-width: 0px; 
border-style: solid;
border-color: ${(props) => props.theme.color.lightGray};
`, CardContainer: styled(GlobalStyled.Row)`
width: ${wp("95%")}
min-height: 60px;
padding: 1px;
`, CardBottomWrapper: styled(GlobalStyled.CenterRow)`
padding: 10px;
flex-direction: column;
border-bottom-width: 1px; 
border-style : solid; 
border-color: ${(props) => props.theme.color.lightGray};
:last-child {
  border-bottom: 0;
}
`, HaveProblemText: styled.Text`
font-size: 12.5;
color: ${(props) => props.theme.color.whiteBlue};
`, CreateTestPaperWrapper: styled.View`
display: flex;
flex-direction: column;
width: 100%;
padding: 20px ;
align-items: center;
justify-content: center;
background-color: ${(props) => props.theme.color.realWhiteColor};
border-bottom-width: 1px; 
border-top-width : 1px;
border-style : solid; 
border-color: ${(props) => props.theme.color.lightGray};
`, LearningButtonsWrapper: styled.View`
display: ${(props) => (props.isActive ? "flex" : "none")};
flex-direction: column;
align-items: center;
justify-content: center;
border-bottom-width: 1px; 
border-style : solid; 
border-color: ${(props) => props.theme.color.lightGray};
padding: 20px
`,
}

function SearchScreen({ navigation }) {
    const [testQuestionFromYearOptions] = useState([
        {
            label: "2020",
            value: "20",
        },
        {
            label: "2019",
            value: "19",
        },
        {
            label: "2018",
            value: "18",
        },
        {
            label: "2017",
            value: "17",
        },
        {
            label: "2016",
            value: "16",
        },
        {
            label: "2015",
            value: "15",
        },
    ]);

    const [searchTypeSelect, setSearchTypeSelect] = useState(
        {
            label: "교재이름 검색",
            value: "textbook"
        }
    );
    const handleOnChangeSearchTypeSelect = (e) => {
        setSearchTypeSelect(e);
    };
    
    const [testQuestionFromYearSelect, setTestQuestionFromYearSelect] = useState({
        value: "",
        label: "",
    });
    const handleOnChangeTestQuestionFormYearSelect = (e) => {
        setTestQuestionFromYearSelect(e);
    };
    const [testPaperSelect, setTestPaperSelect] = useState({
        value: "",
        label: "",
    });
    const handleOnChangeTestPaperSelect = (e) => {
        setTestPaperSelect(e);
    };
    const [questionNumber, setQuestionNumber] = useState({
        questionNumber: "",
    });
    const onChangeQuestionNumber = (e) => {
        setQuestionNumber({
            questionNumber: e,
        })
    }
    const [incorrectPredictionInfos, setIncorrectPredictionInfos] = useState([
        {
            title: "1번",
            value: 5,
            unit: "%",
        },
        {
            title: "2번",
            value: 40,
            unit: "%",
        },
        {
            title: "3번",
            value: 23,
            unit: "%",
        },
        {
            title: "4번",
            value: 19,
            unit: "%",
        },
        {
            title: "5번",
            value: 13,
            unit: "%",
        },
    ]);

    const [testPaperOptions] = useState([
        {
            label: "S.W.A. 자체문항",
            value: "00",
        },
        {
            label: "수능",
            value: "00311",
        },
        {
            label: "고3 3월 모의고사",
            value: "00303",
        },
        {
            label: "고3 4월 모의고사",
            value: "00304",
        },
        {
            label: "고3 6월 모의고사",
            value: "00306",
        },
        {
            label: "고3 7월 모의고사",
            value: "00307",
        },
        {
            label: "고3 9월 모의고사",
            value: "00309",
        },
        {
            label: "고3 10월 모의고사",
            value: "00310",
        },
        {
            label: "고2 3월 모의고사",
            value: "00209",
        },
        {
            label: "고2 6월 모의고사",
            value: "00206",
        },
        {
            label: "고2 9월 모의고사",
            value: "00209",
        },
        {
            label: "고2 11월 모의고사",
            value: "00211",
        },
        {
            label: "고1 3월 모의고사",
            value: "00103",
        },
        {
            label: "고1 6월 모의고사",
            value: "00106",
        },
        {
            label: "고1 9월 모의고사",
            value: "00109",
        },
        {
            label: "고1 11월 모의고사",
            value: "00111",
        },
    ]);
    const [stageVocabularyInfos, setStageVocabularyInfos] = useState([
        {
            id: 1,
            title: "1단계 어휘",
            infos: [
                "marvin0000",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "asasdf"
            ],
        },
        {
            id: 2,
            title: "2단계 어휘",
            infos: [
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
            ],
        },
        {
            id: 3,
            title: "3단계 어휘",
            infos: [
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
                "abcedf",
            ],
        },
    ]);

    const [exampleDifficultyInfos, setExampleDifficultyInfos] = useState([
        {
            title: "사용 어휘 난이도",
            value: 234,
            type: "어휘",
            percent: 90,
        },
        {
            title: "지문 난이도",
            value: 2134,
            type: "지문",
            percent: 10,
        },
    ]);
    const handleSubmitSearchButton = () => {
        alert(searchTypeSelect.value)
    };

    const onClickButtonForTopic = () => {
        alert("clicked")
    };

    const makeSearchTestHandler = (e) => {
        setCreateTestPaperInfos({name:e , infos : []})
    }

    const [createTestPaperInfos, setCreateTestPaperInfos] = useState({
        name: "",
        infos: [],
    });

    const [mainSyntaxInfos, setMainSyntaxInfos] = useState([
        {
            id: 1,
            title: "문장 1",
            value: "If we re",
        },
        {
            id: 2,
            title: "문장 2",
            value:
                "If we reason that Paula is afraid either of snakes or spiders, and then establish that she is not afraid of snakes, we will conclude that Paula is afraid of spiders",
        },
    ]);
    const [similarQuestionInfo, setSimilarQuestionInfo] = useState([
        {
            id: 1,
            title: "1순위 유사문항",
            value: 187,
            color: theme.color.blue,
        },
        {
            id: 2,
            title: "2순위 유사문항",
            value: 102,
            color: theme.color.green,
        },
        {
            id: 3,
            title: "3순위 유사문항",
            value: 37,
            color: theme.color.yellow,
        },
    ]);
    const vocabularyClickHandler = (vocabulary) => {
        const vocabularyClickHandlerAsyncFunction = async function (vocabulary) {
            const params = {
                userId: decodedCokkies["cognito:username"],
                body: {
                    voca: vocabulary,
                },
            };
            await API.voca.addVoca(params);
            alert(`${vocabulary} 이(가) 단어장에 추가되었습니다.`);
        };

        vocabularyClickHandlerAsyncFunction(vocabulary);
    };

    const onClickButtonForSyntax = () => {

    }
    const [numOfSavedProblem, setNumOfSavedProblem] = useState(0);

    const [state, setState] = useState({
        createTestPaper: "",
    });

    const onChange = (e) => {
        setState({ createTestPaper: e })
    }

    const pdfLinkHandler = () => {}

    const onClickSolveNowButton = () => {}

    const [isCreateTestPaperHistory, setIsCreateTestPaperHistory] = useState(
        false
    );

    const onClickGradingButton = () => {}

    const handleOnClickCreateTestPaperHistory = () => {
        setIsCreateTestPaperHistory(!isCreateTestPaperHistory)
    }
    const [testPaperHistoryInfos, setTestPaperHistoryInfos] = useState([]);

    const handleOnClickTodayLearningSolve = (info) => {};

    const handleOnClickTodayLearningScoring = (info) => {};

    const handleOnClickTodayLearningDownload = async (info) => {};

    useEffect(() => {}, [])
    return (
        <GestureRecognizer
            onSwipeLeft={() => { navigation.navigate("Status") }}
            onSwipeRight={() => { navigation.navigate("Weak") }}
            style={{ flex: 1, backgroundColor: "white" }}
            config={{ velocityThreshold: 30, gestureIsClickThreshold: 1 }}

        >
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator= {false}>
                    <ImageBackground source={require("../../images/background/backgrounnd.png")} resizeMode="cover" style={styles.image}>
                        <PageHeader title={"문항 분석"} />
                        <GlobalStyled.Container>
                            <Styled.ContentWrapper>
                                <GlobalStyled.Card>
                                    <Styled.CardWrapper>
                                        <CardHeaderCustom
                                            title={"분석 문항 설정"}
                                            content={"분석할 문항의 정보를 입력해주세요."}
                                        />
                                        <Styled.CardHeaderWrapper>
                                            {searchTypeSelect.value === "questionCode" ? (
                                                <>
                                                    <GlobalStyled.Col width="50" flexDirection="row">
                                                        <HeightSelect
                                                            placeHolder="검색유형 선택"
                                                            title="검색유형을 선택하세요"
                                                            width={wp("40%")}
                                                            options={searchTypeOptions}
                                                            value={searchTypeSelect}
                                                            isActive={true}
                                                            onChange={handleOnChangeSearchTypeSelect}
                                                            dropDownWidth={wp("40%")}
                                                        />
                                                    </GlobalStyled.Col>
                                                    <GlobalStyled.Col width="50" flexDirection="row">
                                                        <SearchInput
                                                            title="문항번호"
                                                            name="questionNumber"
                                                            value={questionNumber.questionNumber}
                                                            onChange={onChangeQuestionNumber}
                                                            onClickSearchButton={handleSubmitSearchButton}
                                                            dropDownWidth={wp("40%")}
                                                        />
                                                    </GlobalStyled.Col>
                                                </>
                                            ) : (
                                                    <>
                                                        <GlobalStyled.Col width="50" flexDirection="row">
                                                            <HeightSelect
                                                                placeHolder="검색유형 선택"
                                                                title="검색유형을 선택하세요"
                                                                width={wp("40%")}
                                                                options={searchTypeOptions}
                                                                value={searchTypeSelect}
                                                                isActive={true}
                                                                onChange={handleOnChangeSearchTypeSelect}
                                                                dropDownWidth={wp("40%")}
                                                            />
                                                        </GlobalStyled.Col>
                                                        <GlobalStyled.Col width="50" flexDirection="row">
                                                            <HeightSelect
                                                                placeHolder="출제 년도"
                                                                title="출제 년도를 선택하세요"
                                                                width={wp("40%")}
                                                                options={testQuestionFromYearOptions}
                                                                value={testQuestionFromYearSelect}
                                                                onChange={handleOnChangeTestQuestionFormYearSelect}
                                                                isActive={true}
                                                                dropDownWidth={wp("40%")}
                                                            />
                                                        </GlobalStyled.Col>
                                                        <GlobalStyled.Col width="50" flexDirection="row">
                                                            <HeightSelect
                                                                placeHolder="시험지 이름"
                                                                title="시험 이름을 선택하세요."
                                                                width={wp("40%")}
                                                                options={testPaperOptions}
                                                                value={testPaperSelect}
                                                                isActive={true}
                                                                onChange={handleOnChangeTestPaperSelect}
                                                                dropDownWidth={wp("40%")}
                                                            />
                                                        </GlobalStyled.Col>
                                                        <GlobalStyled.Col width="50" flexDirection="row">
                                                            <SearchInput
                                                                title="문항번호"
                                                                name="questionNumber"
                                                                value={questionNumber.questionNumber}
                                                                onChange={onChangeQuestionNumber}
                                                                onClickSearchButton={handleSubmitSearchButton}
                                                                dropDownWidth={wp("40%")}
                                                            />
                                                        </GlobalStyled.Col>
                                                    </>
                                                )}
                                        </Styled.CardHeaderWrapper>

                                    </Styled.CardWrapper>
                                </GlobalStyled.Card>
                                <GlobalStyled.Card>
                                    <Styled.CardWrapper>
                                        <Styled.CardContentWrapper >
                                            <CardHeaderCustom
                                                title="어휘 분석"
                                                content="모르는 단어를 더블클릭하여 단어장에 추가하세요."
                                            >
                                                <Styled.CardContainer>
                                                    <StageVocabularyList
                                                        infos={stageVocabularyInfos}
                                                        vocabularyOnClick={vocabularyClickHandler}
                                                    />
                                                </Styled.CardContainer>
                                            </CardHeaderCustom>
                                        </Styled.CardContentWrapper>
                                    </Styled.CardWrapper>
                                </GlobalStyled.Card>
                                <GlobalStyled.Card>
                                    <Styled.CardWrapper>
                                        <Styled.CardContentWrapper >
                                            <CardHeaderCustom title="유사문항 분석" content="내용">
                                                <Styled.CardContainer>
                                                    <SimilarQuestionCardList
                                                        infos={similarQuestionInfo}
                                                        onClickButton={onClickButtonForTopic}
                                                        width={wp("30")}
                                                    /> 
                                                </Styled.CardContainer>
                                            </CardHeaderCustom>
                                        </Styled.CardContentWrapper>
                                    </Styled.CardWrapper>
                                </GlobalStyled.Card>
                                <GlobalStyled.Card>
                                    <Styled.CardWrapper>
                                        <Styled.CardContentWrapper>
                                            <CardHeaderCustom title="예측 오답률 분석" content="내용">
                                                <Styled.CardContainer>
                                                    <IncorrectPredictionCardList
                                                        infos={incorrectPredictionInfos}
                                                        width="90px"
                                                        inCorrectRate= {60}
                                                        avgInCorrectRate= {64}
                                                        userName= '유동훈'
                                                    />
                                                </Styled.CardContainer>
                                            </CardHeaderCustom>
                                        </Styled.CardContentWrapper>
                                    </Styled.CardWrapper>
                                </GlobalStyled.Card>
                                <GlobalStyled.Card>
                                    <Styled.CardWrapper>
                                        <Styled.CardContentWrapper>
                                            <CardHeaderCustom title="주요구문 분석" content="내용">
                                                <Styled.CardContainer>
                                                    <MainSyntaxList
                                                        infos={mainSyntaxInfos}
                                                        onClickButton={onClickButtonForSyntax}
                                                    />
                                                </Styled.CardContainer>
                                            </CardHeaderCustom>
                                        </Styled.CardContentWrapper>
                                    </Styled.CardWrapper>
                                </GlobalStyled.Card>
                                <GlobalStyled.Card>
                                    <Styled.CardWrapper>
                                        <Styled.CardContentWrapper >
                                            <CardHeaderCustom title="지문 난이도 분석" content="내용">
                                                <Styled.CardContainer>
                                                    <ExampleDifficultyCardList infos={exampleDifficultyInfos} />
                                                </Styled.CardContainer>
                                            </CardHeaderCustom>
                                        </Styled.CardContentWrapper>
                                    </Styled.CardWrapper>
                                </GlobalStyled.Card>
                                <GlobalStyled.Card>
                                    <Styled.CardWrapper>
                                        <Styled.CardBottomWrapper>
                                            <GlobalStyled.CenterRow >
                                                <Styled.HaveProblemText>
                                                    {`현재 담은 문제수 : ${String(numOfSavedProblem)}`}
                                                </Styled.HaveProblemText>
                                            </GlobalStyled.CenterRow>
                                        </Styled.CardBottomWrapper>

                                        <Styled.CreateTestPaperWrapper>
                                            <CreateTestPaperInput
                                                width="300"
                                                name="createTestPaper"
                                                value={state.createTestPaper}
                                                onChange={onChange}
                                                onSubmit={makeSearchTestHandler}
                                                placeholder={moment().format("MM월 DD일 문항분석")}
                                            />
                                        </Styled.CreateTestPaperWrapper>
                                        <Styled.LearningButtonsWrapper
                                            isActive={createTestPaperInfos.name}
                                        >
                                            <GlobalStyled.CenterRow >
                                                <Text>{createTestPaperInfos.name}</Text>
                                            </GlobalStyled.CenterRow>
                                            <LearningButtons
                                                isActive={createTestPaperInfos.name}
                                                onClickPdfDownloadButton={pdfLinkHandler}
                                                onClickSolveNowButton={onClickSolveNowButton}
                                                onClickGradingButton={onClickGradingButton}
                                            />
                                        </Styled.LearningButtonsWrapper>
                                        <Styled.CardBottomWrapper>
                                            <TestPaperCreateHistory
                                                infos={testPaperHistoryInfos}
                                                isActive={isCreateTestPaperHistory}
                                                onClickButton={handleOnClickCreateTestPaperHistory}
                                                handleOnClickTodayLearningSolve={
                                                    handleOnClickTodayLearningSolve
                                                }
                                                handleOnClickTodayLearningDownload={
                                                    handleOnClickTodayLearningDownload
                                                }
                                                handleOnClickTodayLearningScoring={
                                                    handleOnClickTodayLearningScoring
                                                }
                                            />
                                        </Styled.CardBottomWrapper>
                                    </Styled.CardWrapper>
                                </GlobalStyled.Card>
                            </Styled.ContentWrapper>
                        </GlobalStyled.Container>

                    </ImageBackground>
                </ScrollView>
            </SafeAreaView >


        </GestureRecognizer>
    );
}

export default SearchScreen