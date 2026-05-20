import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useLanguageStore } from '@/store/languageStore';
import { useProgressStore } from '@/store/progressStore';
import { getLanguageById } from '@/data/languages';
import { getUnitsByLanguage } from '@/data/units';
import { getLessonsByUnit } from '@/data/lessons';
import { images } from '@/constants/images';
import type { Lesson, Unit } from '@/types/learning';

const LESSON_IMAGE_MAP: Record<string, string> = {
  greeting: '1005',
  hello: '1005',
  annyeong: '1005',
  konnichiwa: '1005',
  'ni hao': '1005',
  'guten tag': '1005',
  bonjour: '1005',
  please: '433',
  thank: '433',
  merci: '433',
  introduce: '1011',
  yourself: '1011',
  café: '225',
  cafe: '225',
  coffee: '225',
  number: '316',
  numbers: '316',
  count: '316',
  day: '399',
  days: '399',
  week: '399',
  shopping: '1036',
  shop: '1036',
  travel: '1033',
  time: '1041',
};

function getLessonThumbnail(lesson: Lesson): string {
  const titleLower = lesson.title.toLowerCase();
  for (const [key, id] of Object.entries(LESSON_IMAGE_MAP)) {
    if (titleLower.includes(key)) {
      return `https://picsum.photos/id/${id}/120/120`;
    }
  }
  const fallbackIds = ['237', '247', '257', '267', '277', '287'];
  return `https://picsum.photos/id/${fallbackIds[(lesson.order - 1) % fallbackIds.length]}/120/120`;
}

function getUnitHeroImage(unit: Unit): string {
  const titleLower = unit.title.toLowerCase();
  if (
    titleLower.includes('greeting') ||
    titleLower.includes('hello') ||
    titleLower.includes('annyeong') ||
    titleLower.includes('konnichiwa') ||
    titleLower.includes('hao') ||
    titleLower.includes('guten') ||
    titleLower.includes('bonjour')
  ) {
    return `https://picsum.photos/id/1005/800/400`;
  }
  if (titleLower.includes('number') || titleLower.includes('time')) {
    return `https://picsum.photos/id/316/800/400`;
  }
  return `https://picsum.photos/id/1029/800/400`;
}

type LessonStatus = 'completed' | 'in-progress' | 'upcoming';

function getLessonStatus(
  lessonId: string,
  index: number,
  allLessonIds: string[],
  completedIds: string[],
): LessonStatus {
  if (completedIds.includes(lessonId)) return 'completed';
  const firstIncompleteIndex = allLessonIds.findIndex((id) => !completedIds.includes(id));
  if (index === firstIncompleteIndex) return 'in-progress';
  return 'upcoming';
}

