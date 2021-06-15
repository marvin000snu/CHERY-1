import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import styled from "styled-components/native"
import AsyncStorage from '@react-native-async-storage/async-storage';
const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@is_login')
      if(value !== null) {
          alert(value)
      }
    } catch(e) {}
  }
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
    }
});
const cardInfos = [
    {
        imgSrc: require('../../images/icon/today_problem.svg'),
        title: '매일 학습',
        to: "routerUrl.everydayPage",
        screenName: "Daily"
    },
    {
        imgSrc: require('../../images/icon/weakness_learning.svg'),
        title: '약점 학습',
        to: "routerUrl.weaknessLearningPage",
        screenName: "Weak"
    },
    {
        imgSrc: require('../../images/icon/question_analysis.svg'),
        title: '문항 분석',
        to: "routerUrl.questionAnalysisPage",
        screenName: "Search"
    },
    {
        imgSrc: require('../../images/icon/learning_status.svg'),
        title: '학습 현황',
        to: "outerUrl.learningStatusPage",
        screenName: "Status"
    },
]
function HomeScreen({ navigation }) {
    useEffect(() => {}, [])
    const _onGLContextCreate = (gl) => {
        var ctx = new Expo2DContext(gl);

        ctx.fillStyle = "gray";
        ctx.fillRect(20, 40, 100, 100);
        ctx.flush();
    }
    const [state, setState] = useState({ language: "java" })
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => { navigation.navigate("diagnosticTestPage1") }}><Text>diagnosticTestPage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("diagnosticTestPage2") }}><Text>diagnosticTestPage2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("diagnosticTestPage3") }}><Text>diagnosticTestPage3</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("diagnosticTestPage4") }}><Text>diagnosticTestPage4</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("diagnosticTestPage5") }}><Text>diagnosticTestPage5</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("diagnosticTestPage6") }}><Text>diagnosticTestPage6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("DirectSolvePage") }}><Text>DirectSolvePage</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("DirectSolvePage") }}><Text>DirectSolvePage</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("diagnosticTestPage0") }}><Text>diagnosticTestPage0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("App") }}><Text>App</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("DailyLearningPage0") }}><Text>DailyLearningPage0</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("DailyLearningPage1") }}><Text>DailyLearningPage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("DailyLearningPage2") }}><Text>DailyLearningPage2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("QuestionAnalysisPage1") }}><Text>QuestionAnalysisPage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("QuestionAnalysis8") }}><Text>QuestionAnalysis8</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("QuestionAnalysis7") }}><Text>QuestionAnalysis7</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("QuestionAnalysis6") }}><Text>QuestionAnalysis6</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("QuestionAnalysis9") }}><Text>QuestionAnalysis9</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("QuestionAnalysis10") }}><Text>QuestionAnalysis10</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("WeakLearningPage1") }}><Text>WeakLearningPage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("WeakLearningPage1") }}><Text>WeakLearningPage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("WeakLearningPage1") }}><Text>WeakLearningPage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("WeakLearningPage1") }}><Text>WeakLearningPage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("WeakLearningPage1") }}><Text>WeakLearningPage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("WeakLearningPage1") }}><Text>WeakLearningPage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("WeakLearningPage2") }}><Text>WeakLearningPage2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("GradePage1") }}><Text>GradePage1</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("GradePage2") }}><Text>GradePage2</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate("GradePage3") }}><Text>GradePage3</Text></TouchableOpacity>
            <TouchableOpacity onPress={getData}><Text>getData</Text></TouchableOpacity>
        </View>
    );
}

export default HomeScreen

