import React, { useState, useEffect } from "react";
import GlobalStyled from "../../style/GlobalStyled";
import { Text, View, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import ImageZoom from "react-native-image-pan-zoom";
const AnswerSheet = (props) => {
  const [ratio, setRatio] = useState(1);
  useEffect(() => {
    Image.getSize(`https://answering.s3.ap-northeast-2.amazonaws.com/${props.result.code}.jpg`, (width, height) => {
      setRatio(height / width);
    });
  }, []);
  const renderItem = () => {
    if (props.type === "주제찾기") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>선지해석</Text>
          {[1, 2, 3, 4, 5].map((v) => {
            return (
              <GlobalStyled.ViewRow height="50px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5 }}>
                <GlobalStyled.ViewCol style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 3, borderColor: "#6F87FF" }}>
                  <Text style={{ color: "#6F87FF", fontSize: 30 }}>{v}</Text>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewRow style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={{ width: "100%", textAlign: "left" }}>{props.result["s" + String(v)]}</Text>
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewRow>
            );
          })}
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "밑줄의미") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>선지해석</Text>
          {[1, 2, 3, 4, 5].map((v) => {
            return (
              <GlobalStyled.ViewRow height="50px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5 }}>
                <GlobalStyled.ViewCol style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 3, borderColor: "#6F87FF" }}>
                  <Text style={{ color: "#6F87FF", fontSize: 30 }}>{v}</Text>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewRow style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={{ width: "100%", textAlign: "left" }}>{props.result["s" + String(v)]}</Text>
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewRow>
            );
          })}
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "제목찾기") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>선지해석</Text>
          {[1, 2, 3, 4, 5].map((v) => {
            return (
              <GlobalStyled.ViewRow height="50px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5 }}>
                <GlobalStyled.ViewCol style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 3, borderColor: "#6F87FF" }}>
                  <Text style={{ color: "#6F87FF", fontSize: 30 }}>{v}</Text>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewRow style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={{ width: "100%", textAlign: "left" }}>{props.result["s" + String(v)]}</Text>
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewRow>
            );
          })}
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "밑줄낱말") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "지칭") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "빈칸두개") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>(A)해설</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpA}</Text>
          </GlobalStyled.ViewRow>
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold", marginTop: 10 }}>(B)해설</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpB}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "네모어법") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>(A)해설</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpA}</Text>
          </GlobalStyled.ViewRow>
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold", marginTop: 10 }}>(B)해설</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpB}</Text>
          </GlobalStyled.ViewRow>
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold", marginTop: 10 }}>(C)해설</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpC}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "빈칸추론") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>선지해석</Text>
          {[1, 2, 3, 4, 5].map((v) => {
            return (
              <GlobalStyled.ViewRow height="50px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5 }}>
                <GlobalStyled.ViewCol style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 3, borderColor: "#6F87FF" }}>
                  <Text style={{ color: "#6F87FF", fontSize: 30 }}>{v}</Text>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewRow style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={{ width: "100%", textAlign: "left" }}>{props.result["s" + String(v)]}</Text>
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewRow>
            );
          })}
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "무관문") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>전체맥락</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAll}</Text>
          </GlobalStyled.ViewRow>
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold", marginTop: 10 }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "순서") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "목적찾기") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.ans_reason}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "문장삽입") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "요약문") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>선지해석</Text>
          <GlobalStyled.ViewRow height="50px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5, borderBottomWidth: 1 }}>
            <GlobalStyled.ViewCol width="40px"></GlobalStyled.ViewCol>
            <GlobalStyled.ViewRow style={{ flex: 1 }}>
              <GlobalStyled.ViewCol width="50%">
                <Text style={{ fontSize: 20, fontFamily: "NotoSansCJKkr-Bold" }}>(A)</Text>
              </GlobalStyled.ViewCol>
              <GlobalStyled.ViewCol width="50%">
                <Text style={{ fontSize: 20, fontFamily: "NotoSansCJKkr-Bold" }}>(B)</Text>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          {[1, 2, 3, 4, 5].map((v) => {
            return (
              <GlobalStyled.ViewRow height="50px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5, borderBottomWidth: 1 }}>
                <GlobalStyled.ViewCol style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 3, borderColor: "#6F87FF" }}>
                  <Text style={{ color: "#6F87FF", fontSize: 30 }}>{v}</Text>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewRow style={{ flex: 1 }}>
                  <GlobalStyled.ViewCol width="50%">
                    <Text>{props.result["s" + v + "a"]}</Text>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewCol width="50%">
                    <Text>{props.result["s" + v + "b"]}</Text>
                  </GlobalStyled.ViewCol>
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewRow>
            );
          })}
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "심경,어조,분위기찾기") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>선지해석</Text>
          {[1, 2, 3, 4, 5].map((v) => {
            return (
              <GlobalStyled.ViewRow height="50px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5 }}>
                <GlobalStyled.ViewCol style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 3, borderColor: "#6F87FF" }}>
                  <Text style={{ color: "#6F87FF", fontSize: 30 }}>{v}</Text>
                </GlobalStyled.ViewCol>
                <GlobalStyled.ViewRow style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={{ width: "100%", textAlign: "left" }}>{props.result["s" + String(v)]}</Text>
                </GlobalStyled.ViewRow>
              </GlobalStyled.ViewRow>
            );
          })}
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "요지,주장찾기") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>CHERY KEY</Text>
          <GlobalStyled.ViewRow style={{ height: "auto", borderRadius: 10, backgroundColor: "#F0F2F7", padding: 10, marginTop: 10 }}>
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{props.result.helpAns}</Text>
          </GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "글일치불일치") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>선지해석</Text>
          {[1, 2, 3, 4, 5].map((v) => {
            if (props.result["s" + String(v)] === "null") {
            } else {
              return (
                <GlobalStyled.ViewRow height="50px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5 }}>
                  <GlobalStyled.ViewCol style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 3, borderColor: "#6F87FF" }}>
                    <Text style={{ color: "#6F87FF", fontSize: 30 }}>{v}</Text>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewRow style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ width: "100%", textAlign: "left" }}>{props.result["s" + String(v)]}</Text>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewRow>
              );
            }
          })}
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>선지해설</Text>
          {[1, 2, 3, 4, 5].map((v) => {
            if (props.result["s" + String(v) + "Help"] === "null") {
            } else {
              return (
                <GlobalStyled.ViewRow height="50px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5 }}>
                  <GlobalStyled.ViewCol style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 3, borderColor: "#6F87FF" }}>
                    <Text style={{ color: "#6F87FF", fontSize: 30 }}>{v}</Text>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewRow style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ width: "100%", textAlign: "left" }}>{props.result["s" + String(v) + "Help"]}</Text>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewRow>
              );
            }
          })}
        </GlobalStyled.ViewCol>
      );
    } else if (props.type === "밑줄어법") {
      return (
        <GlobalStyled.ViewCol width="90%" height="auto">
          <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold" }}>선지해설</Text>
          {[1, 2, 3, 4, 5].map((v) => {
            if (props.result["s" + String(v)] === "null") {
            } else {
              return (
                <GlobalStyled.ViewRow height="80px" justifyContent="flex-start" style={{ backgroundColor: "white", marginVertical: 5 }}>
                  <GlobalStyled.ViewCol style={{ height: 40, width: 40, borderRadius: 20, borderWidth: 3, borderColor: "#6F87FF" }}>
                    <Text style={{ color: "#6F87FF", fontSize: 30 }}>{v}</Text>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewRow style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={{ width: "100%", textAlign: "left" }}>{props.result["s" + String(v)]}</Text>
                  </GlobalStyled.ViewRow>
                </GlobalStyled.ViewRow>
              );
            }
          })}
        </GlobalStyled.ViewCol>
      );
    }
  };
  return (
    <GlobalStyled.ViewCol width={wp(100)} justifyContent="flex-start" style={{marginBottom:10}}>
      {renderItem()}
      <GlobalStyled.ViewCol width="90%" height="auto">
        <Text style={{ width: "100%", fontSize: 20, color: "#1B2C49", fontFamily: "NotoSansCJKkr-Bold", marginVertical: 10 }}>CHERY 해설지</Text>
        <ImageZoom cropWidth={wp(90)} cropHeight={wp(90) * ratio} imageWidth={wp(90)} imageHeight={wp(90) * ratio}>
          <Image
            onLayout={(e) => {

            }}
            style={{ width: wp(90), height: wp(90) * ratio }}
            resizeMode="contain"
            source={{ uri: `https://answering.s3.ap-northeast-2.amazonaws.com/${props.result.code}.jpg` }}
          />
        </ImageZoom>
      </GlobalStyled.ViewCol>
    </GlobalStyled.ViewCol>
  );
};

export default AnswerSheet;
