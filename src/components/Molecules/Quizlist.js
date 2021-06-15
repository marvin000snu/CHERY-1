import React from 'react'
import styled from "styled-components/native"
import { ActivityIndicator } from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const Quizlist = (props) => {
  const { infos, onLoading } = props
  const Styled = {
    list: styled.View`
        width: 85%;
        height: ${hp(22)}px; 
        min-height: 150px;
        margin-top: ${hp(3)}px;
        background-color: #E6EBFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius:10px;
      `,
    atomBox: styled.View`
      width: 100%;
      height: ${hp(7.5)}px;
      justify-content: center;
      align-items: center;
    `,
    atom: styled.Text`
        font-size: ${hp(3)}px;
        text-align: center;
        color: #1B2C49;
      `,
  }
  return (
    <Styled.list>
      {onLoading ? (<ActivityIndicator color="#AC8AFA" size="large" />) : (infos.map((v, idx) => {
        return (
        <Styled.atomBox>
          <Styled.atom id={idx}>{v.name}</Styled.atom>
        </Styled.atomBox>
        )
      }))
      }
    </Styled.list>
  )
}


export { Quizlist }