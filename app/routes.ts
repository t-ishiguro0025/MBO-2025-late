import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout("routes/_auth/layout.tsx", [
    route("/", "routes/_auth/login.tsx"), // 追加
    route("/login", "routes/_auth/login.tsx"),
  ]),
] satisfies RouteConfig;
