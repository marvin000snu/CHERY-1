import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import TodayLearningList from './TodayLearningList';
import theme from '../../style/theme'
import Icon from 'react-native-vector-icons/AntDesign'
import {widthPercentageToDP as wp ,heightPercentageToDP as hp} from 'react-native-responsive-screen'
const Styled = {
    Body: styled(GlobalStyled.Row)`
        flex-direction : column;
    `,
    DownCursorWrapper: styled(GlobalStyled.Row)`
        display : flex;
        align-items: center
        width : auto;
        margin-left : 8px;
        padding-bottom : 2px;
    `
}

const TestPaperCreateHistory = (props) => {

    const { isActive, onClickButton, infos, handleOnClickTodayLearningSolve, handleOnClickTodayLearningDownload, handleOnClickTodayLearningScoring } = props

    const styles = StyleSheet.create({
        button: {
            display: "flex",
            flexDirection: "row",
            padding: 0.25,
            borderRadius: 1,
            alignItems: "center",
            justifyContent: "center",
            color: "blue",
            backgroundColor: theme.color.realBlueGray,
            height: 35,
            width: "90%",
            borderRadius: 5,
           

        },
        text: {
            color: theme.color.white,
            marginRight : wp("3"),
        }
    });
    return (
        <Styled.Body>
            <GlobalStyled.CenterRow bottom={isActive ? 1 : 0}>
                <TouchableOpacity style={styles.button} onPress={onClickButton} title="시험지 생성 이력">
                    <Text style={styles.text}>시험지 생성 이력</Text>
                    <Icon name={isActive ? "caretup" :"caretdown" }/>
                </TouchableOpacity>
            </GlobalStyled.CenterRow>
            <GlobalStyled.ActiveRow isActive={isActive}>
                <TodayLearningList
                    infos={infos}
                    onClickSolve={handleOnClickTodayLearningSolve}
                    onClickDownload={handleOnClickTodayLearningDownload}
                    onClickScoring={handleOnClickTodayLearningScoring}
                />
            </GlobalStyled.ActiveRow>
        </Styled.Body>

    );
};


TestPaperCreateHistory.defaultProps = {
    button: {
        colorTheme: 'indigo',
        width: '11rem',
        padding: '0.5rem',
    },
    onClickButton: function () { },
    infos: [],
}

export default TestPaperCreateHistory;