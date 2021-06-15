import GlobalStyled from "../../style/GlobalStyled";
import { Text, TouchableOpacity, ScrollView, Modal } from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import useAPI from "../../hooks/useAPI";
import ShowAll from "../../images/iconSvg/ShowAll";
import _ from "lodash";
import SavedProblemModal from "../../components/Organisms/SaveProblemModal";
import ShowAllModal from "../../components/Organisms/ShowAllModal";
import codeParser from "../../function/codeParser";
import SubTable from "../../components/Organisms/subTable";
import { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useFocusEffect } from "@react-navigation/native";
import Bracket from "../../images/iconSvg/Bracket";
import { default as PartialModal } from "react-native-modal";

const HomeMake = (props) => {
  const { userName, navigation, state } = props;
  const [select, setSelect] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [problemInfo, setProblemInfo] = useState({ daily: [], weak: [], search: [] });
  const [saved, setSaved] = useState([[], [], []]);
  const [finalProblemInfo, setFinalProblemInfo] = useState([]);
  const [saveModal, setSaveModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [testList, setTestList] = useState([]);
  const [API] = useCallback(useAPI(), []);
  const [weekInfo, setWeekInfo] = useState([
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
    { date: "1", is_tested: 1, is_graded: 0, result: "!2" },
  ]);
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
  const tableOpacity1 = useSharedValue(0, false);
  const tableOpacity2 = useSharedValue(0, false);
  const tableOpacity3 = useSharedValue(0, false);
  const tableOpacity4 = useSharedValue(0, false);
  const tableOpacity5 = useSharedValue(0, false);
  const tableOpacity6 = useSharedValue(0, false);
  const tableOpacity7 = useSharedValue(0, false);
  const tableOffsetStyles = [
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset1.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset2.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset3.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset4.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset5.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset6.value }] };
    }),
    useAnimatedStyle(() => {
      return { transform: [{ translateY: tableOffset7.value }] };
    }),
  ];
  const detailOffsetStyles = [
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset1.value }],
        opacity: tableOpacity1.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset2.value }],
        opacity: tableOpacity2.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset3.value }],
        opacity: tableOpacity3.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset4.value }],
        opacity: tableOpacity4.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset5.value }],
        opacity: tableOpacity5.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset6.value }],
        opacity: tableOpacity6.value,
      };
    }),
    useAnimatedStyle(() => {
      return {
        transform: [{ translateY: detailOffset7.value }],
        opacity: tableOpacity7.value,
      };
    }),
  ];

  const detailDown = () => {
    detailOffset1.value = withTiming(0);
    tableOffset1.value = withTiming(0);
    detailOffset2.value = withTiming(0);
    tableOffset2.value = withTiming(0);
    detailOffset3.value = withTiming(0);
    tableOffset3.value = withTiming(0);
    detailOffset4.value = withTiming(0);
    tableOffset4.value = withTiming(0);
    detailOffset5.value = withTiming(0);
    tableOffset5.value = withTiming(0);
    detailOffset6.value = withTiming(0);
    tableOffset6.value = withTiming(0);
    detailOffset7.value = withTiming(0);
    tableOffset7.value = withTiming(0);
    tableOpacity1.value = withTiming(0);
    tableOpacity2.value = withTiming(0);
    tableOpacity3.value = withTiming(0);
    tableOpacity4.value = withTiming(0);
    tableOpacity5.value = withTiming(0);
    tableOpacity6.value = withTiming(0);
    tableOpacity7.value = withTiming(0);
  };
  useEffect(() => {
    detailDown();
  }, [state]);
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
    tableOpacity1.value = withTiming(i === 0 ? 1 : 0, { duration: 10 });
    tableOpacity2.value = withTiming(i === 1 ? 1 : 0, { duration: 10 });
    tableOpacity3.value = withTiming(i === 2 ? 1 : 0, { duration: 10 });
    tableOpacity4.value = withTiming(i === 3 ? 1 : 0, { duration: 10 });
    tableOpacity5.value = withTiming(i === 4 ? 1 : 0, { duration: 10 });
    tableOpacity6.value = withTiming(i === 5 ? 1 : 0, { duration: 10 });
    tableOpacity7.value = withTiming(i === 6 ? 1 : 0, { duration: 10 });
  };
  const solveNowHandler = async (name, length) => {
    const params = {
      userId: userName,
      body: { testName: name },
    };
    try {
      const { data } = await API.tempSave.getTempData(params);
      await AsyncStorage.setItem("@answerList", data.answerData);
      await API.tempSave.clearTempData(params);
      navigation.navigate("DirectSolveStack", {
        screen: "DirectSolvePage",
        params: {
          testType: 3,
          testName: data.testName,
          length: JSON.parse(data.answerData).length,
          number: Number(data.number),
        },
      });
    } catch (err) {
      alert(err);
      if (err.response.data.msg === "noTestFind") {
        const alpha = new Array(length).fill({ second: 0, minute: 0 });
        await AsyncStorage.setItem("@timeData", JSON.stringify(alpha));
        await AsyncStorage.setItem("@answerList", JSON.stringify(new Array(length).fill(0)));
        await AsyncStorage.setItem("@drawData", JSON.stringify(new Array(length).fill([])));
        await API.tempSave.clearTempData(params);
        navigation.navigate("DirectSolveStack", {
          screen: "DirectSolvePage",
          params: {
            testType: 3,
            testName: name,
            length: length,
            number: 0,
          },
        });
      }
    } finally {
    }
  };
  const gradeHandler = (name, length) => {
    navigation.navigate("GradeStack", {
      screen: "GradePage2",
      params: {
        testType: 3,
        testName: name,
        length: length,
      },
    });
  };
  const appendHandler = (i, type) => {
    var temp = [...saved[type]];
    if (temp.includes(i)) {
      temp.splice(temp.indexOf(i), 1);
    } else {
      temp.push(i);
    }
    var temp2 = [...saved];
    temp2[type] = temp;
    setSaved(temp2);
  };
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      try {
        const params = {
          userId: userName,
        };
        const { data } = await API.weak.getWrongProblem(params);
        const params2 = {
          userId: userName,
          type: 3,
          gradeType: 2,
          body: {},
        };
        const { data: searchTest } = await API.weak.getTestName(params2);

        setTestList(
          searchTest.testlist.map((v) => {
            return v.value;
          })
        );
        setProblemInfo(data);
      } catch (err) {
        console.log(err);
      } finally {
      }
    };
    useEffectAsyncFunction();
  }, []);
  useFocusEffect(
    useCallback(() => {
      const useCallbackAsyncFunction = async () => {
        try {
          const token = await AsyncStorage.getItem("@userToken");
          const deCode = jwt_decode(token);
          const params = {
            userId: deCode["cognito:username"],
            body: {},
          };
          const { data } = await API.search.getSearchTestInfo(params);
          setWeekInfo(data.testlist);
        } catch (err) {
          console.log(err);
        } finally {
        }
      };
      useCallbackAsyncFunction();
      return () => {
        setSaved([[], [], []]);
      };
    }, [])
  );

  const saveHandler = () => {
    var temp = [];
    for (var i = 0; i < 3; i++) {
      for (var idx of saved[i]) {
        temp.push(Object.values(problemInfo)[i][idx]);
      }
    }
    setFinalProblemInfo(temp);
    setSaveModal(true);
  };
  return (
    <GlobalStyled.ViewCol width={wp(100)} height="100%" style={{ justifyContent: "flex-start" }}>
      <Modal visible={modalVisible}>
        <ShowAllModal select={select} problemInfo={problemInfo} saved={saved} setModalVisible={setModalVisible} appendHandler={appendHandler} />
      </Modal>
      <PartialModal isVisible={saveModal}>
        <SavedProblemModal finalProblemInfo={finalProblemInfo} setSaveModal={setSaveModal} navigation={navigation} userName={userName} testList={testList} />
      </PartialModal>
      <ScrollView
        contentContainerStyle={{
          width: wp(100),
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
        }}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        bounces={false}
        showsVerticalScrollIndicator= {false}
      >
        <Text style={{ fontFamily: "NotoSansCJKkr-Bold", width: "100%", textAlign: "left", fontSize: 20, marginTop: 15, marginLeft: 20 }}>DataBase</Text>
        <GlobalStyled.ViewRow height={50} justifyContent="flex-start" width="95%" style={{ borderTopRightRadius: 5, borderTopLeftRadius: 5, marginVertical: 20 }}>
          <GlobalStyled.ViewCol
            width={wp(27)}
            height="100%"
            style={{ backgroundColor: select === 0 ? "#5471FF" : "white", borderRadius: 10, marginRight: 20 }}
            as={TouchableOpacity}
            onPress={() => {
              setSelect(0);
            }}
          >
            <Text style={{ color: select === 0 ? "white" : "#5471FF", fontFamily: "NotoSansKR-Bold" }}>오늘의문항</Text>
            <GlobalStyled.ViewCol style={{ position: "absolute", width: 30, height: 30, backgroundColor: "#A687FF", borderRadius: 15, top: -15, right: -15 }}>
              <Text style={{ color: "white", fontFamily: "NotoSansKR-Bold" }}>{saved[0].length}</Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol
            width={wp(27)}
            height="100%"
            style={{ backgroundColor: select === 1 ? "#5471FF" : "white", borderRadius: 10, marginRight: 20 }}
            as={TouchableOpacity}
            onPress={() => {
              setSelect(1);
            }}
          >
            <Text style={{ color: select === 1 ? "white" : "#5471FF", fontFamily: "NotoSansKR-Bold" }}>약점추천</Text>
            <GlobalStyled.ViewCol style={{ position: "absolute", width: 30, height: 30, backgroundColor: "#A687FF", borderRadius: 15, top: -15, right: -15 }}>
              <Text style={{ color: "white", fontFamily: "NotoSansKR-Bold" }}>{saved[1].length}</Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol
            width={wp(27)}
            height="100%"
            style={{ backgroundColor: select === 2 ? "#5471FF" : "white", borderRadius: 10, marginRight: 20 }}
            as={TouchableOpacity}
            onPress={() => {
              setSelect(2);
            }}
          >
            <Text style={{ color: select === 2 ? "white" : "#5471FF", fontFamily: "NotoSansKR-Bold" }}>AI시험지</Text>
            <GlobalStyled.ViewCol style={{ position: "absolute", width: 30, height: 30, backgroundColor: "#A687FF", borderRadius: 15, top: -15, right: -15 }}>
              <Text style={{ color: "white", fontFamily: "NotoSansKR-Bold" }}>{saved[2].length}</Text>
            </GlobalStyled.ViewCol>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewRow>
        <GlobalStyled.ViewCol height={40 + wp(62)} width="95%" style={{ borderBottomRightRadius: 5, borderBottomLeftRadius: 5, overflow: "hidden", backgroundColor: "#F2F2F2", justifyContent: "flex-start" }}>
          <GlobalStyled.ViewRow height="40px" style={{ backgroundColor: "white", borderTopRightRadius: 10, borderTopLeftRadius: 10 }} justifyContent="flex-start">
            <GlobalStyled.ViewRow
              style={{ marginLeft: 10, justifyContent: "flex-start" }}
              as={TouchableOpacity}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <ShowAll size={20}></ShowAll>
              <Text style={{ fontSize: 15, fontFamily: "NotoSansKR-Bold", color: "#1B2C49", marginLeft: 10 }}>All</Text>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow height={wp(62)} style={{ backgroundColor: "white" }}>
            <ScrollView horizontal style={{ height: wp(62), width: wp(87), backgroundColor: "white", marginHorizontal: 10 }} contentContainerStyle={{ flexGrow: 1, flexDirection: "column", backgroundColor: "white", flexWrap: "wrap" }} showsVerticalScrollIndicator= {false}>
              {Object.values(problemInfo)[select] &&
                Object.values(problemInfo)[select].map((v, idx) => {
                  return (
                    <GlobalStyled.ViewCol
                      as={TouchableOpacity}
                      onPress={() => {
                        appendHandler(idx, select);
                      }}
                      width={wp(28)}
                      height={wp(28)}
                      style={{
                        backgroundColor: "white",
                        marginHorizontal: wp(1),
                        marginTop: wp(2),
                        borderWidth: 1,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 0,
                          height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,
                        elevation: 3,
                        borderColor: saved[select].includes(idx) ? "#6F87FF" : "#C8D3E6",
                      }}
                    >
                      <GlobalStyled.ViewCol style={{ position: "absolute", top: 7, right: 7, width: 14, height: 14, borderRadius: 7, backgroundColor: saved[select].includes(idx) ? "#6F87FF" : "#797979" }}>
                        <Text style={{ fontSize: 9 }}>{saved[select].includes(idx) ? String(_.flatten([...saved].slice(0, select)).length + saved[select].indexOf(idx) + 1) : ""}</Text>
                      </GlobalStyled.ViewCol>
                      <Text style={{ textAlign: "center", width: "95%", marginTop: 5 }}>{codeParser(v.code)}</Text>
                    </GlobalStyled.ViewCol>
                  );
                })}
            </ScrollView>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow height="20px" style={{ backgroundColor: "white", borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }} justifyContent="flex-start"></GlobalStyled.ViewRow>
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol height="auto" width="95%" style={{ borderRadius: 10, overflow: "hidden", backgroundColor: "white", justifyContent: "flex-start", marginTop: 10 }}>
          <GlobalStyled.ViewRow height="40px" style={{ backgroundColor: "white", borderTopRightRadius: 10, borderTopLeftRadius: 10 }} justifyContent="flex-start">
            <GlobalStyled.ViewRow style={{ marginLeft: 10, justifyContent: "space-between" }}>
              <Text style={{ fontSize: 15, fontFamily: "NotoSansKR-Bold", color: "#1B2C49", marginLeft: 10 }}>시험지 생성이력</Text>
              <TouchableOpacity
                onPress={() => {
                  setShowDetail(!showDetail);
                }}
                style={{ marginRight: 30 }}
              >
                <Bracket color="black" size={20} style={{ transform: [{ rotate: showDetail ? "90deg" : "270deg" }] }} />
              </TouchableOpacity>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewCol height="15px"></GlobalStyled.ViewCol>
          {showDetail && <SubTable weekInfo={weekInfo} tableOffsetStyles={tableOffsetStyles} detailOffsetStyles={detailOffsetStyles} detailDown={detailDown} detailUp={detailUp} solveNowHandler={solveNowHandler} gradeHandler={gradeHandler} navigation={navigation}></SubTable>}
        </GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol
          height="50px"
          style={{
            backgroundColor: "#F2F2F2",
          }}
        ></GlobalStyled.ViewCol>
      </ScrollView>
      <GlobalStyled.ViewRow
        height="45px"
        width="240px"
        justifyContent="space-around"
        style={{
          position: "absolute",
          bottom: 10,
        }}
      >
        <GlobalStyled.ViewCol
          height="45px"
          width="240px"
          style={{
            backgroundColor: "#6F87FF",
            borderRadius: 25,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.52,
            shadowRadius: 3.84,
            elevation: 15,
          }}
          as={TouchableOpacity}
          onPress={saveHandler}
        >
          <Text
            style={{
              color: "white",
              fontSize: 24,
              fontFamily: "NotoSansKR-Bold",
            }}
          >
            시험지 만들기
          </Text>
        </GlobalStyled.ViewCol>
      </GlobalStyled.ViewRow>
    </GlobalStyled.ViewCol>
  );
};

export default HomeMake;
