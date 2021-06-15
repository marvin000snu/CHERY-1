//현재 비밀번호 입력 추가 ()
//시차가 안맞는데용
import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import ToggleSwitch from 'toggle-switch-react-native'
import Repetition from "./Repetition";
import TimeScroller from "../Atom/TimeScroller"
import moment from "moment";
import useAPI from "../../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
const Styled = {
  background: styled.View`
    width: ${wp(98)}px;
    height: ${hp(60)}px;
    align-items: center;
  `,
  body: styled.View`
    height: ${hp(60)}px;
    align-items: center;
  `,
  Header: styled.View`
    width: ${wp(90)}px;
    height: ${hp(5)}px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin-top:20px;
    `,
    HeaderText: styled.Text`
    fontFamily: "NotoSansCJKkr-Bold";
    font-size: ${wp(5)}px;
  `,
  buttonText: styled.Text`
    font-size: ${wp(4)}px;
    font-family: "NotoSansCJKkr-Bold";
    color: #5571ff;
  `,
  cancelText: styled.Text`
    font-size: ${wp(4)}px;
    font-family: "NotoSansCJKkr-Bold";
    color: gray;
    `,
    titleBox: styled.View`
    height: ${hp(8)}px;
    width: ${wp(90)}px;
    justify-content: space-between;
    margin-bottom: ${hp(3)}px;
    border-bottom-color: #cdcdcd;
    border-bottom-width: 1px;
  `,
  titleText: styled.Text`
    font-family: "NotoSansCJKkr-Regular";
    font-size: ${wp(5)}px;

    `,
    titleInput: styled.TextInput`
    font-size: ${wp(4.5)}px;
    left: ${wp(2)}px;
  `,
  box: styled.View`
    flex-flow: row;
    width: ${wp(90)}px;
    justify-content: space-between;
    height: ${hp(5)}px;
    margin-bottom: ${hp(1)}px;
  `,
  pickerBox: styled.View`
    width: ${wp(90)}px;
    height: ${hp(5)}px;
    justify-content: flex-end;
  `,
  repeatWindow: styled.View`
    display: ()? flex: none;
    `,
    horizontalLine: styled.View`
    width: ${wp(90)}px;
    height: 0.5px;
    background-color: #cdcdcd;
    justify-content: center;
    align-items: center;
  `,
  timeSetting: styled.View`
    height: ${hp(15)}px;
    background-color: blue;
    width: ${wp(90)}px;
    justify-content: center;
    align-items: center;
    `,
    
};
const AlarmAdd = (props) => {
    const {alarmInfos, modalCloseHandler, setAlarmInfos} = props;
    const alarmInfo = alarmInfos[0];
    const [API] = useCallback(useAPI(), []);
    //setDays 순서대로 월 화 수 목 금 퇼입니다
    const [title, setTitle] = useState(alarmInfo["info"]);
    const [active, setActive] = useState(alarmInfo["onoff"]);
    const [alarmTime, setAlarmTime] = useState(moment(alarmInfo["alarm_at"]));
    const alarmRepeat = ["다시 알리지 않음", "10분 후 재알림", "1시간 후 재알림"];
    //repeatControl 0: 다시 알리지 않음 1: 10분후, 2: 1시간 후
    const [repeatWindowShow, SetRepeatWindowShow] = useState(false);
    const [days, setDays] = useState([alarmInfo["mon"], alarmInfo["tue"], alarmInfo["wed"], alarmInfo["thu"], alarmInfo["fri"], alarmInfo["sat"], alarmInfo["sun"]]);

    const onCancel = () => {
      modalCloseHandler();
    }
    const onSave = async () => {
      try{
        //추가 클릭하면 알람 설정으로 navigate 되면서 alarmList에 추가
        /*
        const id = "dl842685";
        const alarm_at = moment().format();
        const info = "test3";
        const onoff = true;
      */
     const result = await API.user.login({userId: "dl842685", password: "dl842685"});
     await AsyncStorage.setItem("@userToken", result[0]);
     await AsyncStorage.setItem("@accessToken", result[1]);    
     const token = await AsyncStorage.getItem("@userToken");
     const deCode = jwt_decode(token);
        const params = {
          userId: "dl842685",
          body: {
            alarm_at: moment(alarmTime),
            info: title,
            onoff: active,
            days: days,
          }
        };

     const {data} = await API.info.editAlarm(params)
     props.setAlarmInfos([{"alarm_at": alarmTime, "info": title, "onoff": active, "mon": days[0], "tue": days[1], "wed": days[2], "thu": days[3], "fri": days[4], "sat": days[5], "sun": days[6]}]);
     modalCloseHandler();
      } catch (err) {
        console.log(err);
      }
    }
    const onRepeatWindow = () => {
        //푸시 알림 누르면 팝업 등장
        SetRepeatWindowShow(true);
    }
    const toggle = () => {
        setActive(!active)
    }  
    return (
        <Styled.background>
            <Styled.Header>
                <TouchableOpacity onPress = {onCancel}>
                <Styled.cancelText>
                    취소
                </Styled.cancelText>
                </TouchableOpacity>
            <Styled.HeaderText>알람추가</Styled.HeaderText>
            <TouchableOpacity onPress = {onSave}>
                <Styled.buttonText>
                    저장
                </Styled.buttonText>
                </TouchableOpacity>

            </Styled.Header>
            <Styled.body>
            <Styled.horizontalLine />
            <TimeScroller setAlarmTime = {setAlarmTime}/>
            <Styled.horizontalLine />
                <Repetition days = {days} setDays = {setDays}></Repetition>
                <Styled.titleBox>
                <Styled.titleText>제목</Styled.titleText>
                <Styled.titleInput
                            onChangeText={text => setTitle(text)}
                            placeholder="매일학습 풀 시간"
                            value={title}
                        />
                </Styled.titleBox>
                <Styled.box>
                        <Styled.titleText>푸시알림 설정</Styled.titleText>
                <ToggleSwitch
                isOn={active}
                onColor="#5571FF"
                offColor="#E2E4E8"
                size="small"
                thumbOffStyle ={{backgroundColor: "#979CA7"}}
                onToggle={toggle}
                />
                </Styled.box>
                {/* 
                <Styled.pickerBox>
                <TouchableWithoutFeedback onPress = {onRepeatWindow}>
                <Styled.titleText>알람횟수 설정</Styled.titleText>
                </TouchableWithoutFeedback>
                </Styled.pickerBox>
                <Picker
                  selectedValue={repeatControl}
                  style={{ height: 200, width: wp(100)}}
                  itemStyle={{ height: 200 }}
                  onValueChange={(itemValue, itemIndex) => {
                      setRepeatControl(itemValue)
                  }}
                >
                    {alarmRepeat.map((v, idx) => {
                    return(
                    <Picker.Item label={v} value={idx}/>
                    )
                    })}
                </Picker>
                */}
            </Styled.body>
        </Styled.background>
    )
}
export default AlarmAdd
