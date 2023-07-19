import { useContext } from 'react';

import { SuggestionDispatchContext } from '@/contexts/suggestion';

export const useSuggestionDispatch = () => {
  const dispatch = useContext(SuggestionDispatchContext);

  if (!dispatch) throw new Error('Cannot find SuggestionDispatchContext');

  return dispatch;
};
