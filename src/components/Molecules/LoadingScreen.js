import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/native'
import { keyframes } from 'styled-components'
import { Text } from 'react-native'
import LoadingBar from '../Atoms/LoadingBar';
import Modal from '../Atoms/Modal';
import theme from '../../style/theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const Animation = {
    opacity: (props) => {
        return keyframes`
            from {
                opacity : ${props.beforeValue};
            }
            to {
                opacity : ${props.afterValue};
            }
        `
    }
}

const Styled = {
    Wrapper: styled.View`
        display : flex;
        flex-direction : column;
        align-items : center;
        justify-content : center;
        width : 30%;
        margin : auto;
        color : ${props => props.theme.color.white};
        font-size : ${parseInt(wp("100%"))}px;
    `,
    LoadingBarWrapper: styled.View`
        display : flex;
        width : 80%;
    `,
    LevelWrapper: styled.View`
        display : flex;
        width : 100%;
        align-items : center;
        justify-content : center;
        margin-top : 10px;
    `,
    TextWrapper: styled.View`
        display : flex;
        width : 100%;
        align-items : center;
        justify-content : center;
        margin-top : 5px;
    `
}

const modalCss = css`
    animation : ${props => Animation.opacity(props)} 1s;
    animation-fill-mode : forwards;
`

const LoadingScreen = (props) => {

    const { infos, level, load } = props

    const [beforeValue, setBeforeValue] = useState(1)

    const [afterValue, setAfterValue] = useState(1)

    const [isActiveLoading, setIsActiveLoading] = useState(true);

    const [formatInfo, setFormatInfo] = useState({
        level: 1,
        value: '1단계 가동',
        content: '',
    });

    useEffect(() => {
        if (load) {
            setIsActiveLoading(true)
            const formatValue = 1 - ((level / infos.length) - 0.4)
            if (afterValue !== formatValue) {
                setBeforeValue(afterValue)
                setAfterValue(formatValue)
            }
        } else {

        }

    }, [level, infos, afterValue, load])

    useEffect(() => {
        if (load) {
            setIsActiveLoading(true)
            let selectLevelInfo = {
                level: 1,
                value: '',
                content: '',
            }
            infos.map((res) => {
                if (res.level === level) {
                    selectLevelInfo = res
                }
                return res
            })

            if (level >= infos.length) {
                setTimeout(() => {
                    setIsActiveLoading(false)
                }, 1000)
            }

            setFormatInfo(selectLevelInfo)
        } else {
            setIsActiveLoading(false)
        }
    }, [infos, level, load])


    const { value, content } = formatInfo

    return (
        <Modal
            css={modalCss}
            beforeValue={beforeValue}
            afterValue={afterValue}
            isActive={isActiveLoading}
            theme={theme}
        >
            <Styled.Wrapper theme={theme}>
                <Styled.LoadingBarWrapper>
                    <LoadingBar
                        value={((level / infos.length) * 100)}
                    />
                </Styled.LoadingBarWrapper>
                <Styled.LevelWrapper>
                    <Text>
                        {`${value} (${level}/${infos.length})`}
                    </Text>
                </Styled.LevelWrapper>
                <Styled.TextWrapper>
                    <Text>{content}</Text>
                </Styled.TextWrapper>
            </Styled.Wrapper>
        </Modal>
    );
};


LoadingScreen.defaultProps = {
    level: 1,
    infos: [
        {
            level: 1,
            value: '1단계 가동',
            content: '부가 설명',
        }
    ],

}

export default LoadingScreen;