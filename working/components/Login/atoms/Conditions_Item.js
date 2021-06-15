import React from "react"
import { Text, View, TouchableOpacity } from "react-native"
import SignUpMark from "../../../svg/SignUpMark";
import GlobalStyled from "../../../../src/style/GlobalStyled";

const Conditions_Item = (props) => {
    const {acceptList, setAcceptList, index} = props;
    return (
        <GlobalStyled.ViewRow style={{ width: "100%", height: 30, backgroundColor: "#F6F5F6", borderRadius: 5, borderWidth: 1, borderColor: "#DBDCDC" }} justifyContent="space-between">
        <Text style={{ paddingLeft: 10 }}>{props.text}</Text>
            <GlobalStyled.ViewRow
                width="20px"
                height="20px"
                style={{ backgroundColor: "white", marginRight: 10, borderRadius: 4, borderWidth: 1, borderColor: "#DBDCDC" }}
                as={TouchableOpacity}
                onPress={() => {
                    var temp = [...acceptList]
                    temp[index] = !temp[index]
                    setAcceptList(temp)
                }}
            >
                {acceptList[index] && <SignUpMark size={15} fill="#5571FF" />}
            </GlobalStyled.ViewRow>
        </GlobalStyled.ViewRow>
    )
}
export default Conditions_Item