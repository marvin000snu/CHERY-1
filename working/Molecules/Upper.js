import React from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableWithoutFeedback } from "react-native";
import Logo from "../../src/images/iconSvg/logo";
import BurgerButton from "../img/BurgerButton";
const Styled = {
    body: styled.View`
    width: ${wp(100)};
    height: ${hp(10)}px;
    justify-content: flex-end;
    align-items: center;
    `,
    banner: styled.View`
    width: ${wp(95)};
    height: ${hp(5)}px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    `,
    burger: styled.View`
    width: ${wp(10)};
    height: ${wp(10)}px;
    justify-content: flex-end;
    align-items: center;

    `,
    logo: styled.View`
    width: ${wp(40)};
    height: ${hp(5)}px;
    justify-content: flex-end;
    align-items: center;
    `,
};

const Upper = (props) => {
    const { onOpen } = props;
    const onBurger = () => {
        onOpen();
    }
    return (
        <Styled.body>
            <Styled.banner>
                <Styled.burger>
                </Styled.burger>
                <Styled.logo>
                    <Logo size={wp(30)} />
                </Styled.logo>
                <TouchableWithoutFeedback onPress={onBurger}>
                    <Styled.burger>
                        <BurgerButton size={wp(6)} color="#5571ff" />
                    </Styled.burger>
                </TouchableWithoutFeedback>
            </Styled.banner>
        </Styled.body>
    )
}


export { Upper };