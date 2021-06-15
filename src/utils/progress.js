import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";

const ProgressBar = (props) => {
  const {progress} = props
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: (-1+progress.value) * props.barWidth }],
      width: props.barWidth,
      height: props.barHeight,
      backgroundColor: props.fill,
    };
  });
  return (
    <View style={{ width: props.barWidth, borderWidth: 1, borderColor: props.borderColor, height: props.barHeight, borderRadius: props.barHeight / 2, overflow: "hidden" }}>
      <Animated.View style={animatedStyles}></Animated.View>
    </View>
  );
};

export default ProgressBar;
