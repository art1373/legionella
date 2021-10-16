import React from "react";
import { DrawerActions } from "@react-navigation/native";

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};
export const navigateAndReset = (route) => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef?.current?.reset({
      index: 0,
      routes: [{ name: route }],
    });
  }
};

export default {
  navigate,
  navigateAndReset,
  // setTopLevelNavigator,
};
