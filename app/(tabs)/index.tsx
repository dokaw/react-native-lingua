import type { ComponentProps } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore, XP_DAILY_GOAL } from "@/store/progressStore";
import { getLanguageById } from "@/data/languages";
import { getUnitsByLanguage } from "@/data/units";
import { lessons } from "@/data/lessons";
import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { posthog } from "@/lib/posthog";

type IoniconsName = ComponentProps<typeof Ionicons>["name"];

const GREETINGS: Record<string, string> = {
  es: "Hola",
  fr: "Bonjour",
  ja: "こんにちは",
  ko: "안녕하세요",
  de: "Hallo",
  zh: "你好",
};

export default function HomeScreen() {
  const { user } = useUser();
  const { selectedLanguageId } = useLanguageStore();
  const { xp, streak } = useProgressStore();

  const language = selectedLanguageId ? getLanguageById(selectedLanguageId) : null;
  const languageUnits = language ? getUnitsByLanguage(language.id) : [];
  const currentUnit = languageUnits[0] ?? null;
  const currentLesson =
    language ? (lessons.find((l) => l.languageId === language.id) ?? null) : null;

  const firstName =
    user?.firstName ??
    user?.emailAddresses[0]?.emailAddress?.split("@")[0] ??
    "Friend";
  const greeting = language ? (GREETINGS[language.code] ?? "Hello") : "Hello";
  const xpPercent = Math.min((xp / XP_DAILY_GOAL) * 100, 100);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Header ── */}
        <View className="flex-row items-center justify-between px-5 pt-2 pb-4">
          <View className="flex-row items-center gap-[10px]">
            {language ? (
              <Image
                source={{ uri: language.flag }}
                className="w-[30px] h-[30px] rounded-full"
              />
            ) : (
              <View className="w-[30px] h-[30px] rounded-full bg-border" />
            )}
            <Text
              className="text-lg text-text-primary"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              {greeting}, {firstName}! 👋
            </Text>
          </View>

          <View className="flex-row items-center gap-[14px]">
            <View className="flex-row items-center gap-1">
              <Image
                source={images.streakFire}
                className="w-[22px] h-[22px]"
                resizeMode="contain"
              />
              <Text
                className="text-base text-text-primary"
                style={{ fontFamily: "Poppins-Bold" }}
              >
                {streak}
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <Ionicons name="notifications-outline" size={24} color={colors.textPrimary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Daily Goal Card ── */}
        <View className="px-5 mb-4">
          <View className="bg-[#FFF8EE] rounded-[20px] p-4">
            <View className="flex-row items-center justify-between">
              <View className="flex-1 mr-3">
                <Text
                  className="text-[13px] text-text-secondary mb-1"
                  style={{ fontFamily: "Poppins-Regular" }}
                >
                  Daily goal
                </Text>
                <View className="flex-row items-baseline mb-3">
                  <Text
                    className="text-[28px] text-text-primary"
                    style={{ fontFamily: "Poppins-Bold" }}
                  >
                    {xp}
                  </Text>
                  <Text
                    className="text-[15px] text-text-secondary"
                    style={{ fontFamily: "Poppins-Regular" }}
                  >
                    {` / ${XP_DAILY_GOAL} XP`}
                  </Text>
                </View>
                <View className="h-2 bg-border rounded-full overflow-hidden">
                  <View
                    style={[styles.progressFill, { width: `${xpPercent}%` as `${number}%` }]}
                  />
                </View>
              </View>
              <Image
                source={images.treasure}
                className="w-20 h-20"
                resizeMode="contain"
              />
            </View>
          </View>
        </View>

        {/* ── Continue Learning Card ── */}
        <View className="px-5 mb-4">
          <View className="bg-primary rounded-[20px] overflow-hidden">
            <View className="flex-row items-end">
              <View className="flex-1 p-5 pb-6">
                <Text
                  className="text-xs text-white/75 mb-1"
                  style={{ fontFamily: "Poppins-Regular" }}
                >
                  Continue learning
                </Text>
                <Text
                  className="text-[26px] text-white mb-[3px]"
                  style={{ fontFamily: "Poppins-Bold" }}
                >
                  {language?.name ?? "Select a language"}
                </Text>
                <Text
                  className="text-[13px] text-white/70 mb-[18px]"
                  style={{ fontFamily: "Poppins-Regular" }}
                >
                  {"A1 · "}
                  {currentUnit ? `Unit ${currentUnit.order}` : "Unit 1"}
                </Text>
                <TouchableOpacity
                  style={styles.continueButton}
                  activeOpacity={0.8}
                  onPress={() => {
                    posthog.capture("lesson_continued", {
                      language_id: language?.id ?? null,
                      language_name: language?.name ?? null,
                      unit_order: currentUnit?.order ?? null,
                      lesson_id: currentLesson?.id ?? null,
                    });
                  }}
                >
                  <Text
                    className="text-sm text-white"
                    style={{ fontFamily: "Poppins-SemiBold" }}
                  >
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="w-[120px] h-[170px] justify-end items-center">
                <Image
                  source={images.palace}
                  className="w-[130px] h-[170px]"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* ── Today's Plan ── */}
        <View className="px-5 mb-4">
          <View className="flex-row items-center justify-between mb-2">
            <Text
              className="text-[17px] text-text-primary"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              {"Today's plan"}
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                className="text-sm text-primary"
                style={{ fontFamily: "Poppins-Medium" }}
              >
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <PlanItem
            iconName="book"
            iconColor={colors.linguaBlue}
            iconBg="#EEF3FF"
            title="Lesson"
            subtitle={currentLesson?.title ?? "Hello & Goodbye"}
            completed
          />
          <View className="h-px bg-[#F3F4F6]" />
          <PlanItem
            iconName="headset"
            iconColor={colors.linguaBlue}
            iconBg="#EEF3FF"
            title="AI Conversation"
            subtitle="Talk about your day"
            completed={false}
          />
          <View className="h-px bg-[#F3F4F6]" />
          <PlanItem
            iconName="chatbubble-ellipses"
            iconColor={colors.error}
            iconBg="#FEEAEA"
            title="New words"
            subtitle={`${currentLesson?.vocabulary.length ?? 10} words`}
            completed={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ── PlanItem ──────────────────────────────────────────────────────────────────

type PlanItemProps = {
  iconName: IoniconsName;
  iconColor: string;
  iconBg: string;
  title: string;
  subtitle: string;
  completed: boolean;
};

function PlanItem({ iconName, iconColor, iconBg, title, subtitle, completed }: PlanItemProps) {
  return (
    <View className="flex-row items-center py-3 gap-3">
      <View
        className="w-12 h-12 rounded-[14px] items-center justify-center"
        style={{ backgroundColor: iconBg }}
      >
        <Ionicons name={iconName} size={22} color={iconColor} />
      </View>
      <View className="flex-1">
        <Text
          className="text-sm text-text-primary"
          style={{ fontFamily: "Poppins-SemiBold" }}
        >
          {title}
        </Text>
        <Text
          className="text-xs text-text-secondary mt-0.5"
          style={{ fontFamily: "Poppins-Regular" }}
        >
          {subtitle}
        </Text>
      </View>
      {completed ? (
        <View className="w-7 h-7 rounded-full bg-lingua-blue items-center justify-center">
          <Ionicons name="checkmark" size={14} color="#fff" />
        </View>
      ) : (
        <View className="w-7 h-7 rounded-full border-2 border-border" />
      )}
    </View>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
// Only StyleSheet entries that cannot be expressed as NativeWind classes:
// - scrollContent: contentContainerStyle on ScrollView
// - progressFill: width is a runtime-calculated value
// - continueButton: style prop on TouchableOpacity (exception rule)

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 110,
  },
  progressFill: {
    height: 8,
    backgroundColor: colors.streak,
    borderRadius: 99,
  },
  continueButton: {
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignSelf: "flex-start",
  },
});
