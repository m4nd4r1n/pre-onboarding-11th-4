import { createContext } from 'react';

import type useSuggestionReducer from '@/reducer/suggestion';

export const SuggestionStateContext = createContext<
  ReturnType<typeof useSuggestionReducer>[0] | null
>(null);
export const SuggestionDispatchContext = createContext<
  ReturnType<typeof useSuggestionReducer>[1] | null
>(null);
