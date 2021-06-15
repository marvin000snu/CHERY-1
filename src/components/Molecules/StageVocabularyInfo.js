import React from 'react';
import styled from 'styled-components/native'
import { TouchableOpacity, StyleSheet, Text} from 'react-native'
import GlobalStyled from '../../style/GlobalStyled'
import theme from '../../style/theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const Styled = {
    Body: styled(GlobalStyled.Col)`

    `,
    Word : styled.Button`
        display : flex;
        color : ${props => props.theme.color.darkGray};
        background-color : ${props=>props.theme.color.realGray};
        border-radius: 10;
        margin-bottom : 10;
        padding : 1px;
        margin-right : 5;
    `,
    WordWrapper : styled(GlobalStyled.Row)`
        display : flex;
        width : ${wp("95%")};
        flex-direction : row;
        flex-wrap : wrap;
        justify-content: center;
        border-bottom-width: 1px;
        border-style: solid; 
        border-color: ${props => props.theme.color.lightGray};
        :last-child {
            border-bottom: 0;
        }
    `
}

const styles = StyleSheet.create({
    wordButton : {
        display : "flex",
        padding : 0.25,
        borderRadius : 1 ,
        alignItems : "center",
        justifyContent: "center",
        color : theme.color.darkGray , 
        backgroundColor : theme.color.darkGray,
        height: 30,
        borderRadius : 15,
        margin : 2

    },
    wordText : {
        color : theme.color.white,
        margin : 10
    }
})

const StageVocabularyInfo = (props) => {

    const { title, infos,vocabularyOnClick } = props

    const list = infos.map((res, i)=>{
        return (
            <TouchableOpacity 
                style={styles.wordButton}
                key={i}
                onDoubleClick={()=>{vocabularyOnClick(res)}}
                title={res}
            >
                <Text style={styles.wordText}>{res}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <Styled.Body width="100" flexDirection="column">
            <GlobalStyled.CenterCol width="100" flexDirection="row">
                <Text>
                {title}
                </Text>
            </GlobalStyled.CenterCol>
            <GlobalStyled.CenterCol width="100" flexDirection="row">
                <Styled.WordWrapper>
                    {list}
                </Styled.WordWrapper>
            </GlobalStyled.CenterCol>
        </Styled.Body>
    );
};


// StageVocabularyInfo.defaultProps = { 
//     title : '제목',
//     infos : ['establish','establish','establish','establish','establish','establish','establish','establish','establish','establish'
//     ,'establish','establish','establish','establish','establish','establish']
// }

export default StageVocabularyInfo;