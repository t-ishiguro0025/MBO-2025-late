import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: true,
  basename: process.env.BASE_URL || "/",
  future: {
    v8_middleware: true,
  },
} satisfies Config;
