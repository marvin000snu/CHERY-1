import React from 'react';
import {css} from 'styled-components/native'

import PageHeaderCustom from '../Atoms/PageHeaderCustom'

const CardHeaderCustom = (props) => {

    const { children } = props

    return (
        <PageHeaderCustom
        css={css`padding : 0;`}
        titleCss={css`padding : 0 ; font-size : 12.5px; `}
        contentCss={css`padding : 0; `}
        containerCss={css`width : auto; margin : 0;`}
        {...props}
        >
            {children}
        </PageHeaderCustom>
    );
};

export default CardHeaderCustom;