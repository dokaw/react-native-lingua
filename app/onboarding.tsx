import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 px-6">

        {/* Logo row */}
        <View className="flex-row items-center justify-center gap-2 mt-4">
          <Image source={images.mascotLogo} className="w-9 h-9" resizeMode="contain" />
          <Text className="font-poppins-semibold text-[18px] text-text-primary">muolingo</Text>
        </View>

        {/* Heading */}
        <View className="mt-6">
          <Text className="font-poppins-bold text-[34px] text-text-primary leading-[44px]">
            Your AI language{"\n"}
            <Text className="font-poppins-bold text-[34px] text-primary leading-[44px]">teacher</Text>.
          </Text>
          <Text className="font-poppins text-[14px] text-text-secondary leading-[22px] mt-3">
            Real conversations, personalized{"\n"}lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Mascot + Speech Bubbles */}
        <View className="flex-1 relative items-center justify-center">

          {/* Hello! – lower left */}
          <View
            className="absolute bottom-[25%] left-1 z-10 bg-white rounded-[20px] px-4 py-[10px]"
            style={styles.shadow}
          >
            <Text className="font-poppins-semibold text-[14px] text-text-primary">Hello!</Text>
          </View>

          {/* ¡Hola! – upper right */}
          <View
            className="absolute top-[15%] right-1 z-10 bg-white rounded-[20px] px-4 py-[10px]"
            style={styles.shadow}
          >
            <Text className="font-poppins-semibold text-[14px] text-text-primary">¡Hola!</Text>
          </View>

          {/* 你好! – mid right */}
          <View
            className="absolute top-[42%] right-1 z-10 bg-white rounded-[20px] px-4 py-[10px]"
            style={styles.shadow}
          >
            <Text className="font-poppins-semibold text-[14px] text-error">你好!</Text>
          </View>

          <Image source={images.mascotWelcome} className="w-full h-full" resizeMode="contain" />
        </View>

        {/* Get Started button */}
        <View className="pb-8">
          <TouchableOpacity style={styles.getStartedBtn} onPress={() => router.push("/")}>
            <View className="w-9" />
            <Text className="flex-1 text-center font-poppins-semibold text-[16px] text-white">
              Get Started
            </Text>
            <View className="w-9 h-9 rounded-full bg-white items-center justify-center">
              <Ionicons name="chevron-forward" size={18} color="#6C4EF5" />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Shadow requires StyleSheet: iOS/Android use different shadow properties
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  // TouchableOpacity requires StyleSheet: `style` prop for pressed states
  getStartedBtn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
