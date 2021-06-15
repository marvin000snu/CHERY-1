import React from 'react';
import styled from 'styled-components/native'
import { StyleSheet ,Text } from 'react-native'
import GlobalStyled from '../../style/GlobalStyled'
import theme from '../../style/theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign'
const Styled = {
    Body: styled.View`
        display : flex;
        width : 100%;
        align-items : center;
        justify-content : center;
        color : ${props => props.theme.color.indigo};
        flex-direction : row;
    `,
    GrayBorder: styled.View`
        display : flex;
        align-items : center;
        justify-content : center;
        border-radius : ${wp("4")}px;
        background-color : ${props => props.theme.color.realGray};
        padding : ${wp("1")}px
        
    `,
    GrayBorderText : styled.Text`
        color : ${props => props.theme.color.darkGray};
    `
}

const Styles  = StyleSheet.create({
    CircleButton : {
        display: "flex",
        justifyContent : "center",
        alignItems: "center",
        backgroundColor : theme.color.realBlueGray,
        width : wp("6") , 
        height : wp("6") ,
        borderRadius : wp("3"),

    }

})


const IncorrectQuestion = (props) => {

    const { iconName, info, onClick } = props

    const { date, name, divisionNumber } = info

    const handleOnClickButton = () => {
        onClick(info)
    }

    return (
        <Styled.Body>
            <GlobalStyled.Col width="15" flexDirection="row">
                <Text>
                    {date}
                </Text>
            </GlobalStyled.Col>
            <GlobalStyled.Col width="45" flexDirection="row">
                <Text>
                    {name}
                </Text>
            </GlobalStyled.Col>
            <GlobalStyled.Col width="30" flexDirection="row">
                <Styled.GrayBorder>
                    <Styled.GrayBorderText>
                        {divisionNumber}
                    </Styled.GrayBorderText>
                </Styled.GrayBorder>
            </GlobalStyled.Col>
            <GlobalStyled.CenterCol width="10" flexDirection="row">
                <TouchableOpacity
                    onPress={handleOnClickButton}
                    style={Styles.CircleButton}

                >
                    <Icon name={iconName} size={15} color="white" />
                </TouchableOpacity>
            </GlobalStyled.CenterCol>
        </Styled.Body>
    );
};


IncorrectQuestion.defaultProps = {
    info: {
        date: '-',
        name: '-',
        divisionNumber: '-',
    },
    svgName: 'addButton',
}

export default IncorrectQuestion;