import React from "react";
import styled from "styled-components/native";
const LoginForm = function (props) {
  const placeholder = props.placeholder;
  const Styled = {
    form: styled.View`
      width: 100%;
      height: 50px;
    `,
    id: styled.TextInput`
      font-size: 14px;
      padding: 11px;
      border: none;
      width: 95%;
      height: auto;
      background-color: #f7f7f7;
      border-left-width: 5px;
      border-color: #097ff5
    `,
  };
  return (
    <Styled.form>
      <Styled.id placeholder={placeholder} />
    </Styled.form>
  );
};

export { LoginForm };
