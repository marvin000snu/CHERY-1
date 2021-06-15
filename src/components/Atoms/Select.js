import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import Select from 'react-select-native'
import { StyleSheet ,Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import theme from '../../style/theme';

const Styled = {
    Body: styled.View`
        width : ${props => props.width};
        border-color: ${theme.color.realBlueGray} ; 
        border-radius : 10 ;
        border-width: 2 ; 
        border-style:solid
        .css-tlfecz-indicatorContainer {
            color : ${props => props.theme.color.whiteBlue};
        }
    `
}
const styles = StyleSheet.create({
    picker : {
        transform: [
           { scaleX: 1.5 }, 
           { scaleY: 1.5 },
        ]
      }
}
)
const SelectNative = (props) => {

    const { placeHolder, dropDownWidth, width, options, value, onChange, isActive } = props

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: `1px solid ${theme.color.realWhiteBlue}`,
        }),
        indicatorContainer: (provided, state) => ({
            ...provided,
            color: theme.color.whiteBlue
        })
    }



    var newOptions = [ ... options ]
    newOptions.unshift({value : "", label: placeHolder})
    return (
        <Styled.Body
            width={width}
        >{isActive ? (
            <Picker
                selectedValue={value.value}
                style={{ height: 40, width: dropDownWidth+20, fontSize: 10,   transform: [
                    { scaleX: 0.8 }, 
                    { scaleY: 0.8 },
                 ]}}
                onValueChange={(label,index) => onChange(newOptions[index])}
                itemStyle={{
                    height: 50,
                    width: 150,
                    fontSize: 10,
                  }}
            >
                <Picker.Item label={placeHolder} value=''/>
                {options.map((v) => { return (<Picker.Item label={v.label} value={v.value}/>) })}
            </Picker>) : (
                <Text>{value.label}</Text>
            )}
        </Styled.Body>

    );
};

Select.defaultProps = {
    width: '6rem',
    options: [
        {
            label: '1',
            value: 1,
        },
        {
            label: '2',
            value: 2,
        },
        {
            label: '3',
            value: 3,
        },
    ],
    value: {
        label: '1',
        value: 1,
    },
    isActive: true,
    onChange: function () { }
}

export default SelectNative;