export default function LessonScreen() {
  const { selectedLanguageId } = useLanguageStore();
  const { completedLessonIds } = useProgressStore();
  const [activeTab, setActiveTab] = useState<'lessons' | 'practice'>('lessons');

  const language = selectedLanguageId ? getLanguageById(selectedLanguageId) : null;
  const units = language ? getUnitsByLanguage(language.id) : [];

  if (!language || units.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#F6F7FB' }} edges={['top']}>
        <View className="flex-1 items-center justify-center px-8">
          <Image source={images.mascotWelcome} style={styles.emptyMascot} resizeMode="contain" />
          <Text
            className="text-h3 text-text-primary text-center mt-4"
            style={{ fontFamily: 'Poppins-Bold' }}
          >
            No language selected
          </Text>
          <Text
            className="text-body-md text-text-secondary text-center mt-2"
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            Go to the Home tab and choose a language to start learning.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {units.map((unit) => {
          const lessons = getLessonsByUnit(unit.id);
          const completedCount = lessons.filter((l) => completedLessonIds.includes(l.id)).length;

          return (
            <UnitSection
              key={unit.id}
              unit={unit}
              lessons={lessons}
              completedCount={completedCount}
              completedLessonIds={completedLessonIds}
              language={language}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

type UnitSectionProps = {
  unit: Unit;
  lessons: Lesson[];
  completedCount: number;
  completedLessonIds: string[];
  language: NonNullable<ReturnType<typeof getLanguageById>>;
  activeTab: 'lessons' | 'practice';
  onTabChange: (tab: 'lessons' | 'practice') => void;
};

function UnitSection({
  unit,
  lessons,
  completedCount,
  completedLessonIds,
  language,
  activeTab,
  onTabChange,
}: UnitSectionProps) {
  const heroImageUrl = getUnitHeroImage(unit);

  return (
    <View className="mb-6">
      <View className="flex-row items-center justify-between px-5 pt-4 pb-2">
        <View className="flex-1 mr-3">
          <Text
            className="text-[22px] text-text-primary"
            style={{ fontFamily: 'Poppins-Bold' }}
            numberOfLines={1}
          >
            {unit.title}
          </Text>
          <Text
            className="text-body-sm text-text-secondary mt-0.5"
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            {`Unit ${unit.order}  •  ${completedCount} / ${lessons.length} lessons`}
          </Text>
        </View>
        <Image source={{ uri: language.flag }} style={styles.flagBadge} resizeMode="cover" />
      </View>

      <View style={[styles.heroContainer, { backgroundColor: unit.color + '18' }]} className="mx-5">
        <Image source={images.mascotWelcome} style={styles.mascotHero} resizeMode="contain" />
        <Image source={{ uri: heroImageUrl }} style={styles.heroBg} resizeMode="cover" />
        <View style={[styles.unitColorBar, { backgroundColor: unit.color }]} />
      </View>

      <View className="flex-row px-5 mt-4 border-b border-border">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onTabChange('lessons')}
          className="mr-6 pb-3"
        >
          <Text
            className={`text-[15px] ${activeTab === 'lessons' ? 'text-primary' : 'text-text-secondary'}`}
            style={{ fontFamily: activeTab === 'lessons' ? 'Poppins-SemiBold' : 'Poppins-Regular' }}
          >
            Lessons
          </Text>
          {activeTab === 'lessons' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onTabChange('practice')}
          className="pb-3"
        >
          <Text
            className={`text-[15px] ${activeTab === 'practice' ? 'text-primary' : 'text-text-secondary'}`}
            style={{ fontFamily: activeTab === 'practice' ? 'Poppins-SemiBold' : 'Poppins-Regular' }}
          >
            Practice
          </Text>
          {activeTab === 'practice' && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
      </View>

      {activeTab === 'lessons' ? (
        <View className="px-5 pt-3">
          {lessons.map((lesson, index) => {
            const status = getLessonStatus(
              lesson.id,
              index,
              lessons.map((l) => l.id),
              completedLessonIds,
            );
            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                index={index}
                status={status}
                unitColor={unit.color}
              />
            );
          })}
        </View>
      ) : (
        <View className="px-5 pt-6 pb-4 items-center">
          <Image source={images.mascotAuth} style={styles.practiceIllustration} resizeMode="contain" />
          <Text
            className="text-[16px] text-text-primary text-center mt-3"
            style={{ fontFamily: 'Poppins-SemiBold' }}
          >
            Practice coming soon!
          </Text>
          <Text
            className="text-body-sm text-text-secondary text-center mt-1"
            style={{ fontFamily: 'Poppins-Regular' }}
          >
            Complete lessons first to unlock practice mode.
          </Text>
        </View>
      )}
    </View>
  );
}

type LessonCardProps = {
  lesson: Lesson;
  index: number;
  status: LessonStatus;
  unitColor: string;
};

function LessonCard({ lesson, index, status, unitColor }: LessonCardProps) {
  const isInProgress = status === 'in-progress';
  const thumbnailUrl = getLessonThumbnail(lesson);

  const cardStyle = isInProgress
    ? [styles.lessonCard, styles.lessonCardActive]
    : status === 'completed'
      ? [styles.lessonCard, styles.lessonCardCompleted]
      : [styles.lessonCard, styles.lessonCardUpcoming];

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={cardStyle}
      className="mb-3"
      onPress={() => router.push({ pathname: '/lesson/[id]', params: { id: lesson.id } })}
    >
      <Image source={{ uri: thumbnailUrl }} style={styles.lessonThumbnail} resizeMode="cover" />

      <View className="flex-1 ml-3">
        <Text className="text-caption text-text-secondary mb-0.5" style={{ fontFamily: 'Poppins-Regular' }}>
          {`Lesson ${index + 1}`}
        </Text>
        <Text
          className={`text-[15px] ${status === 'upcoming' ? 'text-text-secondary' : 'text-text-primary'}`}
          style={{ fontFamily: 'Poppins-SemiBold' }}
          numberOfLines={2}
        >
          {lesson.title}
        </Text>
        <Text className="text-caption text-text-secondary mt-0.5" style={{ fontFamily: 'Poppins-Regular' }}>
          {`${lesson.estimatedMinutes} min  •  ${lesson.xpReward} XP`}
        </Text>
        {isInProgress && (
          <View style={styles.inProgressBadge}>
            <Text style={[styles.inProgressText, { color: unitColor }]}>In progress</Text>
          </View>
        )}
      </View>

      <StatusIcon status={status} color={unitColor} />
    </TouchableOpacity>
  );
}

function StatusIcon({ status, color }: { status: LessonStatus; color: string }) {
  if (status === 'completed') {
    return (
      <View style={styles.statusIcon} className="bg-success">
        <Ionicons name="checkmark" size={16} color="#fff" />
      </View>
    );
  }
  if (status === 'in-progress') {
    return (
      <View style={[styles.statusIcon, { backgroundColor: color }]}>
        <Ionicons name="play" size={14} color="#fff" />
      </View>
    );
  }
  return (
    <View style={styles.statusIcon} className="bg-surface">
      <Ionicons name="lock-closed-outline" size={14} color="#9CA3AF" />
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContent: { paddingBottom: 120 },
  emptyMascot: { width: 160, height: 160 },
  flagBadge: { width: 36, height: 36, borderRadius: 18, borderWidth: 2, borderColor: '#E5E7EB' },
  heroContainer: {
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  heroBg: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.18 },
  mascotHero: { width: 160, height: 160, position: 'absolute', bottom: 0, right: 16, zIndex: 2 },
  unitColorBar: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, zIndex: 3 },
  tabIndicator: {
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#6C4EF5',
    borderRadius: 2,
  },
  lessonCard: { flexDirection: 'row', alignItems: 'center', borderRadius: 16, padding: 12, borderWidth: 1 },
  lessonCardActive: { backgroundColor: '#F5F2FF', borderColor: '#C4B5FD' },
  lessonCardCompleted: { backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' },
  lessonCardUpcoming: { backgroundColor: '#FAFAFA', borderColor: '#F3F4F6' },
  lessonThumbnail: { width: 60, height: 60, borderRadius: 12, backgroundColor: '#F3F4F6' },
  inProgressBadge: {
    marginTop: 4,
    alignSelf: 'flex-start',
    backgroundColor: '#EDE9FE',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  inProgressText: { fontSize: 11, fontFamily: 'Poppins-Medium' },
  statusIcon: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginLeft: 10 },
  practiceIllustration: { width: 120, height: 120, opacity: 0.6 },
});
