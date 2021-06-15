import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SliderText from 'react-native-slider-text';

const Score = () => {
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little interest or pleasure in doing things?</Text>
      <Text style={styles.tag}>Rate your answer here: </Text>
      <SliderText maximumValue={100} stepValue={1}
      onValueChange={(id) => setSliderValue(id)}
      sliderValue={sliderValue}
      customCountStyle = {styles.count}
      customLabelStyle = {styles.label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  tag: {
    fontSize: 7,
    paddingVertical: 10,
  },
  count: {
      fontSize: 7
  },
  label: {
      backgroundColor: "black"
  }
});

export default Score;