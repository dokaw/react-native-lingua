import { Text, View, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Redirect, router } from "expo-router";
import { useAuth, useClerk } from "@clerk/expo";

export default function Index() {
  const { isSignedIn, isLoaded } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6C4EF5" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to muolingo! 🎉</Text>
      <Text style={styles.subtitle}>You're signed in.</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push("/language-selection")}
      >
        <Text style={styles.btnText}>Choose Language</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOutline} onPress={() => signOut()}>
        <Text style={styles.btnOutlineText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 24,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: "#001328",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#6B7280",
  },
  btn: {
    backgroundColor: "#6C4EF5",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 28,
    marginTop: 8,
  },
  btnText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  btnOutline: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#6C4EF5",
    paddingVertical: 14,
    paddingHorizontal: 28,
  },
  btnOutlineText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#6C4EF5",
  },
});
