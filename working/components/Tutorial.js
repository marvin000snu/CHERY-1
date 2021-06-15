import React from "react";
import HomeTutorialModal from "../Atom/HomeTutorialModal";
import WeakTutorialModal from "../Atom/WeakTutorialModal"
import WordTutorial from "../Atom/WordTutorial"
import CheryTutorial from "../Atom/CheryTutorial"
import styled from "styled-components";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Xicon from "../../src/images/iconSvg/Xicon";
import Swiper from 'react-native-swiper'
import { Text,StyleSheet, View, TouchableOpacity} from 'react-native'
import NotAnyMoreAfterToday from "../Atom/NotAnyMoreAfterToday";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Styled = {
    modalBackground: styled.View`
    height: ${hp(100)}px;
    width: ${wp(100)}px;
    justify-content: center;
    align-items: center;
    `,
    background: styled.View`
    height: ${hp(80)}px;
    width: ${wp(100)}px;
    justify-content: center;
    align-items: center;
    `,
    textView: styled.View``,

    texts: styled.Text`
    `,
    xIcons: styled.View`
    flex-flow: row;
    width: ${wp(85)}px;
    justify-content: flex-end;
    margin-top: ${hp(5)}px;
    `,
    notAnymore: styled.View`
    flex-flow: row;
    width: ${wp(78)}px;
    justify-content: flex-end;
    `,
  };

  const styles = StyleSheet.create({
    wrapper: {
        marginTop: hp(4),
        height: hp(73),
        justifyContent: "flex-start",
    },
    
    buttonStyle: {backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center', color: "white"},
    buttonText: {fontSize: hp(5), color: "white"},
    slide1: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide2: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide3: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide4: {
        justifyContent: 'center',
        alignItems: 'center',
      } 
});

const Tutorial = (props) => {
    const { setTutorial } = props;
    const onNoMore = async () => {
        await AsyncStorage.setItem("@openTutorial", "false");
        setTutorial(false);
    }
    return (
        <Styled.modalBackground>
            <Styled.xIcons>
            <TouchableOpacity onPress = {()=> {setTutorial(false)}}>
                <Xicon size={25} color = "#fff" />
                </TouchableOpacity>
            </Styled.xIcons>
            <Styled.background>
            <Swiper style={styles.wrapper} showsButtons={true} loop = {false} buttonWrapperStyle = {styles.buttonStyle} dotColor = "black" activeDotColor="white" nextButton={<Text style={styles.buttonText}>›</Text>} prevButton={<Text style={styles.buttonText}>‹</Text>}>
                <View style={styles.slide1}>
                    <HomeTutorialModal size = {hp(70)}/>
                </View>
                <View style={styles.slide2}>
                    <WeakTutorialModal size = {hp(70)}/>
                </View>
                <View style={styles.slide3}>
                    <WordTutorial size = {hp(70)}/>
                </View>
                <View style={styles.slide4}>
                    <CheryTutorial size = {hp(70)}/>
                </View>
            </Swiper>
            </Styled.background>
            <Styled.notAnymore>
                <TouchableOpacity onPress = {onNoMore}>
                    <NotAnyMoreAfterToday />
                </TouchableOpacity>
            </Styled.notAnymore>
        </Styled.modalBackground>
    )
}


export default Tutorial;