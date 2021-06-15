// 옆으로 밀면 삭제 버튼 생성 기능 아직 없음
// 토글 버튼 애니메이션 없음
import React, { useState, useEffect, useCallback  } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AlarmButton from "../img/AlarmButton";
import { Touchable, TouchableWithoutFeedback } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import moment from "moment";
import useAPI from "../../src/hooks/useAPI";

const Styled = {
  background: styled.TouchableOpacity`
    width: 100%;
    height: ${hp(10)};
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding-left: ${wp(5)}px;
    padding-right: ${wp(7.5)}px;
    margin-top: ${hp(1)}px;
  `,
  left: styled.View`
    justify-content: space-between;
  `,
  alarmName: styled.Text`
    font-size: ${hp(2.2)}px;
    font-family: NotoSansKR-Regular;
  `,
  alarmTime: styled.Text`
    font-size: ${hp(2.8)}px;
    font-family: NotoSansKR-Regular;
  `,

  rightButton: styled.View`
    justify-content: center;
    width: ${wp(5)}px;
  `,
};

const AlarmOne = (props) => {
  const { alarmInfo, onToggle, setAlarmInfo } = props;
  const [API] = useCallback(useAPI(), []);
  const [active, setActive] = useState(alarmInfo["onoff"]);
  let alarmTime = moment(alarmInfo["alarm_at"]);
  let alarmName = alarmInfo["info"];
  //알람 function은 없고, displaying만 생각
  let hour = alarmTime.hour() + 9;
  let minute = alarmTime.minute();
  let alarmTimeDisplay = "" + (hour >= 12 ? "오후" + (hour - 12) : "오전" + hour) + " : " + (minute < 10 ? "0" + minute : minute);
  const toggle = async () => {
    onToggle();
    try{
      let tempAlarmInfo = alarmInfo;
      tempAlarmInfo["days"] = [alarmInfo["mon"], alarmInfo["tue"], alarmInfo["wed"], alarmInfo["thu"], alarmInfo["fri"], alarmInfo["sat"], alarmInfo["sun"]];
      tempAlarmInfo["onoff"] = ! active;
      const params = {
        userId: "dl842685",
        body: tempAlarmInfo
      };
      setActive(!active);
     const {data} = await API.info.editAlarm(params);
     } catch (err) {
        console.log(err);
      }
  };
  /*
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
    try{
      let tempAlarmInfo = alarmInfo;
      tempAlarmInfo["days"] = [alarmInfo["mon"], alarmInfo["tue"], alarmInfo["wed"], alarmInfo["thu"], alarmInfo["fri"], alarmInfo["sat"], alarmInfo["sun"]];
      tempAlarmInfo["onoff"] = active;
      const params = {
        userId: "dl842685",
        body: tempAlarmInfo
      };
     const {data} = await API.info.editAlarm(params);
     } catch (err) {
        console.log(err);
      }
    };
    useEffectAsyncFunction();
  }, [active]);
  */
  return (
    <Styled.background onPress={props.onPress}>
      <Styled.left>
        <Styled.alarmName>{alarmName}</Styled.alarmName>
        <Styled.alarmTime>{alarmTimeDisplay}</Styled.alarmTime>
      </Styled.left>
      <Styled.rightButton>
        <ToggleSwitch isOn={active} onColor="#5471ff" offColor="#E2E4E8" size="small" thumbOffStyle={{ backgroundColor: "#979CA7" }} onToggle={toggle} />
      </Styled.rightButton>
    </Styled.background>
  );
};
export default AlarmOne;
