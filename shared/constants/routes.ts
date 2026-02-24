export const ROUTES = {
  login: '/login',
  logs: {
    index: '/logs',
    detail: (id: string) => `/logs/${id}`,
  },
} as const;
