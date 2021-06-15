import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'

import Teacher from '../../images/iconSvg/Teacher'

const Styled = {
    Body: styled(GlobalStyled.Row)`
        
        flex-wrap : wrap;
    `,
    ContentWrapper: styled(GlobalStyled.Row)`
        flex-direction : column;
        padding : 10px;
        background-color : ${props => props.theme.color.realLightGray};
        border-radius : 5;
    `,
    QuotationMarkerWrapper: styled(GlobalStyled.Row)`
        align-items : center;
        justify-content : ${props => props.justifyContent};
    `,
    PreContent: styled.Text`
        font-size : 8px ;
        margin : 10px ;
        color : ${props => props.theme.color.realDarkGray};
    `,
    TeacherImgWrapper: styled(GlobalStyled.CenterRow)`
        width : 100%;
    `
}

const TeacherTextForm = (props) => {

    const { value } = props

    return (
        <Styled.Body>
            <GlobalStyled.Col width="100" flexDirection='row'>
                <Styled.TeacherImgWrapper>
                    <Teacher size={100} />
                </Styled.TeacherImgWrapper>
            </GlobalStyled.Col>
            <GlobalStyled.Col width="100" flexDirection='row'>
                <Styled.ContentWrapper>
                    <Styled.QuotationMarkerWrapper justifyContent='center'>

                    </Styled.QuotationMarkerWrapper>
                    <Styled.PreContent>
                        {value}
                    </Styled.PreContent>
                    <Styled.QuotationMarkerWrapper justifyContent="flex-end">
                       
                    </Styled.QuotationMarkerWrapper>
                </Styled.ContentWrapper>

            </GlobalStyled.Col>
        </Styled.Body>
    );
};


TeacherTextForm.defaultProps = {
    value: '-'
}

export default TeacherTextForm;