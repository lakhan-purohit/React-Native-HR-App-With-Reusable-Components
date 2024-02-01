import React, { useState } from "react";
import Scaffold from "../../../library/ui/scaffold";
import Container from "../../../library/ui/container";
import TextView from "../../../library/ui/textView";
import { useTheme } from "../../../Utils/theme/themeContext";
import { StatusBar } from "expo-status-bar";
import ListTile from "../../../library/ui/listtile";
import IconButton from "../../../library/ui/iconButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AdeptionButton from "../../../library/ui/adeptivButton";
import { Dimensions, FlatList } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Card from "../../../library/ui/card";
import SizedBox from "../../../library/ui/sizedbox";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const Calender = () => {
  const { theme } = useTheme();
  const { height } = Dimensions.get("window");
  const headerHeight = 230 + theme.spacing?.xxl!;
  const appBarHeight = 60;
  const tabBarHeight = 50;
  const paddingTop = headerHeight + appBarHeight + tabBarHeight * 2;
  const scrollYPosition = useSharedValue(0);
  return (
    <Scaffold>
      <StatusBar
        style={theme.colors?.onBackground == "#FFF" ? "light" : "dark"}
      />
      <AppBar />
      <FlatList
      scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={{
          position: "absolute",
          height: height,
          paddingTop: paddingTop,
          bottom: 0,
          left: theme.spacing?.xl,
          right: theme.spacing?.xl,
          flex: 1,
          zIndex: -1,
        }}
        contentContainerStyle={{
          // paddingHorizontal: theme.spacing?.xl,
          backgroundColor: theme.colors?.background,
          paddingTop: theme.spacing?.l,
        }}
        data={[1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 15]}
        renderItem={({ item, index }) => <LeaveItemView key={index} />}
        onScroll={(e) => {
          // console.log(
          //   e.nativeEvent.contentOffset.y,
          //   "==>",
          //   headerHeight - e.nativeEvent.contentOffset.y,
          //   `h- ${height / 2 - 60}`
          // );
          scrollYPosition.value = interpolate(
            e.nativeEvent.contentOffset.y,
            [0, headerHeight],
            [0, -headerHeight],
            Extrapolate.CLAMP
          );
        }}
      />

      <Container
        paddingHorizontal={theme.spacing?.xl}
        position="relative"
        flex={1}
      >
        <Container
          height={headerHeight}
          overflow="hidden"
          position="sticky"
          zIndex={-2}
        >
          <Container
            marginBottom={theme.spacing?.l}
            gap={15}
            flexDirection="row"
          >
            <LeaveCardView
              lightColor={theme.colors?.leaveBalanceLight!}
              subtitle="20"
              title={"Leave Balance"}
              darkColor={theme.colors?.leaveBalance!}
            />
            <LeaveCardView
              lightColor={theme.colors?.leaveApproveLight!}
              subtitle="5"
              title={"Leave Approve"}
              darkColor={theme.colors?.leaveApprove!}
            />
          </Container>
          <Container gap={15} flexDirection="row">
            <LeaveCardView
              lightColor={theme.colors?.leavePendingLight!}
              subtitle="4"
              title={"Leave Pending"}
              darkColor={theme.colors?.leavePending!}
            />
            <LeaveCardView
              lightColor={theme.colors?.leaveCancelLight!}
              subtitle="10"
              title={"Leave Cancel"}
              darkColor={theme.colors?.leaveCancel!}
            />
          </Container>
        </Container>

        <Animated.View
          style={{
            transform: [
              {
                translateY: scrollYPosition,
              },
            ],
          }}
        >
          <TabBar />
        </Animated.View>
      </Container>
    </Scaffold>
  );
};

export default Calender;

interface ILeaveCardView {
  title: string;
  subtitle: string;
  darkColor: string;
  lightColor: string;
}
function LeaveCardView({
  title,
  subtitle,
  darkColor,
  lightColor,
}: ILeaveCardView) {
  const { theme } = useTheme();
  return (
    <Container
      flex={1}
      borderStyle="solid"
      borderWidth={1}
      borderRadius={theme.borderRadius?.m}
      backgroundColor={lightColor}
      borderColor={darkColor}
      padding={theme.spacing?.s}
      gap={6}
    >
      <TextView
        lable={title}
        varient="heading"
        fontSize={22}
        fontWeight="900"
      />
      <TextView
        lable={subtitle}
        varient="title"
        fontSize={20}
        color={darkColor}
      />
    </Container>
  );
}

