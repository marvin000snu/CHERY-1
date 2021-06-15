import React from 'react';
import styled from 'styled-components/native'

import Progressbar from '../Atoms/Progressbar'
import {Text} from 'react-native'
import GlobalStyled from '../../style/GlobalStyled'
import theme from '../../style/theme';

const Styled = {
    Body: styled(GlobalStyled.Row)`
    flex-wrap : wrap;
    flex-direction : row
    `
}

const SolveProblemProgressbar = (props) => {

    const { info } = props

    const { title, value, percent } = info

    return (
        <Styled.Body>
            <GlobalStyled.Col width="100" flexDirection="row">
                <Text>
                    {title}
                </Text>
            </GlobalStyled.Col>
            <GlobalStyled.CenterCol width="90" flexDirection="row" >
                <Progressbar
                    percent={percent}
                    strokeWidth="2"
                    height="10px"
                    strokeColor={[theme.color.gray, theme.color.sky]}
                />
            </GlobalStyled.CenterCol>
            <GlobalStyled.RightCol width="10" flexDirection="row">
                <Text style={{marginBottom:10, fontWeight:"bold"}}>
                    {value}
                </Text>
            </GlobalStyled.RightCol>
        </Styled.Body>
    );
};


SolveProblemProgressbar.defaultProps = {
    info: {
        title: '제목',
        value: 0,
    }
}

export default SolveProblemProgressbar;