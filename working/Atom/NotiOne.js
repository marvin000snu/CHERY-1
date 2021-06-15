import React, { useState } from "react"
import styled from "styled-components"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { TouchableWithoutFeedback } from "react-native";
import NewBadge from "../img/NewBadge"
import moment from "moment";

const NotiOne = (props) => {
    const [bodyShow, SetBodyShow] = useState(false);
    const { info} = props;
    let title = info.title;
    let body = info.body;
    let time = info.time;
    let isNew = info.isNew;
    time = moment(time).format('YYYY.MM.DD')

    const Styled = {
        background: styled.View`
            width: 100%;
            background-color: white;
        `,
        header: styled.View`
        width: 100%;
        height: ${hp(10)}px;
        background-color: #F6F6F6;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
        justify-content: center;
        padding-left: ${wp(5)}px;
        `,
        title: styled.View`
        flex-flow: row;
        align-items: center;
        `,

        titleText: styled.Text`
        font-family:NotoSansKR-Bold;
        font-size: ${wp(4)}px;

        `,
        timeText: styled.Text`
        margin-top: ${hp(1)}px;
        font-family:NotoSansKR-Regular;
        font-size: ${wp(3)}px;
        color: #707070;

        `,
        body: styled.View`
        width: 100%;
        min-height: ${hp(18)}px;
        padding-top: ${hp(1)}px;
        display: ${(bodyShow) ? "flex" : "none"}
        padding-left: ${wp(5)}px;
        padding-right: ${wp(5)}px;

        `,
        bodyText: styled.Text`
        font-family:NotoSansKR-Regular;
        `,
    };
    const onToggle = () => {
        SetBodyShow(!bodyShow);
    }
    return (
        <Styled.background>
            <TouchableWithoutFeedback onPress={onToggle}>
                <Styled.header>
                    <Styled.title>
                        <Styled.titleText> {title} </Styled.titleText>
                        <NewBadge display={(isNew) ? "flex" : "none"} marginLeft={wp(1)} />
                    </Styled.title>
                    <Styled.timeText> {time}
                    </Styled.timeText>
                </Styled.header>
            </TouchableWithoutFeedback>
            <Styled.body>
                <Styled.bodyText>{body}
                </Styled.bodyText>
            </Styled.body>
        </Styled.background>
    );

}

export default NotiOne;