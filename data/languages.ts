import type { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/w320/es.png",
    code: "es",
    totalUnits: 2,
    learnerCount: "28.4M learners",
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/w320/fr.png",
    code: "fr",
    totalUnits: 1,
    learnerCount: "19.4M learners",
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w320/jp.png",
    code: "ja",
    totalUnits: 1,
    learnerCount: "12.7M learners",
  },
  {
    id: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "https://flagcdn.com/w320/kr.png",
    code: "ko",
    totalUnits: 1,
    learnerCount: "9.3M learners",
  },
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w320/de.png",
    code: "de",
    totalUnits: 1,
    learnerCount: "8.1M learners",
  },
  {
    id: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "https://flagcdn.com/w320/cn.png",
    code: "zh",
    totalUnits: 1,
    learnerCount: "7.4M learners",
  },
];

export function getLanguageById(id: string): Language | undefined {
  return languages.find((l) => l.id === id);
}
