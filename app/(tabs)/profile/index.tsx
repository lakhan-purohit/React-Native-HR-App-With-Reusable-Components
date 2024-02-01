import React, { useState } from "react";
import Scaffold from "../../../library/ui/scaffold";
import Container from "../../../library/ui/container";
import TextView from "../../../library/ui/textView";
import CircleAvatar from "../../../library/ui/circleAvatar";
import { Image } from "expo-image";
import { useTheme } from "../../../Utils/theme/themeContext";
import { StatusBar } from "expo-status-bar";
import ListTile from "../../../library/ui/listtile";
import AdeptionButton from "../../../library/ui/adeptivButton";
import { Dimensions, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import SizedBox from "../../../library/ui/sizedbox";
import Appbar from "../../../library/ui/appbar";
import IconButton from "../../../library/ui/iconButton";
import BottomModalSheet from "../../../library/ui/bottomModal";
import { TPickImageResult, pickImageAsync } from "../../../Utils/pickImage";
import ConfirmationDailog from "../../../library/ui/confirmationDailog";
import { router } from "expo-router";
const Profile = () => {
  const { theme } = useTheme();
  const [selectedImage, setSelectedImage] = useState<TPickImageResult>(null);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  return (
    <Scaffold is_safe_view>
      <StatusBar
        style={theme.colors?.onBackground == "#FFF" ? "light" : "dark"}
      />
      <ScrollView>
        <Appbar
          center={<TextView lable="Profile" varient="title" fontWeight="900" />}
        />

        <Container flex={1}>
          <Container justifyContent="center" alignItems="center">
            <MembersView
              selectedImage={selectedImage}
              open={() => setBottomSheetOpen(true)}
            />
          </Container>
          <SizedBox height={30} />
          <MenuCardView onPress={() => {}} leadingIcon="user" title="Profile" />
          <MenuCardView
            onPress={() => {}}
            leadingIcon="settings"
            title="Setting"
          />
          <MenuCardView
            onPress={() => {}}
            leadingIcon="book"
            title="Terms & Condition"
          />
          <MenuCardView
            onPress={() => {}}
            leadingIcon="shield"
            title="Privacy Policy"
          />
          <MenuCardView
            onPress={() => setConfirmation(true)}
            leadingIcon="log-out"
            title="Logout"
          />
        </Container>
      </ScrollView>

      <BottomModalSheet
        onclose={() => setBottomSheetOpen(false)}
        open={bottomSheetOpen}
      >
        <BottomModalSheetItem
          iconName="camera"
          onPress={async () => {
            setBottomSheetOpen(false);
            const result = await pickImageAsync({
              mediaTypeOptions: "Images",
              lunchType: "CAMERA",
            });
            setSelectedImage(result);
          }}
          title="Camera"
        />
        <Container
          width="100%"
          height={1.5}
          backgroundColor={theme.colors?.lightAccent}
        />
        <BottomModalSheetItem
          iconName="image"
          onPress={async () => {
            setBottomSheetOpen(false);
            const result = await pickImageAsync({
              mediaTypeOptions: "Images",
              lunchType: "GALLERY",
            });
            setSelectedImage(result);
          }}
          title="Gallery"
        />
      </BottomModalSheet>

      <ConfirmationDailog
        onClose={() => setConfirmation(false)}
        onNo={() => setConfirmation(false)}
        onYes={() => {
          setConfirmation(false);
          router.replace("/(auth)/login");
        }}
        open={confirmation}
        subtitle="Are you sure, you want to logout ?"
        title="Logout!"
      />
    </Scaffold>
  );
};

export default Profile;

function MembersView({
  open,
  selectedImage,
}: {
  open: () => void;
  selectedImage: TPickImageResult;
}) {
  const { theme } = useTheme();
  const { width } = Dimensions.get("screen");
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <Container
      marginTop={theme.spacing?.s}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Container position="relative">
        <CircleAvatar radius={110}>
          <Image
            style={{
              height: "100%",
              width: "100%",
            }}
            source={
              selectedImage?.length
                ? { uri: selectedImage[0].url }
                : "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            }
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </CircleAvatar>

        <Container position="absolute" bottom={0} right={10}>
          <IconButton onPress={open} backgroundColor={theme.colors?.primary}>
            <Feather name="image" color="white" size={15} />
          </IconButton>
        </Container>
      </Container>

      <TextView
        marginTop={theme.spacing?.m}
        lable="Pratik Shikhalita"
        varient="title"
        fontWeight="900"
      />
      <TextView
        marginBottom={theme.spacing?.xl}
        lable="Lead AI Developer"
        varient="subtitle"
        fontSize={14}
      />
      <AdeptionButton
        android_ripple_border_radius={theme.borderRadius?.xl}
        onPress={() => {}}
        button_style={{
          width: width * 0.9,
          backgroundColor: theme.colors?.primary,
          padding: theme.spacing?.l,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: theme.borderRadius?.xl,
        }}
      >
        <TextView
          lable="Edit Profile"
          color={theme.colors?.white}
          fontWeight="900"
        />
      </AdeptionButton>
    </Container>
  );
}

function MenuCardView({
  leadingIcon,
  title,
  onPress,
}: {
  leadingIcon: any;
  title: string;
  onPress: () => void;
}) {
  const { theme } = useTheme();
  const { width } = Dimensions.get("screen");
  return (
    <Container marginBottom={theme.spacing?.m}>
      <AdeptionButton
        onPress={onPress}
        button_style={{
          paddingHorizontal: theme.spacing?.xl,
          alignItems: "center",
          justifyContent: "center",
          height: 50,
        }}
      >
        <ListTile
          style={{
            alignItems: "center",
            paddingBottom: 0,
          }}
          leading={
            <Container
              backgroundColor={theme.colors?.lightAccent}
              padding={theme.spacing?.xxs}
              borderRadius={100}
              height={30}
              width={30}
              justifyContent="center"
              alignItems="center"
            >
              <Feather
                name={leadingIcon}
                style={{
                  fontSize: 18,
                }}
                color={title != "Logout" ? theme.colors?.onBackground : "red"}
              />
            </Container>
          }
          center={
            <Container flex={1} marginLeft={theme.spacing?.m}>
              <TextView
                textAlign="left"
                lable={title}
                fontWeight="bold"
                varient="title"
                fontSize={15}
                color={title != "Logout" ? theme.colors?.onBackground : "red"}
              />
            </Container>
          }
          traling={
            <Container
              justifyContent="center"
              alignItems="center"
              //  backgroundColor="red"
            >
              <Feather
                style={{ fontSize: 25 }}
                name="chevron-right"
                color={title != "Logout" ? theme.colors?.onBackground : "red"}
              />
            </Container>
          }
        />
      </AdeptionButton>
      {title != "Logout" ? (
        <Container
          height={1.5}
          backgroundColor={theme.colors?.lightAccent}
          width={width * 0.9}
          alignSelf="center"
        />
      ) : null}
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
