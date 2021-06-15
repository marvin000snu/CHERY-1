//학습 현황 페이지입니다
//위에 헤더, 그리고 바디를 모두 여기서 구현하면 좋을 것 같습니다
//밑에 wrap은 동훈님이 하셨다고 들었으니, 구현하지 않겠습니다
//type을 학습기록:1, 나의학습현황2, chery멘토3 로 정의합니다
//header click 시 애니메이션을 넣으면 좋겠다고 생각
import React from "react";
import styled from "styled-components/native";

const Styled = {
    background: styled.View`
      justify-content: flex-start;
      align-items: center;
      border: solid 1px;
      border-color: #B3B3B4;
      border-radius: ${hp(1.5)}px;
      min-height: ${hp(3)}px;      
      padding-top: ${hp(1)}px;
      padding-bottom: ${hp(1)}px;
      padding-left: ${wp(2)}px;
      padding-right: ${wp(2)}px;
      margin-top: ${hp(0.5)}px;
      margin-bottom: ${hp(0.5)}px;
      margin-left: ${wp(1)}px;
      margin-right: ${wp(1)}px;

      `,
    text: styled.Text`
    `,
};  

const MessageBubble = (props) => {
    const {message} = props;
    return (
        <Styled.background>
            <Styled.text>
                {message}
            </Styled.text>
        </Styled.background>
    );
}

export default MessageBubble;