import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, PixelRatio } from "react-native";
import BackArrow from "./svg/backArrow";
import GlobalStyled from "../src/style/GlobalStyled";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const Answer = () => {
  const [select, setSelect] = useState(-1);
  const [imageRatio, setImageRatio] = useState(0)
  var size;
  const ratio = PixelRatio.get();
  const revisedWidth = (wp(130) * 5) / 10;
  if (revisedWidth >= 235) {
    size = 240;
  } else if (revisedWidth < 235 && revisedWidth >= 225) {
    size = 230;
  } else if (revisedWidth < 225 && revisedWidth >= 215) {
    size = 220;
  } else if (revisedWidth < 215 && revisedWidth >= 205) {
    size = 210;
  } else if (revisedWidth < 205 && revisedWidth >= 195) {
    size = 200;
  } else if (revisedWidth < 195 && revisedWidth >= 185) {
    size = 190;
  } else if (revisedWidth < 185 && revisedWidth >= 175) {
    size = 180;
  } else if (revisedWidth < 175 && revisedWidth >= 165) {
    size = 170;
  } else if (revisedWidth < 165 && revisedWidth >= 155) {
    size = 160;
  } else if (revisedWidth < 155) {
    size = 150;
  }
  const src = `https://problem-img.s3.ap-northeast-2.amazonaws.com/${190031130}${240 * ratio}-${ratio}.jpg`;
  Image.getSize(src,(width,height)=>{setImageRatio(height/width)})
  return (
    <View style={{ backgroundColor: "white", width: "100%", height: "100%", paddingTop: 50, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
      <GlobalStyled.ViewRow height="44px" justifyContent="space-between">
        <GlobalStyled.ViewRow width="50px">
          <BackArrow size={30} color="#1B2C49" />
        </GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow width="200px">
          <Text style={{ fontSize: 18, color: "#1B2C49" }}>190031130</Text>
          <GlobalStyled.ViewRow style={{ width: 60, height: 18, backgroundColor: "#5571FF", borderRadius: 9, marginLeft: 10 }}>
            <Text style={{ color: "white" }}>Hard</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow width="50px"></GlobalStyled.ViewRow>
      </GlobalStyled.ViewRow>
      <GlobalStyled.ViewRow height="35px" style={{ borderTopWidth: 2, borderTopColor: "#5571FF", borderBottomWidth: 1, borderBottomColor: "#CDCDCD" }}>
        <GlobalStyled.ViewRow
          as={TouchableOpacity}
          width="33.3%"
          onPress={() => {
            setSelect(1);
          }}
        >
          <Text style={{ fontSize: 16, color: select === 1 ? "#5571FF" : "#909398", fontWeight: select === 1 ? "bold" : "500" }}>문항정보</Text>
        </GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow
          as={TouchableOpacity}
          width="33.3%"
          onPress={() => {
            setSelect(2);
          }}
        >
          <Text style={{ fontSize: 16, color: select === 2 ? "#5571FF" : "#909398", fontWeight: select === 1 ? "bold" : "500" }}>해설지</Text>
        </GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow
          as={TouchableOpacity}
          width="33.3%"
          onPress={() => {
            setSelect(3);
          }}
        >
          <Text style={{ fontSize: 16, color: select === 3 ? "#5571FF" : "#909398", fontWeight: select === 1 ? "bold" : "500" }}>어휘</Text>
        </GlobalStyled.ViewRow>
      </GlobalStyled.ViewRow>
      <GlobalStyled.ViewRow height="155px" justifyContent="space-around" style={{ borderBottomWidth: 1, borderColor: "#CDCDCD" }}>
        <GlobalStyled.ViewCol height="120px" width="27%">
          <GlobalStyled.ViewRow height="26px" style={{ backgroundColor: "#5471FF" }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>예측 오답률</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow height="94px" style={{ borderBottomWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, borderColor: "#DBDCDC" }}></GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol height="120px" width="27%">
          <GlobalStyled.ViewRow height="26px" style={{ backgroundColor: "#5471FF" }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>예측 오답률</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow height="94px" style={{ borderBottomWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, borderColor: "#DBDCDC" }}></GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol height="120px" width="27%">
          <GlobalStyled.ViewRow height="26px" style={{ backgroundColor: "#5471FF" }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}>예측 오답률</Text>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow height="94px" style={{ borderBottomWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, borderColor: "#DBDCDC" }}></GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      </GlobalStyled.ViewRow>
      <GlobalStyled.ViewCol style={{ flex: 1}}>
        <ScrollView style={{ flex: 1, width: "100%", marginTop:10 }} contentContainerStyle={{ flexDirection: "column", display: "flex", alignItems: "center"}} showsVerticalScrollIndicator= {false}>
          <Image source={{uri:src}} style={{width:wp(97), height:wp(97)*imageRatio, marginBottom:20}} resizeMode="contain" ></Image>
          <GlobalStyled.ViewCol style={{borderTopWidth:1, borderColor:"#CDCDCD"}}></GlobalStyled.ViewCol>
        </ScrollView>
      </GlobalStyled.ViewCol>
    </View>
  );
};

export default Answer;
