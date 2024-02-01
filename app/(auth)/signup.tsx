import React, { useState } from "react";
import Scaffold from "../../library/ui/scaffold";
import Container from "../../library/ui/container";
import TextView from "../../library/ui/textView";
import { useTheme } from "../../Utils/theme/themeContext";
import TextInputField from "../../library/ui/textInputField";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../../library/ui/iconButton";
import SizedBox from "../../library/ui/sizedbox";
import AdeptionButton from "../../library/ui/adeptivButton";
import { ScrollView, Dimensions } from "react-native";
import { router } from "expo-router";
import CheckBoxView from "../../library/ui/checkbox";

const SignUp = () => {
  const { height } = Dimensions.get("window");
  const { theme } = useTheme();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Scaffold is_safe_view={true}>
      <ScrollView>
        <Container
          paddingHorizontal={25}
          justifyContent="space-between"
          flex={1}
          minHeight= {height}
        >
          <Container>
            {/* <Container
              marginVertical={25}
              borderColor={theme.colors?.primary}
              borderStyle="solid"
              borderWidth={1}
              width={100}
              height={100}
              alignItems="center"
              justifyContent="center"
            >
              <TextView lable="Logo" varient="heading" fontSize={30} />
            </Container> */}
            <IconButton
              onPress={() => router.back()}
              want_opacity_effect
              alignSelf="flex-end"
              padding={2}
              radius={30}
              marginTop={10}
            >
              <Ionicons
                name="close-circle-outline"
                color={theme.colors?.primary}
                style={{ fontSize: 25 }}
              />
            </IconButton>
            <SizedBox height={10} />
            <TextView
              lable="Register Account"
              varient="heading"
              fontSize={30}
            />
            <Container flexDirection="row" gap={5} alignItems="center">
              <TextView lable="to" varient="heading" fontSize={30} />
              <TextView
                lable="HR Attendee"
                varient="heading"
                color={theme.colors?.primary}
                fontSize={30}
              />
            </Container>
            <TextView
              lable="Hello there, register to continue"
              varient="body"
              marginTop={5}
            />
            <SizedBox height={30} />

            <TextInputField
              put_label_outside
              label="First Name"
              borderColor={theme.colors?.accent}
              variants="filled"
              container_style={{
                padding: 10,
                paddingVertical: 5,
                marginTop: 5,
                gap: 0,
                height: 50,
              }}
              prefix={
                <Ionicons
                  name="person-outline"
                  style={{ fontSize: 20, color: theme.colors?.accent }}
                />
              }
              placeholder="Enter first name"
            />
            <SizedBox height={10} />
            <TextInputField
              put_label_outside
              label="Last Name"
              borderColor={theme.colors?.accent}
              variants="filled"
              container_style={{
                padding: 10,
                paddingVertical: 5,
                marginTop: 5,
                gap: 0,
                height: 50,
              }}
              prefix={
                <Ionicons
                  name="person-outline"
                  style={{ fontSize: 20, color: theme.colors?.accent }}
                />
              }
              placeholder="Enter last name"
            />
            <SizedBox height={10} />
            <TextInputField
              put_label_outside
              label="Email Address"
              borderColor={theme.colors?.accent}
              variants="filled"
              container_style={{
                padding: 10,
                paddingVertical: 5,
                marginTop: 5,
                gap: 0,
                height: 50,
              }}
              prefix={
                <Ionicons
                  name="at"
                  style={{ fontSize: 20, color: theme.colors?.accent }}
                />
              }
              placeholder="Enter email"
            />
            <SizedBox height={10} />
            <TextInputField
              put_label_outside
              label="Password"
              borderColor={theme.colors?.accent}
              variants="filled"
              container_style={{
                padding: 10,
                paddingVertical: 5,
                marginTop: 5,
                gap: 0,
                height: 50,
              }}
              prefix={
                <Ionicons
                  name="md-lock-closed-outline"
                  style={{ fontSize: 20, color: theme.colors?.accent }}
                />
              }
              suffix={
                <IconButton onPress={() => {}}>
                  <Ionicons
                    name="eye-off-outline"
                    style={{ fontSize: 20, color: theme.colors?.accent }}
                  />
                </IconButton>
              }
              placeholder="Enter password"
              secureTextEntry
            />
            <Container
              flexDirection="row"
              alignItems="flex-start"
              marginTop={15}
            >
              <CheckBoxView
                onPress={() => {
                  setIsChecked((p) => !p);
                }}
                active_icon={"checkbox-marked-outline"}
                inactive_icon="checkbox-blank-outline"
                value={isChecked}
                icon_size={25}
              />
              <Container
                flexDirection="row"
                gap={5}
                flexWrap="wrap"
               
                alignItems="center"
              >
                <TextView lable="I agree to" />
                <AdeptionButton
                  onPress={() => {}}
                  button_style={{ paddingVertical: 3 }}
                >
                  <TextView
                    lable="privacy policy"
                    color={theme.colors?.primary}
                  />
                </AdeptionButton>
                <TextView lable="&" />
                <AdeptionButton
                  onPress={() => {}}
                  button_style={{ paddingVertical: 3 }}
                >
                  <TextView
                    lable="terms condition"
                    color={theme.colors?.primary}
                  />
                </AdeptionButton>
                <TextView lable="set out by this site." />
              </Container>
            </Container>

            <SizedBox height={30} />
            <AdeptionButton
              onPress={() => {
                router.replace("/(tabs)/home")
              }}
              button_style={{
                backgroundColor: theme.colors?.primary,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 18,
                borderRadius: 18,
              }}
              android_ripple_border_radius={18}
            >
              <TextView lable="Register" color="white" />
            </AdeptionButton>
          </Container>
          <SizedBox height={20} />
          <AdeptionButton
            want_opacity_effect
            onPress={() => {
              router.back();
            }}
            button_style={{ marginBottom: 20, width: "auto", padding: 5 }}
          >
            <Container
              flexDirection="row"
              gap={5}
              alignSelf="center"
              marginBottom={5}
            >
              <TextView lable="Already have an account?" />
              <TextView lable="Login" color={theme.colors?.primary} />
            </Container>
          </AdeptionButton>
        </Container>
      </ScrollView>
    </Scaffold>
  );
};

export default SignUp;
