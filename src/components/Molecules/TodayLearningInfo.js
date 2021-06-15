import React, { useState } from 'react';
import styled, { css } from 'styled-components/native'
import moment from 'moment'
import "moment/locale/ko";
import {Text} from 'react-native'
import GlobalStyled from '../../style/GlobalStyled'

import CheckLearning from '../Atoms/CheckLearning'
import Popup from '../Atoms/Popup';

import CustomMenuList from './CustomMenuList'
import theme from '../../style/theme';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Styled = {
    Body: styled(GlobalStyled.Card)`
        padding : 0;
        width : 100%;
        flex-direction : row;
        ${GlobalStyled.CenterCol} {
            padding : 5px 0;
            flex-direction :row
        }
    `,
    TitleCol: styled(GlobalStyled.CenterCol)`
        background-color : ${props => props.theme.color.lightBlue};  
        border-top-left-radius : ${hp("5%")};
        border-top-right-radius: 0;
        border-bottom-right-radius : 0; 
        border-bottom-left-radius : ${hp("5%")} ;
        flex-direction :row;
        height : ${hp("4.5%")};
    `,
    Maincol : styled(GlobalStyled.CenterCol)`
        height : ${hp("4.5%")};
        border-top-left-radius : 10px;
        border-top-right-radius: 100px;
        border-bottom-right-radius : 0; 
        border-bottom-left-radius : 10px
        color : red ;
    `

}

const TodayLearningInfo = (props) => {

    const { info, isClickTodayProblem, onClickTodayProblem,
        onClickPDF, onClickDownload, onClickScoring } = props

    const { title, isMakingTestPaper, isScoring, result, isActive, isToday } = info

    const [isScoringPopup, setIsScoringPopup] = useState(false);

    const handleClickTodayProblem = () => {
        onClickTodayProblem(info)
    }

    const handleOnClickMakingTestPaperPopup = () => {
        // setIsTestPaperPopup(true)
    }

    const handleOnClickScoringPaperPopup = () => {
        setIsScoringPopup(true)
    }

    const handleOnClickPDF = () => {
        onClickPDF(info)
    }

    const handleOnClickDownload = () => {
        onClickDownload(info)
    }

    const handleOnClickScoring = () => {
        onClickScoring(info)
    }

    const scoringPopupInfo = [
        {
            title: '바로 풀기',
            onClick: () => {
                handleOnClickPDF()
                setIsScoringPopup(false);
            }
        },
        {
            title: 'PDF 다운로드',
            onClick: () => {
                handleOnClickDownload()
                setIsScoringPopup(false);
            }
        },
        {
            title: '채점하기',
            onClick: () => {
                handleOnClickScoring()
                setIsScoringPopup(false);
            }
        },
    ]

    const popupMenuCss = css`
        display : flex;
        width : 100%;
        color : ${props => props.theme.color.white};
        background-color : ${props => props.theme.color.indigo};
        align-items : center;
        justify-content : center;
        padding : 1rem 0;
        cursor : default;
        :active {
            color : ${props => props.theme.color.white};
        }
        :hover {
            color : ${props => props.theme.color.white};
            background-color : ${props => props.theme.color.lightIndigo};
        }
        border-bottom : 0;
    `

    return (
        <Styled.Body>
            <Styled.TitleCol
                width="25"
                borderRadius={10}
                opacity={isActive ? 1 : 0.2}
                flexDirection="row"
            >
                <Text>
                    {title}
                </Text>
            </Styled.TitleCol>
            <Styled.Maincol width="25" flexDirection="row">
                {isToday ? (
                    <>
                        {isMakingTestPaper ? (
                            <CheckLearning
                                onClick={handleOnClickMakingTestPaperPopup}
                                isLearning={isMakingTestPaper}
                            />
                        ) : (
                                <GlobalStyled.ActiveButton
                                    onClick={isClickTodayProblem ? () => { } : handleClickTodayProblem}
                                    isActive={!isClickTodayProblem}
                                >
                                    <Text>

                                        오늘의 문제 다운로드
                                    </Text>
                                </GlobalStyled.ActiveButton>
                            )}
                    </>
                ) : (<CheckLearning
                    onClick={handleOnClickMakingTestPaperPopup}
                    isLearning={isMakingTestPaper}
                />
                    )}

            </Styled.Maincol>
            <Styled.Maincol width="25" flexDirection="row">
                {isMakingTestPaper ?
                    <Popup
                        type="click"
                        isPopup={isScoringPopup}
                        trigger={
                            <CheckLearning
                                onClick={handleOnClickScoringPaperPopup}
                                isLearning={isScoring}
                            />
                        }
                    >
                        <CustomMenuList
                            css={popupMenuCss}
                            infos={scoringPopupInfo}
                            theme={theme}
                        />
                    </Popup> : <CheckLearning
                        onClick={handleOnClickScoringPaperPopup}
                        isLearning={isScoring}
                    />
                }
            </Styled.Maincol>
            <Styled.Maincol width="25" flexDirection="row">
                <Text>
                    {result}
                </Text>

            </Styled.Maincol>
            </Styled.Body>
    )
}


TodayLearningInfo.defaultProps = {
    info: {
        date: moment(),
        isActive: true,
        isToday: false,
        isMakingTestPaper: true,
        isScoring: true,
        result: false,
    },
    onClickTodayProblem: () => { },
}

export default TodayLearningInfo;