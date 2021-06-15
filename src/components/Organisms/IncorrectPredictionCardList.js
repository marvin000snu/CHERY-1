import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'
import IncorrectPredictionCard from '../Molecules/IncorrectPredictionCard';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const Styled = {
    Body: styled(GlobalStyled.Row)`
        flex-direction: column;
        justify-content: center;
        align-items : center
    `,
    cardWrapper: styled(GlobalStyled.CenterCol)`
        margin-right: 0;
        flex-direction : row;
        justify-content : center;
    `,
    fancyText : styled.Text`
        margin-left : ${wp("6%")};
        font-weight : bold

    `
}

const IncorrectPredictionCardList = (props) => {

    const { infos, inCorrectRate, avgInCorrectRate, userName, width } = props

    const list = infos.map((res, i) => {
        return (
            <GlobalStyled.CenterCol width="20" flexDirection="row">
                <IncorrectPredictionCard
                    info={{
                        ...res,
                        width: res.width ? res.width : width
                    }}
                />
            </GlobalStyled.CenterCol>
        )
    })

    return (
        <Styled.Body>
            <GlobalStyled.Row >
                <Styled.fancyText>
                    이 문항의 예상 오답률은 {inCorrectRate}% 입니다.
                </Styled.fancyText>
            </GlobalStyled.Row>
            <GlobalStyled.Row >
                <Styled.fancyText>
                    {userName} 님이 지금까지 틀린 문항의 평균 오답률({avgInCorrectRate}%)보다 쉬운 문항입니다.
                </Styled.fancyText>
            </GlobalStyled.Row>
            <GlobalStyled.Row >
                <Styled.fancyText>
                    선지선택률 정보
                </Styled.fancyText>
            </GlobalStyled.Row>
            <Styled.cardWrapper width="80" flexDirection="column">
                {list}
            </Styled.cardWrapper>
        </Styled.Body>
    );
};


IncorrectPredictionCardList.defaultProps = {
    infos: [
        {
            title: '1번',
            value: 0,
            unit: '%',
            width: '10rem',
        },
        {
            title: '2번',
            value: 0,
            unit: '%',
            width: '10rem',
        },
        {
            title: '3번',
            value: 0,
            unit: '%',
            width: '10rem',
        },
    ],
    inCorrectRate: 60,
    avgInCorrectRate: 64,
    userName: '유동훈',
}

export default IncorrectPredictionCardList;