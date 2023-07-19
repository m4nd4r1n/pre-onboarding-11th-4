export const API = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
  HEADER: {
    FETCH_DATE: 'fetch-date',
  },
} as const;