function AppBar() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <ListTile
      style={{
        height: 60 + insets.top,
        paddingHorizontal: theme.spacing?.xl,
        position: "sticky",
        zIndex: 1,
        backgroundColor: theme.colors?.background,
        paddingTop: insets.top,
      }}
      traling={
        <Container flexDirection="row">
          <IconButton onPress={() => {}}>
            <MaterialCommunityIcons
              color={theme.colors?.onBackground}
              name="plus-box-outline"
              style={{
                fontSize: 20,
              }}
            />
          </IconButton>
        </Container>
      }
      center={<TextView lable="All Leaves" varient="title" fontWeight="900" />}
    />
  );
}

function TabBar() {
  const { theme } = useTheme();
  const { width } = Dimensions.get("screen");
  const tabPosition = useSharedValue(0);
  const [tabIndex, setTabindex] = useState(0);

  const buttonWidth = (width - theme.spacing?.xl! * 2) / 3;
  const changeTab = (index: number) => {
    tabPosition.value = withTiming(
      index * ((width - theme.spacing?.xl! * 2) / 3)
    );
    setTabindex(index);
  };
  return (
    <Container backgroundColor={theme.colors?.background}>
      <Container
        backgroundColor={theme.colors?.lightAccent}
        borderRadius={theme.borderRadius?.m}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height={50}
        zIndex={103}
        paddingVertical={theme.spacing?.xxs}
        marginTop={theme.spacing?.l}
        position="relative"
        gap={0}
      >
        <Animated.View
          style={{
            height: "100%",
            left: tabPosition,
            position: "absolute",
            width: buttonWidth,
            borderRadius: theme.borderRadius?.m,
            backgroundColor: "transparent",
            borderColor: theme.colors?.primary,
            borderWidth: 1,
            borderStyle: "solid",
            borderRightWidth: 0,
            borderLeftWidth: 0,
          }}
        />

        <TabViewButton
          changeFunction={changeTab}
          currentIndex={tabIndex}
          index={0}
          title="Upcoming"
        />
        <TabViewButton
          changeFunction={changeTab}
          currentIndex={tabIndex}
          index={1}
          title="Past"
        />

        <TabViewButton
          changeFunction={changeTab}
          currentIndex={tabIndex}
          index={2}
          title="Team Leave"
        />
      </Container>
    </Container>
  );
}

interface ITabViewButton {
  changeFunction: (index: number) => void;
  title: string;
  index: number;
  currentIndex: number;
}
function TabViewButton({
  changeFunction,
  title,
  index,
  currentIndex,
}: ITabViewButton) {
  const { theme } = useTheme();
  return (
    <AdeptionButton
      button_style={{
        height: "100%",
        justifyContent: "center",
        flex: 1,
      }}
      onPress={() => {
        changeFunction(index);
      }}
      want_opacity_effect
    >
      <TextView
        lable={title}
        color={
          currentIndex == index ? theme.colors?.primary : theme.colors?.accent
        }
        textAlign="center"
      />
    </AdeptionButton>
  );
}

function LeaveItemView() {
  const { theme } = useTheme();
  return (
    <Card
      style={{
        borderRadius: theme.borderRadius?.m,
        marginBottom: theme.spacing?.m,
      }}
    >
      <Container
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Container>
          <TextView lable="Date" varient="title" />
          <TextView lable="Mar 10,2023 - Mar 12,2023" varient="subtitle" />
        </Container>
        <Container
          backgroundColor={theme.colors?.leaveApproveLight}
          padding={theme.spacing?.m}
          borderRadius={theme.borderRadius?.m}
        >
          <TextView lable="Approved" color={theme.colors?.leaveApprove} />
        </Container>
      </Container>
      <Container
        marginVertical={theme.spacing?.m}
        width="100%"
        height={1}
        backgroundColor={theme.colors?.lightAccent}
      />
      <ListTile
        leading={
          <Container flex={1} alignItems="flex-start" gap={5}>
            <TextView lable="Apply Days" varient="subtitle" />
            <TextView lable="2 Days" varient="title" fontSize={14} />
          </Container>
        }
        center={
          <Container flex={1} alignItems="flex-start" gap={5}>
            <TextView lable="Leave Balance" varient="subtitle" />
            <TextView lable="18 Days" varient="title" fontSize={14} />
          </Container>
        }
        traling={
          <Container flex={1} alignItems="flex-start" gap={5}>
            <TextView lable="Approved By" varient="subtitle" />
            <TextView
              lable="Lakhan P."
              varient="title"
              fontSize={14}
              flexWrap="wrap"
              numberOfLines={1}
            />
          </Container>
        }
      />
    </Card>
  );
}
