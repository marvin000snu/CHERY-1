import React from 'react';
import styled from 'styled-components/native'
import { typography, space, color } from 'styled-system'
import AnswerCircle from '../../images/iconSvg/answer_circle'
import WrongCircle from '../../images/iconSvg/wrong_circle'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const Body = styled.View`
    display : flex;
    width : 15px;
    ${typography}
    ${space}
    ${color}
`

const CheckLearning = (props) => {

    const { isLearning } = props

    const imgName = isLearning ? 'answer_circle' : 'wrong_circle'

    return (
        <Body
            {...props}
        >
            {
            isLearning ?<AnswerCircle size={wp("5%")}/>:<WrongCircle size={wp("5%")}/>
            }
        </Body>
    );
};

export default CheckLearning;