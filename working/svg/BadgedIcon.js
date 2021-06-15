// levelType을 0으로 설정하면, icon만 불러올 수 있습니다
import React from "react";
import styled from "styled-components/native";
import { TouchableWithoutFeedback, Text } from "react-native";
import icon1 from "./icon1";
import icon2 from "./icon2";
import icon3 from "./icon3";
import icon4 from "./icon4";
import icon5 from "./icon5";
import icon6 from "./icon6";
import icon7 from "./icon7";
import icon8 from "./icon8";
import icon9 from "./icon9";
import icon10 from "./icon10";
import icon11 from "./icon11";
import icon12 from "./icon12";
import icon13 from "./icon13";
import icon14 from "./icon14";
import icon15 from "./icon15";
import icon16 from "./icon16";
import icon17 from "./icon17";
import icon18 from "./icon18";
import icon19 from "./icon19";
import icon20 from "./icon20";
import icon21 from "./icon21";
import icon22 from "./icon22";
import icon23 from "./icon23";
import icon24 from "./icon24";
import icon25 from "./icon25";
import level1 from "./level1";
import level2 from "./level2";
import level3 from "./level3";
import level4 from "./level4";
import level5 from "./level5";
import IconStand from "./iconStand";

//0부터 하기 애매하니 0은 icon1로
const icons = [icon1, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23, icon24, icon25];
const levels = [level1, level1, level2, level3, level4, level5];
const BadgedIcon = (props) => {
  const iconType = props.iconType ? Math.min(Math.max(props.iconType, 0), icons.length - 1) : 0;
  const levelType = props.levelType ? Math.min(Math.max(props.levelType, 0), levels.length - 1) : 0;
  const size = props.size ? props.size : 60;
  const standSize = props.size ? props.size*71.75/60 : 71.75;
  const Styled = {
    background: styled.View`
    width: 60px;
    height: 60px;
    `,
    shadow: styled.View`
      box-shadow: ${(levelType === 0)? "none" : "0px 2px 2px rgba(0, 0, 0, 0.3)"};
      elevation: ${(levelType === 0)? 0 : 10};
      justify-content: center;
      align-items:center;
      display:flex;
    `,
  };

  let Icon = icons[iconType];
  let Level = levels[levelType];
  return (
    <Styled.background>
      <Styled.shadow>
        <IconStand size = {standSize} display={(levelType === 0)? "none" : "flex"}/>
      </Styled.shadow>
      <Icon position="absolute" left={-0.5} top={3} size={size} />
      <Level position="absolute" left={45} top={42} display={(levelType === 0)? "none" : "flex"}/>
    </Styled.background>
  );
};
export default BadgedIcon;
