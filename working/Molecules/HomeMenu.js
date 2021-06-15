import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import HomeMainButton from "../Atom/HomeMainButton";
const Styled = {
    body: styled.View`
      width: ${wp(93)};
      height: ${wp(30)}px;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
    `,
};  
const HomeMenu = (props) => {
    const {img, title, navigation} = props;

return(
    <Styled.body>
        <HomeMainButton Img = {img[0]} title = {title[0]} navigation={navigation} navTo="Study"/>
        <HomeMainButton Img = {img[1]} title = {title[1]} navigation={navigation} navTo="Resume"/>
        <HomeMainButton Img = {img[2]} title = {title[2]} navigation={navigation} navTo="Search"/>
    </Styled.body>
)
}

export {HomeMenu};