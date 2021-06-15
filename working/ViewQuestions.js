import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView, StyleSheet } from "react-native";
import ViewQuestionSlideBox from "./components/ViewQuestions/ViewQuestionSlideBox";
import Search from "./svg/Search";
import ViewBox from "./components/ViewQuestions/ViewBox";
import Modal from "react-native-modal";
import SearchComponent from "../working/Search";
import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

const Styled = {
  background: styled.View`
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    background-color: #fff;
    padding-bottom: 100px;
  `,
  Section: styled.View`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 85px;
  `,
  TodayWrongAnswer: styled.View`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  TitleBox: styled.View`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  `,
  Title: styled.Text`
    font-size: 20px;
    font-family: NotoSansKR-Bold;
    font-weight: bold;
    color: #1b2c49;
  `,
  TitleInfo: styled.Text`
    font-size: 14px;
    font-weight: 400;
    font-family: NotoSansKR-Bold;
    color: #1b2c49;
  `,
  TitleInfoStrong: styled.Text`
    font-size: 14px;
    font-weight: bold;
    font-family: NotoSansKR-Bold;
    color: #1b2c49;
  `,
  SlideWrap: styled.View`
    width: 90%;
    height: 151px;
  `,
  SearchBox: styled.View`
    width: 90%;
    height: 44px;
    border-radius: 44px;
    border: 1px solid #5571ff;
    margin-top: 26px;
    margin-bottom: 34px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  `,
  SearchBtn: styled.TouchableOpacity`
    width: 21px;
    height: 21px;
    margin-left: 11px;
  `,
  SearchInput: styled.TextInput`
    width: 85%;
    height: 100%;
    padding: 0;
    margin: 0;
    margin-left: 11px;
  `,
  ScrollBox: styled.View`
    width: 90%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: 10px;
  `,
  Footer: styled.View`
    width: 100%;
    height: 86px;
    border-top-width: 1px;
    border-color: #dbdcdc;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: flex-start;
  `,
  FooterMenuText: styled.Text`
    font-family: NotoSansKR-Bold;
    font-weight: bold;
    font-size: 13px;
    color: #bbc2cf;
  `,
};

const styles = StyleSheet.create({
  X_Scroll: {
    display: "flex",
    justifyContent: "flex-start",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",

    overflow: "hidden",
  },
  Scroll: {
    display: "flex",
    justifyContent: "flex-start",
    height: 300,
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
});
const ViewQuestions = (props) => {
  const [TestData, setTestData] = useState([]);
  const [WrongData, setWrongData] = useState([
    {
      id: 4979,
      user_id: "marvin06",
      code: 160030938,
      time: "2021-05-09T18:50:45.000Z",
      number: 1,
      type: "문장삽입",
      selected_ans: null,
      correct: 0,
      ans: 0,
    },
    {
      id: 4980,
      user_id: "marvin06",
      code: 180050257,
      time: "2021-05-09T18:50:45.000Z",
      number: 2,
      type: "문장삽입",
      selected_ans: null,
      correct: 0,
      ans: 0,
    },
    {
      id: 4981,
      user_id: "marvin06",
      code: 200030319,
      time: "2021-05-09T18:50:45.000Z",
      number: 3,
      type: "심경,어조,분위기찾기",
      selected_ans: null,
      correct: 0,
      ans: 0,
    },
    {
      id: 4982,
      user_id: "marvin06",
      code: 180070064,
      time: "2021-05-09T18:50:45.000Z",
      number: 4,
      type: "제목찾기",
      selected_ans: null,
      correct: 0,
      ans: 0,
    },
    {
      id: 4983,
      user_id: "marvin06",
      code: 140030936,
      time: "2021-05-09T18:50:45.000Z",
      number: 5,
      type: "문장삽입",
      selected_ans: null,
      correct: 0,
      ans: 0,
    },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [API] = useCallback(useAPI(), []);
  const [code, setCode] = useState(0);
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const userToken = await AsyncStorage.getItem("@userToken");
        const params = {
          userId: jwt_decode(userToken)["cognito:username"],
        };
        const { data } = await API.search.getSearchPageInfo(params);
        setWrongData(data.wrongList);
        console.log(data.testList);
        console.log("data.testList");
        setTestData(data.testList);
      } catch (err) {
        alert(err);
      } finally {
      }
    };
    useEffectAsyncFunction();
  }, []);
  const backHandler = () => {
    setModalVisible(false);
  };
  const searchHandler = async () => {
    const params = {
      code: code,
    };
    const {
      data: { result },
    } = await API.search.isValid(params);
    if (result == 1) {
      setModalVisible(true);
    } else {
      alert("올바르지 않은 문항코드입니다.");
    }
  };
  const moveHandler = ()=>{
    
  }
  return (
    <Styled.background>
      <Modal style={{ padding: 0, margin: 0, backgroundColor: "white" }} isVisible={modalVisible}>
        <SearchComponent backHandler={backHandler} code={code} />
      </Modal>
      <Styled.Section>
        <Styled.TodayWrongAnswer>
          <Styled.TitleBox>
            <Styled.Title>오늘의 오답</Styled.Title>
            <Styled.TitleInfo>
              오늘 틀린문항을 다시 틀리지 않게 <Styled.TitleInfoStrong>꼼꼼하게</Styled.TitleInfoStrong> 분석해줘요.
            </Styled.TitleInfo>
          </Styled.TitleBox>
        </Styled.TodayWrongAnswer>
        <Styled.SlideWrap>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator= {false} contentContainerStyle={styles.X_Scroll}>
            {WrongData.map((v, idx) => {
              return (
                <ViewQuestionSlideBox
                  WrongData={v}
                  onPress={() => {
                    setCode(v.code);
                    setModalVisible(true);
                  }}
                />
              );
            })}
          </ScrollView>
        </Styled.SlideWrap>
        <Styled.SearchBox>
          <Styled.SearchBtn onPress={searchHandler}>
            <Search />
          </Styled.SearchBtn>
          <Styled.SearchInput placeholder="문항번호를 입력해주세요. 예시: 180050357" onChangeText={setCode} />
        </Styled.SearchBox>
        <Styled.TitleBox>
          <Styled.Title>전체 시험지 DB</Styled.Title>
          <Styled.TitleInfo>그동안 내가 푼 시험지에서 분석하고 싶은 문항을 찾아봐요.</Styled.TitleInfo>
        </Styled.TitleBox>
        <Styled.ScrollBox>
          <ScrollView contentContainerStyle={styles.Scroll} showsVerticalScrollIndicator= {false}>
            {TestData.map((v) => {
              return <ViewBox textData={v} moveHandler={moveHandler}/>;
            })}
          </ScrollView>
        </Styled.ScrollBox>
      </Styled.Section>
    </Styled.background>
  );
};
export default ViewQuestions;
