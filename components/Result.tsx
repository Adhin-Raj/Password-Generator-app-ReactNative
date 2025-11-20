import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ResultProps {
  isGenerated: boolean;
  password: string;
}

export default function Result({ isGenerated, password }: ResultProps) {
  return (
    <View>
      {isGenerated && (
        <View style={styles.resultContainer}>
          <Text style={[styles.resultText, { marginBottom: 10 }]}>
            Log press to select
          </Text>
          <Text selectable style={styles.resultText}>
            {password}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: "white",
    marginTop: 20,
    alignSelf: "center",
    paddingBlock: 20,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  resultText: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
  },
});
