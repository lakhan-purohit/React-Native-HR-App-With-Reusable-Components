import React, { useState } from "react";
import Scaffold from "../../../library/ui/scaffold";
import Container from "../../../library/ui/container";
import TextView from "../../../library/ui/textView";
import { useTheme } from "../../../Utils/theme/themeContext";
import ListTile from "../../../library/ui/listtile";
import IconButton from "../../../library/ui/iconButton";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import CircleAvatar from "../../../library/ui/circleAvatar";
import { Image } from "expo-image";
import { FlatList } from "react-native";
import AdeptionButton from "../../../library/ui/adeptivButton";
import Appbar from "../../../library/ui/appbar";
import { callNumber } from "../../../Utils/lunchCaller";
import BottomModalSheet from "../../../library/ui/bottomModal";

const Members = () => {
  const { theme } = useTheme();
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  return (
    <Scaffold is_safe_view>
      <StatusBar
        style={theme.colors?.onBackground == "#FFF" ? "light" : "dark"}
      />
      <Appbar
        traling={
          <Container flexDirection="row">
            <IconButton onPress={() => {}}>
              <MaterialCommunityIcons
                color={theme.colors?.onBackground}
                name="dots-vertical"
                style={{
                  fontSize: 20,
                }}
              />
            </IconButton>
          </Container>
        }
        center={
          <TextView lable="Team Members" varient="title" fontWeight="900" />
        }
      />
      <FlatList
        initialNumToRender={16}
        style={{
          flex: 1,
        }}
        data={Array.from(Array(30))}
        renderItem={({ item, index }) => (
          <MembersView open={() => setBottomSheetOpen(true)} key={index} />
        )}
      />

      <BottomModalSheet
        onclose={() => setBottomSheetOpen(false)}
        open={bottomSheetOpen}
      >
        <BottomModalSheetItem
          iconName="phone-call"
          onPress={() => {
            setBottomSheetOpen(false);
            callNumber("8238287787");
          }}
          title="Call"
        />
        <Container
          width="100%"
          height={1.5}
          backgroundColor={theme.colors?.lightAccent}
        />
        <BottomModalSheetItem
          iconName="trash-2"
          onPress={() => setBottomSheetOpen(false)}
          title="Delete"
          color="red"
        />
      </BottomModalSheet>
    </Scaffold>
  );
};

export default Members;

function MembersView({ open }: { open: () => void }) {
  const { theme } = useTheme();
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <Container marginTop={theme.spacing?.s} marginVertical={theme.spacing?.xs}>
      <AdeptionButton
        button_style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: theme.spacing?.xl,
          paddingVertical: theme.spacing?.xs,
        }}
        onPress={() => {}}
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
              <TextView lable="Raj Tiwari" varient="title" />
              <TextView lable="rajtiwari@gmail.com" varient="subtitle" />
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
                  open();
                }}
                radius={35}
              >
                <MaterialCommunityIcons
                  name="dots-vertical"
                  style={{ fontSize: 18 }}
                  color={theme.colors?.onBackground}
                />
              </IconButton>
            </Container>
          }
        />
      </AdeptionButton>
      <Container
        height={1.5}
        backgroundColor={theme.colors?.lightAccent}
        width="100%"
      />
    </Container>
  );
}

interface IBottomModalSheetItem {
  onPress: () => void;
  iconName: any;
  title: string;
  color?: string;
}
function BottomModalSheetItem({
  onPress,
  iconName,
  title,
  color,
}: IBottomModalSheetItem) {
  const { theme } = useTheme();
  return (
    <AdeptionButton
      want_opacity_effect
      onPress={() => {
        onPress();
      }}
      button_style={{
        padding: theme.spacing?.l,
      }}
    >
      <ListTile
        style={{
          gap: 10,
        }}
        leading={
          <Feather
            name={iconName}
            color={color ?? theme.colors?.primary}
            size={25}
          />
        }
        center={
          <TextView
            lable={title}
            varient="title"
            flex={1}
            textAlign="left"
            color={color ?? theme.colors?.onBackground}
          />
        }
      />
    </AdeptionButton>
  );
}
