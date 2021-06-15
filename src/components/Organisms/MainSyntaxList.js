import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'
import MainSyntaxInfo from '../Molecules/MainSyntaxInfo';


const Styled = {
    Body: styled(GlobalStyled.CenterRow)`
        flex-direction : column;
        width : 100%
    `,
}

const MainSyntaxList = (props) => {

    const { infos, buttonText, onClickButton } = props

    const list = infos.map((res, i)=>{
        return (
            <GlobalStyled.Row>
                <MainSyntaxInfo
                    info={{
                        ...res,
                        buttonText : res.buttonText ? res.buttonText : buttonText
                    }}
                    onClickButton ={onClickButton}
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


MainSyntaxList.defaultProps = {
    infos : [
        {
            id: 1,
            title: '제목',
            value : 'If we reason that Paula is afraid either of snakes or spiders, and then establish that she is not afraid of snakes, we will conclude that Paula is afraid of spiders',
        },
        {
            id: 2,
            title: '제목',
            value : 'If we reason that Paula is afraid either of snakes or spiders, and then establish that she is not afraid of snakes, we will conclude that Paula is afraid of spiders',
        },
        {
            id: 3,
            title: '제목',
            value : 'If we reason that Paula is afraid either of snakes or spiders, and then establish that she is not afraid of snakes, we will conclude that Paula is afraid of spiders',
        },
    ],
    buttonText : '유사구문 포함 문항 담기',
    onClickButton : function(){}
}

export default MainSyntaxList;