//학습 현황 페이지입니다
//위에 헤더, 그리고 바디를 모두 여기서 구현하면 좋을 것 같습니다
//밑에 wrap은 동훈님이 하셨다고 들었으니, 구현하지 않겠습니다
//type을 학습기록:1, 나의학습현황2, chery멘토3 로 정의합니다
//header click 시 애니메이션을 넣으면 좋겠다고 생각
import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import CircledCheck from "../img/CircledCheck";
const Styled = {
    background: styled.View`
      width: ${wp(100)};
      height: ${hp(20)};
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
 
    `,
    wrap: styled.View`
      margin-bottom: 80px;
      flex: 1;
      align-items: center;
      `,
    iconWrap: styled.View`
    flex-flow: row;
    justify-content: space-between;
    width: ${wp(80)};
    height: ${hp(15)};
    margin-left: ${wp(8)};
    `,
    icon: styled.View`
    height: ${hp(8)};
    width: ${hp(8)};
    align-items: center;
    justify-content: center;
    `,
    font: styled.Text`
    font-size: 13
    font-family: NotoSansKR-Regular;
    `,
    fontUnder: styled.Text`
    font-size: 18;
    font-family: NotoSansKR-Bold;
    `,
    spacing: styled.View`
    align-items: center;
    justify-content: center;
    `,
    headerText: styled.Text`
    font-family: NotoSansKR-Bold;
    font-size: ${hp(2)}px;
    margin-left: ${wp(3)}px;
    margin-bottom: ${hp(2)}px;
    `,

};
const StudyDay = (props) => {
    const { TodayCorrectRate, CurrentCorrectRate, CheryRank } = props;
    return (
        <Styled.background>
            <Styled.headerText>
                학습데이
            </Styled.headerText>
            <Styled.iconWrap>
                <Styled.spacing>
                    <Styled.icon>
                        <CircledCheck size={wp(13)} />
                    </Styled.icon>
                    <Styled.font> 오늘의 문제 정답률</Styled.font>
                    <Styled.fontUnder> {TodayCorrectRate}%</Styled.fontUnder>
                </Styled.spacing>
                <Styled.spacing>
                    <Styled.icon>
                        <CircledCheck size={wp(13)} />
                    </Styled.icon>
                    <Styled.font> 현재 정답률</Styled.font>
                    <Styled.fontUnder> {CurrentCorrectRate}%</Styled.fontUnder>
                </Styled.spacing>
                <Styled.spacing>
                    <Styled.icon>
                        <CircledCheck size={wp(13)} />
                    </Styled.icon>
                    <Styled.font> CHERY 상위</Styled.font>
                    <Styled.fontUnder> {CheryRank}%</Styled.fontUnder>
                </Styled.spacing>
            </Styled.iconWrap>
        </Styled.background>
    );
}

export default StudyDay;