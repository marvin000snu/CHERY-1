import React, { useState, forwardRef, useImperativeHandle } from "react";
import Modal from "react-native-modal";
import AnswerSheet from "../../../working/AnswerSheet";

const AnswerPannel = forwardRef((props, ref) => {
  const {length} = props
  const [modalVisible, setModalVisible] = useState(false);
  const closeHandler = () => {
    setModalVisible(false);
  };
  useImperativeHandle(ref, () => ({
    openHandler() {
        setModalVisible(true);
    },
  }));
  return (
    <Modal isVisible={modalVisible} style={{ margin: 0, padding: 0 }}>
      <AnswerSheet closeHandler={closeHandler} length={length} />
    </Modal>
  );
});

export default AnswerPannel;
