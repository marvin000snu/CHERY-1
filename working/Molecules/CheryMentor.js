//학습 현황 페이지입니다
//위에 헤더, 그리고 바디를 모두 여기서 구현하면 좋을 것 같습니다
//밑에 wrap은 동훈님이 하셨다고 들었으니, 구현하지 않겠습니다
//type을 학습기록:1, 나의학습현황2, chery멘토3 로 정의합니다
//header click 시 애니메이션을 넣으면 좋겠다고 생각

//messagesbubble도 만들어야함
import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import MessageBubble from "../Atom/MessageBubble";
const Styled = {
    background: styled.View`
    margin-top: ${hp(20)}px;
      width: ${wp(100)};
      height: ${hp(75)};
      display: flex;
      flex-direction: row;
      justify-content: center;

    `,
    IconCol: styled.View`
    width: ${wp(13)}
    background-color: red;
    `,
    bubbles: styled.View`
    width: ${wp(80)};
    `,
};  

const CheryMentor = (props) => {
    const {mentorMessage} = props;
    let Messages = mentorMessage.map( (v, idx) => {
        return <MessageBubble message={v} />
    })
    return (
        <Styled.background>
                <Styled.IconCol>
                </Styled.IconCol>
                <Styled.bubbles>
                {Messages}
                </Styled.bubbles>
        </Styled.background>
    );
}

export default CheryMentor;