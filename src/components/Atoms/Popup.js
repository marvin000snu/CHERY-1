import React, { useState } from 'react';
import styled from 'styled-components/native'

const Styled = {
    TriggerBody: styled.View`
        display : flex;
    `,
    PopupBody: styled.View`
        position : absolute;
        display : flex;
        flex-direction : column;
        margin : ${props => props.margin};
    `,
    PopupWrapper: styled.View`
        display : flex;
    `
}

const Popup = (props) => {

    const { trigger, margin, type, children, isPopup } = props

    const [isTriggerHover, setIsTriggerHover] = useState(false);
    const [isPopupHover, setIsPopupHover] = useState(false);
    // const [isClick, setIsClick] = useState();

    const handleTrigger = () => {
        setIsTriggerHover(true)
    }

    const handleTriggerOnMouseLeave = () => {
        setIsTriggerHover(false)
    }

    const handlePopupOnMouseEnter = () => {
        setIsPopupHover(true)
    }

    const handlePopupOnMouseLeave = () => {
        setIsPopupHover(false)
    }

    return (
        <>
            <Styled.TriggerBody
                onClick={type === 'click' ? handleTrigger : function () {}}
                onMouseEnter={type === 'hover' ? handleTrigger : function () {}}
                onMouseLeave={handleTriggerOnMouseLeave}
            >
                {trigger}
            </Styled.TriggerBody>
            {isPopup ? (
                <>
                    {isTriggerHover || isPopupHover ? (
                        <Styled.PopupBody
                            margin={margin}
                        >
                            <Styled.PopupWrapper
                                onMouseEnter={handlePopupOnMouseEnter}
                                onMouseLeave={handlePopupOnMouseLeave}
                                // paddingTop={margin}
                            >
                                <Text>
                                {children}

                                </Text>
                            </Styled.PopupWrapper>
                        </Styled.PopupBody>
                    ) : (<></>)}
                </>
            ) : (<></>)}
            

        </>

    );
};

Popup.defaultProps = {
    isPopup : true,
    type: 'hover',
    margin: 0
}

export default Popup;