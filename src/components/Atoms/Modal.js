import React, {useRef} from 'react';
import {StyleSheet,View, Animated, Text} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Modal = (props) => {
    const styles = StyleSheet.create({
        container: {
            position : "absolute",
            display : 'none',
            width : wp("100%"),
            height : hp("100%"),
            alignItems : "center",
            justifyContent : "center",
            backgroundColor : props.theme.color.indigo,
            top : 0,
            zIndex: 1,
            opacity : 0
    },});
    const { children, isActive } = props
    var fadeAnim = useRef(new Animated.Value(props.beforeValue)).current
    React.useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: props.afterValue,
            duration: 1000,
          }
        ).start();
      }, [fadeAnim])

    return (
        <View style={styles.container}
            {...props}
        >
            <Text>
            {children}

            </Text>
        </View>
    );
};

export default Modal;