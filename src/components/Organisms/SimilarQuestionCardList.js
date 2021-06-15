import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'
import theme from '../../style/theme'

import SimilarQuestionCard from '../Molecules/SimilarQuestionCard';


const Styled = {
    Body: styled(GlobalStyled.CenterRow)`
        flex-direction: row;
        justify-content : flex-end;
        width: 100%;
        border-style: solid;
        border-color: ${(props) => props.theme.color.lightGray};

        
        ${GlobalStyled.CenterCol} {
            margin-right: 10px;
            flex-direction: row;
        }
        ${GlobalStyled.CenterCol}:last-child {
            margin-right: 10px;
            flex-direction: row;

        }
    `,
}

const SimilarQuestionCardList = (props) => {

    const { infos, width, buttonText, onClickButton } = props

    const list = infos.map((res, i) => {
        return (
            <GlobalStyled.CenterCol flexDirection="row" width="33">
                <SimilarQuestionCard
                    info={{
                        ...res,
                        width: res.width ? res.width : width,
                        buttonText: res.buttonText ? res.buttonText : buttonText
                    }}
                    onClickButton={onClickButton}
                />
            </GlobalStyled.CenterCol>
        )
    })

    return (
        <Styled.Body>
            {list}
        </Styled.Body>
    );
};


SimilarQuestionCardList.defaultProps = {
    infos: [
        {
            id: 1,
            title: '제목_1',
            value: '100',
            color: theme.color.blue,
        },
        {
            id: 2,
            title: '제목_2',
            value: '40',
            color: theme.color.green,
        },
        {
            id: 3,
            title: '제목_3',
            value: '30',
            color: theme.color.yellow,
        },
    ],
    buttonText: '문항담기',
    width: '10',
    onClickButton: function () { }
}

export default SimilarQuestionCardList;