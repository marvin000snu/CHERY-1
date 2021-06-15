//data를 분단위로 받아서 이를 format하는게 좋다고 생각해서 일단 분단위로 받는다고 생각했습니다
//추후에 받아오는 데이터 따라서 처리하도록 하겠습니다
import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import BarCharts from "../Atom/BarChart";
const Styled = {
  body: styled.View`
    margin-top: ${hp(2)};
    width: ${wp(100)};
    height: ${hp(27)}px;
    justify-content: flex-start;
    align-items: center;
    display:flex;
    flex-direction:column
    border-radius:10;
    overflow: hidden;
  `,
  Title: styled.View`
    width: ${wp(40)};
    height: ${hp(4)};
    flex-flow: row;
    margin-bottom: ${hp(2)};
  `,
  barChart: styled.View`
    width: ${wp(50)};
    height: ${wp(50)};
    background-color: white;
    flex-flow: column;
    align-items: center;
  `,
};

const StudyHistory = (props) => {
  const {studyTime, data,type} =props
  return (
    <Styled.body backgroundColor="#F5F5F5" >
          <BarCharts studyTime={studyTime} data={data} type={type} />
    </Styled.body>
  );
};

export default StudyHistory;
