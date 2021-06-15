import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'
import TodayLearningInfo from '../Molecules/TodayLearningInfo.jsx';

const Styled = {
    Body: styled.View`
        display : flex;
        flex-direction : column;
        width : 100%;
        color : ${props => props.theme.color.indigo};
    `,
    InfoBody: styled.View`
        display : flex;
        flex-direction : column;
        width : 100%;
    `,
    TableRow: styled(GlobalStyled.Row)`
    flex-direction : row
    `
}

const TodayLearningList = (props) => {

    const { infos, isClickTodayProblem, onClickTodayProblem,
        onClickSolve, onClickDownload, onClickScoring } = props

    const list = infos.map((res, i) => {
        return (
            <GlobalStyled.Row
                key={i}
            >{res.isMakingTestPaper && (!res.isScoring) ?<TodayLearningInfo
                info={res}
                onClickTodayProblem={onClickTodayProblem}
                isClickTodayProblem={isClickTodayProblem}
                onClickPDF={onClickSolve}
                onClickDownload={onClickDownload}
                onClickScoring={onClickScoring}
            />:<TodayLearningInfo
                    info={res}
                    onClickTodayProblem={onClickTodayProblem}
                    isClickTodayProblem={isClickTodayProblem}
                    onClickPDF={() => { alert("이미 풀어본 시험지 입니다.") }}
                    onClickDownload={onClickDownload}
                    onClickScoring={() => { alert("이미 채점한 시험지 입니다.") }}
                />
                }</GlobalStyled.Row>
        )
    })

    return (
        <Styled.Body>
            <Styled.TableRow >
                <GlobalStyled.CenterCol width="25" flexDirection="row" />
                <GlobalStyled.CenterCol width="25" flexDirection="row">
                    <Text>
                        시험지 생성
                    </Text>
                </GlobalStyled.CenterCol>
                <GlobalStyled.CenterCol width="25" flexDirection="row">
                    <Text>

                        채점 완료
                    </Text>
                </GlobalStyled.CenterCol>
                <GlobalStyled.CenterCol width="25" flexDirection="row">
                    <Text>
                        결과
                    </Text>
                </GlobalStyled.CenterCol>
            </Styled.TableRow>
            <Styled.InfoBody>
            {list}
            </Styled.InfoBody>
        </Styled.Body>
    )
}

TodayLearningList.defaultProps = {
    infos: [],
}

export default TodayLearningList;