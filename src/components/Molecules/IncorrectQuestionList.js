import React from 'react';
import styled from 'styled-components/native'
import IncorrectQuestion from '../Atoms/IncorrectQuestion'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import GlobalStyled from '../../style/GlobalStyled'
import {CustomButton} from '../../style/customButton'
import theme from '../../style/theme'
const Styled = {
    Body: styled.View`
        display : flex;
        flex-direction : column;
        width : 100%;
    `,
    
    ColWrapper : styled.View`
        display : flex;
        width : 100%;
        padding : 1rem;
    `,
    Col: styled.View`
        display : flex;
        padding : 10px;
        align-items : center;
        justify-content : center;
    `,
    ContentBody: styled.View`
        display : flex;
        flex-direction : column;
        width : 100%;
        border-radius : 10;
        align-items : center;
        border : 2px dashed ${props => props.theme.color.whiteBlue};
    `,
    ContentWrapper: styled.View`
        display : flex;
        flex-direction : column;
        width : 100%;

        align-items : center;
        padding : 10px;
        padding-left : 1.50px;
        min-height : 200px;
    `,
    ContentHeader : styled.View`
        display : flex;
        flex-direction : column;
        width : 100%;
        align-items : center;
        justify-content : center;
        border-bottom-width : 1px ;
        border-style: solid ;
        border-bottom-color : ${props => props.theme.color.lightGray};
        padding : 0.50px 0;
        Text : nth-child(1) {
            font-size : 125px;
            font-weight : bold;
        }
        Text : nth-child(2)  {
             : ${props => props.theme.color.whiteBlue};
        }
    `,
    ContentButtonWrapper : styled.View`
        display : flex;
        width : 100%;
        height : 35 ;
        align-items : center;
        justify-content : center;
        margin-bottom : ${hp("1.5")};
    `,
    MainText : styled.Text`
        font-size : ${hp("2.5")};
    `,
    SubText : styled.Text`
        font-size : ${hp("1.2")};
        color : ${theme.color.whiteBlue}
    `


}

const IncorrectQuestionList = (props) => {

    const { addInfos, removeInfos, onClickAddButton, onClickRemoveButton, onClickAllAddButton, onClickAllRemoveButton } = props

    const formatAddInfos = addInfos.filter(res=> !res.isDuplicate)


    const addList = formatAddInfos.map((res, i) => {
        return (
            <GlobalStyled.Row
                key={i}
            >
                <IncorrectQuestion
                    info={res}
                    onClick={onClickAddButton}
                    iconName="plus"
                />
            </GlobalStyled.Row>
        )
    })

    const removeList = removeInfos.map((res, i) => {
        return (
            <GlobalStyled.Row
                key={i}
            >
                <IncorrectQuestion
                    info={res}
                    svgName={'removeButton'}
                    onClick={onClickRemoveButton}
                    iconName="minus"
                />
            </GlobalStyled.Row>
        )
    })

    return (
        <Styled.Body>
                <Styled.Col>
                    <Styled.ContentBody>
                         <Styled.ContentHeader>
                            <Styled.MainText>오답 문항 ({formatAddInfos.length})</Styled.MainText>
                            <Styled.SubText>최근 틀린 문항 목록입니다. 약점학습 문항을 담아주세요.</Styled.SubText>
                        </Styled.ContentHeader>
                        <Styled.ContentWrapper>
                            {addList}
                        </Styled.ContentWrapper>
                        <Styled.ContentButtonWrapper>
                             <CustomButton
                                backgroundColor={theme.color.realBlueGray}
                                colorTheme="gray"
                                width={90}
                                padding="0.50px"
                                onPress={onClickAllAddButton}
                                title="모두 담기"
                            >
                            </CustomButton> 
                        </Styled.ContentButtonWrapper> 
                    </Styled.ContentBody>
                </Styled.Col>
                 <Styled.Col>
                    <Styled.ContentBody>
                        <Styled.ContentHeader>
                            <Styled.MainText>담긴 문항 ({removeInfos.length})</Styled.MainText>
                            <Styled.SubText>약점학습을 진행할 문항입니다.</Styled.SubText>
                        </Styled.ContentHeader>
                        <Styled.ContentWrapper>
                            {removeList}
                        </Styled.ContentWrapper>
                        <Styled.ContentButtonWrapper>
                            <CustomButton
                                backgroundColor={theme.color.realBlueGray}
                                width={90}
                                padding="5px"
                                onPress={onClickAllRemoveButton}
                                title="모두 제거"
                            >
                            </CustomButton>
                        </Styled.ContentButtonWrapper>
                    </Styled.ContentBody>
                </Styled.Col> 
            
        </Styled.Body>
    );
};

IncorrectQuestionList.defaultProps = {
    addInfos: [],

}

export default IncorrectQuestionList;