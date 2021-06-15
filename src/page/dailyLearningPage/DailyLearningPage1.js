import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components/native";
import { Header } from "../../components/Molecules/Header";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from "react-native-responsive-screen";
import Constants from "expo-constants";
import {
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import useAPI from "../../hooks/useAPI";
import moment from "moment";
import jwt_decode from "jwt-decode";
import GlobalStyled from "../../style/GlobalStyled";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import {
  withTiming,
  useSharedValue,
  useAnimatedStyle
} from "react-native-reanimated";
import Table from "../../components/Organisms/table";

const DailyLearningPage1 = ({ navigation }) => {
  const [weekInfo, serWeekInfo] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [API] = useCallback(useAPI(), []);
  const [userName, setUserName] = useState("");
  const detailOffset1 = useSharedValue(0, false);
  const detailOffset2 = useSharedValue(0, false);
  const detailOffset3 = useSharedValue(0, false);
  const detailOffset4 = useSharedValue(0, false);
  const detailOffset5 = useSharedValue(0, false);
  const detailOffset6 = useSharedValue(0, false);
  const detailOffset7 = useSharedValue(0, false);
  const tableOffset1 = useSharedValue(0, false);
  const tableOffset2 = useSharedValue(0, false);
  const tableOffset3 = useSharedValue(0, false);
  const tableOffset4 = useSharedValue(0, false);
  const tableOffset5 = useSharedValue(0, false);
  const tableOffset6 = useSharedValue(0, false);
  const tableOffset7 = useSharedValue(0, false);
  const tableOpacity1 = useSharedValue(0, false)
  const tableOpacity2 = useSharedValue(0, false)
  const tableOpacity3 = useSharedValue(0, false)
  const tableOpacity4 = useSharedValue(0, false)
  const tableOpacity5 = useSharedValue(0, false)
  const tableOpacity6 = useSharedValue(0, false)
  const tableOpacity7 = useSharedValue(0, false)
  const tableOffsetStyles = [
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset1.value }]};
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset2.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset3.value }]};
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset4.value }]};
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset5.value }]};
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset6.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset7.value }]};
    })
  ];
  const detailOffsetStyles = [
    useAnimatedStyle(() => {
      return { transform: [{ translateY: detailOffset1.value }], opacity: tableOpacity1.value };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: detailOffset2.value }], opacity: tableOpacity2.value };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: detailOffset3.value }], opacity: tableOpacity3.value };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: detailOffset4.value }], opacity: tableOpacity4.value };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: detailOffset5.value }], opacity: tableOpacity5.value };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: detailOffset6.value }], opacity: tableOpacity6.value};
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: detailOffset7.value }], opacity: tableOpacity7.value };
    })
  ];

  const detailDown = () => {
    detailOffset1.value = withTiming(0)
    tableOffset1.value = withTiming(0)
    detailOffset2.value = withTiming(0)
    tableOffset2.value = withTiming(0)
    detailOffset3.value = withTiming(0)
    tableOffset3.value = withTiming(0)
    detailOffset4.value = withTiming(0)
    tableOffset4.value = withTiming(0)
    detailOffset5.value = withTiming(0)
    tableOffset5.value = withTiming(0)
    detailOffset6.value = withTiming(0)
    tableOffset6.value = withTiming(0)
    detailOffset7.value = withTiming(0)
    tableOffset7.value = withTiming(0)
    tableOpacity1.value= withTiming(0)
    tableOpacity2.value= withTiming(0)
    tableOpacity3.value= withTiming(0)
    tableOpacity4.value= withTiming(0)
    tableOpacity5.value= withTiming(0)
    tableOpacity6.value= withTiming(0)
    tableOpacity7.value= withTiming(0)
  };

  const detailUp = (i) => {
    detailOffset1.value = withTiming(i >= 0 ? 46 : 0);
    tableOffset1.value = withTiming(i >= 0 ? 0 : 46);
    detailOffset2.value = withTiming(i >= 1 ? 46 : 0);
    tableOffset2.value = withTiming(i >= 1 ? 0 : 46);
    detailOffset3.value = withTiming(i >= 2 ? 46 : 0);
    tableOffset3.value = withTiming(i >= 2 ? 0 : 46);
    detailOffset4.value = withTiming(i >= 3 ? 46 : 0);
    tableOffset4.value = withTiming(i >= 3 ? 0 : 46);
    detailOffset5.value = withTiming(i >= 4 ? 46 : 0);
    tableOffset5.value = withTiming(i >= 4 ? 0 : 46);
    detailOffset6.value = withTiming(i >= 5 ? 46 : 0);
    tableOffset6.value = withTiming(i >= 5 ? 0 : 46);
    detailOffset7.value = withTiming(i >= 6 ? 46 : 0);
    tableOffset7.value = withTiming(i >= 6 ? 0 : 46);
    tableOpacity1.value = withTiming(i===0? 1: 0,{ duration:10})
    tableOpacity2.value = withTiming(i===1? 1: 0,{ duration:10})
    tableOpacity3.value = withTiming(i===2? 1: 0,{ duration:10})
    tableOpacity4.value = withTiming(i===3? 1: 0,{ duration:10})
    tableOpacity5.value = withTiming(i===4? 1: 0,{ duration:10})
    tableOpacity6.value = withTiming(i===5? 1: 0,{ duration:10})
    tableOpacity7.value = withTiming(i===6? 1: 0,{ duration:10})
  };
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const token = await AsyncStorage.getItem("@userToken");
        const deCode = jwt_decode(token);
        setUserName(deCode["cognito:username"]);
        const params = {
          userId: deCode["cognito:username"],
          body: {}
        };
        const result = await API.daily.getWeekInfo(params);
        const data = result.data;
        var box = [];
        for (var key in data) {
          box.push({
            date: moment(key).format("MM / DD"),
            is_tested: data[key]["is_tested"],
            is_graded: data[key]["is_graded"],
            result: data[key]["result"],
            length: data[key]["length"],
            link: data[key]["link"]
          });
        }
        serWeekInfo(box);
        setButtonDisabled(box[box.length - 1].is_graded);
      } catch (err) {
        console.log(err);
      }
    };
    useEffectAsyncFunction();
  }, []);

  const gradeHandler = (name) => {
    navigation.navigate("GradeStack", {
      screen: "GradePage1",
      params: {
        testType: 1,
        testName: name
      }
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      const AsyncFunction = async () => {
        try {
          if (userName !== "") {
            var name = userName;
          } else {
            const token = await AsyncStorage.getItem("@userToken");
            const deCode = jwt_decode(token);
            name = deCode["cognito:username"];
          }
          const params = {
            userId: name,
            body: {}
          };
          const result = await API.daily.getWeekInfo(params);
          const data = result.data;
          var box = [];
          for (var key in data) {
            box.push({
              date: moment(key).format("MM / DD"),
              is_tested: data[key]["is_tested"],
              is_graded: data[key]["is_graded"],
              result: data[key]["result"],
              length: data[key]["length"],
              link : data[key]["link"],
            });
          }
          serWeekInfo(box);
          setButtonDisabled(box[box.length - 1].is_graded);
          return null;
        } catch (err) {

        }
      };
      AsyncFunction();
      return ()=>{detailDown()}
    }, [])
  );

  const Styled = {
    body: styled.View`
      width: 100%;
      height: ${hp(100) - 70}px;
      background-color: white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      background-color:#F0F2F7
    `,
    section: styled.View`
      height: ${hp(100) - 80 - Constants.statusBarHeight}px;
      margin-top: ${Constants.statusBarHeight}px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,
    table: styled.View`
      width: 90%;
      height: 360px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      border-top-color: #eee;
      margin-top: 30px;
    `,
    tabletop: styled.View`
      width: 100%;
      height: 27px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    tablebox: styled.View`
      width: 100%;
      height: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    `,
    tabletext: styled.Text`
      width: 22%;
      height: 20px;
      font-size: 15px;
      color: #1b2c49;
      text-align: center;
      line-height: 20px;
    `,
    tabletext1: styled.Text`
      width: 33%;
      height: 20px;
      font-size: 15px;
      color: #1b2c49;
      text-align: center;
      line-height: 20px;
    `,
    tabledate: styled.View`
      width: 100%;
      height: 37px;
      background-color: #fff;
      margin-top: 9px;
      border-radius: 10px;
      border: 1px solid #eff2f7;
      flex-direction: row;
    `,
    tabledatetext: styled.Text`
      width: 31%;
      height: 100%;
      background-color: #eff2f7;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      display: flex;
      text-align: center;
      line-height: 30px;
    `,
    tabledateicon: styled.View`
      width: 23%;
      height: 100%;
      display: flex;
      background-color: white;
      justify-content: center;
      align-items: center;
    `,
    btn: styled.View`
      width: 75%;
      height: 51px;
      color: #fff;
      border-radius: 25.5px;
      border: 1px solid #48a3ff;
      background-color: #48a3ff;
      font-size: 24px;
      margin-top: 29px;
      margin-bottom: 20px;
      font-weight: bold;
      text-align: center;
      line-height: 51px;
    `,
    btnText: styled.Text`
      font-weight: bold;
      text-align: center;
      line-height: 51px;
      color: #fff;
      font-size: 24px;
    `
  };

  const createButtonHandler = async () => {
    try {
      if (weekInfo[weekInfo.length - 1].is_tested) {
        const name = moment().format("YYYYMMDD");
        const params = {
          userId: userName,
          body: {}
        };
        const result = await API.daily.makeDailyTest(params);
        const link = result.data.link;
        navigation.navigate("afterLogin", {
          screen: "Daily",
          params: {
            screen: "DailyLearningPage2",
            params: {
              link: link,
              name: name,
              length: 7
            }
          }
        });
      } else if (weekInfo[weekInfo.length - 1].is_graded) {
        alert("이미 채점을 완료했습니다.");
      } else {
        navigation.navigate("LoadingPage1", {
          type: 1
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const backHandler = () => {
    navigation.navigate("Home", { screen: "DailyLearningPage0" });
  };

  const solveNowHandler = async (name, length) => {
    const token = await AsyncStorage.getItem("@userToken");
    const deCode = jwt_decode(token);
    const params = {
      userId: deCode["cognito:username"]
    };
    try {
      const { data } = await API.tempSave.getTempData(params);
      Alert.alert(
        "바로풀기",
        `${moment(data["created_at"]).format("MM월 DD일에 풀던")} ${
          ["", "매일학습", "약점학습", "문항분석"][Number(data.testType)]
        } ${data.testName}이 있습니다.
        `,
        [
          {
            text: "이어풀기",
            onPress: async () => {
              await AsyncStorage.setItem("@timeData", data.timeData);
              await AsyncStorage.setItem("@drawData", data.drawData);
              await AsyncStorage.setItem("@answerList", data.answerData);
              await API.tempSave.clearTempData(params);
              navigation.navigate("DirectSolveStack", {
                screen: "DirectSolvePage",
                params: {
                  testType: 1,
                  testName: data.testName,
                  length: JSON.parse(data.answerData).length,
                  number: Number(data.number)
                }
              });
            }
          },
          {
            text: "선택한 시험지 풀기",
            onPress: async () => {
              Alert.alert(
                "기존 시험 정보 삭제",
                `${moment(data["created_at"]).format("MM월 DD일에 풀던")} ${
                  ["", "매일학습", "약점학습", "문항분석"][
                    Number(data.testType)
                  ]
                } ${data.testName}정보가 삭제됩니다.
                `,
                [
                  { text: "취소", onPress: () => {} },
                  {
                    text: "선택한 시험지 풀기",
                    onPress: async () => {
                      const alpha = new Array(length).fill({
                        second: 0,
                        minute: 0
                      });
                      await AsyncStorage.setItem(
                        "@timeData",
                        JSON.stringify(alpha)
                      );
                      await AsyncStorage.setItem(
                        "@answerList",
                        JSON.stringify(new Array(length).fill(0))
                      );
                      await AsyncStorage.setItem(
                        "@drawData",
                        JSON.stringify(new Array(length).fill([]))
                      );
                      await API.tempSave.clearTempData(params);
                      navigation.navigate("DirectSolveStack", {
                        screen: "DirectSolvePage",
                        params: {
                          testType: 1,
                          testName: name,
                          length: length,
                          number: 0
                        }
                      });
                    }
                  }
                ]
              );
            }
          }
        ],
        { cancelable: false }
      );
    } catch (err) {
      if (err.response.data.msg === "noTestFind") {
        const alpha = new Array(length).fill({ second: 0, minute: 0 });
        await AsyncStorage.setItem("@timeData", JSON.stringify(alpha));
        await AsyncStorage.setItem(
          "@answerList",
          JSON.stringify(new Array(length).fill(0))
        );
        await AsyncStorage.setItem(
          "@drawData",
          JSON.stringify(new Array(length).fill([]))
        );
        await API.tempSave.clearTempData(params);
        navigation.navigate("DirectSolveStack", {
          screen: "DirectSolvePage",
          params: {
            testType: 1,
            testName: name,
            length: length,
            number: 0
          }
        });
      }
    } finally {
    }
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
              height: 0
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5
          }}
        >
          <Header
            HeaderTitle="매일학습"
            detail="오늘의 추천 문항을 받아보세요."
            backHandler={backHandler}
          ></Header>
          <GlobalStyled.ViewCol
            justifyContent="flex-start"
            style={{
              flex: 1,
              backgroundColor: "white",
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10
            }}
          >
            <Table
              navigation={navigation}
              weekInfo={weekInfo}
              tableOffsetStyles={tableOffsetStyles}
              detailOffsetStyles={detailOffsetStyles}
              detailDown={detailDown}
              detailUp={detailUp}
              solveNowHandler={solveNowHandler}
              gradeHandler={gradeHandler}
              type={1}
            />
            <GlobalStyled.ViewCol
              style={{ flex: 1, marginBottom: 30 }}
              justifyContent="flex-end"
              >
              {buttonDisabled ? (
                <Text
                  style={{
                    marginTop: 20,
                    color: "#A4B6D6",
                    fontSize: 16,
                    height: 20,
                    marginBottom:10
                  }}
                >
                  이미 오늘의 문제를 풀었습니다.
                </Text>
              ) : (
                <Text
                  style={{
                    marginTop: 20,
                    color: "#A4B6D6",
                    fontSize: 16,
                    height: 20
                  }}
                ></Text>
              )}
              <GlobalStyled.ViewCol
                width="90%"
                height="50px"
                style={{ backgroundColor: "#6F87FF", borderRadius: 10 }}
                as={TouchableOpacity}
                onPress={createButtonHandler}
                disabled={buttonDisabled}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
                  오늘의 문제풀기
                </Text>
              </GlobalStyled.ViewCol>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Styled.section>
    </Styled.body>
  );
};

export { DailyLearningPage1 };
