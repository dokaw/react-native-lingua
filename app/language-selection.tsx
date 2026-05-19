import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { languages } from "@/data/languages";
import { images } from "@/constants/images";
import type { Language } from "@/types/learning";

export default function LanguageSelectionScreen() {
  const [selectedId, setSelectedId] = useState<string>("es");
  const [search, setSearch] = useState("");

  const filtered = languages.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#001328" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose a language</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={18} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search languages"
            placeholderTextColor="#6B7280"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* Language list */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionLabel}>Popular</Text>

        {filtered.map((lang) => (
          <LanguageCard
            key={lang.id}
            language={lang}
            isSelected={selectedId === lang.id}
            onPress={() => setSelectedId(lang.id)}
          />
        ))}
      </ScrollView>

      {/* Bottom: confirm button + earth illustration */}
      <View>
        <View style={styles.confirmWrapper}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => router.back()}
          >
            <Text style={styles.confirmButtonText}>Confirm language</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={images.earth}
          style={styles.earthImage}
          contentFit="cover"
        />
      </View>
    </SafeAreaView>
  );
}

function LanguageCard({
  language,
  isSelected,
  onPress,
}: {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]}
      onPress={onPress}
    >
      <Image
        source={{ uri: language.flag }}
        style={styles.flagImage}
        contentFit="cover"
      />
      <View style={styles.cardText}>
        <Text style={styles.langName}>{language.name}</Text>
        <Text style={styles.learnerCount}>{language.learnerCount}</Text>
      </View>
      {isSelected ? (
        <View style={styles.checkCircle}>
          <Ionicons name="checkmark" size={14} color="#FFFFFF" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#6B7280" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#001328",
  },
  headerSpacer: {
    width: 40,
  },
  searchWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F7FB",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#001328",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  sectionLabel: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#001328",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  cardSelected: {
    backgroundColor: "#EDE9FE",
    borderColor: "#6C4EF5",
  },
  flagImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  cardText: {
    flex: 1,
    marginLeft: 12,
  },
  langName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#001328",
  },
  learnerCount: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#6B7280",
    marginTop: 1,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#6C4EF5",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmWrapper: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  confirmButton: {
    backgroundColor: "#6C4EF5",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmButtonText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },
  earthImage: {
    width: "100%",
    height: 130,
  },
});
