import React, { useState } from "react";
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ScrollView, StyleSheet, View } from "react-native";
import ProblemAnalysisHeader from "./components/ProblemAnalysis/ProblemAnalysisHeader";
import ProSection from "./components/ProblemAnalysis/ProSection";

const styles = StyleSheet.create({
  Scroll: {
    display: "flex",
    justifyContent: "flex-start",
    height: "auto",
    alignItems: "center",
    flexDirection: "column",
    width: wp(100),
  },
});

const Styled = {
  background: styled.View`
    width: ${wp(100)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
};
const Search = (props) => {
  const {backHandler,code} = props;
  const [NavColor, setNavColor] = useState(0);
  const [GraphPercentage, setGraphPercentage] = useState([65, 80, 42]);
  // 각 난이도의 퍼센트를 정해줌 바꾸면 그래프도 바뀜
  const [MainText, setMainText] = useState("Here’s an interesting thought. If glaciers started re-forming, they have a hundreds of thousands of lakes of Canada, none of which existed to fuel the last ice sheet so they would we do? Blast them with TNT or maybe unclear this, in 1964, the largest earthquake ever recorded in North America  rocked Alaska with 200,000 megatons of concentrated might, the equivalent of 2,000 unclear bombs. Almost in Anchorage fell twenty feet. The quake devastated 24,000 square miles of wilderness, much of it glaciated. And what effect did all might have on Alaska’s glaciers? None");
  const [Explanation, setExplanation] = useState("다음 글에서 밑줄 친 None이 의미하는 바로 가장 적절한것은?");
  const [selectMenu, setSelectMenu] = useState({
    1: "It would be of no use to try to destory glaciers.",
    2: "The melting glaciers would drive the rise of sea level.",
    3: "The Alaska wilderness would not spread over North America",
    4: "Reforming glaciers would not spread over North America.",
    5: "The cause of glacier re-fornation would not include quakes.",
  });
  return (
    <View style={{ backgroundColor: "white", width:"100%", height:"100%" }}>
      <ProblemAnalysisHeader NavColor={NavColor} setNavColor={setNavColor} ProblemNumber={code} backHandler={backHandler} />
      <ScrollView contentContainerStyle={styles.Scroll} showsVerticalScrollIndicator= {false}>
        <ProSection GraphPercentage={GraphPercentage} MainText={MainText} Explanation={Explanation} selectMenu={selectMenu} NavColor={NavColor} setNavColor={setNavColor} code={code} backHandler={backHandler}/>
      </ScrollView>
    </View>
  );
};
export default Search;
