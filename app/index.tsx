import Home from "@/components/Home";
import { ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.mainContainer} keyboardShouldPersistTaps="handled">
      <Home />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
