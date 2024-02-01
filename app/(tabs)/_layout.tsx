import React from "react";
import { Tabs } from "expo-router";
import { useTheme } from "../../Utils/theme/themeContext";
import Container from "../../library/ui/container";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import TextView from "../../library/ui/textView";

const Layout = () => {
  const { theme } = useTheme();
  return (
    <Tabs
      backBehavior="order"
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors?.primary,
        tabBarActiveBackgroundColor: theme.colors?.lightAccent,
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontWeight: "900",
        },
        tabBarStyle: {
          backgroundColor: theme.colors?.background,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <TabBarView
                focused={focused}
                size={size}
                iconName="home"
                label="Home"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="calender"
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <TabBarView
                focused={focused}
                size={size}
                iconName="calendar"
                label="Calendar"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="members"
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <TabBarView
                focused={focused}
                size={size}
                iconName="users"
                label="Memders"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="holidays"
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <TabBarView
                focused={focused}
                size={size}
                iconName="umbrella"
                label="Holidays"
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, size }) => {
            return (
              <TabBarView
                focused={focused}
                size={size}
                iconName="user"
                label="Profile"
              />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;

function TabBarView({
  focused,
  size,
  iconName,
  label,
}: {
  focused: boolean;
  size: number;
  iconName: any;
  label: string;
}) {
  const { theme } = useTheme();
  return (
    <Container justifyContent="center" alignItems="center">
      <Feather
        name={iconName}
        size={20}
        color={focused ? theme.colors?.primary : theme.colors?.accent}
      />
      <TextView
        lable={label}
        fontWeight="900"
        fontSize={10}
        color={focused ? theme.colors?.primary : theme.colors?.accent}
      />
    </Container>
  );
}
