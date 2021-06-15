import React from "react";
import styled from "styled-components/native";
import Icon10 from "../../../svg/icon10";

const Styled = {
  Wrap: styled.TouchableOpacity`
    width: 90%;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: #cdcdcd;
  `,
  InfoWrap: styled.View`
    width: auto;
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-left: 10px;
  `,
  Setting: styled.TouchableOpacity`
    width: auto;
    height: auto;
  `,
  Profile: styled.View`
    width: 42px;
    height: 42px;
  `,
  ProfileBox: styled.View`
    width: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 10px;
  `,
  NameText: styled.Text`
    font-family: NotoSansKR-Bold;
    font-size: 15px;
    font-weight: 500;
    color: #1b2c49;
  `,
  ProfileMessage: styled.Text`
    font-family: NotoSansKR-Bold;
    font-size: 14px;
    font-weight: 100;
    color: #1b2c49;
  `,
};
const FriendProfile = (props) => {
  const { name, msg ,PressHandler} = props;
  return (
    <Styled.Wrap onPress={PressHandler}>
      <Styled.InfoWrap>
        <Styled.Profile>
          <Icon10 />
        </Styled.Profile>
        <Styled.ProfileBox>
          <Styled.NameText>{name}</Styled.NameText>
          <Styled.ProfileMessage>{msg}</Styled.ProfileMessage>
        </Styled.ProfileBox>
      </Styled.InfoWrap>
      <Styled.Setting></Styled.Setting>
    </Styled.Wrap>
  );
};
export default FriendProfile;
