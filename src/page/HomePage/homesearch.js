import GlobalStyled from "../../style/GlobalStyled";
import { Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useCallback} from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import useAPI from "../../hooks/useAPI";
import codeParser from "../../function/codeParser";
import Problem from "../../images/iconSvg/Problem";

const HomeSearch = (props) => {
  const { wrongProblemWeak, userName, realName, navigation, wrongProblem, frequentSearch } = props;
  const [API] = useCallback(useAPI(), []);
  const searchBtnHandler = async (v) => {
    try {
      const params = {
        userId: userName,
        code: v,
        body: {},
      };
      const result = await API.search.isValid(params);
      const valid = result.data.result;
      if (valid === 1) {
        const result = await API.search.getSearchInfo(params);
        navigation.navigate("AfterLoginGradeSolve", {
          screen: "QuestionAnalysisStack",
          params: {
            screen: "QuestionAnalysis8",
            params: {
              result: result.data,
              searchCode: v,
              realName: realName,
            },
          },
        });
      } else {
        alert("유효하지 않은 문항코드입니다.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <GlobalStyled.ViewCol width={wp(100)} height="100%" style={{ justifyContent: "flex-start" }}>
      <ScrollView
        contentContainerStyle={{
          width: wp(100),
          display: "flex"
        }}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator= {false}
      >
        <Text 
          style={{
            width: "90%",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "NotoSansCJKkr-Bold",
            marginTop: 20,
            marginLeft:20
          }}
        >
          어제의 오답문항
        </Text>
        <ScrollView style={{ height: 145, width: wp(100), marginTop: 10 }} contentContainerStyle={{ height: 145, minWidth: wp(100), display: "flex", flexDirection: "row" }} horizontal showsHorizontalScrollIndicator={false}>
          {wrongProblem.length !== 0 ? (
            wrongProblem.map((v, idx) => {
              var i=idx%3
              return (
                <GlobalStyled.ViewCol
                  as={TouchableOpacity}
                  onPress={() => {
                    searchBtnHandler(v.code);
                  }}
                  width="120px"
                  height="137px"
                  style={{ backgroundColor: "white", marginHorizontal: 10, borderRadius: 15 }}
                >
                  <GlobalStyled.ViewCol height="85px" style={{marginTop:10}}>
                    <Problem size={80} dark={["#555E8B","#BC5F80","#C7DE79"][i]} light={["#A7ABC1","#DE9AAE","#E8F4D9"][i]}/>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewCol height="42px">
                  <Text style={{ textAlign: "center" }}>{codeParser(v.code)}</Text>
                  </GlobalStyled.ViewCol>

                </GlobalStyled.ViewCol>
              );
            })
          ) : (
            <Text style={{ textAlign: "center", width: "100%", lineHeight: 66 }}>오답문항이 없습니다. 매일학습을 먼저 진행해주세요.</Text>
          )}
        </ScrollView>
        <Text
          style={{
            width: "90%",
            textAlign: "left",
            fontSize: 20,
            fontFamily: "NotoSansCJKkr-Bold",
            marginTop: 20,
            marginLeft:20
          }}
        >
          전체 오답문항
        </Text>
        <ScrollView style={{ height: 145, width: wp(100), marginTop: 10 }} contentContainerStyle={{ height: 145, minWidth: wp(100), display: "flex", flexDirection: "row", alignItems: "center"}} horizontal showsHorizontalScrollIndicator={false}>
          {wrongProblemWeak.length !== 0 ? (
            wrongProblemWeak.map((v,idx) => {
              var i=idx%3
              return (
                <GlobalStyled.ViewCol
                  as={TouchableOpacity}
                  onPress={() => {
                    searchBtnHandler(v.code);
                  }}
                  width="120px"
                  height="137px"
                  style={{ backgroundColor: "white", marginHorizontal: 10, borderRadius: 15 }}
                >
                  <GlobalStyled.ViewCol height="85px" style={{marginTop:10}}>
                    <Problem size={80} dark={["#555E8B","#BC5F80","#C7DE79"][i]} light={["#A7ABC1","#DE9AAE","#E8F4D9"][i]}/>
                  </GlobalStyled.ViewCol>
                  <GlobalStyled.ViewCol height="42px">
                  <Text style={{ textAlign: "center" }}>{codeParser(v.code)}</Text>
                  </GlobalStyled.ViewCol>

                </GlobalStyled.ViewCol>
              );
            })
          ) : (
            <Text style={{ textAlign: "center", width: "100%", lineHeight: 66 }}>오답문항이 없습니다. 매일학습을 먼저 진행해주세요.</Text>
          )}
        </ScrollView>
      </ScrollView>
    </GlobalStyled.ViewCol>
  );
};

export default HomeSearch;
