import React, { useEffect, useState } from "react";

export default function App() {
  const [token, setToken] = useState("no-token");

  useEffect(() => {
    const handler = (e: any) => setToken(e.detail.token);
    window.DaSpaState?.addEventListener("token-change", handler);
    return () => window.DaSpaState?.removeEventListener("token-change", handler);
  }, []);

  return (
    <div>
      <h2>App2 (Token: {token})</h2>
      <button onClick={() => window.DaSpaState?.setToken(token === "no-token" ? "abc123" : "no-token")}>Toggle Token</button>
    </div>
  );
}
