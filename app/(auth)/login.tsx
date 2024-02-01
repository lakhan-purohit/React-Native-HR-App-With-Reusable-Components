import React, { useRef, useState } from "react";
import Scaffold from "../../library/ui/scaffold";
import Container from "../../library/ui/container";
import TextView from "../../library/ui/textView";
import { useTheme } from "../../Utils/theme/themeContext";
import TextInputField from "../../library/ui/textInputField";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../../library/ui/iconButton";
import SizedBox from "../../library/ui/sizedbox";
import AdeptionButton from "../../library/ui/adeptivButton";
import { router } from "expo-router";
import { ScrollView, Dimensions } from "react-native";
import Toast from "react-native-root-toast";
import ToastView from "../../Utils/toast";

const Login = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const errorMessage = useRef("");
  const { height } = Dimensions.get("window");
  const [isLoading, setIsLoading] = useState(false);
  function validation() {
    if (!email) {
      errorMessage.current = "Please enter the email.";
      setToastVisible(true);
    } else if (!password) {
      errorMessage.current = "Please enter the password.";
      setToastVisible(true);
    } else {
      setIsLoading(true);
      setTimeout(() => router.replace("/(tabs)/home"), 2000);
    }
  }
  return (
    <Scaffold is_safe_view={true}>
      <ScrollView>
        <Container
          paddingHorizontal={25}
          justifyContent="space-between"
          height={height}
        >
          <Container>
            <Container
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
            </Container>
            <TextView lable="Welcome back 👋" varient="heading" fontSize={30} />
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
              lable="Hello there, login to continue"
              varient="body"
              marginTop={5}
            />
            <SizedBox height={30} />
            <TextInputField
              onChangeText={setEmail}
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
              onChangeText={setPassword}
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
            <AdeptionButton
              want_opacity_effect
              onPress={() => {}}
              button_style={{ alignSelf: "flex-end", padding: 5, marginTop: 2 }}
            >
              <TextView
                lable="Forgot Password?"
                color={theme.colors?.primary}
              />
            </AdeptionButton>

            <SizedBox height={30} />
            <AdeptionButton
              is_loading={isLoading}
              onPress={() => {
                validation();
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
              <TextView lable="Login" color="white" />
            </AdeptionButton>
          </Container>
          <AdeptionButton
            want_opacity_effect
            onPress={() => {
              router.push("/(auth)/signup");
            }}
            button_style={{ marginBottom: 20, width: "auto", padding: 5 }}
          >
            <Container flexDirection="row" gap={5} alignSelf="center">
              <TextView lable="Didn't have an account?" />
              <TextView lable="Register" color={theme.colors?.primary} />
            </Container>
          </AdeptionButton>
        </Container>
        {toastVisible ? (
          <ToastView
            setVisibility={setToastVisible}
            visibility={toastVisible}
            message={errorMessage.current}
          />
        ) : null}
      </ScrollView>
    </Scaffold>
  );
};

export default Login;
