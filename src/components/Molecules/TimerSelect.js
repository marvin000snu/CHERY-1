import React, { useState, forwardRef, useEffect, useImperativeHandle } from "react";
import GlobalStyled from "../../style/GlobalStyled";
import Eraser from "../../../working/svg/Eraser";
import Pencil from "../../../working/svg/Pencil";
import Highlight from "../../../working/svg/Highlight";
import useInterval from "../../hooks/useInterval";
import { Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const TimerSelect = forwardRef((props, ref) => {
  const [time, setTime] = useState(0);
  const [type, setType] = useState(1);
  useEffect(() => {
    const getTimeFunction = async () => {
      try {
        const time = await AsyncStorage.getItem("@time");
        // alert(time)
        setTime(parseInt(time ? time : 0));
      } catch (err) {
      } finally {
      }
    };
    getTimeFunction();
  }, []);
  useInterval(() => {
    setTime(time + 1);
  }, 1000);

  useImperativeHandle(ref, () => ({
    getTime() {
      return time;
    },
  }));
  return (
    <GlobalStyled.ViewRow style={{ width: "95%", height: 50, borderBottomWidth: 1, borderColor: "#DBDCDC", marginHorizontal: "2.5%", marginBottom: 10 }} justifyContent="space-between">
      <GlobalStyled.ViewRow width="50px">
        <Text style={{ fontSize: 18, width: "100%", textAlign: "left" }}>
          {String(Math.floor(time / 60)).padStart(2, "0")}:{String(time % 60).padStart(2, "0")}
        </Text>
      </GlobalStyled.ViewRow>
      <GlobalStyled.ViewRow width="105px" height="30px" style={{ borderRadius: 5, borderWidth: 1, borderColor: "#5571FF" }}>
        <GlobalStyled.ViewCol
          style={{ backgroundColor: type === 1 ? "red" : "transparent" }}
          width="33%"
          as={TouchableOpacity}
          onPress={() => {
            setType(1);
          }}
        >
          <Pencil size={25} />
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol
          style={{ backgroundColor: type === 2 ? "red" : "transparent" }}
          width="33%"
          as={TouchableOpacity}
          onPress={() => {
            setType(2);
          }}
        >
          <Highlight size={25} />
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol
          style={{ backgroundColor: type === 3 ? "red" : "transparent" }}
          width="34%"
          as={TouchableOpacity}
          onPress={() => {
            setType(3);
          }}
        >
          <Eraser size={25} />
        </GlobalStyled.ViewCol>
      </GlobalStyled.ViewRow>
    </GlobalStyled.ViewRow>
  );
});

export default React.memo(TimerSelect);
