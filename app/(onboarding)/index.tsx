import React from "react";
import { FlatList } from "react-native";
import Animated, {
  useSharedValue,
  SharedValue,
  useAnimatedRef,
  useAnimatedScrollHandler,
} from "react-native-reanimated";
import AnimatedDot from "../../component/ui/AnimatedDot";
import Ionicons from "@expo/vector-icons/Ionicons";
import TopView from "./component/topView";
import { onboardingItemData } from "./onboardingData";
import { router } from "expo-router";
import Scaffold from "../../library/ui/scaffold";
import Container from "../../library/ui/container";
import AdeptionButton from "../../library/ui/adeptivButton";
import { useTheme } from "../../Utils/theme/themeContext";

function Onboarding() {
  const flatRef = useAnimatedRef<FlatList<typeof onboardingItemData>>();
  const currentIndex = useSharedValue(0);
  const runtime_width = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      runtime_width.value = event.contentOffset.x;
      const xPosition = event.contentOffset.x;
      const totalWidth = event.layoutMeasurement.width;
      const newIndex = Math.round(xPosition / totalWidth);
      if (newIndex !== currentIndex.value) {
        currentIndex.value = newIndex;
      }
    },
  });
  return (
    <Scaffold>
      <Container
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Animated.FlatList
        showsHorizontalScrollIndicator={false}
          ref={flatRef}
          data={onboardingItemData}
          horizontal
          pagingEnabled
          renderItem={({ item, index }) => (
            <TopView index={index} runtime_width={runtime_width} item={item} />
          )}
          scrollEventThrottle={16}
          // initialScrollIndex={0}
          bounces
          alwaysBounceHorizontal
          onScroll={onScroll}
        />

        <BottomUI
          flatRef={flatRef}
          currentIndex={currentIndex}
          runtime_width={runtime_width}
        />
      </Container>
    </Scaffold>
  );
}

export default Onboarding;

function BottomUI({
  flatRef,
  currentIndex,
  runtime_width,
}: {
  flatRef: React.RefObject<FlatList<any>>;
  currentIndex: SharedValue<number>;
  runtime_width: SharedValue<number>;
}) {
  const { theme } = useTheme();
  return (
    <Container
      style={{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 30,
      }}
    >
      <Indicator runtime_width={runtime_width} />
      <AdeptionButton
      android_ripple_border_radius={25}
        onPress={() => {
          if (currentIndex.value !== 2) {
            flatRef.current?.scrollToIndex({
              index: currentIndex.value + 1,
              animated: true,
            });
          } else {
            router.replace("/(auth)/login");
          }
        }}
        button_style={{
          borderRadius: 25,
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: theme.colors?.primary,
          width: 50,
          height: 50,
          elevation: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons name="arrow-redo-circle" size={24} color="white" />
      </AdeptionButton>
    </Container>
  );
}

function Indicator({ runtime_width }: { runtime_width: SharedValue<number> }) {
  // console.log("currentIndex", currentIndex);
  // const AnimatedBox = Animated.createAnimatedComponent(Box);
  return (
    <Container style={{flexDirection:"row",gap:10}}>
      <AnimatedDot index={0} runtime_width={runtime_width} />
      <AnimatedDot index={1} runtime_width={runtime_width} />
      <AnimatedDot index={2} runtime_width={runtime_width} />
    </Container>
  );
}
