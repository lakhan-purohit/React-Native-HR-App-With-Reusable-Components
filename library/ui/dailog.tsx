import { TouchableWithoutFeedback, Modal } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

interface IDailog {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const Dailog = ({ open, onClose, children }: IDailog) => {
  return (
    <Modal
      style={{
        height: "auto",
        width: "auto",
        justifyContent: "center",
      }}
      transparent
      animationType="fade"
      visible={open}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          onClose();
        }}
      >
        <BlurView
          intensity={15}
          tint="dark"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        />
      </TouchableWithoutFeedback>
      {children}
    </Modal>
  );
};

export default Dailog;
