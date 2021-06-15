import React, { useState } from "react";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import styled from "styled-components/native";
import { TouchableWithoutFeedback, TouchableOpacity, Share } from "react-native";
import HomeMyMenuButton from "./Atom/HomeMyMenuButton";
import HomeMyMenuLittleButton from "./Atom/HomeMyMenuLittleButton";
import IconwText from "./Atom/IconwText";
import UserInfoIcon from "./img/UserInfoIcon";
import FriendInviteIcon from "./img/FriendInviteIcon";
import CSIcon from "./img/CSIcon";
import NotificationIcon from "./img/NotificationIcon";
import GearIcon from "./img/GearIcon";
import XIcon from "./img/XIcon";
import RingIcon from "./img/RingIcon";
import BadgedIcon from "./svg/BadgedIcon";
import AlarmOne from "./Atom/AlarmOne";
import level1 from "./svg/level1";
import level2 from "./svg/level2";
import level3 from "./svg/level3";
import level4 from "./svg/level4";
import level5 from "./svg/level5";
import Modal from "react-native-modal";
// 아래와 같이 data를 받아오면 될 것 같습니다
import moment from "moment";
import MyLevel from "../working/MyLevel";
import MyTest from "../working/MyTest";
import AlarmPage from "../working/AlarmPage";
const Styled = {
  background: styled.View`
    background-color: #5571ff;
    width: ${wp(90)};
    height: ${hp(100)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
  `,
  header: styled.View`
    margin-top: ${hp(4)}px;
    height: ${hp(15.5)}px;
    justify-content: space-between;
    align-items: center;
  `,
  headerMenu: styled.View`
    height: ${hp(5)}px;
    width: ${wp(80)}px;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  `,
  settingIcons: styled.View`
    flex-flow: row;
    width: ${wp(17)}px;
    justify-content: space-between;
    margin-top: 1px;
  `,
  headerLower: styled.View`
    flex-flow: row;
    width: ${wp(80)}px;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: ${hp(2)}px;
  `,
  headerText: styled.Text`
    font-size: ${wp(5.5)}px;
    text-align: center;
    margin-bottom: ${hp(1)}px;
    color: white;
    font-weight: bold;
  `,
  userIcon: styled.View``,
  body: styled.View`
    width: ${wp(90)}px;
    height: ${hp(80.5)}px;
    background-color: #e8e9ea;
  `,
  bodyLower: styled.View`
    background-color: white;
    align-items: center;
    flex: 1;
    margin-top: ${hp(1)}px;
  `,
  lowerIcons: styled.View`
    flex-flow: row;
    justify-content: space-between;
    width: 95%;
  `,
  littleButtons: styled.View`
    flex-flow: row;
    justify-content: space-between;
  `,
};

const HomeMyMenu = (props) => {
  const { onClose, userName, userSchool, membership, chery, level, navigation, icon, alarmInfos, setAlarmInfos } = props;
  const [modalType, setModalType] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const buttonPress = () => {
    alert("buttonPress");
  };
  const onToggle = async () => {};
  const onAlarmChange = () => {
    setModalType(2);
    setModalVisible(true);
  };
  const openMyTestHandler = () => {
    setModalType(1);
    setModalVisible(true);
  };
  const openMyLevelHandler = () => {
    setModalType(0);
    setModalVisible(true);
  };
  const modalCloseHandler = () => {
    setModalVisible(false);
  };

  return (
    <Styled.background>
      <Modal isVisible={modalVisible} style={{ padding: 0, margin: 0 }} animationIn="slideInRight" animationOut="slideOutRight">
        {modalType === 0 ? <MyLevel modalCloseHandler={modalCloseHandler} /> : modalType === 1 ? <MyTest modalCloseHandler={modalCloseHandler} /> : <AlarmPage alarmInfos={alarmInfos} setAlarmInfos={setAlarmInfos} modalCloseHandler={modalCloseHandler} />}
      </Modal>
      <Styled.header>
        <Styled.headerMenu>
          <TouchableOpacity onPress={onClose}>
            <XIcon size={wp(6)} />
          </TouchableOpacity>
          <Styled.settingIcons>
            <RingIcon size={wp(6)} />
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("SettingStack");
              }}
            >
              <GearIcon size={wp(6)} />
            </TouchableWithoutFeedback>
          </Styled.settingIcons>
        </Styled.headerMenu>

        <Styled.headerLower>
          <Styled.headerText>
            {" "}
            {userName} | {userSchool}
          </Styled.headerText>
          <Styled.userIcon>
            <BadgedIcon iconType={icon} levelType={level} />
          </Styled.userIcon>
        </Styled.headerLower>
      </Styled.header>
      <Styled.body>
        <Styled.littleButtons>
          <HomeMyMenuLittleButton title="레벨" onPress={buttonPress} height={hp(8)} Icon={[level1, level2, level3, level4, level5][level]} width={wp(29.5)} fontSize={wp(4)} color="white" />
          <HomeMyMenuLittleButton title="이용권" desc={membership} onPress={buttonPress} height={hp(8)} width={wp(29.5)} fontSize={wp(4)} color="white" Icon={[level1, level2, level3, level4, level5][level]} />
          <HomeMyMenuLittleButton title="체리개수" desc={chery} onPress={buttonPress} height={hp(8)} width={wp(29.5)} fontSize={wp(4)} color="white" Icon={[level1, level2, level3, level4, level5][level]} />
        </Styled.littleButtons>
        <AlarmOne alarmInfo={alarmInfos[0]} setAlarmInfos={setAlarmInfos} onToggle={onToggle} onPress={onAlarmChange} />
        <HomeMyMenuButton text="나의 모의고사" onPress={openMyTestHandler} height={hp(5)} fontSize={wp(6)} color="white" />
        {/* <HomeMyMenuButton text="이용권" onPress={buttonPress} height={hp(5)} fontSize={wp(6)} color="white" /> */}
        <HomeMyMenuButton text="레벨" onPress={openMyLevelHandler} height={hp(5)} fontSize={wp(6)} color="white" />
        <Styled.bodyLower>
          <Styled.lowerIcons>
            <IconwText size={wp(18)} Icon={NotificationIcon} text="공지사항" color="black" onPress={buttonPress} />
            <IconwText
              size={wp(18)}
              Icon={CSIcon}
              text="고객센터"
              color="black"
              onPress={() => {
                alert("contact@mise.team\n으로 연락주세요.");
              }}
            />
            <IconwText
              size={wp(18)}
              Icon={FriendInviteIcon}
              text="친구초대"
              color="black"
              onPress={async () => {
                try {
                  const result = await Share.share({
                    message: "www.mise.team/t12",
                  });
                  if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                      // shared with activity type of result.activityType
                    } else {
                      // shared
                    }
                  } else if (result.action === Share.dismissedAction) {
                    // dismissed
                  }
                } catch (error) {
                  alert(error.message);
                }
              }}
            />
            <IconwText size={wp(18)} Icon={UserInfoIcon} text="이용자 정보" color="black" onPress={()=>{alert("준비중입니다.")}} />
          </Styled.lowerIcons>
        </Styled.bodyLower>
      </Styled.body>
    </Styled.background>
  );
};

export default HomeMyMenu;
