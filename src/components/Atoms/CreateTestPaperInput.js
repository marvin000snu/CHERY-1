import React, { useState } from 'react';
import styled from 'styled-components/native'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { CustomButton } from '../../style/customButton'
import theme from '../../style/theme'
const styles = StyleSheet.create({
    button: {
        display: "flex",
        padding: 0.25,
        borderRadius: 1,
        alignItems: "center",
        justifyContent: "center",
        color: "blue",
        backgroundColor: theme.color.deepBlue,
        width: "50%",
        height: 30,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 0,
    },
    text : {
        color : theme.color.white
    }
})
const Styled = {
    Body: styled.View`
        display : flex;
        flex-direction : row;
        width : ${props => props.width};
        align-items : center;
        justify-content : center;
        height : 40px;
    `,
    LeftInput: styled.TextInput`
        width : 50%
        display : flex;
        height : 30;
        font-size : 10;
        border : 1px solid ${props => props.theme.color.gray};
        border-top-left-radius : 5;
        border-top-right-radius : 0;
        border-bottom-right-radius : 0;
        border-bottom-left-radius : 5;
        text-align : center;
        ::placeholder { 
            color: ${props => props.theme.color.gray};
        }
    `,
    SubmitButton: styled(CustomButton)`
        width : 100%
        height : 100%;
        border-top-left-radius : 0;
        border-top-right-radius : 5;
        border-bottom-right-radius : 5;
        border-bottom-left-radius : 0;

    `
}

const CreateTestPaperInput = (props) => {

    const { name, placeholder, width, onSubmit } = props
    const [testName, setTestName] = useState("")
    return (
        <Styled.Body
            width={width}
        >
            <Styled.LeftInput
                value={testName}
                name={name}
                onChangeText={text=>setTestName(text)}
                placeholder={placeholder}
            />
            <TouchableOpacity
                style={styles.button}
                type="submit"
                onPress={()=>{onSubmit(testName)}}
            >
                <Text style={styles.text}>시험지 생성하기</Text>
            </TouchableOpacity>
        </Styled.Body>
    );
};


CreateTestPaperInput.defaultProps = {
    info: {
        value: '',
        name: 'name',
        placeholder: 'input please'
    },
    onChange: function () { }
}

export default CreateTestPaperInput;