import React from 'react';
import {css} from 'styled-components/native'

import PageHeader from '../Atoms/PageHeader'

const CardHeader = (props) => {

    const { children } = props

    return (
        <PageHeader
        css={css`padding : 0;`}
        titleCss={css`padding : 0 ; font-size : 12.5px; `}
        contentCss={css`padding : 0; `}
        containerCss={css`width : auto; margin : 0;`}
        {...props}
        >
            {children}
        </PageHeader>
    );
};

export default CardHeader;