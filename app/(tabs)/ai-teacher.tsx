import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AITeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={["top"]}>
      <View className="flex-1 items-center justify-center">
        <Text className="text-base text-text-secondary" style={{ fontFamily: "Poppins-Medium" }}>
          AI Teacher
        </Text>
      </View>
    </SafeAreaView>
  );
}
