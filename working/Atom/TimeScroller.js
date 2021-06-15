
import React, {useState,usememo} from 'react';
import {View, Button, Platform} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
//moment 형태로 나옴
import DatePicker from 'react-native-date-picker'
const TimeScroller = (props) => {
  const {setAlarmTime} = props;
date = new Date(1598051730000);
const onConsole = () => {
}
  return (
    <View>
        <DatePicker
        // display="inline"
          mode="time"
          value={date}
          onDateChange = {setAlarmTime}
        />
    </View>
  );
};

export default TimeScroller;
