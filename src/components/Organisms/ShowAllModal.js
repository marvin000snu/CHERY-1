import React, { useState } from "react";
import GlobalStyled from "../../style/GlobalStyled";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import _ from "lodash";
import codeParser from "../../function/codeParser";
const ShowAllModal = (props) => {
  const { select, problemInfo, saved, setModalVisible, appendHandler } = props;
  return (
    <GlobalStyled.ViewCol justifyContent="flex-start" style={{ width: wp(100), height: hp(100) }}>
      <GlobalStyled.ViewRow height="50px" style={{ backgroundColor: "white", marginTop: 40 }}>
        <Text style={{ fontSize: 25 }}>{["오늘의문항", "약점추천", "AI시험지"][select]}</Text>
      </GlobalStyled.ViewRow>
      <GlobalStyled.ViewCol style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", width: wp(96) + 6 }} showsVerticalScrollIndicator= {false}>
          {Object.values(problemInfo)[select] &&
            Object.values(problemInfo)[select].map((v, idx) => {
              return (
                <GlobalStyled.ViewRow
                  width={wp(32)}
                  height="100px"
                  style={{ backgroundColor: "#D2DEFF", marginHorizontal: 1, marginBottom: 2, borderWidth: 2, borderColor: saved[select].includes(idx) ? "#6F87FF" : "#D5DCF0" }}
                  as={TouchableOpacity}
                  onPress={() => {
                    appendHandler(idx, select);
                  }}
                >
                  <GlobalStyled.ViewCol style={{ position: "absolute", top: 5, right: 5, width: 30, height: 30, borderRadius: 15, backgroundColor: saved[select].includes(idx) ? "#6F87FF" : "#D5DCF0" }}>
                    <Text>{saved[select].includes(idx) ? String(_.flatten([...saved].slice(0, select)).length + saved[select].indexOf(idx) + 1) : ""}</Text>
                  </GlobalStyled.ViewCol>
                  <Text style={{ textAlign: "center", width: "95%", marginTop:20 }}>{codeParser(v.code)}</Text>
                </GlobalStyled.ViewRow>
              );
            })}
        </ScrollView>
      </GlobalStyled.ViewCol>
      <GlobalStyled.ViewRow
        height="100px"
        style={{ backgroundColor: "white", marginTop: 40 }}
        as={TouchableOpacity}
        onPress={() => {
          setModalVisible(false);
        }}
      >
        <Text style={{ fontSize: 20 }}>완료</Text>
      </GlobalStyled.ViewRow>
    </GlobalStyled.ViewCol>
  );
};

export default ShowAllModal;
