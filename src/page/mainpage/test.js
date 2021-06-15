import React from 'react';
import { View, SafeAreaView } from 'react-native';
import RNDrawOnScreen from './index1';

export default class App extends React.Component {
    state = {
        color: 'black',
        strokeWidth: 2,
    };
    changeColor = (color) => {
        this.setState({ color });
    };
    changeBrushSize = (strokeWidth) => {
        this.setState({ strokeWidth });
    };
    undo = () => {
        this.RNDraw.undo();
    };
    clear = () => {
        this.RNDraw.clear();
    };
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View
                    style={{
                        flex: 1,
                        flexGrow: 1,
                        border: 'solid',
                        borderWidth: 2,
                        borderColor: '#ccc',
                    }}
                >
                    <RNDrawOnScreen
                        penColor={this.state.color}
                        strokeWidth={this.state.strokeWidth}
                        ref={(r) => (this.RNDraw = r)}
                    />
                </View>
            </SafeAreaView>
        );
    }
}
