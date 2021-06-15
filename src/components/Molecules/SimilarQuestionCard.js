import React from 'react';
import styled from 'styled-components/native'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import GlobalStyled from '../../style/GlobalStyled'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import theme from '../../style/theme'
const styles = StyleSheet.create({
    button : {
        display : "flex",
        padding : 0.25,
        borderRadius : 1 ,
        alignItems : "center",
        justifyContent: "center",
        height: 30,
        width : wp("20"),
        borderRadius : 5,
        backgroundColor : theme.color.sky
    },
    text : {
        color : theme.color.white,
        fontWeight : "bold",
        margin : 1
    }
})
const Styled = {
    Body: styled(GlobalStyled.CenterRow)`
        width : ${props => props.width};
        flex-direction : column;
        background-color : ${props => props.theme.color.lightBlue};
        padding : 10px ;
        border-radius : 10
    `,
    Title: styled(GlobalStyled.CenterRow)`
        font-size : 8.75px;
    `,
    Value: styled.Text`
        font-size : 25px;
        font-weight : bold;
        color : ${props => props.color};
    `
}

const SimilarQuestionCard = (props) => {

    const { info, onClickButton } = props

    const { title, value, buttonText, color, width, id } = info

    const handleOnClickButton = () => {
        onClickButton(id)
    }


    return (
        <Styled.Body width={width}>
            <Styled.Title>
                <Text>
                    {title}
                </Text>
            </Styled.Title>
            <Styled.Value
                color={color}
            >
                    {value}
            </Styled.Value>
            <GlobalStyled.CenterRow>
                <TouchableOpacity
                    onPress={handleOnClickButton}
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        {buttonText}
                    </Text>
                </TouchableOpacity>
            </GlobalStyled.CenterRow>
        </Styled.Body>
    );
};


SimilarQuestionCard.defaultProps = {
    info: {
        id: 1,
        title: '제목',
        value: '100',
        buttonText: '문항담기',
        color: theme.color.blue,
        width: '13rem',
    },
    onClickButton: function () { }
}

export default SimilarQuestionCard;