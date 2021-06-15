import React, { useState, useEffect } from "react"
import styled from "styled-components"
const Styled = {
    Time: styled.Text`
        font-size:13px;
        font-weight:100;
        font-family:NotoSansKR-Bold;
        color:#1b2c49;
        margin-left:5px;
    `,
}
const Time = (props) => {
    const { setTime } = props
    const [hour, setHour] = useState()
    const [day, setDay] = useState()
    useEffect(() => {
        setHour(Math.floor(setTime / 60))
        setDay(Math.floor(setTime / 1440))
    }, [])
    if (setTime < 60) {
        return (
            <Styled.Time>{setTime}분 전</Styled.Time>
        )
    } else if (setTime < 1440) {
        return (
            <Styled.Time>{hour}시간 전</Styled.Time>
        )
    } else if (setTime < 518400) {
        return (
            <Styled.Time>{day}일 전</Styled.Time>
        )
    } else if (setTime > 518400) {
        return (
            <Styled.Time>1년 전</Styled.Time>
        )
    }
}
export default Time