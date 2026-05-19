import { useState, useRef, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  visible: boolean;
  email: string;
  onClose: () => void;
}

export function VerificationModal({ visible, email, onClose }: Props) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    } else {
      setCode("");
    }
  }, [visible]);

  const handleCodeChange = (text: string) => {
    const digits = text.replace(/\D/g, "").slice(0, 6);
    setCode(digits);
    if (digits.length === 6) {
      setTimeout(() => router.replace("/"), 300);
    }
  };

  const getBoxStyle = (i: number) => {
    if (code[i]) return [styles.digitBox, styles.digitBoxFilled];
    if (code.length === i) return [styles.digitBox, styles.digitBoxActive];
    return [styles.digitBox];
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* Tap outside to dismiss */}
        <TouchableOpacity
          style={StyleSheet.absoluteFillObject}
          activeOpacity={1}
          onPress={onClose}
        />

        {/* Bottom sheet card */}
        <View style={styles.card}>
          {/* Close button */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Ionicons name="close" size={22} color="#6B7280" />
          </TouchableOpacity>

          {/* Icon */}
          <View style={styles.iconCircle}>
            <Ionicons name="mail-outline" size={28} color="#6C4EF5" />
          </View>

          {/* Title */}
          <Text style={styles.title}>Check your email</Text>
          <Text style={styles.subtitle}>
            We sent a 6-digit code to{"\n"}
            <Text style={styles.emailHighlight}>{email || "your email"}</Text>
          </Text>

          {/* Hidden TextInput that drives the keyboard */}
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleCodeChange}
            keyboardType="number-pad"
            maxLength={6}
            style={styles.hiddenInput}
            caretHidden
          />

          {/* Digit boxes — tap to re-focus keyboard */}
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => inputRef.current?.focus()}
            style={styles.codeRow}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <View key={i} style={getBoxStyle(i)}>
                <Text style={styles.digitText}>{code[i] ?? ""}</Text>
              </View>
            ))}
          </TouchableOpacity>

          <Text style={styles.resendText}>
            Didn&apos;t receive it?{" "}
            <Text style={styles.resendLink}>Resend code</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 48,
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 16,
    right: 20,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#EDE9FE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 22,
    color: "#001328",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 28,
  },
  emailHighlight: {
    fontFamily: "Poppins-SemiBold",
    color: "#001328",
  },
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
  codeRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 24,
  },
  digitBox: {
    width: 46,
    height: 56,
    borderWidth: 1.5,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F7FB",
  },
  digitBoxActive: {
    borderColor: "#6C4EF5",
    backgroundColor: "#FFFFFF",
  },
  digitBoxFilled: {
    borderColor: "#6C4EF5",
    backgroundColor: "#FFFFFF",
  },
  digitText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 22,
    color: "#001328",
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  resendLink: {
    fontFamily: "Poppins-SemiBold",
    color: "#6C4EF5",
  },
});
