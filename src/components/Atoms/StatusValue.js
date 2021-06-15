import React from 'react';
import styled from 'styled-components/native'
import {Text} from 'react-native'
import theme from '../../style/theme'

const Styled = {
    Body: styled.View`
        color : ${props => props.color};
    `
}

const StatusValue = (props) => {

    const { value, unit } = props

    const valueTheme = (value) => {
        if (value > 50) {
            return theme.color.blue
        } else if (value > 35) {
            return theme.color.green
        } else {
            return theme.color.yellow
        }
    }

    return (
        <Styled.Body
            color={valueTheme}
        >
            <Text style={{color:valueTheme(value), fontWeight: "bold"}}>
                {value}{unit}
            </Text>
        </Styled.Body>
    );
};


StatusValue.defaultProps = {
    value: 100,
    unit: '',
}

export default StatusValue;