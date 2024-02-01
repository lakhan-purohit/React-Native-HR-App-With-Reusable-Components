import { View, Text } from "react-native";
import React from "react";
import Scaffold from "../../../library/ui/scaffold";
import Appbar from "../../../library/ui/appbar";
import TextView from "../../../library/ui/textView";
import { FlatList } from "react-native";
import Card from "../../../library/ui/card";
import Container from "../../../library/ui/container";
import { useTheme } from "../../../Utils/theme/themeContext";
import ListTile from "../../../library/ui/listtile";
import { Feather } from "@expo/vector-icons";

const Holidays = () => {
  return (
    <Scaffold is_safe_view>
      <Appbar
        center={<TextView lable="Holidays" varient="title" fontWeight="900" />}
      />
      <FlatList
        style={{ flex: 1 }}
        data={Array.from(Array(20))}
        renderItem={({ index }) => (
          <HolidayItemView index={index} key={index} />
        )}
        keyExtractor={(item) => item}
      />
    </Scaffold>
  );
};

export default Holidays;

function HolidayItemView({ index }: { index: number }) {
  const { theme } = useTheme();
  return (
    <Card
      elevation={5}
      style={{
        flexDirection: "row",
        marginHorizontal: theme.spacing?.xl,
        marginVertical: theme.spacing?.s,
        padding: 0,
        borderRadius: theme.borderRadius?.m,

        overflow: "hidden",
      }}
    >
      <Container
        height="100%"
        width={15}
        backgroundColor={
          index % 2 == 0 ? theme.colors?.primary : theme.colors?.accent
        }
      />
      <Container padding={theme.spacing?.l} flex={1}>
        <ListTile
          style={{
            alignItems: "flex-start",
            paddingVertical: theme.spacing?.m,
          }}
          leading={
            <Container gap={10} alignItems="flex-start">
              <Container flexDirection="row" gap={8} alignItems="center">
                <Feather
                  name="calendar"
                  color={theme.colors?.onBackground}
                  size={18}
                />
                <TextView
                  lable="January 26,2023"
                  varient="title"
                  fontSize={12}
                  fontWeight="900"
                />
              </Container>
              <TextView
                varient="title"
                fontWeight="900"
                lable="Republic Day"
                fontSize={22}
              />
            </Container>
          }
          traling={<TextView lable="Thursday" varient="subtitle" />}
        />
      </Container>
    </Card>
  );
}
