import React, { useState } from "react";
import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import GlobalStyled from "../../style/GlobalStyled";
import { Text, TouchableOpacity, Image, TouchableWithoutFeedback } from "react-native";
import * as Linking from "expo-linking";
import TablePositive from "../../images/iconSvg/TablePositive";
import TableNegative from "../../images/iconSvg/TableNegative";
import ColoredChery from "../../images/iconSvg/ColoredChery";
import GrayChery from "../../images/iconSvg/grayChery";
import { G } from "react-native-svg";
const SubTable = (props) => {
  const { weekInfo, tableOffsetStyles, detailOffsetStyles, detailDown, detailUp, solveNowHandler, gradeHandler, type, navigation, dayIndex, tempAttend, attendHandler } = props;

  const [btnSelect, setBtnSelect] = useState(-1);
  const Styled = {
    table: styled.View`
      width: 100%;
      height: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: column;
      background-color: white;
      padding-horizontal: 5%;
      border-radius: 10px;
    `,
    tabletop: styled.View`
      width: 100%;
      height: 30px;
      border-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      background-color: white;
      top: -15px;
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
      width: 23%;
      height: 20px;
      font-size: 15px;
      color: #1b2c49;
      text-align: center;
      line-height: 20px;
    `,
    tabletext1: styled.Text`
      width: 31%;
      height: 20px;
      font-size: 15px;
      color: #1b2c49;
      text-align: center;
      line-height: 20px;
    `,
    tabledate: styled.View`
      width: 100%;
      height: 37px;
      margin-top: 9px;
      border-radius: 10px;
      border: 1px solid #eff2f7;
      flex-direction: row;
    `,
    tableNameCol: styled.View`
      width: 31%;
      height: 100%;
      background-color: #94a6ff;
      border-radius: 5px;
      display: flex;
      text-align: center;
      line-height: 30px;
      justify-content: center;
      align-items: center;
    `,
    tabledateicon: styled.View`
      width: 23%;
      height: 100%;
      display: flex;
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
    `,
  };
  return (
    <Styled.table>
      <GlobalStyled.ViewCol height="30px"></GlobalStyled.ViewCol>
      {weekInfo.map((v, idx) => {
        return (
          <GlobalStyled.ViewRow
            height="40px"
            style={[

              tableOffsetStyles[idx],
              {
                marginBottom: 6,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              },
            ]}
            as={Animated.View}
          >
            <Styled.tabledate key={idx}>
              <GlobalStyled.ViewRow
                as={Animated.View}
                width="100%"
                height="35px"
                style={[
                  {
                    position: "absolute",
                  },
                  detailOffsetStyles[idx],
                ]}
              >
                {v.is_tested === 1 && !v.is_graded ? (
                  <GlobalStyled.ViewRow>
                    <GlobalStyled.ViewCol
                      width="33.3%"
                      style={{
                        backgroundColor: "#6F87FF",
                        borderRightWidth: 1,
                        borderColor: "white",
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                      }}
                      as={TouchableOpacity}
                      onPress={async () => {
                        try {
                          // alert(v.link)
                          Linking.openURL(v.link);
                        } catch (err) {
                          // alert(err);
                        }
                      }}
                    >
                      <Text style={{ color: "white" }}>PDF 다운로드</Text>
                    </GlobalStyled.ViewCol>
                    <GlobalStyled.ViewCol
                      as={TouchableOpacity}
                      onPress={() => {
                        solveNowHandler(v.name ? v.name : "2021" + v.date.replace(" / ", ""), v.length);
                      }}
                      width="33.3%"
                      style={{
                        backgroundColor: "#6F87FF",
                        borderHorizontal: 1,
                        borderColor: "white",
                      }}
                    >
                      <Text style={{ color: "white" }}>바로 풀기</Text>
                    </GlobalStyled.ViewCol>
                    <GlobalStyled.ViewCol
                      as={TouchableOpacity}
                      onPress={() => {
                        gradeHandler(v.name ? v.name : "2021" + v.date.replace(" / ", ""), v.length);
                      }}
                      width="33.3%"
                      style={{
                        backgroundColor: "#6F87FF",
                        borderLeftWidth: 1,
                        borderColor: "white",
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      }}
                    >
                      <Text style={{ color: "white" }}>채점 하기</Text>
                    </GlobalStyled.ViewCol>
                  </GlobalStyled.ViewRow>
                ) : v.is_tested !== 0 ? (
                  <GlobalStyled.ViewRow>
                    <GlobalStyled.ViewCol
                      as={TouchableOpacity}
                      onPress={() => {
                        try {
                          detailDown();
                        } catch (err) {
                          console.log(err);
                        }
                        navigation.navigate("AfterLoginGradeSolve", {
                          screen: "GradeStack",
                          params: {
                            screen: "GradePage3",
                            params: {
                              testName: v.name ? v.name : "2021" + v.date.replace(" / ", ""),
                              testType: 3,
                              type: "done",
                            },
                          },
                        });
                      }}
                      width="100%"
                      style={{
                        backgroundColor: "#6F87FF",
                        borderLeftWidth: 1,
                        borderColor: "white",
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: "white" }}>상세 정보 ></Text>
                    </GlobalStyled.ViewCol>
                  </GlobalStyled.ViewRow>
                ) : (
                  <GlobalStyled.ViewRow>
                    <GlobalStyled.ViewCol
                      // as={TouchableOpacity}
                      onPress={() => {
                        try {
                          detailDown();
                        } catch (err) {
                          console.log(err);
                        }
                        navigation.navigate("AfterLoginGradeSolve", {
                          screen: "GradeStack",
                          params: {
                            screen: "GradePage3",
                            params: {
                              testName: v.name ? v.name : "2021" + v.date.replace(" / ", ""),
                              testType: type,
                              type: "done",
                            },
                          },
                        });
                      }}
                      width="100%"
                      style={{
                        backgroundColor: "#6F87FF",
                        borderLeftWidth: 1,
                        borderColor: "white",
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: "white" }}>시험지를 생성하지 않았습니다.</Text>
                    </GlobalStyled.ViewCol>
                  </GlobalStyled.ViewRow>
                )}
              </GlobalStyled.ViewRow>
              <GlobalStyled.ViewRow
                as={TouchableOpacity}
                onPress={() => {
                  detailUp(idx);
                }}
                // disabled={v.is_tested !== 1}
                style={{ backgroundColor: "white", borderRadius: 5,}}
              >
                <Styled.tableNameCol style={{ backgroundColor: idx === dayIndex ? "#6476D0" : "#F2F3F7" }}>
                  <Text style={{ color: idx !== dayIndex ? "#6476D0" : "#F2F3F7" }}>
                    {v.name ? v.name : v.date}
                  </Text>
                </Styled.tableNameCol>
                <Styled.tabledateicon>{v.is_tested === 1 ? <TablePositive size={20} /> : <TableNegative size={20} />}</Styled.tabledateicon>
                <Styled.tabledateicon>{v.is_graded === 1  ? <TablePositive size={20} /> : <TableNegative size={20} />}</Styled.tabledateicon>
                <Styled.tabledateicon>
                  <Text>{v.result}</Text>
                </Styled.tabledateicon>
              </GlobalStyled.ViewRow>
            </Styled.tabledate>
          </GlobalStyled.ViewRow>
        );
      })}
      <GlobalStyled.ViewRow height="50px"></GlobalStyled.ViewRow>
      {/* <GlobalStyled.ViewRow height="46px"></GlobalStyled.ViewRow> */}
      <Styled.tabletop
        style={{
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
        <Styled.tablebox>
          <Styled.tabletext1>{type === 1 ? "날짜" : "시험지명"}</Styled.tabletext1>
          <Styled.tabletext>생성</Styled.tabletext>
          <Styled.tabletext>채점</Styled.tabletext>
          <Styled.tabletext>결과</Styled.tabletext>
        </Styled.tablebox>
      </Styled.tabletop>
    </Styled.table>
  );
};

export default SubTable;
