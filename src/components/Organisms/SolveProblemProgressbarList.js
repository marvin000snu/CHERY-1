import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'
import SolveProblemProgressbar from '../Molecules/SolveProblemProgressbar';

const Styled = {
    Body: styled(GlobalStyled.Row)`
        flex-direction : column;
    `
}

const SolveProblemProgressbarList = (props) => {

    const { infos } = props

    const list = infos.map((res, i)=>{
        return (
            <GlobalStyled.Row 
                key={i}
            >
                <SolveProblemProgressbar
                    info={res}
                />
            </GlobalStyled.Row>
        )
    })

    return (
        <Styled.Body>
            {list}
        </Styled.Body>
    );
};


SolveProblemProgressbarList.defaultProps = {
    infos : [
        {
            title: '제목',
            value: 0,
            
        },
        {
            title: '제목',
            value: 0,
        },
    ]
}

export default SolveProblemProgressbarList;