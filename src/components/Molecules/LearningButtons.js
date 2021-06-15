import React from 'react';
import styled from 'styled-components/native'
import theme from '../../style/theme'
import GlobalStyled from '../../style/GlobalStyled'
import {CustomButton} from '../../style/customButton'
const Styled = {
    Body: styled(GlobalStyled.Row)`
        flex-direction : row;
        align-items : center;
    `,
    ButtonCol: styled(GlobalStyled.CenterCol)`
        ${GlobalStyled.ActiveButton} {
            width : 100%;
        }
    `
}

const LearningButtons = (props) => {

    const { isActive, onClickSolveNowButton, onClickPdfDownloadButton, onClickGradingButton } = props

    return (
        <Styled.Body>
             <Styled.ButtonCol width="33" flexDirection="row">
                <CustomButton
                    backgroundColor = {theme.color.indigo}
                    fontSize={12.5}
                    isActive={isActive}
                    onPress={onClickSolveNowButton}
                    colorTheme="indigo"
                    title="바로 풀기"
                    height={30}
                >

                </CustomButton>
            </Styled.ButtonCol>
            <Styled.ButtonCol width="33" flexDirection="row">
                <CustomButton
                    backgroundColor = {theme.color.indigo}
                    fontSize={12.5}
                    isActive={isActive}
                    onPress={onClickPdfDownloadButton}
                    colorTheme="indigo"
                    title="PDF 다운로드"
                    height={30}
                >
                </CustomButton>
            </Styled.ButtonCol>
            <Styled.ButtonCol width="33" flexDirection="row">
            <CustomButton
                    fontSize={12.5}
                    backgroundColor = {theme.color.indigo}
                    isActive={isActive}
                    onPress={onClickGradingButton}
                    colorTheme="indigo"
                    title="채점 하기"
                    height={30}
                >

                </CustomButton>
            </Styled.ButtonCol>
        </Styled.Body>
    );
};


export default LearningButtons;