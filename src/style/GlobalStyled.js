import styled from "styled-components";
import { typography, space, color, layout } from "styled-system";
import theme from "./theme";

const Parent = {
  Card: styled.View`
        display : flex;
        padding : 1px;
        background-color : ${(props) => props.theme.color.white};
        border-radius : 30;
        shadow-offset: {  width: 10,  height: 10,  };
        shadow-color: black;
        shadow-opacity: 1.0;
        margin-bottom : 10
        ${typography}
        ${space}
        ${color}
        ${layout}
    `,
  Button: styled.Button`
    display: flex;
    padding: 0.25px 0.5px;
    border-radius: 0.25;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.blue};
    :hover {
      background-color: ${(props) => props.theme.color.deepBlue};
    }
    :active {
      background-color: ${(props) => props.theme.color.darkBlue};
    }
    ${typography}
    ${space}
        ${color}
        ${layout}
  `,
  Row: styled.View`
    display: flex;
    width: 100%;
  `
};

const ButtonTheme = {
  blue: {
    backgroundColor: theme.color.blue,
    color: theme.color.white,
    hover: {
      backgroundColor: theme.color.deepBlue
    },
    active: {
      backgroundColor: theme.color.darkBlue
    }
  },
  indigo: {
    backgroundColor: theme.color.whiteIndigo,
    color: theme.color.white,
    hover: {
      backgroundColor: theme.color.blueIndigo
    },
    active: {
      backgroundColor: theme.color.realIndigo
    }
  },
  gray: {
    backgroundColor: theme.color.whiteBlue,
    color: theme.color.white,
    hover: {
      backgroundColor: theme.color.realBlueGray
    },
    active: {
      backgroundColor: theme.color.darkGray
    }
  }
};

const GlobalStyled = {
  Body: styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Container: styled.View`
    width: 100%;
    margin: auto;
    ${typography}
    ${space}
        ${color}
        ${(props) => props.css};
  `,
  Col: styled.View`
    display: flex;
    width: ${(props) => props.width}%;
    flex-direction: ${(props) => props.flexDirection};
    ${typography}
    ${space}
        ${color}
  `,
  Row: styled(Parent.Row)`
    margin-bottom: 10px ${typography} ${space} ${color};
  `,
  ColumnRow: styled(Parent.Row)`
    flex-direction: column;
    ${typography}
    ${space}
        ${color}
  `,
  CenterRow: styled(Parent.Row)`
    align-items: center;
    justify-content: center;
    ${typography}
    ${space}
        ${color}
  `,
  CenterCol: styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => props.flexDirection};
    width: ${(props) => props.width}%;
    ${typography}
    ${space}
        ${color}
  `,
  RightCol: styled.View`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: ${(props) => props.flexDirection};
    width: ${(props) => props.width}%;
    ${typography}
    ${space}
        ${color}
  `,
  Card: styled(Parent.Card)`
    ${typography}
    ${space}
        ${color}
        flex-direction : column;
  `,

  ButtonCard: styled(Parent.Card)`
    display: flex;
    width: 100%;
    padding: 2px 0px;
    padding-top: 4px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${(props) => props.theme.color.white};
    :hover {
      background-color: ${(props) => props.theme.color.whiteSky};
    }
    :active {
      border: 0.175 solid ${(props) => props.theme.color.sky};
    }
  `,

  Button: styled(Parent.Button)`
    color: ${(props) =>
      ButtonTheme[props.colorTheme ? props.colorTheme : "blue"].color};
    background-color: ${(props) =>
      ButtonTheme[props.colorTheme ? props.colorTheme : "blue"]
        .backgroundColor};
    :hover {
      background-color: ${(props) =>
        ButtonTheme[props.colorTheme ? props.colorTheme : "blue"].hover
          .backgroundColor};
    }
    :active {
      background-color: ${(props) =>
        ButtonTheme[props.colorTheme ? props.colorTheme : "blue"].active
          .backgroundColor};
    }
  `,

  ThemeButton: styled(Parent.Button)``,

  ActiveButton: styled(Parent.Button)`
    color: ${(props) =>
      ButtonTheme[props.colorTheme ? props.colorTheme : "blue"].color};
    background-color: ${(props) =>
      ButtonTheme[props.colorTheme ? props.colorTheme : "blue"]
        .backgroundColor};
    opacity: ${(props) => (props.isActive ? 1 : 0.6)};
    :hover {
      background-color: ${(props) =>
        props.isActive
          ? ButtonTheme[props.colorTheme ? props.colorTheme : "blue"].hover
              .backgroundColor
          : ButtonTheme[props.colorTheme ? props.colorTheme : "blue"]
              .backgroundColor};
    }
    :active {
      background-color: ${(props) =>props.isActive ? ButtonTheme[props.colorTheme ? props.colorTheme : "blue"].active.backgroundColor
          : ButtonTheme[props.colorTheme ? props.colorTheme : "blue"]
              .backgroundColor};
    }
  `,

  ActiveRow: styled(Parent.Row)`
    display: ${(props) => (props.isActive ? "flex" : "none")};
  `,

  TransparentButton: styled.Button`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  `,

  BorderButton: styled.Button`
    border: 2px solid
      ${(props) =>
        props.borderColor ? props.borderColor : props.theme.color.blue};
    color: ${(props) =>
      props.borderColor ? props.borderColor : props.theme.color.blue};
    border-radius: 0.5;
    width: 100%;
    padding: 0.5 0;
    ${typography}
    ${space}
        ${color}
        ${layout}
  `,

  Word: styled.View`
    display: inline-block;
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.color.darkGray};
    background-color: ${(props) => props.theme.color.realGray};
    border-radius: 1;
    padding: 0.1 0.875;
  `,
  ViewCol: styled.View`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "100%")};
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : "center"};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  `,
  ViewRow: styled.View`
    display: flex;
    flex-direction: row;
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "100%")};
    justify-content: ${(props) =>
      props.justifyContent ? props.justifyContent : "center"};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  `
};

export default GlobalStyled;
