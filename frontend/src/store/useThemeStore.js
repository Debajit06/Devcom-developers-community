import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("Devcom-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("Devcom-theme", theme);
        set({ theme });
    },
}));