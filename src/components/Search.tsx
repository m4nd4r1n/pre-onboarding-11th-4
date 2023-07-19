import SearchBar from './SearchBar';

import SuggestionProvider from '@/contexts/suggestion/Provider';

const Search = () => {
  return (
    <SuggestionProvider>
      <SearchBar />
    </SuggestionProvider>
  );
};

export default Search;
