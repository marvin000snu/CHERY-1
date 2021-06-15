import React, { useRef} from 'react';
import styled from "styled-components/native";
import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";



const ProgressBar = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = (x) => {
    Animated.timing(fadeAnim, {
        toValue: x,
        duration: 400,
        useNativeDriver: true
    }).start();
    };

    const Styled = {
        Title: styled.View`
        margin-top: ${hp(1)}px;
        height: ${hp(0.8)}px;
        width: ${wp(90)}px;
        borderRadius: 15;
        border-width: 1;
        border-color: white;
        justify-content: center;
        align-items: flex-start;
        `,
        inner: styled.View`
        borderRadius: 5;
        height: ${hp(0.8)}px;
        width: 50%;
        background-color: white;
        align-items: flex-start;
        `,
    }

    const styles = StyleSheet.create({
        background: {
          width: "10%",
          height: 12,
          borderWidth: 0,
          borderStyle: "solid",
          display: "flex",
          backgroundColor: "black",
          flexDirection: "row",
          justifyContent: "flex-start",
          flex: 1
        },
    });
    return (
        <View>
      <Styled.Title>
          <Styled.inner>
          <Animated.View
                style={[
                    styles.background,
                  { transform: [{ scaleX: fadeAnim }, { translateX: wp(4.6) }] }
                ]}
               / >

          </Styled.inner>
      </Styled.Title>
      </View>
    );
  

}
export default ProgressBar;