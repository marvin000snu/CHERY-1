import React, { useState } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Event from "./svg/Event"
import Next from "./svg/Next"
import { ScrollView, StyleSheet } from "react-native"

const Styled = {
    background: styled.View`
        width: ${wp(100)};
        height: ${hp(100)};
        display : flex;
        flex-direction: column;
        justify-content:space-between;
        align-items:center;
        background-color:white;
    `,
    Section: styled.View`
        width:100%;
        height:auto;
        display : flex;
        flex-direction: column;
        justify-content:flex-start;
        align-items:center;
    `,
    Slider: styled.TouchableOpacity`
        width:100%;
        height:240px;
        background-color:#FFE554;
    `,
    TitleWrap: styled.View`
        width:90%;
        height:30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        margin:20px 0 20px 0;
    `,
    Title: styled.Text`
        font-size:20px;
        font-weight:bold;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
    SlideWrap: styled.View`
        width:90%;
        height:125px;
        display:flex;
    `,
    AvatarWrap: styled.View`
        width:100px;
        height:100%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:column;
        margin:0px 5px 0px 5px;
    `,
    AvatarBox: styled.View`
        width:100px;
        height:100px;
        border-radius:5px;
        background-color:#F0F5FB;
    `,
    AvatarInfo: styled.Text`
        font-size:11px;
        font-weight:400;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
    `,
}
const styles = StyleSheet.create({
    Scroll: {
        display: "flex",
        justifyContent: "flex-start",
        height: "auto",
        alignItems: "center",
        flexDirection: "row",
        width: '120%',
        backgroundColor: "#fff"
    },
});
const MyChery = () => {
    const [AvatarList, setAvatarList] = useState(["야자짼 날나리", "천사같은 담임쌤", "힙한 뒷골목 복학생", "전투만렙 학생주임쌤"])
    const [Frame, setFrame] = useState(["별 프레임","불꽃 프레임","꽃 프레임","왕관 프레임"])
    return (
        <Styled.background>
            <Styled.Section>
                <Styled.Slider>
                    <Event />
                </Styled.Slider>
                <Styled.TitleWrap>
                    <Styled.Title>나만의 아바타</Styled.Title>
                    <Next />
                </Styled.TitleWrap>
                <Styled.SlideWrap>
                    <ScrollView contentContainerStyle={styles.Scroll} showsVerticalScrollIndicator= {false}>
                        {AvatarList.map((v) => {
                            return (
                                <Styled.AvatarWrap>
                                    <Styled.AvatarBox></Styled.AvatarBox>
                                    <Styled.AvatarInfo>{v}</Styled.AvatarInfo>
                                </Styled.AvatarWrap>
                            )
                        })}
                    </ScrollView>
                </Styled.SlideWrap>
                <Styled.TitleWrap>
                    <Styled.Title>이번달 신상 아바타 프레임</Styled.Title>
                    <Next />
                </Styled.TitleWrap>
                <Styled.SlideWrap>
                    <ScrollView contentContainerStyle={styles.Scroll} showsVerticalScrollIndicator= {false}>
                        {Frame.map((v) => {
                            return (
                                <Styled.AvatarWrap>
                                    <Styled.AvatarBox></Styled.AvatarBox>
                                    <Styled.AvatarInfo>{v}</Styled.AvatarInfo>
                                </Styled.AvatarWrap>
                            )
                        })}
                    </ScrollView>
                </Styled.SlideWrap>
            </Styled.Section>
        </Styled.background>
    )
}
export default MyChery