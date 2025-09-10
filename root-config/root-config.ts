import { registerApplication, start } from "single-spa";
import "./DaSpaState";

registerApplication({
  name: "@app1",
  app: () => import("app1"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@app2",
  app: () => import("app2"),
  activeWhen: ["/"]
});

start();
