import React from "react";
import { Stack } from "expo-router";
import Scaffold from "../../library/ui/scaffold";

const _layout = () => {
 
  return (
    
    <Scaffold>
      <Stack initialRouteName="login" screenOptions={{headerShown:false, animation: "slide_from_right",}}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
    </Scaffold>
  );
};

export default _layout;
