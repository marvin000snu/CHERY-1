import React, { useState, useCallback } from "react";
import styled from "styled-components/native";
import GlobalStyled from "../../style/GlobalStyled";
import Constants from "expo-constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  Animated
} from "react-native";
import useAPI from "../../hooks/useAPI";
import GrayIcon from "../../images/iconSvg/GrayIcon";
const Styled = {
  body: styled.View`
    width: 100%;
    height: ${hp(100) - 80}px;
    background-color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column;
  `,
  section: styled.View`
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    align-items: center;
    overflow: hidden;
    opacity: 1;
  `
};

const FriendSend = (props) => {
  const [API] = useCallback(useAPI(), []);
  const {
    offSetSend,
    right,
    sendData,
    respondData,
    setRespondData,
    setSendData,
    userName
  } = props;
  const [select, setSelect] = useState(0);
  const selectHandler = (i) => {
    setSelect(i);
  };

  const renderItem = ({ item, index }) => <Item item={item} idx={index} />;
  const renderRespondItem = ({ item, index }) => (
    <RespondItem item={item} idx={index} />
  );
  const acceptHandler = async (id, idx) => {
    try {
      const params = {
        userId: userName,
        sendId: id
      };

      const result = await API.friend.acceptFriend(params);
      var temp = [...respondData];
      temp.splice(idx, 1);
      setRespondData(temp);
      alert("친구요청을 수락했습니다.");
    } catch (err) {
      // console.log(err);
    }
  };
  const cancelHandler = async (id, idx) => {
    try {
      var temp = [...sendData];
      temp.splice(idx,1)
      setSendData(temp)
      const params = {
        userId: userName,
        body: {
          id: id
        }
      };
      await API.friend.cancelSend(params);
      alert("친구추가 요청을 취소했습니다.")
    } catch (err) {
      console.log(err);
    } finally {
    }
  };
  const Item = ({ item, idx }) => (
    <View
      style={{
        marginBottom: 2,
        height: 80,
        width: wp(100),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <GlobalStyled.ViewRow
        width="95%"
        height="70px"
        style={{
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
          borderRadius: 10
        }}
      >
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <GrayIcon size={50} />
        </View>
        <View
          style={{
            width: "80%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              width: "100%",
              height: "30%",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                width: "50%",
                fontSize: 15,
                color: "#1B2C49",
                fontWeight: "bold"
              }}
            >
              {item.name}
            </Text>
            <GlobalStyled.ViewRow
              width="50%"
              style={{ justifyContent: "flex-end" }}
            >
              <GlobalStyled.ViewRow
                width="77"
                style={{
                  backgroundColor: "#F8F8F8",
                  borderWidth: 1,
                  borderColor: "#BBC2CF",
                  height: 30,
                  borderRadius: 5,
                  marginRight: 20
                }}
                as={TouchableOpacity}
                onPress={() => {
                  cancelHandler(item.dbId, idx);
                }}
              >
                <Text>요청 취소</Text>
              </GlobalStyled.ViewRow>
            </GlobalStyled.ViewRow>
          </View>
          <View style={{ width: "100%", height: "20%" }}>
            <Text style={{ fontSize: 12, color: "#1B2C49" }}>
              {item.name}님께 친구요청을 보냈습니다.
            </Text>
          </View>
        </View>
      </GlobalStyled.ViewRow>
    </View>
  );
  const RespondItem = ({ item, idx }) => (
    <View
      style={{
        marginBottom: 2,
        height: 80,
        width: wp(100),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <GlobalStyled.ViewRow
        width="95%"
        height="70px"
        style={{
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
          borderRadius: 10
        }}
      >
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <GrayIcon size={50} />
        </View>
        <View
          style={{
            width: "80%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              width: "100%",
              height: "30%",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                width: "50%",
                fontSize: 15,
                color: "#1B2C49",
                fontWeight: "bold"
              }}
            >
              {item.name}
            </Text>
            <GlobalStyled.ViewRow
              width="50%"
              style={{ justifyContent: "flex-end" }}
            >
              <GlobalStyled.ViewRow
                width="60"
                style={{
                  backgroundColor: "#8E5FFA",
                  height: 30,
                  borderRadius: 5,
                  marginRight: 20
                }}
                as={TouchableOpacity}
                onPress={() => {
                  acceptHandler(item.info, idx);
                }}
              >
                <Text style={{ color: "white" }}>수락</Text>
              </GlobalStyled.ViewRow>
            </GlobalStyled.ViewRow>
          </View>
          <View style={{ width: "100%", height: "20%" }}>
            <Text style={{ fontSize: 12, color: "#1B2C49" }}>
              {item.name}님께 친구요청을 받았습니다.
            </Text>
          </View>
        </View>
      </GlobalStyled.ViewRow>
    </View>
  );
  return (
    <GlobalStyled.ViewCol
      as={Animated.View}
      style={[
        { position: "absolute", backgroundColor: "white" },
        { transform: [{ translateX: offSetSend }] }
      ]}
    >
      <Styled.section>
        <GlobalStyled.ViewCol
          justifyContent="flex-start"
          style={{ backgroundColor: "#eae1fc" }}
        >
          <GlobalStyled.ViewRow
            height="30"
            justifyContent="flex-start"
            style={{ backgroundColor: "white" }}
          >
            <GlobalStyled.ViewRow
              width="20%"
              justifyContent="flex-start"
              as={TouchableOpacity}
              onPress={right}
            >
              <Image
                source={require("../../images/icon/BackX.png")}
                style={{ marginLeft: 20 }}
              ></Image>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow width="60%">
              <Text style={{ fontSize: 24, color: "#1B2C49", lineHeight: 30 }}>
                친구관리
              </Text>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow width="20%"></GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow
            style={{ backgroundColor: "white", height: 30 }}
          ></GlobalStyled.ViewRow>
          <GlobalStyled.ViewRow
            style={{
              backgroundColor: "white"
            }}
            height="40"
            justifyContent="flex-start"
          >
            <GlobalStyled.ViewRow
              onPress={() => {
                selectHandler(0);
              }}
              width="30%"
              height="100%"
              as={TouchableOpacity}
              style={{
                borderTopWidth: 1,
                borderRightWidth: 1,
                borderLeftWidth: 1,
                borderColor: "#EAE1FC",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: select === 0 ? "#EAE1FC" : "white"
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#1B2C49"
                }}
              >
                보낸 신청
              </Text>
            </GlobalStyled.ViewRow>
            <GlobalStyled.ViewRow
              onPress={() => {
                selectHandler(1);
              }}
              width="30%"
              height="100%"
              as={TouchableOpacity}
              style={{
                borderTopWidth: 1,
                borderRightWidth: 1,
                borderLeftWidth: 1,
                borderColor: "#EAE1FC",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                backgroundColor: select === 1 ? "#EAE1FC" : "white"
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#1B2C49"
                }}
              >
                받은 신청
              </Text>
            </GlobalStyled.ViewRow>
          </GlobalStyled.ViewRow>
          {select === 0 ? (
            <FlatList
              data={sendData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={{ backgroundColor: "#EAE1FC" }}
            />
          ) : (
            <FlatList
              data={respondData}
              renderItem={renderRespondItem}
              keyExtractor={(item) => item.id}
              style={{ backgroundColor: "#EAE1FC" }}
            />
          )}
        </GlobalStyled.ViewCol>
      </Styled.section>
    </GlobalStyled.ViewCol>
  );
};

export { FriendSend };
