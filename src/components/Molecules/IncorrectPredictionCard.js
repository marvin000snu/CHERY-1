import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'

import StatusValue from '../Atoms/StatusValue'
const Styled = {
    Body: styled(GlobalStyled.CenterRow)`
        width : ${props=>props.width};
        flex-direction : column;
        background-color : ${props => props.theme.color.lightBlue};
        padding : 10px;
    `,
    Title: styled.Text`
        font-size : 12.5;
        font-weight : bold;
    `,
    Value: styled(GlobalStyled.CenterRow)`
        font-size : 25;
        font-weight : bold;
        color : ${props => props.theme.color.indigo};
    `
}

const IncorrectPredictionCard = (props) => {

    const { info } = props

    const { title, value, unit, color, width } = info

    return (
        <Styled.Body width={width}>
            <Styled.Title>
                {title}
            </Styled.Title>
             <Styled.Value 
                color={color}
            >
                <StatusValue
                    value={value}
                    unit={unit}
                />
            </Styled.Value> 
        </Styled.Body>
    );
};


IncorrectPredictionCard.defaultProps = {
    info: {
        title: '제목',
        value: '100',
        unit : '%',
        width : '10rem',
    },
    onClickButton: function () { }
}

export default IncorrectPredictionCard;