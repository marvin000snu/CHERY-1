import React from 'react';
import styled from 'styled-components/native'
import { Text, StyleSheet } from 'react-native'
import GlobalStyled from '../../style/GlobalStyled'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { CustomButton } from '../../style/customButton'
import theme from '../../style/theme'
const Styled = {
    Body: styled(GlobalStyled.Row)`
    width : 100%`,
    WordWrapper: styled(GlobalStyled.Row)`
        width : 100%;
        color : ${props => props.theme.color.darkGray};
        background-color : ${props => props.theme.color.realGray};
        border-radius: 8.75;
        padding : 1px;
        margin-right : 30px;
    `,
    LeftContent: styled(GlobalStyled.Col)`
        padding-bottom : 20;
    `,
    RightContent: styled(GlobalStyled.Col)`
        padding-bottom : 20;
        padding-right : 20;
        border-bottom-width : 1px;
        border-style : solid;
        border-bottom-color: ${props => props.theme.color.realBlueGray};
    `,
    fancyText: styled.Text`
    margin-left : ${wp("5")};
    margin-top : ${hp("1")}
    `
}
const styles = StyleSheet.create({
    text : {
        textAlign : "justify"
    }
})

const MainSyntaxInfo = (props) => {

    const { info, onClickButton } = props

    const { title, buttonText, value } = info

    const handleOnClickButton = () => {
        onClickButton(info)
    }

    return (
        <Styled.Body
        >
            <Styled.LeftContent width="100" flexDirection="column">
                <Styled.fancyText>
                    {title}
                </Styled.fancyText>
            </Styled.LeftContent>
            <Styled.RightContent width="100" flexDirection="row">
                <GlobalStyled.Col width="5" flexDirection="row" />
                <GlobalStyled.Col width="73" flexDirection="row">
                    <Styled.WordWrapper>
                        <Text style={styles.text}>
                            {value}
                        </Text>
                    </Styled.WordWrapper>
                </GlobalStyled.Col>
                <GlobalStyled.Col width="2" flexDirection="row">
                </GlobalStyled.Col>
                <GlobalStyled.Col width="20" flexDirection="row">
                    <CustomButton
                        backgroundColor={theme.color.sky}
                        onPress={handleOnClickButton}
                        title={buttonText}
                        width={wp(20)}
                        height={60}
                        fontSize={10}
                    >
                    </CustomButton>
                </GlobalStyled.Col>
            </Styled.RightContent>
        </Styled.Body>
    );
};


MainSyntaxInfo.defaultProps = {
    info: {
        id: 1,
        title: '제목',
        value: 'If we reason that Paula is afraid either of snakes or spiders, and then establish that she is not afraid of snakes, we will conclude that Paula is afraid of spiders',
        buttonText: '유사구문 포함 문항 담기 ',
    },
    onClickButton: function () { }
}

export default MainSyntaxInfo;