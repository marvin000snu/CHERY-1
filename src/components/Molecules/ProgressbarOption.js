import React from 'react';
import styled, { } from 'styled-components/native'


import Progressbar from '../Atoms/Progressbar'
import ProgressMarker from '../../images/iconSvg/progressMarker'
import GlobalStyled from '../../style/GlobalStyled'

/** 프로그레스바 라벨 + 스텝 옵션추가*/
const ProgressBarOption = (props) => {

    const {
        percent,
        isMarker,
        animationDelay,
    } = props

    return (
        <Wrapper>
            {isMarker ? (
                <MarkerWrapper>
                    <MarkerBody
                        marginLeft={(percent ? percent + 4 : 0 / 100 * 100)}
                    >
                        <MarkerPosition

                        >
                            <GlobalStyled.Row>
                                <ProgressMarker size={80}/>
                            </GlobalStyled.Row>
                        </MarkerPosition>
                    </MarkerBody>
                </MarkerWrapper>) : (<></>)}
            <Progressbar
                percent={percent}
            /> 

        </Wrapper>
    );
};

ProgressBarOption.defaultProps = {
    percent: 10,
    isMarker: false,
    animationDelay: 0,
}

// const markerAnimation = keyframes`
//   from {
//     top : -10px;
//     opacity: 0
//   }
//   to {
//     top : -0px;
//     opacity: 1;
//   }
// `

const Wrapper = styled.View`
    display : flex;
    flex-direction : column;
    width : 100%;
`


const MarkerWrapper = styled.View`
    width : ${props => props.width};
`

const MarkerBody = styled.View`
    position : relative;
    display : flex;
    height : 0.8rem;
    align-items : center;
    justify-content : left;
    margin-left : ${props => props.marginLeft}%;
  
`

const MarkerPosition = styled.View`
  position: absolute;
  display : flex;
  flex-direction : column;
  font-size : 0.875rem;
  align-items : center;
  opacity : 0;
  height : 8px;
`

export default ProgressBarOption;