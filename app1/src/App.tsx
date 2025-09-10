import React, { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handler = (e: any) => setTheme(e.detail.theme);
    window.DaSpaState?.addEventListener("theme-change", handler);
    return () => window.DaSpaState?.removeEventListener("theme-change", handler);
  }, []);

  return (
    <div>
      <h2>App1 (Theme: {theme})</h2>
      <button onClick={() => window.DaSpaState?.setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    </div>
  );
}
