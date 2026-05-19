import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";
import type { StateStorage } from "zustand/middleware";

// expo-secure-store adapter — works in Expo Go without any native build step
const secureStorage: StateStorage = {
  getItem: (name) => SecureStore.getItemAsync(name),
  setItem: (name, value) => SecureStore.setItemAsync(name, value),
  removeItem: (name) => SecureStore.deleteItemAsync(name),
};

type LanguageStore = {
  selectedLanguageId: string | null;
  hasHydrated: boolean;
  setSelectedLanguage: (id: string) => void;
  clearSelectedLanguage: () => void;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      hasHydrated: false,
      setSelectedLanguage: (id) => set({ selectedLanguageId: id }),
      clearSelectedLanguage: () => set({ selectedLanguageId: null }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => secureStorage),
      // Only persist the language id, not transient state like hasHydrated
      partialize: (state) => ({ selectedLanguageId: state.selectedLanguageId }),
      // Called after rehydration completes (or fails). useLanguageStore.setState
      // is used directly so it fires even when state arg is undefined (error path).
      onRehydrateStorage: () => () => {
        useLanguageStore.setState({ hasHydrated: true });
      },
    }
  )
);
