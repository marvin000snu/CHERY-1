import React from 'react';
import styled from 'styled-components/native'
import { Text } from 'react-native'
import GlobalStyled from '../../style/GlobalStyled'
import ProgressBarOption from './ProgressbarOption';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const Styled = {
    Body: styled(GlobalStyled.Row)`
        flex-direction : row
        width : ${wp(90)};
        background-color : ${props => props.theme.color.lightBlue};
        flex-wrap : wrap;
    `,
    Title: styled.Text`
        font-size : 12.5;
        align-items : center;
    `,
    Value: styled(GlobalStyled.Row)`
        font-size : 25;
        font-weight : bold;
        justify-content : center;
        color : ${props => props.theme.color.indigo};
    `,
    Content: styled(GlobalStyled.Row)`
        font-size : 8.75;
        color : ${props => props.theme.color.darkGray};
    `,
    Col: styled(GlobalStyled.Col)`
        flex-direction : column;
        height : 100%;
    `,
    FancyText: styled.Text`
        font-weight : bold
    `

}

const ExampleDifficultyCard = (props) => {

    const { info } = props

    const { percent, value, type } = info

    return (
        <Styled.Body>
            <GlobalStyled.CenterCol width="80" flexDirection="column">
                <ProgressBarOption
                    isMarker={false}
                    percent={percent}
                />
            </GlobalStyled.CenterCol>

            <GlobalStyled.CenterCol width="20" flexDirection="column">
                <Styled.FancyText>
                    {value}
                </Styled.FancyText>
            </GlobalStyled.CenterCol>
            <GlobalStyled.CenterCol width="80" flexDirection="column">
                <Styled.Content>
                    <Text>
                        {
                            `전체 문제 중 ${type} 난이도가`
                        }
                    </Text>
                </Styled.Content>
                <Styled.Content>
                    <Text>
                        {
                            `상위 ${100 - percent}% 에 드는 문항입니다`
                        }
                    </Text>
                </Styled.Content>
            </GlobalStyled.CenterCol>

            {/* <Styled.Col width="50">
                <Styled.Value>
                    
                </Styled.Value>
                
            </Styled.Col>   */}
        </Styled.Body>
    );
};


ExampleDifficultyCard.defaultProps = {
    info: {
        title: '제목',
        value: 100,
        width: '100%',
        type: '타입',
        percent: 0,
    },
}

export default ExampleDifficultyCard;