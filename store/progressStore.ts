import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import type { StateStorage } from "zustand/middleware";

const secureStorage: StateStorage = {
  getItem: (name) => SecureStore.getItemAsync(name),
  setItem: (name, value) => SecureStore.setItemAsync(name, value),
  removeItem: (name) => SecureStore.deleteItemAsync(name),
};

export const XP_DAILY_GOAL = 20;

type ProgressStore = {
  xp: number;
  streak: number;
  completedLessonIds: string[];
  addXP: (amount: number) => void;
  completeLesson: (id: string) => void;
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      xp: 15,
      streak: 12,
      completedLessonIds: [],
      addXP: (amount) =>
        set({ xp: Math.min(get().xp + amount, XP_DAILY_GOAL) }),
      completeLesson: (id) => {
        const { completedLessonIds } = get();
        if (!completedLessonIds.includes(id)) {
          set({ completedLessonIds: [...completedLessonIds, id] });
        }
      },
    }),
    {
      name: "progress-storage",
      storage: createJSONStorage(() => secureStorage),
      partialize: (state) => ({
        xp: state.xp,
        streak: state.streak,
        completedLessonIds: state.completedLessonIds,
      }),
    }
  )
);
