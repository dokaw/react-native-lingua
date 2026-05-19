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
import { useLanguageStore } from "@/store/languageStore";

export default function LanguageSelectionScreen() {
  const { selectedLanguageId, setSelectedLanguage } = useLanguageStore();
  const [selectedId, setSelectedId] = useState<string>(selectedLanguageId ?? "es");
  const [search, setSearch] = useState("");

  const filtered = languages.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      {/* Header */}
      <View className="flex-row items-center px-5 pt-1 pb-3">
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#001328" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-[16px] font-poppins-semibold text-text-primary">
          Choose a language
        </Text>
        <View className="w-10" />
      </View>

      {/* Search */}
      <View className="px-5 pb-4">
        <View className="flex-row items-center bg-surface rounded-xl px-4 py-3">
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
        <Text className="text--h4 mb-3">Popular</Text>

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
        <View className="px-5 pt-3 pb-3">
          <TouchableOpacity style={styles.confirmButton} onPress={() => { setSelectedLanguage(selectedId); router.replace("/"); }}>
            <Text className="btn__label">Confirm language</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={images.earth}
          className="w-full h-[130px]"
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
        style={styles.flag}
        contentFit="cover"
      />
      <View className="flex-1 ml-3">
        <Text className="font-poppins-semibold text-[15px] text-text-primary">
          {language.name}
        </Text>
        <Text className="text--caption text--muted mt-0.5">
          {language.learnerCount}
        </Text>
      </View>
      {isSelected ? (
        <View className="w-6 h-6 rounded-full bg-primary items-center justify-center">
          <Ionicons name="checkmark" size={14} color="#FFFFFF" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#6B7280" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // TouchableOpacity exception — layout for back button hit area
  backButton: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  // TextInput exception
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#001328",
  },
  // ScrollView contentContainerStyle exception
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  // TouchableOpacity with dynamic border/bg based on selected state
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
  // expo-image borderRadius must be in StyleSheet — overflow:hidden via className doesn't clip
  flag: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  // TouchableOpacity exception — confirm button
  confirmButton: {
    backgroundColor: "#6C4EF5",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
});
