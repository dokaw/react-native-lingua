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
import { router, type Href } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSignIn } from "@clerk/expo";
import { images } from "@/constants/images";
import { VerificationModal } from "@/components/VerificationModal";
import { SocialAuthButtons } from "@/components/SocialAuthButtons";
import { posthog } from "@/lib/posthog";

export default function SignInScreen() {
  const { signIn, errors, fetchStatus } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  const isSubmitting = fetchStatus === "fetching";

  const navigateHome = (decorateUrl: (url: string) => string) => {
    const url = decorateUrl("/");
    router.replace(url as Href);
  };

  const handleSignIn = async () => {
    setVerifyError("");
    const { error } = await signIn.password({ emailAddress: email, password });
    if (error) return;

    if (signIn.status === "complete") {
      posthog.identify(email, { $set: { email } });
      posthog.capture("user_signed_in", { email });
      await signIn.finalize({
        navigate: ({ decorateUrl }) => navigateHome(decorateUrl),
      });
    } else if (signIn.status === "needs_client_trust") {
      await signIn.mfa.sendEmailCode();
      setShowModal(true);
    }
  };

  const handleVerify = async (code: string) => {
    setVerifyError("");
    const { error } = await signIn.mfa.verifyEmailCode({ code });
    if (error) {
      setVerifyError(error.message ?? "Invalid code. Please try again.");
      return;
    }
    if (signIn.status === "complete") {
      posthog.identify(email, { $set: { email } });
      posthog.capture("user_signed_in", { email, method: "mfa" });
      await signIn.finalize({
        navigate: ({ decorateUrl }) => navigateHome(decorateUrl),
      });
    }
  };

  const handleResend = async () => {
    setVerifyError("");
    await signIn.mfa.sendEmailCode();
  };

  const emailError = errors?.fields?.identifier?.message;
  const passwordError = errors?.fields?.password?.message;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 px-6 pb-8">

          {/* Back button */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={26} color="#001328" />
          </TouchableOpacity>

          {/* Heading */}
          <Text className="font-poppins-bold text-[28px] text-text-primary mt-3 leading-[36px]">
            Welcome back
          </Text>
          <Text className="font-poppins text-[14px] text-text-secondary mt-1 leading-[22px]">
            Sign in to continue your journey ✨
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
          <View
            className={`border rounded-xl px-4 py-2.5 bg-white ${emailError ? "border-red-400" : "border-border"}`}
          >
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
          {emailError ? (
            <Text style={styles.fieldError}>{emailError}</Text>
          ) : null}

          {/* Password Input */}
          <View
            className={`border rounded-xl px-4 py-2.5 bg-white mt-3 ${passwordError ? "border-red-400" : "border-border"}`}
          >
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
          {passwordError ? (
            <Text style={styles.fieldError}>{passwordError}</Text>
          ) : null}

          {/* Sign In Button */}
          <TouchableOpacity
            style={[styles.primaryBtn, isSubmitting && { opacity: 0.6 }]}
            onPress={handleSignIn}
            disabled={isSubmitting || !email || !password}
          >
            <Text className="font-poppins-semibold text-[16px] text-white">
              Sign In
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
          <SocialAuthButtons />

          {/* Footer */}
          <View className="flex-row justify-center items-center mt-8">
            <Text className="font-poppins text-[14px] text-text-secondary">
              Don&apos;t have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
              <Text className="font-poppins-semibold text-[14px] text-primary">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      <VerificationModal
        visible={showModal}
        email={email}
        onClose={() => setShowModal(false)}
        onVerify={handleVerify}
        onResend={handleResend}
        isLoading={isSubmitting}
        error={verifyError}
      />
    </SafeAreaView>
  );
}

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
  fieldError: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#D32F2F",
    marginTop: 4,
    marginLeft: 4,
  },
});
