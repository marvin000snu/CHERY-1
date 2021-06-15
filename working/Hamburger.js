import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import styled from "styled-components";
import Drawer from 'react-native-drawer'
import HomeMyMenu from "./HomeMyMenu";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
const Styled = {
    background: styled.View`
    height: ${hp(80)};
    background-color: white;
    `,
    what: styled.View`
    height: ${hp(80)};
    background-color: blue;
    `,
    temp: styled.View`
    height: ${hp(10)};
    background-color: red;
    `,


}

const Hamburger = () => {
    const drawerStyles = {
        drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 8 },
        main: {
            paddingLeft: 3,
        },
    }
    const [isOpened, setIsOpened] = useState(false);
    const onOpen = () => {
        setIsOpened(true);
    }
    const onClose = () => {
        setIsOpened(false);
    }
    return (
        <Styled.background>
            <Drawer
                type="overlay"
                content={<HomeMyMenu />}
                tapToClose={true}
                openDrawerOffset={0.1} // 20% gap on the right side of drawer
                styles={drawerStyles}
                panCloseMask={0.2}
                closedDrawerOffset={0} //숨겨져있을 때 튀어나오는 정도
                open={isOpened}
                side="right"
                onClose={onClose}
                tweenHandler={(ratio) => ({
                    main: { opacity: (2 - ratio) / 2 },
                    mainOverlay: {
                        opacity: ratio,
                        backgroundColor: 'black'
                    }
                })}
            >
            </Drawer>

            <TouchableWithoutFeedback onPress={onOpen}>
                <Styled.temp></Styled.temp>
            </TouchableWithoutFeedback>
        </ Styled.background >

    );

}

export default Hamburger;

