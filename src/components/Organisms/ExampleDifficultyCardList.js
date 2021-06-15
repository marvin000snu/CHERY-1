import React from 'react';
import styled from 'styled-components/native'
import GlobalStyled from '../../style/GlobalStyled'

import ExampleDifficultyCard from '../Molecules/ExampleDifficultyCard';


const Styled = {
    Body: styled(GlobalStyled.Row)`
        flex-direction: row;
        ${GlobalStyled.Col} {
            margin-right: 20;
        }
        ${GlobalStyled.Col}:last-child {
            margin-right: 0;
        }
    `,
    Wrapper : styled(GlobalStyled.Row)`
        justify-content : center;

    `
}

const ExampleDifficultyCardList = (props) => {

    const { infos, width } = props

    const list = infos.map((res, i)=>{
        return (
            <GlobalStyled.CenterCol flexDirection="row" width="100">
                <ExampleDifficultyCard
                    info={{
                        ...res,
                        width : res.width ? res.width : width
                    }}
                /> 
            </GlobalStyled.CenterCol>
        )
    })

    return (
        <Styled.Body>
            <Styled.Wrapper>
                {list}
            </Styled.Wrapper>
        </Styled.Body>
    );
};


ExampleDifficultyCardList.defaultProps = {
    infos : [
        {
            title : '제목',
            value: 100,
            type : '타입',
            percent : 0,
        },
        {
            title : '제목',
            value: 100,
            type : '타입',
            percent : 0,
        },
    ],
    width : '100%',
    inCorrectRate : 0,
    avgInCorrectRate : 0,
    userName : '',
}

export default ExampleDifficultyCardList;