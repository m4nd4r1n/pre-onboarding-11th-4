import { useReducer } from 'react';

import type { SuggestionList } from '@/types/suggestion';

type SuggestionState = {
  data: SuggestionList;
  error: string | null;
  isLoading: boolean;
  currentIndex: number;
};

const initialState: SuggestionState = {
  data: [],
  error: null,
  isLoading: false,
  currentIndex: -1,
};

const ACTION = {
  SET_SUGGESTIONS: 'SET_SUGGESTIONS',
  START_LOADING: 'START_LOADING',
  END_LOADING: 'END_LOADING',
  SET_ERROR: 'SET_ERROR',
  RESET: 'RESET',
  INCREASE_CURRENT_INDEX: 'INCREASE_CURRENT_INDEX',
  DECREASE_CURRENT_INDEX: 'DECREASE_CURRENT_INDEX',
} as const;

export const setSuggestionsBy = (payload: SuggestionList) => ({
  type: ACTION.SET_SUGGESTIONS,
  payload,
});
export const startLoading = () => ({ type: ACTION.START_LOADING });
export const endLoading = () => ({ type: ACTION.END_LOADING });
export const setErrorBy = (payload: string) => ({ type: ACTION.SET_ERROR, payload });
export const resetSuggestions = () => ({ type: ACTION.RESET });
export const increaseCurrentIndex = () => ({ type: ACTION.INCREASE_CURRENT_INDEX });
export const decreaseCurrentIndex = () => ({ type: ACTION.DECREASE_CURRENT_INDEX });

type SuggestionAction =
  | ReturnType<typeof setSuggestionsBy>
  | ReturnType<typeof startLoading>
  | ReturnType<typeof endLoading>
  | ReturnType<typeof setErrorBy>
  | ReturnType<typeof resetSuggestions>
  | ReturnType<typeof increaseCurrentIndex>
  | ReturnType<typeof decreaseCurrentIndex>;

const reducer = (prevState: SuggestionState, action: SuggestionAction): SuggestionState => {
  switch (action.type) {
    case ACTION.SET_SUGGESTIONS: {
      return { ...prevState, data: action.payload };
    }
    case ACTION.START_LOADING: {
      return { ...prevState, isLoading: true, error: null, currentIndex: -1 };
    }
    case ACTION.END_LOADING: {
      return { ...prevState, isLoading: false };
    }
    case ACTION.SET_ERROR: {
      return { ...prevState, error: action.payload };
    }
    case ACTION.RESET: {
      return initialState;
    }
    case ACTION.INCREASE_CURRENT_INDEX: {
      const { data, currentIndex } = prevState;
      if (!data.length) return prevState;
      if (currentIndex === data.length - 1) return { ...prevState, currentIndex: 0 };
      return { ...prevState, currentIndex: prevState.currentIndex + 1 };
    }
    case ACTION.DECREASE_CURRENT_INDEX: {
      const { data, currentIndex } = prevState;
      if (!data.length) return prevState;
      if (currentIndex <= 0) return { ...prevState, currentIndex: data.length - 1 };
      return { ...prevState, currentIndex: prevState.currentIndex - 1 };
    }
    default: {
      return prevState;
    }
  }
};

const useSuggestionReducer = () => useReducer(reducer, initialState);

export default useSuggestionReducer;
