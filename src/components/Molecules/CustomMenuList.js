import React from 'react';
import styled from 'styled-components/native'

import GlobalStyled from '../../style/GlobalStyled'
import CustomMenu from '../Atoms/CustomMenu';

const Styled = {
    Body: styled(GlobalStyled.CenterRow)`
        flex-direction : column;
        width : ${props => props.width};
    `
}

const CustomMenuList = (props) => {

    const { infos, width, css } = props

    const list = infos.map((res, i) => {
        return (
            <CustomMenu
                key={i}
                info={res}
                css={css}
            />
        )
    })

    return (
        <Styled.Body
            width={width}
            css={css}
        >
            {list}
        </Styled.Body>
    );
};


CustomMenuList.defaultProps = {
    infos: [],
    width: '10rem',
}

export default CustomMenuList;