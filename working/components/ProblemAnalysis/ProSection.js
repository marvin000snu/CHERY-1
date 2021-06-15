import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Problem from "./Problem";
import GraphWrap from "./GraphWrap";
import Menu from "./atom/Menu";
import Answer from "./atom/Answer";
import AnswerSheet from "../../../src/components/Organisms/AnswerSheet";
import useAPI from "../../../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import GlobalStyled from "../../../src/style/GlobalStyled";
import { Text, TouchableOpacity } from "react-native";
const Styled = {
  Section: styled.View`
    width: ${wp(100)};
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 80px;
  `,
  MenuBar: styled.View`
    width: 90%;
    height: 30px;
    border: 1px solid #cdcdcd;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    margin-top: 25px;
  `,
};

const ProSection = (props) => {
  const { MainText, Explanation, GraphPercentage, NavColor, setNavColor, code, backHandler } = props;
  const [MenuColor, setMenuColor] = useState(0);
  const [MenuNum, setMenuNum] = useState(["해설", "해석"]);
  const [typeOfAnswer, setTypeOfAnswer] = useState("");
  const [result, setResult] = useState({});
  const [selectList, setSelectList] = useState([]);
  const [wordList, setWordList] = useState([
    { word: "apple", korea: "사과" },
    { word: "apple", korea: "사과" },
  ]);
  const [API] = useCallback(useAPI(), []);
  const [answerInterpretation, setAnswerInterpretation] = useState(["그리고 그것들(의형성)이 다시 진행하기 시작한다면 우리는 정확히 무엇을 할 것인가? 그것들은 티엔티(TNT)나 아마 핵 미사일로 폭파할 것인가? 의심할 바 없이 우리는 그렇게 하겠지만, 이것을 고려해보라. 1964년에 북미에서 기록된 것 중 가장 커다란 지진이 2천 개의 핵폭탄에 상당하다는 것인 20만 메가톤의 응집된 함으로 알래스카를 뒤흔들었다. 거의 3천마일 떨어진 텍사스에서 물이 수영장 밖으로 철벅철벅 튀었다. \n앵커리지의 어떤 거리는 20피트 가라앉았다. 그 지진은 2만4천 제곱 마일의 황무지를 황폐화 시켰는데, 그 황무지의 많은 부분이 빙하로 덮여 있었다. 그리고 이 모든 힘이 알래스카의 빙하에 어떤 영향을 미쳤는가? 아무런 영향도 미치지 못했다."]);

  const WordComponent = (props) => {
    const v = props.v;
    const idx = props.idx;
    return (
      <GlobalStyled.ViewCol
        width="auto"
        height="60px"
        style={{ backgroundColor: selectList.includes(idx) ? "#5471FF" : "#EDEFF4", borderRadius: 10, paddingHorizontal: 10, margin: 5 }}
        as={TouchableOpacity}
        onPress={() => {
          var temp = [...selectList];
          if (temp.includes(idx)) {
            temp.splice(temp.indexOf(idx), 1);
            setSelectList(temp);
          } else {
            temp.push(idx);
            setSelectList(temp);
          }
        }}
      >
        <GlobalStyled.ViewRow height="30px" width="auto">
          <Text style={{ fontSize: 14, textAlign: "center", color: selectList.includes(idx) ? "white" : "#1B2C49", fontWeight: "bold" }}>{v.word}</Text>
        </GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow height="30px" width="auto">
          <Text style={{ fontSize: 11, textAlign: "center", color: selectList.includes(idx) ? "white" : "#909398" }}>{v.korea}</Text>
        </GlobalStyled.ViewRow>
      </GlobalStyled.ViewCol>
    );
  };
  const answerHandler = async () => {
    try {
      const userToken = await AsyncStorage.getItem("@userToken");
      const params = {
        userId: jwt_decode(userToken)["cognito:username"],
        code: code,
      };
      const result = await API.answerSheet.getAnswerSheetInfo(params);
      const { data } = await API.search.getKorea(params);
      setAnswerInterpretation([data.text]);
      setResult(result.data.result);
      setTypeOfAnswer(result.data.type);
    } catch (err) {
      alert("해설을 준비중인 문항입니다.");
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    answerHandler();
    backHandler();

  }, []);
  const selectAllHandler = () => {
    setSelectList([...Array(wordList.length).keys()]);
  };
  const clearHandler = () => {
    setSelectList([]);
  };
  const saveVocaHandler = async () => {
    try {
      var temp = [...wordList];
      temp = temp.filter((v, idx) => {
        return selectList.includes(idx);
      });
      temp = temp.map((v) => {
        return v.word;
      });
      const userToken = await AsyncStorage.getItem("@userToken");
      const params = {
        body: {
          voca: temp,
        },
        userId: jwt_decode(userToken)["cognito:username"],
      };
      await API.voca.addVoca(params);
    } catch (err) {
      alert(err);
    }
  };
  if (NavColor === 0) {
    return (
      <Styled.Section>
        <GraphWrap GraphPercentage={GraphPercentage} />
        <Problem MainText={MainText} Explanation={Explanation} />
      </Styled.Section>
    );
  } else if (NavColor === 1) {
    if (MenuColor === 0) {
      return (
        <Styled.Section>
          <Styled.MenuBar>
            {MenuNum.map((v, index) => {
              return <Menu index={index} MenuColor={MenuColor} setMenuColor={setMenuColor} text={v} />;
            })}
          </Styled.MenuBar>
          <AnswerSheet type={typeOfAnswer} result={result} />
        </Styled.Section>
      );
    } else if (NavColor === 1) {
      return (
        <Styled.Section>
          <Styled.MenuBar>
            {MenuNum.map((v, index) => {
              return <Menu index={index} MenuColor={MenuColor} setMenuColor={setMenuColor} text={v} />;
            })}
          </Styled.MenuBar>
          <Answer answerExplanation={answerInterpretation} />
        </Styled.Section>
      );
    }
  } else {
    return (
      <Styled.Section>
        <GlobalStyled.ViewRow style={{ flexWrap: "wrap", flex: 1 }}>
          <GlobalStyled.ViewRow height="60px" justifyContent="space-between" width="90%">
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#1B2C49" }}>스크랩하기</Text>
            <GlobalStyled.ViewRow width="180px" justifyContent="space-between">
              <GlobalStyled.ViewRow onPress={selectAllHandler} as={TouchableOpacity} width="80px" height="30px" style={{ borderRadius: 5, borderWidth: 1, borderColor: "#5571FF", backgroundColor: "white" }}>
                <Text style={{ color: "#5571FF", fontSize: 16 }}>모두선택</Text>
              </GlobalStyled.ViewRow>
              <GlobalStyled.ViewRow onPress={clearHandler} as={TouchableOpacity} width="80px" height="30px" style={{ borderRadius: 5, backgroundColor: "#EDEFF4" }}>
                <Text style={{ color: "#909398", fontSize: 16 }}>선택 초기화</Text>
              </GlobalStyled.ViewRow>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          {wordList.map((v, idx) => {
            return <WordComponent v={v} idx={idx} />;
          })}
        </GlobalStyled.ViewRow>

        <GlobalStyled.ViewRow height="100px">
          <GlobalStyled.ViewRow width="200px" height="50px" style={{ backgroundColor: "#5571FF", borderRadius: 10 }} as={TouchableOpacity} onPress={saveVocaHandler}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>스크랩하기</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewRow>
      </Styled.Section>
    );
  }
};
export default ProSection;
