import React from 'react';
import styled from 'styled-components/native'


const Styled = {
  Body: styled.View`
        display : flex;
        width : 100%;
        align-items : center;
        justify-content : center;
    `,
  Wrapper: styled.View`
        ${props => props.css};
    `,
  LoadingCircle: styled.View`
        margin : 0 auto;
        width: ${props => props.size};
        height: ${props => props.size};
        border: 3px solid rgba(255,255,255,.8);
        border-radius: 50px
        border-top-color: ${props => props.theme.color.blue};
    `
}



const CircleSpinner = (props) => {

  const { isLoading, children, size, css } = props;

  return (
    <>
      {isLoading ? (
        <Styled.Body>
          <Styled.Wrapper
            css={css}
          >
            <Styled.LoadingCircle
              size={size}
            />
          </Styled.Wrapper>
        </Styled.Body>
      ) : (
          <>
            {children}
          </>
        )}
    </>
  )

}


CircleSpinner.defaultProps = {
  size: '100%',
}

export default CircleSpinner;