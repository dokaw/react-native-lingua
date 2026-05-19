import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useSSO } from "@clerk/expo";
import { useSignInWithApple } from "@clerk/expo/apple";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";

WebBrowser.maybeCompleteAuthSession();

interface Props {
  onError?: (message: string) => void;
}

export function SocialAuthButtons({ onError }: Props) {
  const { startSSOFlow } = useSSO();
  const { startAppleAuthenticationFlow } = useSignInWithApple();

  const handleSSO = async (
    strategy: "oauth_google" | "oauth_facebook"
  ) => {
    try {
      const redirectUrl = Linking.createURL("/oauth-callback");
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
        redirectUrl,
      });
      if (createdSessionId) {
        await setActive!({ session: createdSessionId });
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      onError?.(message);
      console.error("SSO error:", err);
    }
  };

  const handleApple = async () => {
    try {
      const { createdSessionId, setActive } =
        await startAppleAuthenticationFlow();
      if (createdSessionId) {
        await setActive!({ session: createdSessionId });
      }
    } catch (err: unknown) {
      // ERR_REQUEST_CANCELED means user dismissed — ignore silently
      if (
        err &&
        typeof err === "object" &&
        "code" in err &&
        (err as { code: string }).code === "ERR_REQUEST_CANCELED"
      ) {
        return;
      }
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      onError?.(message);
      console.error("Apple sign-in error:", err);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.socialBtn}
        onPress={() => handleSSO("oauth_google")}
      >
        <Ionicons name="logo-google" size={22} color="#EA4335" />
        <Text style={styles.label}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.socialBtn}
        onPress={() => handleSSO("oauth_facebook")}
      >
        <Ionicons name="logo-facebook" size={22} color="#1877F2" />
        <Text style={styles.label}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBtn} onPress={handleApple}>
        <Ionicons name="logo-apple" size={22} color="#000000" />
        <Text style={styles.label}>Continue with Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
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
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#001328",
  },
});
