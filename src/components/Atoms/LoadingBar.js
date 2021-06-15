import React, { useEffect, useState } from 'react';
import {Animated} from "react-native"
import styled from 'styled-components/native'
import {theme} from '../../style/theme'

const Animation = {
    move : (props)=>{
        return keyframes`
        from {
            width : ${props.beforeValue}%;
        }
        to {
            width : ${props.afterValue}%;
        }
        `
    }
}

const Styled = {
    Body : styled.View`
    display : flex;
    width : 100%;
    border : 1.5px; 
    border-style: solid; 
    border-color: ${props=>props.theme.color.white};
    border-radius : 12.5;
    padding : 1.25px;
    `,
    Bar : styled.View`
    display :flex;
    border : 0.1rem solid ${props=>props.theme.color.white};
    background-color : ${props=>props.theme.color.white};
    border-radius : 2.0;
    height : 0.5rem;
    animation : ${props=>Animation.move(props)} 1s;
    animation-fill-mode : forwards;
    `
}

const LoadingBar = (props) => {
    
    const {value} = props
    
    const [beforeValue , setBeforeValue] = useState(0)
    
    const [afterValue , setAfterValue] = useState(0)
    
    // const fadeAnim = useRef(new Animated.Value(props.beforeValue)).current
    // React.useEffect(() => {
    //     Animated.timing(
    //       fadeAnim,
    //       {
    //         toValue: props.afterValue,
    //         duration: 1000,
    //       }
    //     ).start();
    //   }, [fadeAnim])

    useEffect(()=>{
        if(afterValue !== value){
            setBeforeValue(afterValue)
            setAfterValue(value)
        }
    },[value, afterValue])


    return (
        <Styled.Body
            theme={theme}
        >
            <Animated.View
                beforeValue={beforeValue}
                afterValue={afterValue}
                style={{
                    display :"flex", 
                    borderStyle: "solid",
                    borderColor: "white",
                    backgroundColor : "white",
                    borderRadius : 2,
                    height : 5,
                }}
            />
        </Styled.Body>
    );
};


LoadingBar.defaultProps = {
    value : 50,
}

export default LoadingBar;