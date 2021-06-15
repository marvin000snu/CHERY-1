// import React, { useRef, useState, useCallback } from "react";
// import styled from "styled-components";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// import Constants from "expo-constants";
// import { FlatList, View, Text, StyleSheet, Animated, TouchableOpacity, Image, ScrollView, RefreshControl, Modal } from "react-native";
// import Bracket from "../../images/iconSvg/Bracket";
// import FriendAdd from "../../components/Organisms/friendAdd";
// import Feed from "../../components/Atoms/Feed";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import jwt_decode from "jwt-decode";
// import useAPI from "../../hooks/useAPI";
// import GlobalStyled from "../../style/GlobalStyled";
// import { FriendSend } from "../../components/Organisms/FriendSend";
// import { useFocusEffect } from "@react-navigation/native";
// import MainIcon from "../../images/iconSvg/MainIcon";
// import { RFValue } from "react-native-responsive-fontsize";
// import FriendFeed from "../../images/iconSvg/FriendFeed";
// import FriendList from "../../images/iconSvg/Friend";
// import FriendRanking from "../../images/iconSvg/FiendRanking";
// import MSG from "../../images/iconSvg/MSG";
// import Setting from "../../page/myPage/Setting"
// import AddFriend from "../../images/iconSvg/AddFriend"
// const Styled = {
//   body: styled.View`
//     width: ${wp(100)}px;
//     height: ${hp(100) - 70}px;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     flex-flow: column;
//     background-color: green;
//   `,
//   section: styled.View`
//     height: ${hp(100) - 70}px;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-flow: column;
//     background-color: brown;
//   `,
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//   },
//   image: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "flex-start",
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000a0",
//   },
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
//   scrollView: {
//     backgroundColor: "pink",
//   },
//   container: {
//     flex: 1,
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// const Friend = ({ navigation }) => {
//   const [refreshing, setRefreshing] = useState(false);
//   const [API] = useCallback(useAPI(), []);
//   const [select, setSelect] = useState(1);
//   const [cheryLevel, setCheryLevel] = useState(0);
//   const [token, setToken] = useState();
//   const [icon, setIcon] = useState(-1);
//   const [sendData, setSendData] = useState([{ name: "유동훈", info: "OO고등학교 O학년", icon: 1 }]);
//   const [respondData, setRespondData] = useState([{ name: "유동훈", info: "OO고등학교 O학년", icon: 1 }]);
//   const [benchmark, setBenchmark] = useState(1);
//   const [infos, setInfos] = useState([]);
//   const [feedInfos, setFeedInfos] = useState([]);
//   const [rankData, setRankData] = useState([]);
//   const [realData, setRealData] = useState([]);
//   const [userName, setUserName] = useState("");
//   const [sendId, setSendId] = useState("");
//   const [settingModal, setSettingModal] = useState(false);
//   const offSet = useRef(new Animated.Value(-500)).current;
//   const offSetSend = useRef(new Animated.Value(wp(100))).current;
//   const barWidth = -(wp(100) * 0.9 - 90) * 0.5;
//   const barFriend = useRef(new Animated.Value(barWidth)).current;
//   const barMine = useRef(new Animated.Value(barWidth)).current;
//   const onRefresh = async () => {
//     try {
//       const params = {
//         userId: userName,
//       };
//       const { data } = await API.friend.makeFeed(params);
//       setFeedInfos(data.feedList);
//     } catch (err) {
//       console.log(err.response);
//     }
//   };
//   const barFriendMove = (i) => {
//     Animated.spring(barFriend, {
//       toValue: -(wp(100) * 0.9 - 90) * (1 - i),
//       useNativeDriver: true,
//     }).start();
//   };
//   const barMineMove = (i) => {
//     Animated.spring(barMine, {
//       toValue: -(wp(100) * 0.9 - 90) * (1 - i),
//       useNativeDriver: true,
//     }).start();
//   };
//   const left = async () => {
//     const params = {
//       userId: token["cognito:username"],
//       body: {},
//     };
//     const sendList = await API.friend.getSendList(params);
//     const receiveList = await API.friend.getReceiveList(params);
//     setSendData(
//       sendList.data.result.map((v) => {
//         return { name: v.id, info: "OO고등학교 O학년", icon: 1, dbId: v.dbId };
//       })
//     );
//     setRespondData(
//       receiveList.data.result.map((v) => {
//         return { name: v.name, info: v.id, icon: 1, dbId: v.dbId };
//       })
//     );
//     Animated.spring(offSetSend, {
//       toValue: 0,
//       useNativeDriver: true,
//     }).start();
//   };
//   const right = async () => {
//     try {
//       const params = {
//         userId: token["cognito:username"],
//         body: {},
//       };
//       const { data } = await API.friend.getFriendList(params);
//       setDATA(
//         data.friendList.map((v) => {
//           return {
//             name: v.name,
//             info: "OO고등학교 O학년",
//             icon: v.icon,
//             daily: v.daily,
//             attend: v.attend,
//             level: v.level,
//           };
//         })
//       );
//       Animated.spring(offSetSend, {
//         toValue: wp(100),
//         useNativeDriver: true,
//       }).start();
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const up = async () => {
//     try {
//       const params = {
//         userId: token["cognito:username"],
//         body: {},
//       };
//       const { data } = await API.friend.getFriendList(params);
//       setDATA(
//         data.friendList.map((v) => {
//           return {
//             name: v.name,
//             info: "OO고등학교 O학년",
//             icon: v.icon,
//             daily: v.daily,
//             attend: v.attend,
//             level: v.level,
//           };
//         })
//       );
//       Animated.spring(offSet, {
//         toValue: -500,
//         useNativeDriver: true,
//       }).start();
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const down = () => {
//     Animated.spring(offSet, {
//       toValue: -50,
//       useNativeDriver: true,
//     }).start();
//   };
//   const [DATA, setDATA] = useState([]);
//   const renderItem = ({ item, index }) => <Item item={item} idx={index} />;
//   const renderRankItem = ({ item, index }) => <RankItem item={item} idx={index} />;
//   const moveToHomeHandler = () => {
//     navigation.navigate("afterLogin", {
//       screen: "Home",
//       params: {
//         screen: "DailyLearningPage0",
//       },
//     });
//   };
//   const RankItem = ({ item, idx }) => (
//     <View style={{ height: 70, backgroundColor: "#F0F2FA", alignItems: "center" }}>
//       <View
//         style={{
//           marginTop: 8,
//           height: 62,
//           width: wp(95),
//           flexDirection: "row",
//           backgroundColor: "white",
//           borderRadius: 10,
//         }}
//       >
//         <GlobalStyled.ViewRow
//           style={{
//             width: 40,
//             backgroundColor: idx === 0 ? "#FEDC54" : idx === 1 ? "#CFD0D0" : idx === 2 ? "#F4AA6B" : "white",
//             borderTopLeftRadius: 10,
//             borderBottomLeftRadius: 10,
//           }}
//         >
//           <Text
//             style={{
//               color: "#1B2C49",
//               fontSize: 20,
//               backgroundColor: idx === 0 ? "#FEDC54" : idx === 1 ? "#CFD0D0" : idx === 2 ? "#F4AA6B" : "white",
//             }}
//           >
//             {idx + 1}
//           </Text>
//         </GlobalStyled.ViewRow>
//         <View
//           style={{
//             minWidth: 60,
//             width: "20%",
//             height: "100%",
//             justifyContent: "center",
//             alignItems: "center",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <MainIcon size={45} type={item.icon} />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             height: "100%",
//             flexDirection: "row",
//             justifyContent: "flex-start",
//           }}
//         >
//           <GlobalStyled.ViewRow justifyContent="flex-start" style={{ width: "auto", height: "100%" }}>
//             {item.level === 0 ? <Image source={require("../../images/icon/cheryLevel0.png")}></Image> : item.level === 1 ? <Image source={require("../../images/icon/cheryLevel1.png")}></Image> : item.level === 2 ? <Image source={require("../../images/icon/cheryLevel2.png")}></Image> : item.level === 3 ? <Image source={require("../../images/icon/cheryLevel3.png")}></Image> : <Image source={require("../../images/icon/cheryLevel4.png")}></Image>}
//             <Text
//               style={{
//                 fontSize: 15,
//                 color: "#1B2C49",
//                 fontWeight: "bold",
//                 marginRight: 10,
//                 marginLeft: 10,
//               }}
//             >
//               {item.name}
//             </Text>
//           </GlobalStyled.ViewRow>
//           <GlobalStyled.ViewRow style={{ width: "auto", height: "100%" }} justifyContent="flex-start">
//             <GlobalStyled.ViewRow
//               height="29"
//               style={{
//                 width: "auto",
//                 backgroundColor: "#F0F2FA",
//                 borderRadius: 10,
//                 marginRight: 10,
//               }}
//             >
//               <Text
//                 style={{
//                   color: "#1B2C49",
//                   marginHorizontal: 10,
//                   fontSize: 15,
//                   fontWeight: "bold",
//                 }}
//               >
//                 {[`체리 ${item.cheryNum}개`, `${item.solveNum} 문제`, `${item.time} 시간`][benchmark - 1]}
//               </Text>
//             </GlobalStyled.ViewRow>
//           </GlobalStyled.ViewRow>
//         </View>
//       </View>
//     </View>
//   );

//   const Item = ({ item, idx }) => (
//     <View
//       style={{
//         width: wp(100),
//         backgroundColor: "#F0F2FA",
//         height: 70,
//         alignItems: "center",
//       }}
//     >
//       <View
//         style={{
//           marginTop: 8,
//           height: 62,
//           width: wp(95),
//           flexDirection: "row",
//           backgroundColor: "white",
//           borderRadius: 10,
//         }}
//       >
//         <View
//           style={{
//             minWidth: 60,
//             width: "20%",
//             height: "100%",
//             justifyContent: "center",
//             alignItems: "center",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <MainIcon type={item.icon} size={45} />
//         </View>
//         <View
//           style={{
//             flex: 1,
//             height: "100%",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <GlobalStyled.ViewCol>
//             <GlobalStyled.ViewRow justifyContent="flex-start" style={{ width: "100%", height: "50%", alignItems: "center" }}>
//               {item.level === 0 ? <Image source={require("../../images/icon/cheryLevel0.png")}></Image> : item.level === 1 ? <Image source={require("../../images/icon/cheryLevel1.png")}></Image> : item.level === 2 ? <Image source={require("../../images/icon/cheryLevel2.png")}></Image> : item.level === 3 ? <Image source={require("../../images/icon/cheryLevel3.png")}></Image> : <Image source={require("../../images/icon/cheryLevel4.png")}></Image>}
//               <Text
//                 style={{
//                   fontSize: 15,
//                   color: "#1B2C49",
//                   fontWeight: "bold",
//                   marginRight: 10,
//                   marginLeft: 10,
//                 }}
//               >
//                 {item.name}
//               </Text>
//             </GlobalStyled.ViewRow>
//             <GlobalStyled.ViewRow height="50%">
//               <Text style={{ width: "100%" }}>{item.msg}</Text>
//             </GlobalStyled.ViewRow>
//           </GlobalStyled.ViewCol>
//         </View>
//       </View>
//     </View>
//   );
//   let cheryIcon = null;
//   let text = null;
//   if (cheryLevel === 0) {
//     cheryIcon = <Image source={require("../../images/icon/cheryLevel0.png")}></Image>;
//     text = "체리 씨앗";
//   } else if (cheryLevel === 1) {
//     cheryIcon = <Image source={require("../../images/icon/cheryLevel1.png")}></Image>;
//     text = "체리 새싹";
//   } else if (cheryLevel === 2) {
//     cheryIcon = <Image source={require("../../images/icon/cheryLevel2.png")}></Image>;
//     text = "체리 꽃";
//   } else if (cheryLevel === 3) {
//     cheryIcon = <Image source={require("../../images/icon/cheryLevel3.png")}></Image>;
//     text = "체리 열매";
//   } else if (cheryLevel === 4) {
//     cheryIcon = <Image source={require("../../images/icon/cheryLevel4.png")}></Image>;
//     text = "체리 나무";
//   }
//   const changeBenchMarHandler = (i) => {
//     barFriendMove(infos[i - 1].friend);
//     barMineMove(infos[i - 1].my);
//     setBenchmark(i);
//   };
//   useFocusEffect(
//     useCallback(() => {
//       const callBackFunction = async () => {
//         try {
//           const token = await AsyncStorage.getItem("@userToken");
//           const deCode = jwt_decode(token);
//           var tempInfos = [];
//           setToken(deCode);
//           // const token = await AsyncStorage.getItem("@userToken");
//           const params = {
//             userId: deCode["cognito:username"],
//             body: {},
//           };
//           setUserName(deCode["cognito:username"]);
//           const { data: iconData } = await API.info.getSettingInfo(params);
//           setIcon(iconData.userInfo.icon);
//           const { data: feed } = await API.friend.makeFeed(params);
//           setFeedInfos(feed.feedList);
//           const { data } = await API.friend.getFriendRankData(params);
//           const { data: friendData } = await API.friend.getFriendList(params);
//           setDATA(
//             friendData.friendList.map((v) => {
//               return {
//                 name: v.name,
//                 icon: v.icon,
//                 daily: v.daily,
//                 attend: v.attend,
//                 msg: v.msg,
//                 level: v.level,
//               };
//             })
//           );

//           const result = await API.info.getCheryLevel(params);
//           setCheryLevel(result.data.level);

//           if (data.cheryNum >= data.avgChery) {
//             if (!isNaN((0.9 * data.avgChery) / data.cheryNum)) {
//               tempInfos[0] = {
//                 friend: (0.9 * data.avgChery) / data.cheryNum,
//                 my: 0.9,
//               };
//             } else {
//               tempInfos[0] = { friend: 0.9, my: 0.9 };
//             }
//           } else {
//             if (data.cheryNum !== 0) {
//               tempInfos[0] = {
//                 friend: 0.9,
//                 my: (0.9 / data.cheryNum) * data.avgChery,
//               };
//             } else {
//               tempInfos[0] = { friend: 0.9, my: 0.9 };
//             }
//           }

//           if (data.solveNum >= data.avgProblem) {
//             if (data.solveNum !== 0) {
//               tempInfos[1] = {
//                 friend: (0.9 * data.avgProblem) / data.solveNum,
//                 my: 0.9,
//               };
//             } else {
//               tempInfos[1] = { friend: 0.9, my: 0.9 };
//             }
//           } else {
//             if (data.avgProblem !== 0) {
//               tempInfos[1] = {
//                 friend: 0.9,
//                 my: (0.9 / data.avgProblem) * data.solveNum,
//               };
//             } else {
//               tempInfos[1] = { friend: 0.9, my: 0.9 };
//             }
//           }
//           tempInfos[2] = { friend: 0.9, my: 0.9 };
//           barFriendMove(tempInfos[0].friend);
//           barMineMove(tempInfos[0].my);
//           setInfos(tempInfos);
//           setRealData(data);
//           setRankData([
//             data.rankData.sort((a, b) => {
//               if (a.cheryNum > b.cheryNum) {
//                 return -1;
//               } else {
//                 return 1;
//               }
//             }),
//             data.rankData.sort((a, b) => {
//               if (a.solveNum > b.solveNum) {
//                 return -1;
//               } else {
//                 return 1;
//               }
//             }),
//             data.rankData.sort((a, b) => {
//               if (a.time > b.time) {
//                 return -1;
//               } else {
//                 return 1;
//               }
//             }),
//           ]);
//         } catch (err) {
//           console.log(err);
//           console.log(err.response.data.msg === "noFriends");
//         } finally {
//         }
//       };
//       callBackFunction();
//       return () => {
//         setSendId("");
//       };
//     }, [select])
//   );
//   const colorArray = ["red", "blue", "green", "gray", "purple", "yellow", "orange", "black"];
//   return (
//     <Styled.body>
//       <Modal visible={settingModal}>
//         <Setting setSettingModal={setSettingModal} navigation={navigation}></Setting>
//       </Modal>
//       <Styled.section>
//         <GlobalStyled.ViewCol height={160 + Constants.statusBarHeight}  style={{ paddingTop: Constants.statusBarHeight, backgroundColor:"#5471FF" }} justifyContent="flex-start">
//           <View
//             style={{
//               height: 60,
//               width: "100%",
//             }}
//           >
//             <View
//               style={{
//                 height: 60,
//                 width: "100%",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 justifyContent: "flex-start",
//               }}
//             >
//               <TouchableOpacity onPress={moveToHomeHandler} style={{ height: 60, width: "30%", justifyContent: "center" }}>
//                 <Bracket color="white" style={{ marginLeft: 10 }} />
//               </TouchableOpacity>
//               <View style={{ height: 60, width: "48%", justifyContent: "center",  }}></View>
//               <TouchableOpacity
//                 style={{
//                   height: 60,
//                   width: "10%",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "row",
//                 }}
//                 onPress={left}
//               >
//                 <MSG size={30} />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={{
//                   height: 60,
//                   width: "10%",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "row",
//                   // marginRight:"10%"
//                 }}
//                 onPress={down}
//               >
//                 <AddFriend size={25} />
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View
//             style={{
//               height: 140,
//               width: "100%",
//               justifyContent: "space-between",
//               flexDirection: "column",
//             }}
//           >
//             <View
//               style={{
//                 height: 65,
//                 marginVertical: 12,
//                 width: "100%",
//                 flexDirection: "row",
//                 justifyContent: "center",
//               }}
//             >
//               <GlobalStyled.ViewCol height="65px" width="65px" style={{ backgroundColor: "white", borderRadius: 33, marginLeft: 27 }} as={TouchableOpacity} onPress={()=>{setSettingModal(true)}}>
//                 <MainIcon type={icon} size={56} style={{}} />
//               </GlobalStyled.ViewCol>
//               <GlobalStyled.ViewRow justifyContent="space-between" style={{ flex: 1 }}>
//                 <GlobalStyled.ViewCol style={{ flex: 1 }}>
//                   <GlobalStyled.ViewRow height="60%">
//                     <Text
//                       style={{
//                         width: "100%",
//                         fontSize: 25,
//                         marginLeft: 20,
//                         textAlign: "left",
//                         fontFamily: "NotoSansKR-Bold",
//                         color: "white",
//                       }}
//                     >
//                       {token ? token["name"] : ""} 님
//                     </Text>
//                   </GlobalStyled.ViewRow>
//                   <GlobalStyled.ViewRow height="40%">
//                     <Text
//                       style={{
//                         width: "100%",
//                         fontSize: 13,
//                         color: "white",
//                         marginLeft: 20,
//                         textAlign: "left",
//                       }}
//                     >
//                       테스터 | {token ? token["custom:school"] : ""}
//                     </Text>
//                   </GlobalStyled.ViewRow>
//                 </GlobalStyled.ViewCol>
//                 <GlobalStyled.ViewCol height="70" width="50%" style={{ marginVertical: 12, marginRight: "5%" }} justifyContent="space-around" alignItems="flex-end">
//                   <GlobalStyled.ViewRow width="90%" height="30">
//                     <GlobalStyled.ViewRow
//                       width="25%"
//                       style={{
//                         backgroundColor: "#F0F2FA",
//                         borderTopLeftRadius: 5,
//                         borderBottomLeftRadius: 5,
//                       }}
//                     >
//                       <Text style={{ color: "#1B2C49", fontSize: 13 }}>등급</Text>
//                     </GlobalStyled.ViewRow>
//                     <GlobalStyled.ViewRow
//                       justifyContent="space-around"
//                       width="75%"
//                       style={{
//                         backgroundColor: "white",
//                         borderTopRightRadius: 5,
//                         borderBottomRightRadius: 5,
//                       }}
//                     >
//                       {cheryIcon}
//                       <Text style={{ color: "#1B2C49", fontSize: 13, marginRight: 10 }}>{text}</Text>
//                     </GlobalStyled.ViewRow>
//                   </GlobalStyled.ViewRow>
//                   <GlobalStyled.ViewRow width="90%" height="30">
//                     <GlobalStyled.ViewRow
//                       width="25%"
//                       style={{
//                         backgroundColor: "#F0F2FA",
//                         borderTopLeftRadius: 5,
//                         borderBottomLeftRadius: 5,
//                       }}
//                     >
//                       <Text style={{ color: "#1B2C49", fontSize: RFValue(13, hp(100)) }}>이용권</Text>
//                     </GlobalStyled.ViewRow>
//                     <GlobalStyled.ViewRow
//                       width="75%"
//                       style={{
//                         backgroundColor: "white",
//                         borderTopRightRadius: 5,
//                         borderBottomRightRadius: 5,
//                       }}
//                     >
//                       <Text style={{ color: "#1B2C49", fontSize: 13 }}>테스터</Text>
//                     </GlobalStyled.ViewRow>
//                   </GlobalStyled.ViewRow>
//                 </GlobalStyled.ViewCol>
//               </GlobalStyled.ViewRow>
//             </View>
//           </View>
//         </GlobalStyled.ViewCol>
//         <GlobalStyled.ViewRow
//           height="40"
//           style={{
//             backgroundColor: "white",
//           }}
//           alignItems="flex-end"
//           justifyContent="flex-start"
//         >
//           <GlobalStyled.ViewRow
//             as={TouchableOpacity}
//             onPress={() => {
//               setSelect(1);
//             }}
//             width="33%"
//             height="40"
//             style={{
//               borderTopLeftRadius: 10,
//               borderTopRightRadius: 10,
//               borderColor: "#5471FF",
//               transform: [{ translateY: 1 }],
//             }}
//           >
//             <FriendRanking size={20} color={select !== 1 ? "#BBC2CF" : "#5471FF"} />
//             <Text
//               style={{
//                 color: select !== 1 ? "#BBC2CF" : "#5471FF",
//                 fontSize: 16,
//                 fontWeight: "bold",
//                 marginLeft: 5,
//               }}
//             >
//               친구랭킹
//             </Text>
//           </GlobalStyled.ViewRow>
//           <GlobalStyled.ViewRow
//             as={TouchableOpacity}
//             onPress={() => {
//               setSelect(2);
//             }}
//             width="33%"
//             height="40"
//             style={{
//               borderTopLeftRadius: 10,
//               borderTopRightRadius: 10,
//               borderColor: "#5471FF",
//               transform: [{ translateY: 1 }],
//             }}
//           >
//             <FriendList size={20} color={select !== 2 ? "#BBC2CF" : "#5471FF"} />
//             <Text
//               style={{
//                 color: select !== 2 ? "#BBC2CF" : "#5471FF",
//                 fontSize: 16,
//                 fontWeight: "bold",
//                 marginLeft: 5,
//               }}
//             >
//               친구목록
//             </Text>
//           </GlobalStyled.ViewRow>
//           <GlobalStyled.ViewRow
//             as={TouchableOpacity}
//             onPress={() => {
//               setSelect(3);
//             }}
//             width="33%"
//             height="40"
//             style={{
//               borderTopLeftRadius: 10,
//               borderTopRightRadius: 10,
//               borderColor: "#5471FF",
//               transform: [{ translateY: 1 }],
//             }}
//           >
//             <FriendFeed size={20} color={select !== 3 ? "#BBC2CF" : "#5471FF"} />
//             <Text
//               style={{
//                 color: select !== 3 ? "#BBC2CF" : "#5471FF",
//                 fontSize: 16,
//                 fontWeight: "bold",
//                 marginLeft: 5,
//               }}
//             >
//               상태
//             </Text>
//           </GlobalStyled.ViewRow>
//         </GlobalStyled.ViewRow>
//         {DATA.length === 0 ? (
//           <GlobalStyled.ViewCol style={{ flex: 1, backgroundColor: "white" }}>
//             <Text style={{ textAlign: "center" }}>아직 친구가 없습니다. {"\n"}친구추가를 눌러 친구를 초대하세요.</Text>
//           </GlobalStyled.ViewCol>
//         ) : select === 1 ? (
//           <GlobalStyled.ViewCol style={{ flex: 1 }}>
//             <GlobalStyled.ViewCol style={{ flex: 1, backgroundColor: "#F0F2FA" }}>
//               <GlobalStyled.ViewCol
//                 width="95%"
//                 height="80px"
//                 style={{
//                   backgroundColor: "white",
//                   borderRadius: 10,
//                   marginTop: 10,
//                 }}
//               >
//                 <GlobalStyled.ViewRow height="20px" style={{ backgroundColor: "white", borderRadius: 10 }} justifyContent="flex-start">
//                   <View
//                     style={{
//                       width: 10,
//                       height: 10,
//                       borderRadius: 5,
//                       backgroundColor: "#6F87FF",
//                       marginLeft: 20,
//                     }}
//                   ></View>
//                   <Text style={{ marginLeft: 10 }}>친구 평균</Text>
//                   <View
//                     style={{
//                       width: 10,
//                       height: 10,
//                       borderRadius: 5,
//                       backgroundColor: "#D2D2D2",
//                       marginLeft: 20,
//                     }}
//                   ></View>
//                   <Text style={{ marginLeft: 10 }}>나</Text>
//                 </GlobalStyled.ViewRow>

//                 <GlobalStyled.ViewRow height="40px" style={{ marginVertical: 10, backgroundColor: "white" }}>
//                   <GlobalStyled.ViewCol width="100px">
//                     <Text>{["", "체리", "학습한 문제", "학습시간"][benchmark]}</Text>
//                   </GlobalStyled.ViewCol>
//                   <GlobalStyled.ViewCol style={{ flex: 1 }} justifyContent="space-around">
//                     <GlobalStyled.ViewRow height="13px">
//                       <GlobalStyled.ViewRow width="80%" height="13px" style={{ overflow: "hidden" }}>
//                         <GlobalStyled.ViewRow
//                           as={Animated.View}
//                           style={{
//                             backgroundColor: "#6F87FF",
//                             transform: [{ translateX: barFriend }],
//                             borderTopRightRadius: 6,
//                             borderBottomRightRadius: 6,
//                           }}
//                         ></GlobalStyled.ViewRow>
//                       </GlobalStyled.ViewRow>
//                       <GlobalStyled.ViewRow width="20%" justifyContent="flex-start">
//                         <Text>{benchmark === 1 ? Math.round(realData.avgChery) : benchmark === 2 ? Math.round(realData.avgProblem) : Math.round(realData.avgTime)}</Text>
//                       </GlobalStyled.ViewRow>
//                     </GlobalStyled.ViewRow>
//                     <GlobalStyled.ViewRow height="13px">
//                       <GlobalStyled.ViewRow width="80%" style={{ overflow: "hidden" }} height="13px">
//                         <GlobalStyled.ViewRow
//                           as={Animated.View}
//                           style={{
//                             backgroundColor: "#D2D2D2",
//                             transform: [{ translateX: barMine }],
//                             borderTopRightRadius: 6,
//                             borderBottomRightRadius: 6,
//                           }}
//                         ></GlobalStyled.ViewRow>
//                       </GlobalStyled.ViewRow>
//                       <GlobalStyled.ViewRow justifyContent="flex-start" width="20%">
//                         <Text>{benchmark === 1 ? realData.cheryNum : benchmark === 2 ? realData.solveNum : realData.time}</Text>
//                       </GlobalStyled.ViewRow>
//                     </GlobalStyled.ViewRow>
//                   </GlobalStyled.ViewCol>
//                 </GlobalStyled.ViewRow>
//               </GlobalStyled.ViewCol>
//               {benchmark === 1 ? (
//                 <GlobalStyled.ViewRow style={{ flex: 1, backgroundColor: "#F0F2FA" }} alignItems="flex-start">
//                   <FlatList data={rankData[0]} renderItem={renderRankItem} keyExtractor={(item) => item.id} style={{ backgroundColor: "#F0F2FA" }} style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} />
//                 </GlobalStyled.ViewRow>
//               ) : benchmark === 2 ? (
//                 <GlobalStyled.ViewRow style={{ flex: 1, backgroundColor: "#F0F2FA" }} alignItems="flex-start">
//                   <FlatList data={rankData[1]} renderItem={renderRankItem} keyExtractor={(item) => item.id} style={{ backgroundColor: "#F0F2FA" }} style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} />
//                 </GlobalStyled.ViewRow>
//               ) : (
//                 <GlobalStyled.ViewRow style={{ flex: 1, backgroundColor: "#F0F2FA" }} alignItems="flex-start">
//                   <FlatList data={rankData[2]} renderItem={renderRankItem} keyExtractor={(item) => item.id} style={{ backgroundColor: "#F0F2FA" }} style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} />
//                 </GlobalStyled.ViewRow>
//               )}
//             </GlobalStyled.ViewCol>
//           </GlobalStyled.ViewCol>
//         ) : select === 2 ? (
//           <GlobalStyled.ViewRow style={{ flex: 1, backgroundColor: "#F0F2FA" }} alignItems="flex-start">
//             <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} style={{ backgroundColor: "#F0F2FA" }} contentContainerStyle={{ flexGrow: 1 }} />
//           </GlobalStyled.ViewRow>
//         ) : (
//           <GlobalStyled.ViewCol style={{ flex: 1, backgroundColor: "#F0F2FA" }}>
//             <View
//               style={{
//                 borderBottomRightRadius: 10,
//                 borderBottomLeftRadius: 10,
//                 width: "100%",
//                 flex: 1,
//                 marginVertical: 10,
//               }}
//             >
//               <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} title="새로운 소식을 받아오고 있어요." tintColor="#2786FF" enabled />} contentContainerStyle={{ flexGrow: 1 }}>
//                 <View
//                   style={{
//                     width: "100%",
//                     flex: 1,
//                     justifyContent: "flex-start",
//                     alignItems: "center",
//                   }}
//                 >
//                   {infos.length === 0 ? (
//                     <Text style={{ width: "100%", textAlign: "center" }}>새 소식이 없습니다.{"\n"}친구를 추가하여 친구의 소식을 받아보세요.</Text>
//                   ) : (
//                     feedInfos.map((v, idx) => {
//                       return <Feed name={v.name} msg={v.msg} before={v.before} key={idx} icon={v.icon} />;
//                     })
//                   )}
//                 </View>
//               </ScrollView>
//             </View>
//           </GlobalStyled.ViewCol>
//         )}
//       </Styled.section>
//       <FriendAdd up={up} offSet={offSet} sendId={sendId} setSendId={setSendId}></FriendAdd>
//       <FriendSend right={right} offSetSend={offSetSend} sendData={sendData} respondData={respondData} setSendData={setSendData} setRespondData={setRespondData} userName={userName} />
//     </Styled.body>
//   );
// };

// export default Friend;
