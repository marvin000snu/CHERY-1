import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native"
const DateSearch = function () {
    const Styled = {
        search: styled.View`
      width: 95%;
      height: 5%
      background-color: #fff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom-width: 1px;
      border-bottom-color: #dbe5ea;
      flex-direction: row;

    `,
        searchbar: styled.View`
      height: 36px;
      width: 160px;
      border: 1px solid #1b5ac2;
      flex-direction: row;
      background: #fff;
      justify-content: space-between;
    `,
        input: styled.TextInput`
        height: 100%;
      font-size: 15px;
      width: 100px;
      padding: 7px;
      border: 0px;
      background-color: #fff;
    `,
        searchbtn: styled.View`
      width: 36px;
      height: 36px;
      border: 0px;
      background: #a4b6d6;
      color: #fff;
    `,
    };
    return (
        <Styled.search>
            <Text style={{ fontSize: 20, width: 80 }}>탐색 날짜</Text>
            <Styled.searchbar>
                <Styled.input placeholder="2020-08-18" />
                <Styled.searchbtn><Text>img</Text></Styled.searchbtn>
            </Styled.searchbar>
        </Styled.search>
    );
};
export { DateSearch }