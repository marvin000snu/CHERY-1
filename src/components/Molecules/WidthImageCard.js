import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { View, Text, Image } from "react-native"
import GlobalStyled from '../../style/GlobalStyled';
import theme from '../../style/theme'
import TodayProblem from '../../images/iconSvg/today_problem'
import WeakSvg from '../../images/iconSvg/weak'
import Status from '../../images/iconSvg/Status'
import Search from '../../images/iconSvg/Search'
const Styled = {
  LinkBody: styled.TouchableOpacity`
        display : flex;
        width : 100%;
        padding : 5px
    `,
  Body: styled(GlobalStyled.ButtonCard)`
        flex-direction : row;
        width : 100%;
        padding : 15px 0;
        align-items : center;
        justify-content : center;
        
    `,
  IconWrapper: styled.View`
        width : 100%;
        display : flex;
        align-items : center;
        justify-content : center;
        Image {
            width : 5px;
            height: 5px;
        }
    `,
  TitleWrapper: styled.View`
        display : flex;
        align-items : center;
        font-size : 1.875px;
        color : ${props => props.theme.color.indigo};
    `,
  ChildrenRow: styled(GlobalStyled.Row)`
        flex-direction : column;
    `,
  styledText: styled.Text`
    font-weight : bold
    font-size : 20px    
    `
}

const WidthImgCard = (props) => {

  const { screenName,onPressHandler, title, children, isEffect, to } = props

  return (
    <Styled.LinkBody
      to={to}
      onPress={()=>{onPressHandler(screenName)}}
    >
      <Styled.Body
        isEffect={isEffect}
        theme={theme}
      >
        <GlobalStyled.Col width="30" flexDirection="column">
          <Styled.IconWrapper>
            { title==="매일 학습" ? (
                <>
                  <TodayProblem size={80} />
                </>
              ) : (<></>)}
              {
              title==="약점 학습" ? (
                <>
                  <WeakSvg size={80} />
                </>
              ) : (<></>)
            }{
              title==="학습 현황" ? (
                <>
                  <Status size={80} />
                </>
              ) : (<></>)
            }{
              title==="문항 분석" ? (
                <>
                  <Search size={80} />
                </>
              ) : (<></>)
            }
          </Styled.IconWrapper>
        </GlobalStyled.Col>
        <GlobalStyled.Col width="50" flexDirection="row">
          <GlobalStyled.Row >
            <Styled.TitleWrapper theme={theme}>
              <Styled.styledText>{title}</Styled.styledText>
            </Styled.TitleWrapper>
          </GlobalStyled.Row>
          <Styled.ChildrenRow>
            {children}
          </Styled.ChildrenRow>
        </GlobalStyled.Col>
      </Styled.Body>
    </Styled.LinkBody>

  );
};



WidthImgCard.defaultProps = {
  imgSrc: require('../../images/icon/today_problem.svg'),
  title: '제목',
  isEffect: true,
  to: '/',
}

export default WidthImgCard;