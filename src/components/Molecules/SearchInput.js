import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'

import Input from '../Atoms/Input';
import theme from '../../style/theme'
import {CustomButton} from '../../style/customButton'
const Styled = {
    Body: styled(GlobalStyled.Row)`
        flex-direction : column;
    `,
    InputWrapper : styled(GlobalStyled.Row)`
        flex-direction : row
        align-items:center
    `,
    TitleWrapper : styled.Text`
        font-size : 8.75px;
        font-weight : 400;
        color : ${props=>props.theme.color.indigo};
        margin-bottom : 5px;
    `,
    TransparentButton : styled(GlobalStyled.TransparentButton)`
        background-color : ${props=>props.theme.color.whiteBlue};
    `
}

const SearchInput = (props) => {

    const { title, onClickSearchButton } = props

    return (
        <Styled.Body>
            {title ? (
                <Styled.TitleWrapper>
                    {title}
                </Styled.TitleWrapper>
            ) 
            : ''}
            <Styled.InputWrapper>
                <GlobalStyled.Col width="70" flexDirection="row">
                    <Input
                        {...props}
                        width="100%"
                    />
                </GlobalStyled.Col>
                <GlobalStyled.Col width="3" flexDirection="row"/>
                <GlobalStyled.Col width="27" flexDirection="row">
                    <CustomButton
                        onPress={onClickSearchButton}
                        colorTheme="gray"
                        title = "검색"
                        backgroundColor = {theme.color.sky}
                    >
                        {/* <Search size={10}/> */}
                    </CustomButton>
                </GlobalStyled.Col>
                
            </Styled.InputWrapper>
        </Styled.Body>
    );
};

SearchInput.defaultProps = {
    onClickSearchButton : function(){}
}

export default SearchInput;