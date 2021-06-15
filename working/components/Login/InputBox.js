import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../../src/function/Input";
import Warning from "../../../working/svg/Warning";
const Styled = {
  InputBox: styled.View`
    width: 271px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: red;
  `,
  ColorBox: styled.View`
    width: 6px;
    height: 40px;
  `,
  TextInput: styled.TextInput`
    width: 265px;
    height: 40px;
    padding: 0px;
    margin: 0px;
    background-color: #fff;
    border: 1px solid #cacdd3;
    padding: 0px 0px 0px 10px;
  `,
};
const InputBox = (props) => {
  const { data, ID, setID, PW, setPW } = props;
  const [valid, setValid] = useState(true);
  if (data === "PW") {
    return (
      <Styled.InputBox>
        <Styled.ColorBox style={{ backgroundColor: valid ? "#5571FF" : "#FF3250" }} />
        <Styled.TextInput
          style={{ borderColor: valid ? "#CACDD3" : "#FF3250" }}
          as={Input}
          pattern={[/^[0-9a-z]{8,21}$/]}
          onValidation={(e) => {
            setValid(e == "true");
          }}
          onChangeText={(text) => {
            setPW(text);
          }}
          value={PW}
          placeholder={data}
          secureTextEntry={true}
        />
        {!valid && <Warning size={24} style={{ position: "absolute", right: 10 }} />}
      </Styled.InputBox>
    );
  } else {
    return (
      <Styled.InputBox>
        <Styled.ColorBox style={{ backgroundColor: valid ? "#5571FF" : "#FF3250" }} />
        <Styled.TextInput
          style={{ borderColor: valid ? "#CACDD3" : "#FF3250" }}
          as={Input}
          autoCapitalize="none"
          pattern={[/^[0-9a-z]{8,21}$/]}
          onValidation={(e) => {
            setValid(e == "true");
          }}
          onChangeText={(text) => {
            setID(text);
          }}
          value={ID}
          placeholder={data}
        />
        {!valid && <Warning size={24} style={{ position: "absolute", right: 10 }} />}
      </Styled.InputBox>
    );
  }
};
export default InputBox;
