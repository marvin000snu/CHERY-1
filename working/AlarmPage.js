
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AlarmAdd from "./Molecules/AlarmAdd";
import { ScrollView } from "react-native";
const Styled = {
  background: styled.View`
    background-color: #5471ff;
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  body: styled.View`
    margin-top: ${hp(10)}px;
    background-color: #fff;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: ${hp(2)}px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  `,
};

const AlarmPage = (props) => {
  return (
    <Styled.background>
      <Styled.body>
        <AlarmAdd modalCloseHandler={props.modalCloseHandler} alarmInfos = {props.alarmInfos} setAlarmInfos = {props.setAlarmInfos}></AlarmAdd>
      </Styled.body>
    </Styled.background>
  );
};

//            <AlarmSetting alarmList = {alarmList}/>

export default AlarmPage;
