import { SuggestionDispatchContext, SuggestionStateContext } from '.';

import useSuggestionReducer from '@/reducer/suggestion';

const SuggestionProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useSuggestionReducer();

  return (
    <SuggestionStateContext.Provider value={state}>
      <SuggestionDispatchContext.Provider value={dispatch}>
        {children}
      </SuggestionDispatchContext.Provider>
    </SuggestionStateContext.Provider>
  );
};

export default SuggestionProvider;
