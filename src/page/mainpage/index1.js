import React, { PureComponent } from "react";
import { StyleSheet, View, PixelRatio } from "react-native";
import { WebView } from "react-native-webview";
import { html } from "./drawHtml";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
const styles = StyleSheet.create({
  drawBg: {
    width: wp(95),
    height: 1000,
  },
  container: {
    position: "absolute",
    backgroundColor: "red",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 1000,
  },
});

type ReactNativeDrawProps = {
  penColour: string,
  strokeWidth: number,
};

class ReactNativeDraw extends PureComponent<ReactNativeDrawProps> {
  state = {
    htmlStr: html,
  };

  componentDidMount() {
    const { penColor, strokeWidth, imgSrc } = this.props;
    const ratio = PixelRatio.getPixelSizeForLayoutSize(strokeWidth);
    const adj = ratio / strokeWidth + strokeWidth;
    let htmlStr = html
      .replace("[[LINE_WIDTH]]", adj || 12)
      .replace("[[COLOR]]", penColor || "#000")
      .replace("[[imgSrc]]", imgSrc || "")
      .replace("[[realWidth]]", wp(95));
    this.setState({ htmlStr });
  }

  componentDidUpdate(prevProps, prevState) {
    Object.entries(this.props).forEach(([key, val]) => prevProps[key] !== val && console.log(`Prop '${key}' changed`));
    if (this.state) {
      Object.entries(this.state).forEach(([key, val]) => prevState[key] !== val && console.log(`State '${key}' changed`));
    }
  }

  updateView = () => {
    this.changeColour(this.props.penColor);
    this.changeStrokeWidth(this.props.strokeWidth);
  };

  changeColour = (penColor) => {
    try {
      if (this.webref) {
        this.webref.injectJavaScript(`setColor('${penColor}')`);
      }
    } catch (err) {}
  };

  changeStrokeWidth = (strokeWidth) => {
    try {
      if (this.webref) {
        const ratio = PixelRatio.getPixelSizeForLayoutSize(strokeWidth);
        const adj = ratio / strokeWidth + strokeWidth;
        this.webref.injectJavaScript(`setStrokeWidth(${adj})`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  clear = () => {
    try {
      if (this.webref) {
        this.webref.injectJavaScript("clearDrawing()");
      }
    } catch (err) {
      console.error(err);
    }
  };

  undo = () => {
    try {
      if (this.webref) {
        this.webref.injectJavaScript("undoLines()");
      }
    } catch (err) {
      console.error(err);
    }
  };

  sendData = async () => {
    try {
      if (this.webref) {
        await this.webref.injectJavaScript("sendData()");
      } else {
      }
    } catch (err) {}
  };

  sendPrevData = async () => {
    try {
      if (this.webref) {
        await this.webref.injectJavaScript("sendPrevData()");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  test = async () => {
    if (this.webref) {
      await this.webref.injectJavaScript("test()");
    }
  };
  onHandlerStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      alert("Longpress");
      sharedVal.value = withSpring(sharedVal.value + nativeEvent.translationX * 3 > snapPoints[snapPoints.length - 1] ? snapPoints[snapPoints.length - 1] : sharedVal.value + nativeEvent.translationX * 3 < snapPoints[0] ? snapPoints[0] : sharedVal.value + nativeEvent.translationX * 3);
    }
    if (nativeEvent.state === State.END) {
    }
  };
  render() {
    const { penColor, strokeWidth, imgSrc } = this.props;
    const ratio = PixelRatio.getPixelSizeForLayoutSize(strokeWidth);
    const adj = ratio / strokeWidth + strokeWidth;
    let htmlStr = html
      .replace("[[LINE_WIDTH]]", adj || 12)
      .replace("[[COLOR]]", penColor || "#000")
      .replace("[[imgSrc]]", imgSrc || "")
      .replace("[[realWidth]]", wp(95));
    return (
      <View style={styles.container}>
        <WebView
          style={styles.drawBg}
          ref={(r) => (this.webref = r)}
          useWebKit
          originWhitelist={["*"]}
          scalesPageToFit
          source={{ html: htmlStr }}
          mixedContentMode={"compatibility"}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scrollEnabled={true}
          incognito={true}
          onError={(e) => {
            console.log(e);
          }}
          onMessage={async (event) => {
            try {
              event.persist();
              const params = {
                userId: this.props.userName,
                body: {
                  testName: this.props.testName,
                  testType: this.props.testType,
                  number: this.props.number,
                  drawData: JSON.stringify(JSON.parse(event.nativeEvent.data).allPoints),
                },
              };
              await this.props.API.tempSave.saveDrawData(params);
              if (JSON.parse(event.nativeEvent.data).move === "back") {
                this.props.setNumber(this.props.number - 1);
              } else if (JSON.parse(event.nativeEvent.data).move === "front") {
                this.props.setNumber(this.props.number + 1);
              }
            } catch (err) {
              console.log(err);
            }
          }}
        />
      </View>
    );
  }
}

export default ReactNativeDraw;
