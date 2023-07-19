import { useState } from 'react';

import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';

import SuggestionProvider from '@/contexts/suggestion/Provider';

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  return (
    <SuggestionProvider>
      <SearchBar onFocus={onFocus} onBlur={onBlur} />
      {isFocus && <SuggestionList />}
    </SuggestionProvider>
  );
};

export default Search;
