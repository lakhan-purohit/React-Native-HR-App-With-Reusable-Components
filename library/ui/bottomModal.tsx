import React, { useEffect, useRef } from "react";
import { Modalize } from "react-native-modalize";
import { BlurView } from "expo-blur";
import { useTheme } from "../../Utils/theme/themeContext";

interface IBottomModalSheet {
  children: React.ReactNode;
  blurIntensity?: number;
  open: boolean;
  onclose: () => void;
}
const BottomModalSheet = ({
  children,
  blurIntensity = 15,
  open,
  onclose,
}: IBottomModalSheet) => {
  const modalizeRef = useRef<Modalize>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (open) {
      modalizeRef.current?.open();
    } else {
      modalizeRef.current?.close();
    }
  }, [open]);

  return (
    <>
      {open && (
        <BlurView
          intensity={blurIntensity}
          tint="dark"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 0,
          }}
        />
      )}

      <Modalize
        onClose={() => {
          setTimeout(() => {
            onclose();
          }, 10);
        }}
        ref={modalizeRef}
        overlayStyle={{
          opacity: 0,
          backgroundColor: "transparent",
        }}
        adjustToContentHeight
        modalStyle={{
          backgroundColor: theme.colors?.background,
          borderTopRightRadius: theme.borderRadius?.l,
          borderTopLeftRadius: theme.borderRadius?.l,
          position: "relative",
        }}
      >
        {children}
      </Modalize>
    </>
  );
};

export default BottomModalSheet;
