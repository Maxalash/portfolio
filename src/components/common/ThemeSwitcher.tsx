"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import MoonIcon from "../assets/Moon";
import SunIcon from "../assets/Sun";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isDarkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme]);
  useEffect(() => console.log(theme), [theme]);
  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <button
        style={{
          outline: "none",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={() => {
          console.log(theme === "light" ? "dark" : "light");
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? (
          <MoonIcon fill="var(--color-dark-blue)" />
        ) : (
          <SunIcon fill="var(--color-light-beige)" />
        )}
      </button>
    </div>
  );
}
