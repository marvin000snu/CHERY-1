import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'

import Select from '../Atoms/Select';

const Styled = {
    Body: styled(GlobalStyled.Row)`
        flex-direction : column;
    `,
    TitleWrapper : styled.Text`
        font-size : 8.75px;
        font-weight : bold;
        color : ${props=>props.theme.color.indigo};
        margin-bottom : 5px;
        margin-left: 3px;
        ${props=>props.css};
    `
}

const HeightSelect = (props) => {

    const { title, titleCss } = props

    return (
        <Styled.Body>
            <Styled.TitleWrapper
                css={titleCss}
            >
                {title}
            </Styled.TitleWrapper>
            <Select
                {...props}
            />
        </Styled.Body>
    );
};

export default HeightSelect;