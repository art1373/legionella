import * as React from "react";
import { Dimensions } from "react-native";

const isPortrait = () => {
  const dim = Dimensions.get("screen");
  return dim.height >= dim.width;
};

export function useOrientation(): "PORTRAIT" | "LANDSCAPE" {
  const [orientation, setOrientation] = React.useState<
    "PORTRAIT" | "LANDSCAPE"
  >(isPortrait() ? "PORTRAIT" : "LANDSCAPE");

  React.useEffect(() => {
    const callback = () =>
      setOrientation(isPortrait() ? "PORTRAIT" : "LANDSCAPE");

    Dimensions.addEventListener("change", callback);

    return () => {
      Dimensions.removeEventListener("change", callback);
    };
  }, []);

  return orientation;
}
