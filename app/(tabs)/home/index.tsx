import React, { useEffect, useRef, useState } from "react";
import Scaffold from "../../../library/ui/scaffold";
import Container from "../../../library/ui/container";
import TextView from "../../../library/ui/textView";
import { Image } from "expo-image";
import ListTile from "../../../library/ui/listtile";
import CircleAvatar from "../../../library/ui/circleAvatar";
import IconButton from "../../../library/ui/iconButton";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../../../Utils/theme/themeContext";
import { StatusBar } from "expo-status-bar";
import Card from "../../../library/ui/card";
import { BlurView } from "expo-blur";

import {
  Dimensions,
  View,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import SizedBox from "../../../library/ui/sizedbox";
import AdeptionButton from "../../../library/ui/adeptivButton";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Dailog from "../../../library/ui/dailog";

const MIcon = Animated.createAnimatedComponent(MaterialCommunityIcons);
const Home = () => {
  const { theme } = useTheme();
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const { width } = Dimensions.get("window");
  const [isCheckIn, setCheckIn] = useState(false);
  const swipeX = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationX > 0) {
        swipeX.value = event.translationX;
      }
    })
    .runOnJS(true)
    .onEnd((event) => {
      swipeX.value = withTiming(0);

      if (event.translationX > width / 2) {
        callOnEnd();
      }
    });

  function callOnEnd() {
    setCheckIn((p) => !p);
  }

  const sSwipe = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: swipeX.value,
        },
      ],
    };
  });

  const sBgColorX = useAnimatedStyle(() => {
    if (swipeX.value > width / 2) {
      return {
        backgroundColor: isCheckIn ? "#fe8b81" : theme.colors?.primary,
      };
    } else {
      return {
        backgroundColor: isCheckIn ? theme.colors?.primary : "#fe8b81",
      };
    }
  });

  const sIconColorX = useAnimatedStyle(() => {
    if (swipeX.value > width / 2) {
      return {
        color: isCheckIn ? "#fe8b81" : theme.colors?.primary,
        transform: [
          {
            rotate: "180deg",
          },
        ],
      };
    } else {
      return {
        color: isCheckIn ? theme.colors?.primary : "#fe8b81",
        transform: [
          {
            rotate: withTiming("0deg"),
          },
        ],
      };
    }
  });

  return (
    <Scaffold is_safe_view>
      <Container
        style={{
          // paddingBottom: theme.spacing?.l,
          height: "100%",
          position: "relative",
        }}
      >
        <StatusBar
          style={theme.colors?.onBackground == "#FFF" ? "light" : "dark"}
        />
        <UserDetails setWelcomeVisible={setWelcomeVisible} />
        <SizedBox height={theme.spacing?.xxl} />
        <Container
          backgroundColor={theme.colors?.lightAccent}
          flex={1}
          padding={theme.spacing?.m}
          paddingTop={theme.spacing?.xl}
          paddingBottom={0}
          borderTopRightRadius={theme.borderRadius?.xl}
          borderTopLeftRadius={theme.borderRadius?.xl}
        >
          <ScrollView showsVerticalScrollIndicator={false} bounces>
            {/* Attendance  ***********  */}
            <Container>
              <TextView
                lable="Today Attendance"
                varient="title"
                marginBottom={theme.spacing?.l}
                marginLeft={theme.spacing?.s}
              />
              <Container
                flexDirection="row"
                gap={20}
                paddingHorizontal={theme.spacing?.s}
              >
                <AttendanceCard
                  iconName="food-fork-drink"
                  type="Check In"
                  subtitle="On Time"
                  title="10:30 am"
                />

                <AttendanceCard
                  iconName="food-steak"
                  type="Check Out"
                  subtitle="Go Home"
                  title="7:30 pm"
                />
              </Container>

              <Container
                flexDirection="row"
                gap={20}
                paddingHorizontal={theme.spacing?.s}
              >
                <AttendanceCard
                  iconName="calendar-month"
                  type="Breking Time"
                  subtitle="Avg Time 30 min"
                  title="00:30 min"
                />

                <AttendanceCard
                  iconName="folder-network-outline"
                  type="Total Days"
                  subtitle="Working Days"
                  title="28"
                />
              </Container>
            </Container>

            {/* Activity **************  */}
            <SizedBox height={theme.spacing?.l} />
            <Container flexDirection="row" justifyContent="space-between">
              <TextView
                lable="Your Activity"
                varient="title"
                marginBottom={theme.spacing?.l}
                marginLeft={theme.spacing?.s}
              />

              <AdeptionButton
                onPress={() => {}}
                button_style={{ paddingHorizontal: theme.spacing?.xs }}
              >
                <TextView lable="View All" color={theme.colors?.primary} />
              </AdeptionButton>
            </Container>

            <ActivityView />
            <ActivityView />
            <ActivityView />
            <ActivityView />
            <ActivityView />
            <SizedBox height={70} />
          </ScrollView>
        </Container>
      </Container>

      <Animated.View
        style={[
          {
            // backgroundColor: bgColorX.value ,
            // backgroundColor: "#fe8b81",
            position: "fixed",
            bottom: 65,
            right: 20,
            left: 20,
            width: "90%",
            flexDirection: "row",
            gap: 10,
            padding: theme.spacing?.s,
            paddingVertical: theme.spacing?.m,
            borderRadius: theme.borderRadius?.m,
            alignItems: "center",
          },
          sBgColorX,
          // { backgroundColor: bgColorX.value },
        ]}
      >
        <GestureDetector gesture={gesture}>
          <Animated.View style={[sSwipe]}>
            <View
              style={[
                {
                  borderRadius: theme.spacing?.s,
                  backgroundColor: theme.colors?.onPrimary,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              <MIcon
                name="arrow-right-thin"
                style={[
                  {
                    fontSize: 30,
                  },
                  sIconColorX,
                ]}
              />
            </View>
          </Animated.View>
        </GestureDetector>
        <TextView
          flex={1}
          textAlign="center"
          lable={isCheckIn ? "Swipe to Check Out" : "Swipe to Check In"}
          varient="title"
          fontSize={15}
          color={theme.colors?.white}
        />
      </Animated.View>

      <Dailog
        open={welcomeVisible}
        onClose={() => {
          setWelcomeVisible(false);
        }}
      >
        <Container justifyContent="center" alignItems="center" flex={1}>
          <Container
            padding={theme.spacing?.l}
            borderRadius={15}
            backgroundColor={theme.colors?.background}
            alignItems="center"
          >
            <TextView
              lable="Congratulation 🎉"
              varient="heading"
              color={theme.colors?.primary}
              fontSize={30}
            />
            <TextView
              lable="Your account is ready to use."
              varient="subtitle"
              fontSize={15}
              marginTop={10}
            />
            <AdeptionButton
              button_style={{
                backgroundColor: theme.colors?.primary,
                padding: theme.spacing?.l,
                borderRadius: theme.borderRadius?.m,
                marginTop: theme.spacing?.xxl,
                width: "100%",
              }}
              onPress={() => setWelcomeVisible(false)}
            >
              <TextView lable="Back To Home" color={theme.colors?.white} />
            </AdeptionButton>
          </Container>
        </Container>
      </Dailog>
    </Scaffold>
  );
};

export default Home;

function UserDetails({
  setWelcomeVisible,
}: {
  setWelcomeVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { theme } = useTheme();
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <Container
      justifyContent="flex-start"
      alignItems="center"
      paddingVertical={theme.spacing?.m}
      paddingHorizontal={theme.spacing?.m}
    >
      <ListTile
        leading={
          <Container>
            <CircleAvatar radius={40}>
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                }}
                source="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
              />
            </CircleAvatar>
          </Container>
        }
        center={
          <Container
            flex={1}
            paddingHorizontal={theme.spacing?.m}
            marginBottom={3}
          >
            <TextView lable="Pratik Shikhaliya" varient="title" />
            <TextView lable="AI Developer" varient="subtitle" />
          </Container>
        }
        traling={
          <Container
            borderColor={theme.colors?.accent}
            borderWidth={0.5}
            borderStyle="solid"
            borderRadius={100}
          >
            <IconButton
              onPress={() => {
                setWelcomeVisible((p) => !p);
              }}
              radius={35}
            >
              <Ionicons
                name="notifications"
                style={{ fontSize: 18 }}
                color={theme.colors?.onBackground}
              />
            </IconButton>
          </Container>
        }
      />
    </Container>
  );
}

