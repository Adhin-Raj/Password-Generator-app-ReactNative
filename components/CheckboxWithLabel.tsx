import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface CheckboxWithLabelProps {
  state: boolean;
  setState: (val: boolean) => void;
  labelText: string;
  checkboxBg: string;
}

export default function CheckboxWithLabel({
  state,
  setState,
  labelText,
  checkboxBg,
}: CheckboxWithLabelProps) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}> {labelText}</Text>
      <BouncyCheckbox
        size={30}
        fillColor={checkboxBg}
        isChecked={state}
        unfillColor="#FFFFFF"
        disableBuiltInState={true}
        onPress={() => {
          setState(!state);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 40,
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
