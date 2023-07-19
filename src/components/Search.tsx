import SearchBar from './SearchBar';
import SuggestionList from './SuggestionList';

import SuggestionProvider from '@/contexts/suggestion/Provider';

const Search = () => {
  return (
    <SuggestionProvider>
      <SearchBar />
      <SuggestionList />
    </SuggestionProvider>
  );
};

export default Search;
