import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'

import StageVocabularyInfo from '../Molecules/StageVocabularyInfo'

const Styled = {
    Body: styled(GlobalStyled.Row)`
        flex-direction : column;
        border-width: 0;
    `,
}

const StageVocabularyList = (props) => {

    const { infos, vocabularyOnClick } = props

    const list = infos.map((res, i)=>{
        return (
            <GlobalStyled.Row >
                <StageVocabularyInfo
                    key={i}
                    title={res.title}
                    infos={res.infos}
                    vocabularyOnClick={vocabularyOnClick}
                />
            </GlobalStyled.Row>
        )
    })

    return (
        <Styled.Body
        >
            {list}
        </Styled.Body>
    );
};


// StageVocabularyList.defaultProps = { 
//     infos : [
//         {
//             title : '제목_1',
//             infos : ['establish','establish','establish','establish','establish','establish','establish','establish','establish','establish'
//             ,'establish','establish','establish','establish','establish','establish']
//         },
//         {
//             title : '제목_2',
//             infos : ['establish','establish','establish','establish','establish','establish','establish','establish','establish','establish'
//             ,'establish','establish','establish','establish','establish','establish']
//         },
//     ],
// }

export default StageVocabularyList;