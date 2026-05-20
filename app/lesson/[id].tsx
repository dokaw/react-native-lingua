import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { getLessonById } from '@/data/lessons';
import { images } from '@/constants/images';

const FEEDBACK_SCORES = [
  { label: 'Speaking', value: 'Excellent', color: '#21C168' },
  { label: 'Pronunciation', value: 'Great', color: '#6C4EF5' },
  { label: 'Grammar', value: 'Good', color: '#21C168' },
];

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = getLessonById(id);

  const [micActive, setMicActive] = useState(true);
  const [cameraActive, setCameraActive] = useState(false);
  const [subtitlesActive, setSubtitlesActive] = useState(false);

  if (!lesson) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['top']}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image
            source={images.mascotWelcome}
            style={{ width: 120, height: 120 }}
            resizeMode="contain"
          />
          <Text className="text-h4 text-text-primary mt-4" style={{ fontFamily: 'Poppins-SemiBold' }}>
            Lesson not found
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const welcomeText =
    lesson.aiTeacherPrompt?.welcomeMessage ?? `¡Hola! Let's learn ${lesson.title}.`;
  const bubble1 = welcomeText.split('!')[0] + '!';
  const bubble2 = lesson.goals[0]?.description ?? lesson.description;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['top']}>
      {/* ── Header ──────────────────────────────────────────────────────── */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn} activeOpacity={0.7}>
          <Ionicons name="chevron-back" size={22} color="#1A1A2E" />
        </TouchableOpacity>

        <View className="items-center">
          <Text className="text-[17px] text-text-primary" style={{ fontFamily: 'Poppins-SemiBold' }}>
            AI Teacher
          </Text>
          <View style={styles.onlineRow}>
            <View style={styles.onlineDot} />
            <Text style={styles.onlineLabel}>Online</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          <Ionicons name="videocam-outline" size={20} color="#9CA3AF" />
          <Text className="text-body-md text-text-secondary" style={{ fontFamily: 'Poppins-Medium' }}>
            {lesson.estimatedMinutes}
          </Text>
          <Ionicons name="notifications-outline" size={20} color="#9CA3AF" />
        </View>
      </View>

      {/* ── Single unified call card ─────────────────────────────────────── */}
      <View style={styles.callCard}>

        {/* ── Glassy teacher section ───────────────────────────────────────
             • Light lavender base + white shine = frosted-glass look
             • Mascot centered via flex
             • Speech bubble absolutely pinned to bottom, sitting on lower body ── */}
        <View style={styles.teacherSection}>
          {/* White shine from the top — creates the frosted-glass reflection */}
          <View style={styles.glassShine} />

          {/* Mascot — centered by parent flex */}
          <Image
            source={images.mascotWelcome}
            style={styles.mascot}
            resizeMode="contain"
          />

          {/* Speech bubble — sits inside the section, on top of the mascot's lower body */}
          <View style={styles.speechBubble}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text
                className="text-[15px] text-text-primary"
                style={{ fontFamily: 'Poppins-SemiBold' }}
                numberOfLines={1}
              >
                {bubble1}
              </Text>
              <Text
                className="text-body-sm text-text-secondary"
                style={{ fontFamily: 'Poppins-Regular' }}
                numberOfLines={2}
              >
                {bubble2}
              </Text>
            </View>
            <TouchableOpacity style={styles.speakerBtn} activeOpacity={0.8}>
              <Ionicons name="volume-high" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* ── Control buttons (white section below teacher area) ──────────── */}
        <View style={styles.controlRow}>
          <ControlButton
            label="Camera"
            backgroundColor={cameraActive ? '#21C168' : '#1E1E2D'}
            onPress={() => setCameraActive(!cameraActive)}
          >
            <Ionicons name={cameraActive ? 'videocam' : 'videocam-off'} size={22} color="#FFFFFF" />
          </ControlButton>

          <ControlButton
            label="Mic"
            backgroundColor={micActive ? '#21C168' : '#6B7280'}
            onPress={() => setMicActive(!micActive)}
          >
            <Ionicons name={micActive ? 'mic' : 'mic-off'} size={22} color="#FFFFFF" />
          </ControlButton>

          <ControlButton
            label="文"
            backgroundColor={subtitlesActive ? '#6C4EF5' : '#1E1E2D'}
            onPress={() => setSubtitlesActive(!subtitlesActive)}
          >
            <Text style={styles.subtitleChar}>文</Text>
          </ControlButton>

          <ControlButton label="End Call" backgroundColor="#EF4444" onPress={() => router.back()}>
            <MaterialCommunityIcons name="phone-hangup" size={22} color="#FFFFFF" />
          </ControlButton>
        </View>
      </View>

      {/* ── Feedback card ───────────────────────────────────────────────── */}
      <View style={styles.feedbackCard} className="mx-4 mt-4">
        <FeedbackItem
          label={FEEDBACK_SCORES[0].label}
          value={FEEDBACK_SCORES[0].value}
          color={FEEDBACK_SCORES[0].color}
        />
        <View style={styles.feedbackDivider} />
        <FeedbackItem
          label={FEEDBACK_SCORES[1].label}
          value={FEEDBACK_SCORES[1].value}
          color={FEEDBACK_SCORES[1].color}
        />
        <View style={styles.feedbackDivider} />
        <FeedbackItem
          label={FEEDBACK_SCORES[2].label}
          value={FEEDBACK_SCORES[2].value}
          color={FEEDBACK_SCORES[2].color}
        />
      </View>
    </SafeAreaView>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

type ControlButtonProps = {
  label: string;
  backgroundColor: string;
  onPress: () => void;
  children: React.ReactNode;
};

function ControlButton({ label, backgroundColor, onPress, children }: ControlButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} className="items-center">
      <View style={[styles.controlBtn, { backgroundColor }]}>{children}</View>
      <Text
        className="text-caption text-text-secondary mt-2"
        style={{ fontFamily: 'Poppins-Regular' }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

function FeedbackItem({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', paddingVertical: 16 }}>
      <Text className="text-caption text-text-secondary" style={{ fontFamily: 'Poppins-Regular' }}>
        {label}
      </Text>
      <Text
        className="text-[15px] mt-0.5"
        style={{ fontFamily: 'Poppins-SemiBold', color }}
      >
        {value}
      </Text>
    </View>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#21C168',
  },
  onlineLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#21C168',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  // ── Unified call card ────────────────────────────────────────────────
  callCard: {
    marginHorizontal: 16,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 5,
  },

  // ── Teacher section — frosted-glass lavender ─────────────────────────
  teacherSection: {
    height: 320,
    // Soft lavender base — the frosted-glass tint
    backgroundColor: '#EDE9FE',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  // White reflection from top — the key to the glass look
  glassShine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // 50% height white-to-transparent gradient simulation
    height: '52%',
    backgroundColor: 'rgba(255, 255, 255, 0.48)',
  },

  // Mascot — bigger, centered by parent flex (not absolute)
  mascot: {
    width: 255,
    height: 255,
  },

  // Speech bubble — absolutely pinned to bottom of teacherSection,
  // naturally sits on top of the mascot's lower body
  speechBubble: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    right: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
    shadowColor: '#6C4EF5',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(108, 78, 245, 0.1)',
  },
  speakerBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#6C4EF5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Control buttons (white section below teacher area) ───────────────
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 22,
  },
  controlBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitleChar: {
    fontSize: 22,
    color: '#FFFFFF',
    lineHeight: 28,
  },

  // ── Feedback card ────────────────────────────────────────────────────
  feedbackCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  feedbackDivider: {
    width: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },
});
