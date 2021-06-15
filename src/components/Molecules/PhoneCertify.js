import React, {useState} from "react";
import styled from "styled-components";
import DropDownPicker from 'react-native-dropdown-picker';

const PhoneCertify = function (props) {
  const inputTitle = props.inputTitle;
  const Styled = {
    wrap: styled.View`

      width: 80%;
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
    `,
    name: styled.Text`
      width: 100%;
      height: 35%;
      margin-bottom: 8px;
      font-size:12px;
    `,
    inputWrap: styled.View`
        width:100%;
        height:65%;
        display:flex;
        justify-content: space-between;
        flex-direction : row;
    `,
    telecom: styled.View`
    width:20%;
    height:100%;
    background-color:#eee;
    border-radius: 10px;
    border: 2px solid #eee;
    `,
    input: styled.TextInput`
      width: 42%;
      height: 100%;
      border-radius: 10px;
      border: 2px solid #e6ecef;
    `,
    send: styled.Text`
      color: #fff;
      background-color: #1b2c49;
      border: 2px solid #1b2c49;
      font-size: 12px;
      width: 28%;
      height: 100%;
      border-radius: 5px;
      text-align : center;
      line-height: 30px;

    `,
  };
  const [telecom, setTelecom] = useState("skt")
  const telecomHandler = (v)=>{
    setTelecom(v)  
  }
  return (
    <Styled.wrap>
      <Styled.name>{inputTitle}</Styled.name>
      <Styled.inputWrap>
        <DropDownPicker
          items={[
            { label: 'SKT', value: 'skt', hidden: true },
            { label: 'LG', value: 'lg', },
            { label: 'KT', value: 'kt', },
          ]}
          defaultValue={telecom}
          containerStyle={{ height: 40 , width:80}}
          style={{ backgroundColor: '#fafafa',  }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={item => telecomHandler(item.value)}
        />
        <Styled.input></Styled.input>
        <Styled.send>인증</Styled.send>
      </Styled.inputWrap>
    </Styled.wrap>
  );
};
export { PhoneCertify };
