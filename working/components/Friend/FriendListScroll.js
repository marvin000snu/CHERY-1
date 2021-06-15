import React, { useState } from "react";
import styled from "styled-components";
import { ScrollView, StyleSheet, Text, TouchableOpacity,TouchableWithoutFeedback } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import FriendProfile from "./atom/FriendProfile";
import Modal from "react-native-modal";
import GlobalStyled from "../../../src/style/GlobalStyled";
import ModalClose from "../../../working/svg/ModalClose";
import Icon10 from "../../../working/svg/icon10"
const Styled = {
  Wrap: styled.View`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
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
const FriendListScroll = (props) => {
  const { Friend } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const PressHandler = (v) => {
    setModalInfo(v);
    setModalVisible(true);
  };
  return (
    <Styled.Wrap>
      <Modal backdropOpacity={0.5} animationIn="slideInUp" isVisible={modalVisible} style={{ justifyContent: "flex-end", display: "flex", flexDirection: "column", padding: 0, margin: 0 }}>
        <GlobalStyled.ViewCol
          style={{ flex: 1 }}
          as={TouchableOpacity}
          onPress={() => {
            setModalVisible(false);
          }}
        ></GlobalStyled.ViewCol>
        <GlobalStyled.ViewCol height="207px" style={{ backgroundColor: "white" }}>
          <GlobalStyled.ViewCol style={{ flex: 1 }} justifyContent="flex-start" alignItems="flex-start">
            <TouchableWithoutFeedback onPress={()=>{setModalVisible(false)}}>
              <ModalClose size={20} style={{ margin: 5 }} />
            </TouchableWithoutFeedback>
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol height="143px" justifyContent="flex-start">
            <Text style={{ fontSize: 18, fontWeight: "bold", height: 27, lineHeight: 27 }}>{modalInfo.name}</Text>
            <Text style={{ fontSize: 15, height: 27, lineHeight: 27 }}>{modalInfo.msg}</Text>
          </GlobalStyled.ViewCol>
          <GlobalStyled.ViewCol width="100px" style={{position: "absolute", top:0, transform:[{ translateY: -50}]}}>
              <Icon10 size={100} style={{transform:[{translateY:-50}]}}/>
          </GlobalStyled.ViewCol>
        </GlobalStyled.ViewCol>
      </Modal>
      <ScrollView contentContainerStyle={styles.Scroll} showsVerticalScrollIndicator= {false}>
        {Friend.map((v, i) => {
          return (
            <FriendProfile
              name={v.name}
              idx={i}
              msg={v.msg}
              icon={v.icon}
              PressHandler={() => {
                PressHandler(v);
              }}
            />
          );
        })}
      </ScrollView>
    </Styled.Wrap>
  );
};
export default FriendListScroll;
