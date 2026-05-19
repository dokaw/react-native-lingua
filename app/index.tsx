import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center gap-6 px-6">
      <Text className="text--h1 text--primary-color">muolingo</Text>
      <TouchableOpacity style={styles.btn} onPress={() => router.push("/onboarding")}>
        <Text style={styles.btnText}>View Onboarding →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 28,
  },
  btnText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
});
