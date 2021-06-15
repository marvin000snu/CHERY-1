import React, { useState, useCallback, useEffect } from "react";
import {
  Animated,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,

} from "react-native";
import GlobalStyled from "../../style/GlobalStyled";
import useAPI from "../../hooks/useAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";
import Constants from "expo-constants";
const FriendAdd = (props) => {
  const [token, setToken] = useState();
  useEffect(() => {
    const useEffectAsyncFunction = async () => {
      const token = await AsyncStorage.getItem("@userToken");
      const deCode = jwt_decode(token);

      setToken(deCode);
    };
    useEffectAsyncFunction();
  }, []);
  const { up, offSet, sendId, setSendId } = props;
  const [API] = useCallback(useAPI(), []);
  const buttonHandler = async () => {
    try {
      const params = {
        userId: token["cognito:username"],
        body: {
          sendId: token["cognito:username"],
          respondId: sendId,
          sendName: token.name
        }
      };
      await API.friend.addFriend(params);
      alert("친구요청을 보냈습니다.");
    } catch (err) {
      if (err.response.data.msg === "alreadyFriend") {
        alert("이미 친구입니다.");
      }
      if (err.response.data.msg === "idNotFound") {
        alert("존재하지 않는 아이디 입니다.");
      }
      if (err.response.data.msg === "alreadySend") {
        alert("이미 친구추가 요청을 보냈습니다.");
      }
      if (err.response.data.msg === "cannotAddSelf") {
        alert("나 자신은 영원한 인생의 친구입니다");
      }
    } finally {
    }
  };
  return (
    <Animated.View
      style={[
        {
          position: "absolute",
          width: "100%",
          height: 250 + Constants.statusBarHeight,
          marginTop: Constants.statusBarHeight,
          backgroundColor: "white",
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
          alignItems: "center"
        },
        { transform: [{ translateY: offSet }] }
      ]}
    >
      <View
        style={{
          width: "100%",
          height: "40%",
          flexDirection: "row",
          marginTop:25
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={up}
        >
          <Image source={require("../../images/icon/BackX.png")}></Image>
        </TouchableOpacity>
        <View
          style={{
            width: "60%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              color: "#1B2C49",
              fontSize: 25,
              fontWeight: "bold",
              width: "100%",
              textAlign: "center"
            }}
          >
            친구추가
          </Text>
        </View>
        <View style={{ width: "20%", height: "100%" }}></View>
      </View>

      <View
        style={{
          width: "90%",
          height: "20%",
          flexDirection: "row",
          borderColor: "#B2B8C2",
          borderBottomWidth: 1,
          alignItems: "center"
        }}
      >
        <TextInput
          autoCapitalize="none"
          value={sendId}
          onChangeText={setSendId}
          style={{ height: "100%", flex: 1 }}
          placeholder="친구 ID를 입력해주세요."
        ></TextInput>
        <View height="100%" justifyContent="center" alignItems="center">
          <Image source={require("../../images/icon/clearText.png")} />
        </View>
        <Text style={{ marginLeft: 10, color: "#B2B8C2", lineHeight: 45 }}>
          {`${sendId.length}/20`}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "40%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <GlobalStyled.ViewRow
          onPress={buttonHandler}
          as={TouchableOpacity}
          height="38px"
          width="153px"
          style={{ backgroundColor: "#5471FF", borderRadius: 25 }}
        >
          <Text style={{ color: "white" }}>친구추가 요청 보내기</Text>
        </GlobalStyled.ViewRow>
      </View>
    </Animated.View>
  );
};

export default FriendAdd;
