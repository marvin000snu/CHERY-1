//학습 현황 페이지입니다
//위에 헤더, 그리고 바디는 Molecules로 분리했습니다.
//밑에 wrap은 동훈님이 하셨다고 들었으니, 구현하지 않겠습니다
//양옆으로 넘어가는 슬라이드? 를 어떻게 해야할지 몰라서 일단 molecule까지만 구현했습니다
//type을 학습기록:1, 나의학습현황2, chery멘토3 로 정의합니다
//header click 시 애니메이션을 넣으면 좋겠다고 생각
//학습데이는 setStudyDay([오늘읨누제 정답률, 현재 정답률, CHERY상위]) 로 가져 오시면 됩니다
//
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import { ScrollView, Text } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import GlobalStyled from "../src/style/GlobalStyled";
import { StudyStatus } from "./Molecules/StudyStatus";
import StudyStatusHeader from "./Molecules/StudyStatusHeader";
import StudyHistory from "./Molecules/StudyHistory";
import StudyStatusCheck from "../working/svg/StudyStatusCheck";
import Comment from "../working/svg/Comment"
import useAPI from "../src/hooks/useAPI";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
// import StudyDay from "./Molecules/StudyDay";
// import CheryMentor from "./Molecules/CheryMentor"
const Styled = {
  background: styled.View`
    background-color: #fff;
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  wrap: styled.View`
    margin-bottom: 80px;
    flex: 1;
    background-color: white;
    align-items: center;
  `,
  iconWrap: styled.View`
    flex-flow: row;
    justify-content: space-between;
    width: ${wp(90)};
  `,
};
const StudyStatusPage = (props) => {
  const [userInfo, setUserInfo] = useState({ name: "dummy", data: { grade1: 12, grade2: 24, grade3: 48, kice: 96, swa: 192 } });
  const [type, setType] = useState(1);
  const [mentorMessage, setMentorMessage] = useState("");
  const [studyHistory, setStudyHistory] = useState({ weekResult: [0, 0, 0, 0, 0, 0, 0], monthResult: [0, 0, 0, 0, 0, 0, 0] });
  const [homepageInfo, setHomepageInfo] = useState({});
  const [API] = useCallback(useAPI(), []);
  useEffect(() => {
    asyncFunction = async () => {
      try {
        const userToken = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(userToken);
        const params = {
          userId: deCode["cognito:username"],
        };
        const { data } = await API.progress.progressinfo(params);
        setUserInfo({
          name: deCode.name,
          data: data,
        });
        const { data: statisData } = await API.progress.getStatusPageInfo(params);
        const { data: homepageData } = await API.daily.getHomePageInfo(params);
        const { data : comment }  = await API.progress.getCommentInfo(params);
        console.log("comment")
        console.log(comment)
        setMentorMessage(comment.result)
        setHomepageInfo(homepageData);
        setStudyHistory(statisData);
      } catch (err) {
        console.log(err)
        alert("ERR!");
      } finally {
      }
    };
    asyncFunction();
  }, []);

  return (
    <Styled.background>
      <StudyStatusHeader type={type} setType={setType} title="학습현황" />
      {type == 1 ? (
        <>
          <ScrollView style={{ width: wp(100), flex: 1, marginBottom: 80 }} contentContainerStyle={{ flexGrow: 1, height: "auto", flexDirection: "column", justifyContent: "flex-start", alignItems: "center" }} showsVerticalScrollIndicator= {false}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "black", paddingLeft: 15, width: "100%", textAlign: "left", marginTop: 10 }}>주간 학습기록</Text>
            <StudyHistory data={studyHistory.weekResult} studyTime={studyHistory.weeklySum} type={0} />
            <GlobalStyled.ViewCol style={{ borderBottomWidth: 1, borderColor: "#CDCDCD", width: "95%", height: 10 }}></GlobalStyled.ViewCol>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "black", paddingLeft: 15, width: "100%", textAlign: "left", marginTop: 10 }}>월간 학습기록</Text>
            <StudyHistory data={studyHistory.monthResult} studyTime={studyHistory.monthlySum} type={1} />
            <GlobalStyled.ViewCol style={{ borderBottomWidth: 1, borderColor: "#CDCDCD", width: "95%", height: 10 }}></GlobalStyled.ViewCol>
            <GlobalStyled.ViewRow style={{ width: wp(95), height: wp(35), borderRadius: 10, borderWidth: 1, borderColor: "#CDCDCDCD", marginVertical: 15 }}>
              <GlobalStyled.ViewCol style={{ width: "33.3%" }}>
                <GlobalStyled.ViewCol height="50%" justifyContent="flex-end">
                  <StudyStatusCheck size={wp(12)} />
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewCol height="50%">
                  <Text style={{ fontSize: 12, color: "#1B2C49" }}>오늘의 문제 정답률</Text>
                  <Text style={{ fontSize: 16, color: "#1B2C49", fontWeight: "bold", marginTop: 10 }}>{Math.round(studyHistory.todayRate*100)/100}%</Text>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
              <GlobalStyled.ViewCol style={{ width: "33.3%" }}>
                <GlobalStyled.ViewCol height="50%" justifyContent="flex-end">
                  <StudyStatusCheck size={wp(12)} />
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewCol height="50%">
                  <Text style={{ fontSize: 12, color: "#1B2C49" }}>현재 정답률</Text>
                  <Text style={{ fontSize: 16, color: "#1B2C49", fontWeight: "bold", marginTop: 10 }}>{Math.round(studyHistory.totalRate*100)/100}%</Text>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
              <GlobalStyled.ViewCol style={{ width: "33.3%" }}>
                <GlobalStyled.ViewCol height="50%" justifyContent="flex-end">
                  <StudyStatusCheck size={wp(12)} />
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewCol height="50%">
                  <Text style={{ fontSize: 12, color: "#1B2C49" }}>CHERY 상위</Text>
                  <Text style={{ fontSize: 16, color: "#1B2C49", fontWeight: "bold", marginTop: 10 }}>{Math.round(studyHistory.cheryRate*100)/100}%</Text>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewRow>
          </ScrollView>
        </>
      ) : type == 3 ? (
        <>
          <ScrollView style={{ width: "100%", flex: 1, marginBottom: 85 }} contentContainerStyle={{ flexGrow: 1, flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }} showsVerticalScrollIndicator= {false}>
            <GlobalStyled.ViewRow height="30px">
              <GlobalStyled.ViewCol width="100%" style={{ height: 1, borderBottomWidth: 1, backgroundColor: "green", borderColor:'#CDCDCD' }}></GlobalStyled.ViewCol>
              <GlobalStyled.ViewCol style={{ flex: 1, height: "100%", position: "absolute" }}>
                <Text style={{ backgroundColor: "white", color: "black", paddingHorizontal: 5 }}>{moment().format("YYYY년 MM월 DD일")}</Text>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow style={{width:wp(100),height:"auto", marginVertical:5}}>
              <GlobalStyled.ViewCol style={{ width: wp(20) }} justifyContent="flex-start">
                <Comment size={wp(19)}/>
              </GlobalStyled.ViewCol>
              <GlobalStyled.ViewCol style={{ width: wp(80) }} justifyContent="flex-start">
                <GlobalStyled.ViewCol style={{height:"auto", width:"95%", borderRadius:10, borderWidth:1, borderColor:'#B3B3B4', paddingVertical:10}}>
                  <Text style={{width:"90%", fontSize:15, color:"#1B2C49", textAlign:"justify"}}>{mentorMessage}</Text>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow style={{width:wp(100), hight:"auto", marginVertical:5}}>
              <GlobalStyled.ViewCol style={{ width: wp(20) }} justifyContent="flex-start">
                <Comment size={wp(19)}/>
              </GlobalStyled.ViewCol>
              <GlobalStyled.ViewCol style={{ width: wp(80) }} justifyContent="flex-start">
                <GlobalStyled.ViewCol style={{height:"auto", width:"95%", borderRadius:10, borderWidth:1, borderColor:'#B3B3B4', paddingVertical:10}}>
                  <Text style={{width:"90%", fontSize:15, color:"#1B2C49", textAlign:"justify"}}>{mentorMessage}</Text>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewRow>
          </ScrollView>
        </>
      ) : (
        <ScrollView style={{ marginTop: 5 }} showsVerticalScrollIndicator= {false}>
          <Styled.wrap>
            <StudyStatus data={userInfo.data} allNum={homepageInfo.solveAllNumNum} weekNum={homepageInfo.solvedWeekNum} studyTime={homepageInfo.studyTime} direct={false} />
          </Styled.wrap>
        </ScrollView>
      )}
    </Styled.background>
  );
};

export default StudyStatusPage;
