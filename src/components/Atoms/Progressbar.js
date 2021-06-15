import React from 'react';
import styled from 'styled-components'
import * as Progress from 'react-native-progress';
import GlobalStyled from '../../style/GlobalStyled'
import theme from '../../style/theme'
const Styled = {
    Body: styled(GlobalStyled.Row)`
    width : 100%
    `
}

const Progressbar = (props) => {

    const { percent, strokeColor, height, strokeWidth } = props

    return (
        <Styled.Body>
            <Progress.Bar progress={percent/100} width={null} color={theme.color.sky} indeterminate/>
        </Styled.Body>

    );
};


Progressbar.defaultProps = {
    height: '0.8rem',
    strokeWidth: 10,
    percent: 0,
    strokeColor: ['#D3D3D3', '#48A3FF']
}

export default Progressbar;