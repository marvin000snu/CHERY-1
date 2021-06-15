import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import {AnimatedCircularProgress} from 'react-native-circular-progress'

const Styled = {
    body: styled.View`
    width: 100%;
    height: ${hp(5)};
    flex-flow: row;
    justify-content: flex-start;
    `,
    temp: styled.View`
    position: absolute;
    `,
};
const CircleStatus = (props) => { //아마 usememo사용해야할 것으로 보임
    const {myProgress, totalProgress, colors} = props; //array로 받아, 구현
    const len = wp(50); // 이걸 그냥 사용할 수 있다.
    let brr = myProgress.map((value, idx) =>
    <Styled.temp
    left={len*(4-idx)/12}
    top = {len*(4-idx)/12}
    >
    <AnimatedCircularProgress
        size={len*(idx+2)/6}
        width={len /24}
        fill={myProgress[idx] *100 / totalProgress[idx]}
        tintColor={colors[idx]}
        rotation={0}
        lineCap="round"
        />
        </Styled.temp>
    );
    return (
        <Styled.body>
                {brr}
        </Styled.body>
        )
}


export {CircleStatus};