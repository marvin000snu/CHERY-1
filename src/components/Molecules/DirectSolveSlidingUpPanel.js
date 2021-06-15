import React, { useRef, useState, useEffect } from "react";
import SlidingUpPanel from "rn-sliding-up-panel";
import { View, Text, StyleSheet, Animated } from "react-native";
import { DirectSolveSelectList } from "./DirectSolveSelectList";
import DirectSolveStore from "../../store/DirectSolveStore";
import { observer } from "mobx-react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Triangle from "../../images/iconSvg/Triangle";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "center",
    shadowColor: "#000000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    zIndex: 1,
    elevation: 1,
  },
  halfCircle: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 50,
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
});
const DirectSolveSlidingPanel = observer((props) => {
  const { selectRef, number, selectTextInfo } = props;
  const slide = useRef();
  const [selectValue, setSelectValue] = useState(0);
  const selectHandler = (v) => {
    selectRef.current.onChange(v, number);
    setSelectValue(v);
    DirectSolveStore.handleCurrentAnswer(v);
  };

  return (
    <SlidingUpPanel ref={slide} draggableRange={{ top: hp(90), bottom: 70 }} friction={0.5} minimumDistanceThreshold={5} animatedValue={new Animated.Value(120)} snappingPoints={[70, 120, hp(90)]} style={{ borderWidth: 0 }}>
      <View style={styles.wrapper}>
        <View
          style={[
            styles.halfCircle,
            {
              transform: [{ translateY: 70 }],
              zIndex: -1,
              elevation: -1,
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor:"green"
            },
          ]}
          elevation={10}
        ></View>
        <View style={[styles.container, { elevation: 5, zIndex: 5 }]} elevation={15}>
          <Triangle size={25} style={{ position: "absolute", transform: [{ translateY: -10}]}}></Triangle>
          <View
            style={{
              width: "100%",
              height: "10%",
              borderBottomColor: "#6881FF",
              borderBottomWidth: 1,
              // backgroundColor: "brown"
            }}
          >
            <View
              style={{
                width: 50,
                textAlign: "center",
                height: "100%",
                marginLeft: 30,
                fontSize: 25,
                fontWeight: "bold",
                lineHeight: 80,
                borderBottomColor: "#6881FF",
                borderBottomWidth: 3,
              }}
            >
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  height: "100%",
                  fontSize: 25,
                  fontWeight: "bold",
                  lineHeight: 80,
                }}
              >
                Q{number + 1}
              </Text>
            </View>
          </View>
          <DirectSolveSelectList selectHandler={selectHandler} value={selectValue} infos={Object.values(selectTextInfo[number] ? selectTextInfo[number] : {})}></DirectSolveSelectList>
        </View>
      </View>
    </SlidingUpPanel>
  );
});

export default React.memo(DirectSolveSlidingPanel);
