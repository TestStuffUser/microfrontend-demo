import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("app2-root");
if (container) {
  createRoot(container).render(<App />);
}

export const bootstrap = async () => {};
export const mount = async () => {};
export const unmount = async () => {};
