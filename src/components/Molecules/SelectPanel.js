import React from 'react'
import styled from 'styled-components/native'
import {View, StyleSheet} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Constants from 'expo-constants';

const SelectPanel = ()=>{
    const Styled = {
        body: styled.View`
        width: 100%;
        height:${hp("100") - Constants.statusBarHeight};
        background-color: #f9fafc;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top : ${Constants.statusBarHeight}
    `,
    }
    const Styles = StyleSheet.create({

    })
    return (
        <View>


        </View>
    )
}

export {SelectPanel}