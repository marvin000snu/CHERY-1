import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import styled from "styled-components/native";
const Styled = {
  body: styled.View`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    align-items: center;
    background-color: #f0f3f8;
  `,
  View:styled.View`
    padding:10;
    margin-top:100;
  `,
  Text:styled.View`
    padding:10;
    font-size:42;
  `,
};
const Text1 = () => {
  const [text, setText] = useState("");
  return (

      <Styled.View>
          <Text12 text={text} setText={setText}/>
        <Styled.Text>
          {text
            .split(" ")
            .map((word) => word && "🍕")
            .join(" ")}
        </Styled.Text>
      </Styled.View>

  );
};

const Text12 = (props) => {
    const { text, setText } = props
  return (
    <View>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
    </View>
  );
};

export default Text1;
