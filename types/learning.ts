// ─── Languages ───────────────────────────────────────────────────────────────

export type Language = {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
  code: string; // ISO 639-1
  totalUnits: number;
  learnerCount: string; // e.g. "28.4M learners"
};

// ─── Vocabulary & Phrases ─────────────────────────────────────────────────────

export type VocabItem = {
  word: string;
  translation: string;
  pronunciation?: string;
  exampleSentence?: string;
  exampleTranslation?: string;
};

export type Phrase = {
  text: string;
  translation: string;
  pronunciation?: string;
  context?: string;
};

// ─── Activities ───────────────────────────────────────────────────────────────

export type MultipleChoiceActivity = {
  type: 'multiple-choice';
  question: string;
  options: string[];
  correctIndex: number;
  hint?: string;
};

export type TranslationActivity = {
  type: 'translation';
  prompt: string;
  acceptedAnswers: string[];
  hint?: string;
};

export type VocabIntroActivity = {
  type: 'vocabulary-intro';
  vocab: VocabItem;
};

export type FillInBlankActivity = {
  type: 'fill-in-blank';
  sentence: string; // use ___ for the blank
  correctAnswer: string;
  options: string[];
  hint?: string;
};

export type MatchPairsActivity = {
  type: 'match-pairs';
  pairs: Array<{ source: string; target: string }>;
};

export type Activity =
  | MultipleChoiceActivity
  | TranslationActivity
  | VocabIntroActivity
  | FillInBlankActivity
  | MatchPairsActivity;

// ─── Lesson ───────────────────────────────────────────────────────────────────

export type LessonType = 'vocabulary' | 'audio' | 'chat' | 'review';

export type LessonGoal = {
  description: string;
};

export type AITeacherPrompt = {
  systemPrompt: string;
  welcomeMessage: string;
  focusVocab: string[];
  teachingStyle: 'conversational' | 'structured' | 'gamified';
};

export type Lesson = {
  id: string;
  unitId: string;
  languageId: string;
  title: string;
  description: string;
  type: LessonType;
  order: number;
  xpReward: number;
  estimatedMinutes: number;
  goals: LessonGoal[];
  vocabulary: VocabItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt?: AITeacherPrompt;
};

// ─── Unit ─────────────────────────────────────────────────────────────────────

export type Unit = {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
  color: string;
  iconEmoji: string;
  lessonIds: string[];
};
