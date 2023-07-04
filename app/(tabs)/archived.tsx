import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function ArchivedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Arhived Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    minHeight: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
