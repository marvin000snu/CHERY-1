import React from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { WordBtn } from "../molecule/WordBtn";

const QuestionAnalysis7 = function () {
  const Styled = {
    body: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: column;
      background-color: #f9fafc;
      width: 100%;
      height: 710px;
    `,
    section: styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      width: 90%;
      background-color: #fff;
      height: 600px;
      border-radius: 8px;
      margin-top: 10px;
    `,
    wordBox: styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      width: 95%;
      height: 600px;
    `,
    wordBox1: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: column;
      width: 100%;
      height: 40%;
      border-top:2px solid #eee;
    `,
    wordBox2: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: column;
      width: 100%;
      height: 30%;
      margin-top:5px;
      border-top:2px solid #eee;
    `,
    wordBox3: styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      width: 100%;
      height: 20%;
      margin-top:5px;
      border-top:2px solid #eee;
    `,
    wordtitle: styled.div`
      width: 100%;
      height: 50px;
      display:flex;
      justify-content: flex-start;
      align-items: center;
    `,
    word: styled.div`
      width: auto;
      height: 20px;
      background-color: #e9eff2;
      border-radius: 10px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #768092;
    `,
    summit: styled.div`
      width: 100%;
      height: 85px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 20px 20px;
    `,
    summitbtn: styled.div`
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    `,
    prevbtn: styled.div`
      width: 40%;
      height: 100%;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #121b50;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    `,
    nextbtn: styled.div`
      width: 40%;
      height: 100%;
      background-color: #d4d7dc;
      border-radius: 5px;
      border: 1px solid #d4d7dc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #fff;
    `,
  };
  return (
    <Styled.body>
      <Header HeaderTitle="어휘 분석" />
      <Styled.section>
        <Styled.wordBox>
          <Styled.wordBox1>
            <Styled.wordtitle>1단계어휘</Styled.wordtitle>
            <WordBtn
              word1="severe"
              word2="establish"
              word3="consistent"
              word4="height"
            />
            <WordBtn
              word1="snake"
              word2="pause"
              word3="phenomenon"
              word4="exhaust"
            />
            <WordBtn
              word1="snake"
              word2="pause"
              word3="phenomenon"
              word4="exhaust"
            />
            <WordBtn
              word1="snake"
              word2="pause"
              word3="phenomenon"
              word4="exhaust"
            />
            <WordBtn
              word1="snake"
              word2="pause"
              word3="phenomenon"
              word4="exhaust"
            />
          </Styled.wordBox1>
          <Styled.wordBox2>
            <Styled.wordtitle>2단계어휘</Styled.wordtitle>
            <WordBtn
              word1="snake"
              word2="pause"
              word3="phenomenon"
              word4="exhaust"
            />
            <WordBtn
              word1="snake"
              word2="pause"
              word3="phenomenon"
              word4="exhaust"
            />
            <WordBtn
              word1="snake"
              word2="pause"
              word3="phenomenon"
              word4="exhaust"
            />
          </Styled.wordBox2>
          <Styled.wordBox3>
            <Styled.wordtitle>3단계어휘</Styled.wordtitle>
            <WordBtn
              word1="snake"
              word2="pause"
              word3="phenomenon"
              word4="exhaust"
            />
          </Styled.wordBox3>
        </Styled.wordBox>
        <Styled.summit>
          <Styled.summitbtn>
            <Styled.prevbtn>이전</Styled.prevbtn>
            <Styled.nextbtn>다음</Styled.nextbtn>
          </Styled.summitbtn>
        </Styled.summit>
      </Styled.section>
      <Footer />
    </Styled.body>
  );
};
export { QuestionAnalysis7 };
