import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import BadgedIcon from "../../working/svg/BadgedIcon";
const Styled = {
    body: styled.View`
    margin-bottom: ${hp(2)}px;
    height: ${hp(10)}px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    `,
    space: styled.View`
    width: ${wp(90)}px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    `,
    HeaderText: styled.Text`
    font-size: ${wp(5.5)}px;
    font-family: NotoSansKR-Regular;
    `,
    icon: styled.View`
    width: ${hp(10)}px;
    height: ${hp(10)}px;
    justify-content: center;
    align-items: center;
    `,
    bold: styled.Text`
    font-weight: bold;
    `,

};
const HomeUserBanner = (props) => {
    const {username, ment, iconType, level} = props;
    return(
        <Styled.body>
            <Styled.space>
                <Styled.HeaderText>
                    <Styled.bold>
                        {username}
                    </Styled.bold>
                        님 {"\n"}
                        {ment}
                    </Styled.HeaderText>
                <Styled.icon >
                    <BadgedIcon iconType ={iconType} levelType = {level}/>
                </Styled.icon>
            </Styled.space>
        </Styled.body>
    )
}
export default HomeUserBanner;