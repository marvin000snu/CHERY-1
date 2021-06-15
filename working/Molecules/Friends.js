

import React from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import FriendProfile from "../Atom/FriendProfile";
const Styled = {
  background: styled.View`
    background-color: #5471ff;
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  component: styled.View`
  background-color: #fff;
  width: ${wp(90)};
  justify-content: center;
  `,
};

const Experi = (props) => {
    const {list} = props;
    let friends = list.map((v, idx) => {
        return(<FriendProfile iconType = {v.iconType} message={v.message} name={v.name} />)
    });
  return (
    <Styled.background>
      <Styled.component>
          {friends}
      </Styled.component>
    </Styled.background>
  )
};

export default Experi;

