import React from "react";
import styled from "styled-components";
import { Header } from "../../components/Molecules/Header";
import { QuestionAnalysisBox } from "../../components/Molecules/QuestionAnalysisBox";
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
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
        backgroundColor: 'white',
    },
});
const QuestionAnalysisPage2 = function () {
    const Styled = {
        body: styled.View`
      width: 100%;
      height: 1102px;
      display: flex;
      justify-content: flex-start;
      flex-flow: column;
      align-items: center;
      background-color: #f0f3f8;
    `,
        wrap: styled.View`
      width: 95%;
      height: 970px;
      background-color: #fff;
      border-radius: 20px;
      border: 1px solid #eee;
      display: flex;
      justify-content: flex-start;
      flex-flow: column;
      align-items: center;
      margin:30px 0 35px 0;
    `,
        table: styled.View`
      width: 96%;
      height: 430px;
      margin-top: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,
        tabletop: styled.View`
      width: 100%;
      height: 27px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -10px;
      flex-direction:row;
    `,

        tableblank: styled.View`
      width: 25%;
      height: 27px;
    `,

        tablebox: styled.View`
      width: 75%;
      height: 27px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction:row;
    `,
        tabletext: styled.Text`
      width: 33.33%;
      height: 27px;
      font-size: 14px;
      color: #1b2c49;
      text-align : center;
      line-height:27px;
      margin-left: 1px;
    `,
        tabledate: styled.View`
      width: 100%;
      height: 37px;
      background-color: #fff;
      margin-top: 9px;
      border-radius: 10px;
      border: 1px solid #eff2f7;
    `,
        tabledatetext: styled.Text`
      width: 111px;
      height: 100%;
      background-color: #eff2f7;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      text-align : center;
      line-height: 40px;
    `,
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator= {false}>
                <Styled.body>
                    <Header HeaderTitle="문항분석 설정" />
                    <Styled.wrap>
                    <QuestionAnalysisBox />
                        <Styled.table>
                            <Styled.tabletop>
                                <Styled.tableblank></Styled.tableblank>
                                <Styled.tablebox>
                                    <Styled.tabletext>풀러가기</Styled.tabletext>
                                    <Styled.tabletext>채점하기</Styled.tabletext>
                                    <Styled.tabletext>PDF 다운</Styled.tabletext>
                                </Styled.tablebox>
                            </Styled.tabletop>
                            <Styled.tabledate>
                                <Styled.tabledatetext>08-23 (일)</Styled.tabledatetext>
                            </Styled.tabledate>
                            <Styled.tabledate>
                                <Styled.tabledatetext>08-24 (월)</Styled.tabledatetext>
                            </Styled.tabledate>
                            <Styled.tabledate>
                                <Styled.tabledatetext>08-25 (화)</Styled.tabledatetext>
                            </Styled.tabledate>
                            <Styled.tabledate>
                                <Styled.tabledatetext>08-26 (수)</Styled.tabledatetext>
                            </Styled.tabledate>
                            <Styled.tabledate>
                                <Styled.tabledatetext>08-27 (목)</Styled.tabledatetext>
                            </Styled.tabledate>
                            <Styled.tabledate>
                                <Styled.tabledatetext>08-28 (금)</Styled.tabledatetext>
                            </Styled.tabledate>
                            <Styled.tabledate>
                                <Styled.tabledatetext>08-29 (토)</Styled.tabledatetext>
                            </Styled.tabledate>
                        </Styled.table>
                    </Styled.wrap>
                </Styled.body>
            </ScrollView>
        </SafeAreaView>
    );
};
export { QuestionAnalysisPage2 };
