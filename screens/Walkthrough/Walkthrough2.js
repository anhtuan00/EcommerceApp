import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import { SIZES, images } from "../../constants";
import { useDynamicAnimation, MotiImage } from "moti";

const Walkthrough2 = ({ animate }) => {
  // Moti initial position
  const motiImage1 = useDynamicAnimation(() => ({ top: "30%", left: "25%" }));

  const motiImage2 = useDynamicAnimation(() => ({ top: "45%", left: "15%" }));

  const motiImage3 = useDynamicAnimation(() => ({ top: "58%", left: "25%" }));

  const motiImage4 = useDynamicAnimation(() => ({ top: "61%", left: "40%" }));

  const motiImage5 = useDynamicAnimation(() => ({ top: "27%", left: "50%" }));

  return (
    <View style={{ flex: 1, overflow: hidden }}>
      <Image
        source={images.walkthrough_02_01}
        style={{
          ...styles.image,
          top: "35%",
          left: "35%",
          width: 106,
          height: 161,
          zIndex: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    width: 86,
    height: 112,
    zIndex: 0,
    borderRadius: SIZES.radius,
  },
});

export default Walkthrough2;