interface AttendanceCardProps {
  iconName: any;
  type: string;
  title: string;
  subtitle: string;
}

function AttendanceCard({
  iconName,
  type,
  title,
  subtitle,
}: AttendanceCardProps) {
  const { theme } = useTheme();
  return (
    <Card
      elevation={8}
      style={{
        height: 100,
        borderRadius: theme.borderRadius?.m,
        justifyContent: "space-between",
        flex: 1,
        marginBottom: theme.spacing?.l,
      }}
    >
      <Container flexDirection="row" alignItems="center" gap={8}>
        <Container
          height={30}
          width={30}
          padding={theme.spacing?.xxs}
          borderRadius={theme.borderRadius?.s}
          alignItems="center"
          justifyContent="center"
          backgroundColor="#EAF3FF"
        >
          <MaterialCommunityIcons
            color={theme.colors?.primary}
            name={iconName}
            style={{
              fontSize: 20,
            }}
          />
        </Container>
        <TextView varient="subtitle" lable={type} fontSize={14} />
      </Container>

      <Container>
        <TextView lable={title} varient="title" fontWeight="900" />
        <TextView lable={subtitle} varient="subtitle" />
      </Container>
    </Card>
  );
}

function ActivityView() {
  const { theme } = useTheme();
  return (
    <Card
      style={{
        borderRadius: theme.borderRadius?.m,
        margin: theme.borderRadius?.s,
        marginTop: 0,
        overflow: "hidden",
      }}
    >
      <ListTile
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
        leading={
          <Container
            backgroundColor="#EAF3FF"
            borderRadius={theme.borderRadius?.s}
            padding={theme.spacing?.s}
            justifyContent="center"
            alignItems="center"
          >
            <MaterialCommunityIcons
              name="laptop"
              color={theme.colors?.primary}
            />
          </Container>
        }
        center={
          <Container flex={1} paddingHorizontal={theme.spacing?.m}>
            <TextView lable="Check In" varient="title" />
            <TextView lable="April 17,2023" varient="subtitle" />
          </Container>
        }
        traling={
          <Container>
            <TextView lable="12:30 am" varient="title" />
            <TextView lable="On Time" varient="subtitle" />
          </Container>
        }
      />
    </Card>
  );
}
