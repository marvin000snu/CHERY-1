import React, { useState, useCallback, useEffect, useRef } from "react";
import GlobalStyled from "../../style/GlobalStyled";
import styled from "styled-components";
import Constants from "expo-constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import WordMemory from "../../images/iconSvg/WordMemory";
import WordScrap from "../../images/iconSvg/WordScrap";
import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import CardFlip from "react-native-card-flip";
import Carousel from "react-native-snap-carousel";
import useAPI from "../../hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import { useFocusEffect } from "@react-navigation/native";
import CheryLogo from "../../images/iconSvg/CheryLogo";
import DoubleBack from "../../images/iconSvg/DoubleBack";
const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100)}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
  section: styled.View`
    height: ${hp(100) - 70 - Constants.statusBarHeight}px;
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: column;
  `,
};
const WordPage1 = () => {
  const [select, setSelect] = useState(2);
  const [API] = useCallback(useAPI(), []);
  const [infos, setInfos] = useState({ new: [], old: [] });
  const CarouselRef = useRef();
  const [index, setIndex] = useState(0);
  var inputRefs = React.useRef(new Array());
  var backRefs = React.useRef(new Array());
  const [realName, setRealName] = useState("");
  const [userName, setUserName] = useState("");
  useFocusEffect(
    useCallback(() => {
      const AsyncFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const deCode = jwt_decode(token);
          setUserName(deCode["cognito:username"]);
          setRealName(deCode["name"])
          const params = {
            userId: deCode["cognito:username"],
            body: {},
          };
          const { data } = await API.voca.getVocaList(params);
          setInfos(data);
        } catch (err) {
          console.log(err);
        } finally {
        }
      };
      AsyncFunction();
    }, [])
  );

  const renderItem = ({ item, index }) => {
    return (
      <CardFlip
        style={{ width: wp(80), height: 160 }}
        ref={(v) => {
          inputRefs.current[index] = v;
        }}
        flipDirection="x"
      >
        <TouchableOpacity
          style={{ width: wp(80), height: 160, backgroundColor: "#E6EBFF", borderRadius: 10 }}
          onPress={() => {
            inputRefs.current[index].flip();
          }}
        >
          <GlobalStyled.ViewRow height="50" justifyContent="space-between">
            <GlobalStyled.ViewRow height="30px" width="auto" style={{ backgroundColor: "#6F87FF", paddingHorizontal: 10, borderRadius: 5, marginLeft: 10 }}>
              <Text style={{ color: "white", fontFamily: "NotoSansKR-Bold" }}>
                {index + 1}/{infos.new.length}
              </Text>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow
              height="30px"
              width="auto"
              style={{ backgroundColor: "white", paddingHorizontal: 10, borderRadius: 5, marginRight: 10 }}
              as={TouchableOpacity}
              onPress={async () => {
                try {
                  const params = {
                    userId: userName,
                    body: {
                      id: item.id,
                    },
                  };
                  await API.voca.setMemorized(params);
                  var temp2 = [...infos.old];
                  var temp = [...infos.new];
                  temp2.push(temp[index]);
                  temp.splice(index, 1);
                  setInfos({ old: temp2, new: temp });
                } catch (err) {
                  console.log(err);
                  alert(err);
                }
              }}
            >
              <WordMemory size={15} color={"#354590"} style={{ marginRight: 5 }} />
              <Text>암기 완료</Text>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewCol style={{ flex: 1 }}>
            <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Bold" }}>{item.voca}</Text>
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol height="50"></GlobalStyled.ViewCol>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: wp(80), height: 160, backgroundColor: "#E6EBFF", borderRadius: 10 }}
          onPress={() => {
            inputRefs.current[index].flip();
          }}
        >
          <GlobalStyled.ViewCol>
            <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Bold" }}>{item.korea}</Text>
          </GlobalStyled.ViewCol>
        </TouchableOpacity>
      </CardFlip>
    );
  };
  return (
    <Styled.body>
      <GlobalStyled.ViewCol
        colors={["#A687FF", "#6F87FF"]}
        style={{
          height: 200,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          borderBottomRightRadius: 25,
          borderBottomLeftRadius: 25,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GlobalStyled.ViewRow height="40px" justifyContent="flex-start" style={{ marginTop: 60 }}>
          <CheryLogo size={150} style={{ marginLeft: 10 }} />
          <Text style={{ color: "#5471FF", lineHeight: 60, fontFamily: "NotoSansKR-Bold", fontSize: 20, height: 40, lineHeight: 40 }}>나만의 단어장</Text>
        </GlobalStyled.ViewRow>
        <GlobalStyled.ViewRow height="40" width="100%" style={{ borderRadius: 5, marginTop: 20 }} justifyContent="space-around">
          <GlobalStyled.ViewRow height="40" width="45%" justifyContent="space-around" style={{ marginTop: 10 }}>
            <GlobalStyled.ViewRow
              as={TouchableOpacity}
              onPress={() => {
                setSelect(2);
              }}
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
            >
              <WordScrap size={25} color={select === 2 ? "#5471FF" : "#BBC2CF"} style={{ marginHorizontal: 0, marginTop: 5 }} />
              <Text style={{ fontSize: 15, fontFamily: "NotoSansKR-Bold", color: select === 2 ? "#5471FF" : "#BBC2CF", height: 40, lineHeight: 40 }}>스크랩</Text>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow height="40" width="45%" justifyContent="space-around" style={{ marginTop: 10 }}>
            <GlobalStyled.ViewRow
              style={{
                backgroundColor: "white",
                borderRadius: 5,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
              as={TouchableOpacity}
              onPress={() => {
                setSelect(4);
              }}
            >
              <WordMemory size={20} color={select === 4 ? "#5471FF" : "#BBC2CF"} style={{ marginHorizontal: 3, marginTop: 5 }} />
              <Text style={{ fontSize: 15, fontFamily: "NotoSansKR-Bold", color: select === 4 ? "#5471FF" : "#BBC2CF", height: 40, lineHeight: 40 }}>암기한 단어</Text>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewRow>
      </GlobalStyled.ViewCol>
      {select === 2 ? (
        <GlobalStyled.ViewCol width="95%" style={{ backgroundColor: "white", borderRadius: 5, flex: 1, marginBottom: 100, justifyContent: "flex-start" }}>
          <GlobalStyled.ViewRow height="50px">
            <Text style={{ marginHorizontal: 10, fontSize: 18, color: "#1B2C49", fontFamily: "NotoSansKR-Bold" }}>스크랩</Text>
            <GlobalStyled.ViewCol style={{ flex: 1, borderBottomWidth: 1, height: 1, marginRight: 10 }}></GlobalStyled.ViewCol>
          </GlobalStyled.ViewRow>
          <Text style={{ width: "90%", color: "#1B2C49", fontFamily: "NotoSansKR-Regular", lineHeight: 25, fontSize: 14, height: 80, marginBottom: 20 }}>
            {realName}{" "}님이 스크랩한 단어들을 모아두었습니다!{"\n"}단어 카드를 터치하면 단어의 뜻을 확인할 수 있습니다. {"\n"}암기 완료를 체크하면 암기한 단어로 이동합니다.
          </Text>
          {infos.new.length !== 0 && (
            <Carousel
              renderItem={renderItem}
              sliderWidth={wp(95)}
              itemWidth={wp(80)}
              data={infos.new}
              ref={CarouselRef}
              onSnapToItem={() => {
                setIndex(CarouselRef.current.currentIndex);
              }}
            ></Carousel>
          )}
          <Text style={{ width: "90%", color: "#1B2C49", fontFamily: "NotoSansKR-Regular", lineHeight: 25, fontSize: 15, height: 80, marginBottom: 20, textAlign: "center" }}>{infos.new.length !== 0 ? "슬라이드해서 다음 단어 카드를 확인하세요!" : "아직 스크랩한 단어가 없습니다."}</Text>
        </GlobalStyled.ViewCol>
      ) : (
        <GlobalStyled.ViewCol width="95%" style={{ backgroundColor: "white", borderRadius: 5, flex: 1, marginBottom: 100, justifyContent: "flex-start" }}>
          <GlobalStyled.ViewRow height="50px">
            <Text style={{ marginHorizontal: 10, fontSize: 18, color: "#1B2C49", fontFamily: "NotoSansKR-Bold" }}>암기한 단어</Text>
            <GlobalStyled.ViewCol style={{ flex: 1, borderBottomWidth: 1, height: 1, marginRight: 10 }}></GlobalStyled.ViewCol>
          </GlobalStyled.ViewRow>
          <Text style={{ width: "90%", color: "#1B2C49", fontFamily: "NotoSansKR-Regular", lineHeight: 25, fontSize: 15, height: 80, marginBottom: 20 }}>{realName}{" "}님이 암기한 단어들을 모아두었습니다! 단어 카드를 뒤집으면 단어의 뜻을 확인할 수 있습니다. 단어의 뜻을 맞춰 보세요!</Text>
          {infos.old.length === 0 ? (
            <Text>아직 암기한 단어가 없습니다.</Text>
          ) : (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start" }} showsVerticalScrollIndicator= {false}>
              {infos.old.map((v, index) => {
                return (
                  <GlobalStyled.ViewRow height="60" width={wp(45)} style={{ marginTop: 10, marginHorizontal: wp(1) }}>
                    <CardFlip
                      style={{
                        width: wp(45),
                        height: 60,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                      }}
                      ref={(v) => {
                        backRefs.current[index] = v;
                      }}
                      flipDirection="x"
                    >
                      <GlobalStyled.ViewCol
                        as={TouchableOpacity}
                        onPress={() => {
                          backRefs.current[index].flip();
                        }}
                        style={{ borderRadius: 10, backgroundColor: "#FFFFFF" }}
                        alignItems="flex-start"
                      >
                        <GlobalStyled.ViewRow
                          justifyContent="flex-start"
                          height="15"
                          width={20}
                          as={TouchableOpacity}
                          onPress={async () => {
                            try {
                              const params = {
                                userId: userName,
                                body: {
                                  id: v.id,
                                },
                              };
                              await API.voca.setUnMemorized(params);
                              var temp = [...infos.old];
                              var temp2 = [...infos.new];
                              temp2.push(temp[index]);
                              temp.splice(index, 1);
                              setInfos({ old: temp, new: temp2 });
                            } catch (err) {}
                          }}
                        >
                          <DoubleBack color={"black"} size={15} style={{ marginLeft: 5 }} />
                        </GlobalStyled.ViewRow>
                        <GlobalStyled.ViewRow style={{ flex: 1 }}>
                          <Text style={{ color: "#1B2C49", fontSize: 15, fontFamily: "NotoSansKR-Bold" }}>{v.voca}</Text>
                        </GlobalStyled.ViewRow>
                        <GlobalStyled.ViewCol height="15px"></GlobalStyled.ViewCol>
                      </GlobalStyled.ViewCol>
                      <GlobalStyled.ViewCol
                        as={TouchableOpacity}
                        onPress={() => {
                          backRefs.current[index].flip();
                        }}
                        style={{ borderRadius: 10, backgroundColor: "#6F87FF" }}
                      >
                        <Text style={{ color: "white", fontSize: 15, fontFamily: "NotoSansKR-Bold" }}>{v.korea}</Text>
                      </GlobalStyled.ViewCol>
                    </CardFlip>
                  </GlobalStyled.ViewRow>
                );
              })}
            </ScrollView>
          )}
        </GlobalStyled.ViewCol>
      )}
    </Styled.body>
  );
};

export default WordPage1;
