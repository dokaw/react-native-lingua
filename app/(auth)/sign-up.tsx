import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { VerificationModal } from "@/components/VerificationModal";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-6 pb-8">

          {/* Back button — TouchableOpacity style prop stays in StyleSheet */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={26} color="#001328" />
          </TouchableOpacity>

          {/* Heading */}
          <Text className="font-poppins-bold text-[28px] text-text-primary mt-3 leading-[36px]">
            Create your account
          </Text>
          <Text className="font-poppins text-[14px] text-text-secondary mt-1 leading-[22px]">
            Start your language journey today ✨
          </Text>

          {/* Mascot */}
          <View className="items-center my-5">
            <Image
              source={images.mascotAuth}
              className="w-37.5 h-37.5"
              resizeMode="contain"
            />
          </View>

          {/* Email Input */}
          <View className="border border-border rounded-xl px-4 py-2.5 bg-white">
            <Text className="font-poppins text-[12px] text-text-secondary mb-0.5">
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="your@email.com"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>

          {/* Password Input */}
          <View className="border border-border rounded-xl px-4 py-2.5 bg-white mt-3">
            <Text className="font-poppins text-[12px] text-text-secondary mb-0.5">
              Password
            </Text>
            <View className="flex-row items-center">
              <TextInput
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholder="••••••••"
                placeholderTextColor="#9CA3AF"
                style={[styles.textInput, { flex: 1 }]}
              />
              <TouchableOpacity
                onPress={() => setShowPassword((v) => !v)}
                style={styles.eyeBtn}
              >
                <Ionicons
                  name={showPassword ? "eye-off-outline" : "eye-outline"}
                  size={22}
                  color="#6B7280"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.primaryBtn} onPress={() => setShowModal(true)}>
            <Text className="font-poppins-semibold text-[16px] text-white">
              Sign Up
            </Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center my-6">
            <View className="flex-1 h-[1px] bg-border" />
            <Text className="mx-4 font-poppins text-[13px] text-text-secondary">
              or continue with
            </Text>
            <View className="flex-1 h-[1px] bg-border" />
          </View>

          {/* Social Auth Buttons */}
          <View className="gap-3">
            <TouchableOpacity style={styles.socialBtn}>
              <Ionicons name="logo-google" size={22} color="#EA4335" />
              <Text className="font-poppins-medium text-[15px] text-text-primary">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <Ionicons name="logo-facebook" size={22} color="#1877F2" />
              <Text className="font-poppins-medium text-[15px] text-text-primary">
                Continue with Facebook
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <Ionicons name="logo-apple" size={22} color="#000000" />
              <Text className="font-poppins-medium text-[15px] text-text-primary">
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View className="flex-row justify-center items-center mt-8">
            <Text className="font-poppins text-[14px] text-text-secondary">
              Already have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
              <Text className="font-poppins-semibold text-[14px] text-primary">
                Log in
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      <VerificationModal
        visible={showModal}
        email={email}
        onClose={() => setShowModal(false)}
      />
    </SafeAreaView>
  );
}

// StyleSheet is only used where NativeWind className cannot be applied:
// TouchableOpacity (style prop) and TextInput (style prop)
const styles = StyleSheet.create({
  backBtn: {
    marginTop: 8,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  eyeBtn: {
    padding: 4,
  },
  textInput: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#001328",
    padding: 0,
    paddingVertical: 2,
  },
  primaryBtn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 16,
    paddingVertical: 18,
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 12,
    backgroundColor: "#FFFFFF",
  },
});
