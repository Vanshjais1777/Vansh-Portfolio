// src/hooks/useDarkMode.ts
import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [dark, setDark] = useState<boolean>(
    () =>
      localStorage.theme === "dark" ||
      (!localStorage.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return { dark, toggle: () => setDark(!dark) };
};
