//현재 비밀번호 입력 추가 ()
import React from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import AlarmOne from "../Atom/AlarmOne";
import PrevBtn from "../components/Find/PrevBtn"
import {TouchableWithoutFeedback, ScrollView} from "react-native";
const Styled = {
    background: styled.View`
        width: ${wp(98)}px;
        height: ${hp(60)}px;
        align-items: center;
    `,
    body: styled.View`
        height: ${hp(60)}px;
    `,
    Header: styled.View `
    width: ${wp(90)}px;
    flex-flow: row;
    align-items: flex-end;
    `,
    HeaderText: styled.Text`
    margin-left: ${wp(30)}px;
    fontFamily: "NotoSansCJKkr-Bold";
    font-size: ${wp(5)}px;
    `,
    Icon: styled.View`
    width: ${wp(5)}px;
    `,
    addSection: styled.View`
    width: ${wp(90)}px;
    height: ${hp(5)}px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    `,
    buttonText: styled.Text`
    font-size: ${wp(4)}px;
    fontFamily: "NotoSansCJKkr-Bold";
    color: #5471ff;
    `,


    
}
const AlarmSetting = (props) => {
    const {alarmList} = props;
    const onEdit = () => {
        //편집 클릭하면 나타나는 창
    }
    const onAdd = () => {
        //추가 클릭하면 나타나는 창
    }
    let alarms = alarmList.map( (v, idx) => {
        return <AlarmOne alarmInfo = {v}/>
    })
    return (
        <Styled.background>
            <Styled.Header>
                <Styled.Icon>
            <PrevBtn />
            </Styled.Icon>
            <Styled.HeaderText>알람설정</Styled.HeaderText>
            </Styled.Header>
            <Styled.addSection>
                <TouchableWithoutFeedback onPress = {onEdit}>
                <Styled.buttonText>
                    편집
                </Styled.buttonText>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress = {onAdd}>
                <Styled.buttonText>
                    추가 
                </Styled.buttonText>
                </TouchableWithoutFeedback>
            </Styled.addSection>
            <Styled.body>
            <ScrollView showsVerticalScrollIndicator= {false}>
            {alarms}
            </ScrollView>
            </Styled.body>
        </Styled.background>
    )
}
export default AlarmSetting