//학습 현황 페이지입니다
//위에 헤더, 그리고 바디는 Molecules로 분리했습니다.
//밑에 wrap은 동훈님이 하셨다고 들었으니, 구현하지 않겠습니다
//양옆으로 넘어가는 슬라이드? 를 어떻게 해야할지 몰라서 일단 molecule까지만 구현했습니다
//type을 학습기록:1, 나의학습현황2, chery멘토3 로 정의합니다
//header click 시 애니메이션을 넣으면 좋겠다고 생각
//학습데이는 setStudyDay([오늘읨누제 정답률, 현재 정답률, CHERY상위]) 로 가져 오시면 됩니다
import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components/native";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import GlobalStyled from "../src/style/GlobalStyled";
import CardFlip from "react-native-card-flip";
import Carousel from "react-native-snap-carousel";
import WordScrap from "../working/svg/WordScrap";
import ProgressBar from "../src/components/Atoms/TestProgressBar";
import useAPI from "../src/hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import WordHeader from "./Molecules/WordHeader";
const Styled = {
  background: styled.View`
    background-color: #fff;
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  wrap: styled.View`
    margin-bottom: 80px;
    flex: 1;
    background-color: white;
    align-items: center;
  `,
};
const progressCustomStyles = {
  borderRadius: 5,
  borderColor: "#5471FF",
  height: 8,
  backgroundColor: "#5471FF",
};

const WordPage = (props) => {
  const [type, setType] = useState(1);
  const [index, setIndex] = useState(0);
  const [scrapIndex, setScrapIndex] = useState(0);
  const [memorized, setMemorized] = useState([]);
  const [wordPending, setWordPending] = useState(true)
  const CarouselRef = useRef();
  const [infos, setInfos] = useState({
    new: [],
    old: [],
    today: [],
  });
  const [API] = useCallback(useAPI(), []);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const userToken = await AsyncStorage.getItem("@userToken");
        const params = {
          userId: jwt_decode(userToken)["cognito:username"],
          body: {
            level: 1,
          },
        };
        setUserName(jwt_decode(userToken)["cognito:username"]);
        const { data } = await API.voca.wordRecommend(params);
        const { data: memorizedData } = await API.voca.getVocaList(params);
        setInfos({
          new: data.result.map((v) => {
            return { ...v, scrap: false };
          }),
          old: memorizedData.unmemorized,
          today: memorizedData.today,
        });
        setMemorized(memorizedData.memorized);
      } catch (err) {
        console.log(err);
        alert("e");
      }
    };
    useEffectAsyncFunction();
  }, []);
  var inputRefs = React.useRef(new Array());
  var scrapRefs = React.useRef(new Array());

  const scrapHandler = async (index) => {
    try {
      temp = infos.new;
      select = temp[index];
      select["scrap"] = true;
      temp[index] = select;
      const params = {
        userId: userName,
        body: {
          voca: [select.word],
        },
      };
      const { data } = await API.voca.addVoca(params);
      setInfos({ new: temp, old: infos.old });
    } catch (err) {
      console.log(err);
    }
  };
  
  const completeHandler = async(v) => {
    try{
      const params = {
        userId: userName,
        body : {
          voca : v
        }
      }
      await API.voca.addVoca(params)
      alert("스크랩 단어에 담았습니다.")
    }catch (err) {

    }finally{

    }
  };

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
          style={{ width: wp(80), height: 160, backgroundColor: "#5471FF", borderRadius: 10 }}
          onPress={() => {
            inputRefs.current[index].flip();
          }}
        >
          <GlobalStyled.ViewRow height="50" justifyContent="flex-start">
            {/* <GlobalStyled.ViewRow
              width="50px"
              as={TouchableOpacity}
              onPress={() => {
                scrapHandler(index);
              }}
            >
              <WordScrap fill={item.scrap ? "#FFD000" : "white"} size={wp(5)} style={{ marginLeft: 10 }} />
            </GlobalStyled.ViewRow> */}
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewCol style={{ flex: 1 }}>
            <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Bold", color: "white" }}>{item.word}</Text>
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol height="50"></GlobalStyled.ViewCol>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: wp(80), height: 160, borderColor: "#5471FF", borderRadius: 10, borderWidth: 1 }}
          onPress={() => {
            inputRefs.current[index].flip();
          }}
        >
          <GlobalStyled.ViewCol style={{ paddingLeft: 10 }} alignItems="flex-start">
            <GlobalStyled.ViewCol width="auto" height="20px" style={{ borderRadius: 10, borderWidth: 1, borderColor: "#5471FF", paddingHorizontal: 5 }}>
              <Text style={{ fontSize: 10, color: "#5471FF", fontWeight: "bold" }}>명사</Text>
            </GlobalStyled.ViewCol>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>{item.trans}</Text>
            <Text style={{ fontSize: 13, color: "black" }}>{item.korea}</Text>
            <GlobalStyled.ViewCol height="46px" style={{ borderLeftWidth: 7, borderColor: "#5471FF", paddingLeft: 10, marginTop: 15 }} justifyContent="space-around">
              <Text style={{ fontSize: 15, fontWeight: "bold", color: "black", width: "100%", textAlign: "left" }}>예문을 준비중입니다.</Text>
              <Text style={{ fontSize: 13, color: "black", width: "100%", textAlign: "left" }}>예문 해석을 준비중입니다.</Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </TouchableOpacity>
      </CardFlip>
    );
  };
  const renderScrapItem = ({ item, index }) => {
    return (
      <CardFlip
        style={{ width: wp(80), height: 160 }}
        ref={(v) => {
          inputRefs.current[index] = v;
        }}
        flipDirection="x"
      >
        <TouchableOpacity
          style={{ width: wp(80), height: 160, backgroundColor: "#5471FF", borderRadius: 10 }}
          onPress={() => {
            inputRefs.current[index].flip();
          }}
        >
          <GlobalStyled.ViewCol style={{ flex: 1 }}>
            <Text style={{ fontSize: 30, fontFamily: "NotoSansKR-Bold", color: "white" }}>{item.voca}</Text>
            <GlobalStyled.ViewCol style={{ height: 30, width: 140, backgroundColor: "white", borderRadius: 5, marginTop: 20 }} as={TouchableOpacity}>
              <Text style={{ color: "#5471FF", fontSize: 18 }}>암기완료</Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: wp(80), height: 160, borderColor: "#5471FF", borderRadius: 10, borderWidth: 1 }}
          onPress={() => {
            inputRefs.current[index].flip();
          }}
        >
          <GlobalStyled.ViewCol style={{ paddingLeft: 10 }} alignItems="flex-start">
            <GlobalStyled.ViewCol width="auto" height="20px" style={{ borderRadius: 10, borderWidth: 1, borderColor: "#5471FF", paddingHorizontal: 5 }}>
              <Text style={{ fontSize: 10, color: "#5471FF", fontWeight: "bold" }}>명사</Text>
            </GlobalStyled.ViewCol>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>{item.voca}</Text>
            <Text style={{ fontSize: 13, color: "black" }}>{item.korea}</Text>
            <GlobalStyled.ViewCol height="46px" style={{ borderLeftWidth: 7, borderColor: "#5471FF", paddingLeft: 10, marginTop: 15 }} justifyContent="space-around">
              <Text style={{ fontSize: 15, fontWeight: "bold", color: "black", width: "100%", textAlign: "left" }}>예문을 준비중입니다.</Text>
              <Text style={{ fontSize: 13, color: "black", width: "100%", textAlign: "left" }}>예문 해석을 준비중입니다.</Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </TouchableOpacity>
      </CardFlip>
    );
  };

  const CardComponent = (props) => {
    const { item, index } = props;
    return (
      <CardFlip
        style={{ marginHorizontal: wp(2), width: wp(45), height: wp(23), marginBottom: wp(4) }}
        ref={(v) => {
          scrapRefs.current[index] = v;
        }}
        flipDirection="x"
      >
        <GlobalStyled.ViewCol
          style={{ borderWidth: 1, borderRadius: 5, borderColor: "#CDCDCD" }}
          as={TouchableOpacity}
          onPress={() => {
            scrapRefs.current[index].flip();
          }}
        >
          <Text style={{ fontSize: 20, color: "#1B2C49" }}>{item.word}</Text>
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol
          style={{ backgroundColor: "#5471FF", borderRadius: 5 }}
          as={TouchableOpacity}
          onPress={() => {
            scrapRefs.current[index].flip();
          }}
          justifyContent="space-between"
        >
          <GlobalStyled.ViewRow height="25px" justifyContent="flex-start" style={{ paddingLeft: 10 }}>
            <GlobalStyled.ViewCol width="auto" height="20px" style={{ borderRadius: 10, backgroundColor: "white", paddingHorizontal: 5, marginTop: 6 }}>
              <Text style={{ fontSize: 10, color: "#5471FF", fontWeight: "bold" }}>명사</Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewRow>
          <Text style={{ fontSize: 20, color: "white" }}>{item.trans}</Text>
          <GlobalStyled.ViewRow height="25px"></GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      </CardFlip>
    );
  };
  return (
    <Styled.background>
      <WordHeader type={type} setType={setType} title="나만의 단어장" />
      <GlobalStyled.ViewCol justifyContent="flex-start" style={{ flex: 1, width: wp(100), marginTop: 0 }}>
        {type === 1 ? (
          <GlobalStyled.ViewCol style={{ width: wp(100), flex: 1, height: "auto", paddingBottom: 85 }} justifyContent="flex-start">
            <Text style={{ fontSize: 15, color: "#4C527C", width: "100%", textAlign: "left", paddingLeft: 10, marginVertical: 15 }}>
              <Text style={{ fontSize: 15, color: "#4C527C", fontWeight: "bold" }}>맞춤형 추천</Text> - 같은 등급의 학생들이 가장 많이 담은 단어
            </Text>
            {wordPending ? (
              <GlobalStyled.ViewCol height="200px" style={{backgroundColor:"white"}}>
                <GlobalStyled.ViewCol height="180px" width={wp(80)} style={{backgroundColor:"#5471FF", borderRadius:10}} as={TouchableOpacity} onPress={()=>{setWordPending(false)}}>
                  <Text style={{color: "white", fontWeight: "bold", color:"white", fontSize:20}}>추천단어{"\n"}받아보기</Text>
                </GlobalStyled.ViewCol>
              </GlobalStyled.ViewCol>
            ) : (
              <GlobalStyled.ViewCol height="200px">
                <Carousel
                  renderItem={renderItem}
                  sliderWidth={wp(95)}
                  sliderHeight={100}
                  itemWidth={wp(80)}
                  data={infos.new}
                  ref={CarouselRef}
                  onSnapToItem={() => {
                    setIndex(CarouselRef.current.currentIndex);
                  }}
                  style={{ height: 100, backgroundColor: "#E6EBFF" }}
                ></Carousel>
              </GlobalStyled.ViewCol>
            )}
            {infos.new.length === 0||wordPending ? (
              <></>
            ) : (
              <>
                <ProgressBar {...progressCustomStyles} width={wp(90)} maxValue={100} startvalue={0} finalvalue={(100 * (index + 1)) / infos.new.length} progress={1} />
                <Text style={{ width: wp(100), textAlign: "center", fontSize: 15, fontWeight: "bold", color: "#5471FF", marginTop: 10 }}>
                  {index + 1}
                  {" / "}
                  {infos.new.length}
                </Text>
              </>
            )}
            <GlobalStyled.ViewCol style={{ flex: 1 }} justifyContent="flex-end">
              <GlobalStyled.ViewRow width="180px" height="44px" style={{ borderRadius: 5, backgroundColor: "#5471FF", marginBottom: 20 }} as={TouchableOpacity} onPress={()=>{completeHandler(infos.new[index].word)}}>
                <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>스크랩</Text>
              </GlobalStyled.ViewRow>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        ) : type === 2 ? (
          <ScrollView style={{ width: wp(100), flex: 1, height: hp(200) }} contentContainerStyle={{ flexGrow: 1, flexDirection: "column", alignItems: "center" }} showsVerticalScrollIndicator= {false}>
            <Text style={{ fontSize: 15, color: "#4C527C", width: "100%", textAlign: "left", paddingLeft: 15, marginVertical: 15, fontWeight: "bold" }}>오늘 스크랩</Text>
            <GlobalStyled.ViewCol height="200px">
              {infos.today.length === 0 ? (
                <Text>오늘 스크랩한 단어가 없습니다.</Text>
              ) : (
                <Carousel
                  renderItem={renderScrapItem}
                  sliderWidth={wp(95)}
                  sliderHeight={100}
                  itemWidth={wp(80)}
                  data={infos.today}
                  ref={CarouselRef}
                  onSnapToItem={() => {
                    setScrapIndex(CarouselRef.current.currentIndex);
                  }}
                  style={{ height: 100, backgroundColor: "red" }}
                ></Carousel>
              )}
            </GlobalStyled.ViewCol>
            {/* <GlobalStyled.ViewCol style={{ flex: 1, width: wp(100), backgroundColor: "brown" }}></GlobalStyled.ViewCol> */}
            {infos.today.length === 0 ? (
              <></>
            ) : (
              <>
                {" "}
                <ProgressBar {...progressCustomStyles} width={wp(90)} maxValue={100} startvalue={0} finalvalue={(100 * (index + 1)) / infos.new.length} progress={1} />
                <Text style={{ width: wp(100), textAlign: "center", fontSize: 15, fontWeight: "bold", color: "#5471FF", marginTop: 10 }}>
                  {scrapIndex + 1}
                  {" / "}
                  {infos.today.length}
                </Text>
              </>
            )}
            <Text>단어카드를 터치하여 단어 뜻을 확인하세요!</Text>
            <Text
              style={{
                fontSize: 15,
                color: "#4C527C",
                width: "100%",
                textAlign: "left",
                paddingLeft: 15,
                marginVertical: 15,
                fontWeight: "bold",
              }}
            >
              전체 스크랩
            </Text>
            {/* 
      전체 스크랩부분 scrollView가 홈버튼이 있는 기종에는 맞지 않습니다 더 늘어나야해요!
*/}
            <GlobalStyled.ViewRow style={{ flex: 1, height: "auto", flexWrap: "wrap" }} justifyContent="flex-start">
              {infos.old.map((v, index) => {
                return <CardComponent item={v} index={index}></CardComponent>;
              })}
            </GlobalStyled.ViewRow>
          </ScrollView>
        ) : (
          <ScrollView style={{ width: wp(100), flex: 1 }} contentContainerStyle={{ flexGrow: 1, flexDirection: "column", alignItems: "center" }} showsVerticalScrollIndicator= {false}>
            {/* 이부분도 스크롤이 끝까지 내려가지 않는 버그가 있습니다 */}
            <Text style={{ fontSize: 15, color: "#4C527C", width: "100%", textAlign: "left", paddingLeft: 15, marginVertical: 15, fontWeight: "bold" }}>암기된 단어</Text>
            <Text style={{ textAlign: "left", width: "100%", paddingLeft: 15 }}>단어카드를 터치하여 단어 뜻을 확인하세요!</Text>
            <GlobalStyled.ViewRow style={{ flex: 1, height: "auto", flexWrap: "wrap" }} justifyContent="flex-start">
              {memorized.map((v, index) => {
                return <CardComponent item={v} index={index}></CardComponent>;
              })}
            </GlobalStyled.ViewRow>
          </ScrollView>
        )}
      </GlobalStyled.ViewCol>
    </Styled.background>
  );
};

export default WordPage;
