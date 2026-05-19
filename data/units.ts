import type { Unit } from '@/types/learning';

export const units: Unit[] = [
  // ─── Spanish ───────────────────────────────────────────────────────────────
  {
    id: 'es-unit-1',
    languageId: 'es',
    title: 'Greetings & Basics',
    description: 'Say hello, introduce yourself, and use everyday polite expressions.',
    order: 1,
    color: '#6C4EF5',
    iconEmoji: '👋',
    lessonIds: ['es-u1-l1', 'es-u1-l2', 'es-u1-l3'],
  },
  {
    id: 'es-unit-2',
    languageId: 'es',
    title: 'Numbers & Time',
    description: 'Count to 20, tell the time, and talk about your day.',
    order: 2,
    color: '#4D88FF',
    iconEmoji: '🔢',
    lessonIds: ['es-u2-l1', 'es-u2-l2'],
  },

  // ─── French ────────────────────────────────────────────────────────────────
  {
    id: 'fr-unit-1',
    languageId: 'fr',
    title: 'Bonjour! Greetings',
    description: 'Master French greetings and basic courtesy phrases.',
    order: 1,
    color: '#21C168',
    iconEmoji: '🥐',
    lessonIds: ['fr-u1-l1', 'fr-u1-l2'],
  },

  // ─── Japanese ──────────────────────────────────────────────────────────────
  {
    id: 'ja-unit-1',
    languageId: 'ja',
    title: 'Konnichiwa! First Words',
    description: 'Learn essential Japanese greetings and polite expressions.',
    order: 1,
    color: '#FF4D4F',
    iconEmoji: '🌸',
    lessonIds: ['ja-u1-l1'],
  },

  // ─── German ────────────────────────────────────────────────────────────────
  {
    id: 'de-unit-1',
    languageId: 'de',
    title: 'Guten Tag! Greetings',
    description: 'Start speaking German with core greetings and introductions.',
    order: 1,
    color: '#FF8A00',
    iconEmoji: '🍺',
    lessonIds: ['de-u1-l1'],
  },
];

export function getUnitsByLanguage(languageId: string): Unit[] {
  return units
    .filter((u) => u.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((u) => u.id === id);
}
