import React from "react";
import styled from "styled-components/native";

const Footer = function () {
  const Styled = {
    footer: styled.View`
      width: 100%;
      height: 70px;
      background-color: #fff;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    ftbox: styled.View`
      width: 20%;
      height: 100%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      flex-flow: column;
      align-items: center;
    `,
    ftlogo: styled.View`
      width: 20px;
      height: 20px;
      background-color: darkgray;
      margin-top: 17px;
    `,
  };

  return (
    <Styled.footer>
      <Styled.ftbox>
        <Styled.ftlogo></Styled.ftlogo>
        <p
          style={{
            width: "40px",
            height: "17px",
            backgroundColor: "#fff",
            marginTop: "5px",
            marginLeft: "2px",
            fontSize: "9px",
            color: "#BBC2CF",
          }}
        >
          매일학습
        </p>
      </Styled.ftbox>
      <Styled.ftbox>
        <Styled.ftlogo></Styled.ftlogo>
        <p
          style={{
            width: "40px",
            height: "17px",
            backgroundColor: "#fff",
            marginTop: "5px",
            marginLeft: "2px",
            fontSize: "9px",
            color: "#BBC2CF",
          }}
        >
          약점학습
        </p>
      </Styled.ftbox>
      <Styled.ftbox>
        <Styled.ftlogo></Styled.ftlogo>
        <p
          style={{
            width: "40px",
            height: "17px",
            backgroundColor: "#fff",
            marginTop: "5px",
            marginLeft: "2px",
            fontSize: "9px",
            color: "#BBC2CF",
          }}
        >
          문항분석
        </p>
      </Styled.ftbox>
      <Styled.ftbox>
        <Styled.ftlogo></Styled.ftlogo>
        <p
          style={{
            width: "40px",
            height: "17px",
            backgroundColor: "#fff",
            marginTop: "5px",
            marginLeft: "2px",
            fontSize: "9px",
            color: "#BBC2CF",
          }}
        >
          학습현황
        </p>
      </Styled.ftbox>
      <Styled.ftbox>
        <Styled.ftlogo></Styled.ftlogo>
        <p
          style={{
            width: "60px",
            height: "17px",
            backgroundColor: "#fff",
            marginTop: "5px",
            marginLeft: "9px",
            fontSize: "9px",
            color: "#BBC2CF",
          }}
        >
          마이페이지
        </p>
      </Styled.ftbox>
    </Styled.footer>
  );
};
export {Footer};
