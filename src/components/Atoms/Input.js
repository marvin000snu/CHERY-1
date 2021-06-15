import React, { forwardRef } from 'react';
import styled from 'styled-components/native'

const Styled = {
    Input: styled.TextInput`
        width : ${props => props.width};
        height : 40;
        font-size : 9;
        border-width: 2px; 
        border-style: solid;
        border-color : ${props => props.theme.color.realBlueGray};
        color : ${props => props.theme.color.black};
        border-radius : 10;
        padding : 1px;
        ${props => props.css};
    `,
    BeInput: styled.View`
        display: flex;
        align-items: center;
        text-align: left;
        width : ${props => props.width};
        height : 23;
        font-size : 9;
        border: 2px ;
        border-style: solid;
        border-color: ${props => props.theme.color.realWhiteBlue};
        background-color : ${props => props.theme.color.gray};
        color : ${props => props.theme.color.indigo};
        border-radius : 5;
        padding : 1px;
        ${props => props.css};
    `
}

const Input = forwardRef((props, ref) => {
    const { isActive, value } = props

    return (
        <>
            {
                isActive ? (
                    <Styled.Input
                        ref={ref}
                        {...props}
                    />
                ) : (
                    <Styled.BeInput
                        ref={ref}
                        {...props}
                    >
                        {value}
                    </Styled.BeInput>
                )
            }
        </>
    );
})

Input.defaultProps = {
    type: 'text',
    width: '12rem',
    name: '',
    value: '',
    onChange: function () { },
    isActive : true,
}

export default Input;