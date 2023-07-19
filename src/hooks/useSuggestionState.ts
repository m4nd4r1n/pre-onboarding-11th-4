import { useContext } from 'react';

import { SuggestionStateContext } from '@/contexts/suggestion';

export const useSuggestionState = () => {
  const suggestion = useContext(SuggestionStateContext);

  if (!suggestion) throw new Error('Cannot find SuggestionStateContext');

  return suggestion;
};
