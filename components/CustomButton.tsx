import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CustomButtonProps {
  handlePress?: () => void;
  btnStyle: Object;
  isGenerated?: boolean;
  btnText: string;
}

export default function CustomButton({
  handlePress,
  btnStyle,
  isGenerated = true,
  btnText,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={[btnStyle, !isGenerated && { backgroundColor: "#ff9494ff" }]}
      onPress={handlePress}
      disabled={!isGenerated}
    >
      <Text style={styles.label}>{btnText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
