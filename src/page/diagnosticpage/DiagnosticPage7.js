import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Constants from "expo-constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalStyled from "../../style/GlobalStyled";
const diagnosticTestPage7 = ({ navigation }) => {
  const [gradeList, setGradeList] = useState(["1학년", "2학년", "3학년"]);
  const [monthList, setMonthList] = useState(["3월", "6월", "9월", "11월"]);
  const [select, setSelect] = useState(0);
  const [selectMonth, setSelectMonth] = useState(0);
  const [score, setScore] = useState(80);
  const [isNotTested, setIsNotTested] = useState(false);
  const [scoreList, setScoreList] = useState([
    { three: null, six: null, nine: null, eleven: null },
    { three: null, six: null, nine: null, eleven: null },
    { three: null, six: null, nine: null, eleven: null },
  ]);
  const [tempGrade, setTempGrade] = useState(-1);
  const monthArray = ["three", "six", "nine", "eleven"];
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      const grade = await AsyncStorage.getItem("@grade");
      setTempGrade(parseInt(grade));
      if (grade == 1) {
        setGradeList(["1학년"]);
        setScoreList([{ three: 80, six: null, nine: null, eleven: null }]);
      } else if (grade == 2) {
        setGradeList(["1학년", "2학년"]);
        setScoreList([
          { three: 80, six: null, nine: null, eleven: null },
          { three: null, six: null, nine: null, eleven: null },
        ]);
      } else if (grade == 0) {
        setGradeList([]);
        setScoreList([]);
      } else {
        setGradeList(["1학년", "2학년", "3학년"]);
        setScoreList([
          { three: 80, six: null, nine: null, eleven: null },
          { three: null, six: null, nine: null, eleven: null },
          { three: null, six: null, nine: null, eleven: null },
        ]);
      }
    };
    useEffectAsyncFunction();
  }, []);
  useEffect(() => {
    var temp = [...scoreList];
    var temp2 = temp[select];
    if (isNotTested) {
      temp2[monthArray[selectMonth]] = "-";
    } else {
      temp2[monthArray[selectMonth]] = 80;
    }
    temp[select] = temp2;
    setScoreList(temp);
  }, [selectMonth]);
  const nextPageHandler = () => {
    if (tempGrade == 0) {
      navigation.navigate("DiagnosticPage6", {
        box: [],
      });
    } else {
      if (selectMonth === monthList.length - 1) {
        if (select === gradeList.length - 1) {
          var box = [];
          for (var v of scoreList) {
            box = box.concat(Object.values(v));
          }
          if (isNotTested) {
            box[box.length - 1] = "-";
          }
          if (box.includes(null)) {
            alert("입력하지 않은 항목이 있습니다.");
          } else {
            navigation.navigate("DiagnosticPage6", {
              box: box,
            });
          }
        } else {
          setSelectMonth(0);
          setSelect(select + 1);
          if (scoreList[select + 1].three === null) {
            setScore(80);
          } else {
            setScore(scoreList[select + 1].three);
          }
        }
      } else {
        setSelectMonth(selectMonth + 1);
        if (scoreList[select][monthArray[selectMonth + 1]] === null) {
          setScore(80);
        } else {
          setScore(scoreList[select][monthArray[selectMonth + 1]]);
        }
      }
      var temp = [...scoreList];
      var temp2 = temp[select];
      if (isNotTested) {
        temp2[monthArray[selectMonth]] = "-";
      }
      temp[select] = temp2;
      setScoreList(temp);
      setIsNotTested(false);
    }
  };
  const prevPageHandler = () => {
    if (selectMonth === 0) {
      if (select === 0) {
        navigation.navigate("DiagnosticPage5");
      } else {
        setSelectMonth(monthList.length - 1);
        setSelect(select - 1);
        if (scoreList[select - 1].eleven === null) {
          setScore(80);
        } else {
          setScore(scoreList[select - 1].eleven);
        }
      }
    } else {
      setSelectMonth(selectMonth - 1);
      if (scoreList[select][monthArray[selectMonth - 1]] === null) {
        setScore(80);
      } else {
        setScore(scoreList[select][monthArray[selectMonth - 1]]);
      }
    }
    var temp = [...scoreList];
    var temp2 = temp[select];
    if (isNotTested) {
      temp2[monthArray[selectMonth]] = "-";
    } else {
      temp2[monthArray[selectMonth]] = score;
    }
    temp[select] = temp2;
    setScoreList(temp);
    setIsNotTested(false);
  };

  const Styled = {
    body: styled.View`
      width: 100%;
      height: ${hp(100)}px;
      background-color: #f4f5f7;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
    `,
    section: styled.View`
      height: ${hp(100) - Constants.statusBarHeight}px;
      margin-top: ${Constants.statusBarHeight}px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
    `,
    contentBox: styled.View`
      width: 100%;
      flex: 1;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    `,
    btnbox: styled.View`
      width: 100%;
      height: 10%;
      background-color: #fff;
      border-top-width: 2px;
      border-top-color: #dbe5ea;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
    `,
    p1: styled.Text`
      width: 100%;
      background-color: #fff;
      font-size: 21px;
      font-weight: bold;
    `,
    p2: styled.Text`
      color: #a4b6d6;
      font-size: 16px;
      width: 100%;
    `,
    choice: styled.View`
      margin-left: 20px;
      width: 100%;
      height: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #a4b6d6;
    `,
    word: styled.View`
      width: 90%;
      height: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      margin-top: 15px;
    `,
    info2: styled.View`
      margin-left: 20px;
      width: 100%;
      height: 16px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #a4b6d6;
    `,

    info: styled.View`
      margin-left: 20px;
      width: 100%;
      height: 30px;
      font-size: 17px;
      font-weight: bold;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #1b2c49;
    `,

    styledText: styled.Text`
        color : ${(props) => (props.id === select ? "#2786FF" : "#1B2C49")}
        font-weight : bold;
      `,
    styledMonthText: styled.Text`
      color : ${(props) => (props.id === selectMonth ? "#2786FF" : "#1B2C49")}
      font-weight : bold;
    `,
    boldFont: styled.Text`
      font-weight: bold;
      font-size: 17px;
      color: #1b2c49;
    `,
    font: styled.Text`
      font-size: 17px;
      color: #1b2c49;
      opacity: 1;
    `,
    summit: styled.View`
      width: 100%;
      height: 75px;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      flex-direction: row;
      justify-content: space-around;
    `,
    summitbtn: styled.View`
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-direction: row;
    `,
    prevbtn: styled.TouchableOpacity`
      width: 40%;
      height: 45px;
      background-color: #fff;
      border-radius: 10px;
      border: 1px solid #b493f5;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    `,
    nextbtn: styled.TouchableOpacity`
      width: 40%;
      height: 45;
      background-color: #6f87ff;
      border-radius: 10px;
      border: 1px solid #d4d7dc;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #fff;
    `,
    WrapView: styled.View`
      width: 90%;
      flex: 1px;
      padding-bottom: 10px;
    `,
    View: styled.View`
      width: 90%;
      height: 25px;
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-color: #c7d2e5;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    `,
    ViewWrap: styled.View`
      width: 90%;
      height: 200px;
      margin-top: 30px;
      flex-direction: row;
    `,
    WrapViewMap: styled.View`
      width: 70%;
      height: 100%;
      justify-content: center;
      align-items: flex-start;
    `,
    Text: styled.Text`
      width: 90%;
      text-align: center;
      margin-bottom: 10px;
    `,
    ScrollViewChild: styled.View`
      width: 100%;
      height: 40px;
      border-radius: 5px;
      flex-direction: row;
    `,
    ViewChild1: styled.View`
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 40px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    `,
    ViewChild2: styled.View`
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 40px;
    `,
    MapViewWrap: styled.View`
      width: 100%;
      height: 40px;
      border-radius: 10px;
      border-width: 1px;
      border-color: #dbe5ea;
      margin-bottom: 11px;
      flex-direction: row;
    `,
    MapView1: styled.View`
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 40px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    `,
    MapView2: styled.View`
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 40px;
    `,
    MapView3: styled.View`
      justify-content: center;
      align-items: center;
      width: 20%;
      height: 40px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    `,
    ViewPicker: styled.View`
      width: 70%;
      height: 100%;
      justify-content: center;
      align-items: center;
    `,
  };
  return (
    <Styled.body>
      <Styled.section>
        <GlobalStyled.ViewCol
          width="91%"
          height="95%"
          justifyContent="flex-start"
          style={{
            borderRadius: 10,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: "white",
          }}
        >
          <Styled.contentBox>
            <Styled.word>
              <Styled.info>
                <Styled.p1>3. 내 시험정보 입력</Styled.p1>
              </Styled.info>
              <Styled.info2>
                <Styled.p2>최근 모의고사 성적 입력</Styled.p2>
              </Styled.info2>
            </Styled.word>
            <Styled.View>
              {gradeList.map((v, idx) => {
                return (
                  <View>
                    <Styled.styledText id={idx}>{v}</Styled.styledText>
                  </View>
                );
              })}
            </Styled.View>
            <Styled.View>
              {monthList.map((v, idx) => {
                return (
                  <View>
                    <Styled.styledMonthText id={idx}>{v}</Styled.styledMonthText>
                  </View>
                );
              })}
            </Styled.View>
            <Styled.ViewWrap>
              <Styled.ViewPicker>
                <Picker
                  selectedValue={score}
                  style={{ height: 200, width: 160 }}
                  itemStyle={{ height: 200 }}
                  onValueChange={(itemValue, itemIndex) => {
                    var temp = [...scoreList];
                    var temp2 = temp[select];
                    if (isNotTested) {
                      temp2[monthArray[selectMonth]] = "-";
                    } else {
                      temp2[monthArray[selectMonth]] = itemValue;
                    }
                    temp[select] = temp2;
                    setScore(itemValue);
                    setScoreList(temp);
                  }}
                >
                  {[...Array(100).keys()].reverse().map((v) => {
                    return <Picker.Item label={String(v + 1)} value={v + 1} />;
                  })}
                </Picker>
              </Styled.ViewPicker>
              <Styled.WrapViewMap>
                <CircleCheckBox
                  checked={isNotTested}
                  onToggle={() => {
                    setIsNotTested(!isNotTested);
                  }}
                  labelPosition={LABEL_POSITION.RIGHT}
                  label="미응시"
                  outerColor="#48a3ff"
                  innerColor="#48a3ff"
                />
              </Styled.WrapViewMap>
            </Styled.ViewWrap>
            <Styled.Text>영어 성적을 입력해주세요.{"\n"}응시하지 않았다면 미응시를 체크하세요.</Styled.Text>
            <Styled.WrapView>
              <ScrollView showsVerticalScrollIndicator= {false}>
                <Styled.ScrollViewChild>
                  <Styled.ViewChild1>
                    <Text></Text>
                  </Styled.ViewChild1>
                  <Styled.ViewChild2>
                    <Styled.boldFont>3월</Styled.boldFont>
                  </Styled.ViewChild2>
                  <Styled.ViewChild2>
                    <Styled.boldFont>6월</Styled.boldFont>
                  </Styled.ViewChild2>
                  <Styled.ViewChild2>
                    <Styled.boldFont>9월</Styled.boldFont>
                  </Styled.ViewChild2>
                  <Styled.ViewChild1>
                    <Styled.boldFont>11월</Styled.boldFont>
                  </Styled.ViewChild1>
                </Styled.ScrollViewChild>
                {tempGrade == 0 ? (
                  <Text style={{ width: "100%", textAlign: "center" }}>아직 모의고사를 응시하지 않았습니다.{"\n"}다음을 눌러주세요.</Text>
                ) : (
                  scoreList.map((v, idx) => {
                    return (
                      <Styled.MapViewWrap>
                        <Styled.MapView1>
                          <Styled.font>{idx + 1}학년</Styled.font>
                        </Styled.MapView1>
                        <Styled.MapView2
                          as={TouchableOpacity}
                          onPress={() => {
                            setSelect(idx);
                            setSelectMonth(0);
                          }}
                        >
                          <View
                            style={{
                              margin: 3,
                              borderWidth: 1,
                              borderColor: select === idx && selectMonth === 0 ? "#b493f5" : "white",
                              flex: 1,
                              width: "95%",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 10,
                            }}
                          >
                            <Styled.font>{v.three}</Styled.font>
                          </View>
                        </Styled.MapView2>
                        <Styled.MapView2
                          as={TouchableOpacity}
                          onPress={() => {
                            setSelect(idx);
                            setSelectMonth(1);
                          }}
                        >
                          <View
                            style={{
                              margin: 3,
                              borderWidth: 1,
                              borderColor: select === idx && selectMonth === 1 ? "#b493f5" : "white",
                              flex: 1,
                              width: "95%",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 10,
                            }}
                          >
                            <Styled.font>{v.six}</Styled.font>
                          </View>
                        </Styled.MapView2>

                        <Styled.MapView2
                          as={TouchableOpacity}
                          onPress={() => {
                            setSelect(idx);
                            setSelectMonth(2);
                          }}
                        >
                          <View
                            style={{
                              margin: 3,
                              borderWidth: 1,
                              borderColor: select === idx && selectMonth === 2 ? "#b493f5" : "white",
                              flex: 1,
                              width: "95%",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 10,
                            }}
                          >
                            <Styled.font>{v.nine}</Styled.font>
                          </View>
                        </Styled.MapView2>
                        <Styled.MapView3
                          as={TouchableOpacity}
                          onPress={() => {
                            setSelect(idx);
                            setSelectMonth(3);
                          }}
                        >
                          <View
                            style={{
                              margin: 3,
                              borderWidth: 1,
                              borderColor: select === idx && selectMonth === 3 ? "#b493f5" : "white",
                              flex: 1,
                              width: "95%",
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 10,
                            }}
                          >
                            <Styled.font>{v.eleven}</Styled.font>
                          </View>
                        </Styled.MapView3>
                      </Styled.MapViewWrap>
                    );
                  })
                )}
              </ScrollView>
            </Styled.WrapView>
          </Styled.contentBox>
          <Styled.summit>
            <Styled.summitbtn>
              <Styled.prevbtn onPress={prevPageHandler}>
                <Text>이전</Text>
              </Styled.prevbtn>
              <Styled.nextbtn onPress={nextPageHandler}>
                <Text>다음</Text>
              </Styled.nextbtn>
            </Styled.summitbtn>
          </Styled.summit>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};

export { diagnosticTestPage7 };
