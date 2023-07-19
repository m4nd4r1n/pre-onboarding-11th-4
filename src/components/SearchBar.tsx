import { MagnifyingGlassIcon } from './Icons';

import { API } from '@/constants/api';
import { useSuggestionDispatch } from '@/hooks/useSuggestionDispatch';
import {
  decreaseCurrentIndex,
  endLoading,
  increaseCurrentIndex,
  resetSuggestions,
  setErrorBy,
  setSuggestionsBy,
  startLoading,
} from '@/reducer/suggestion';

const SearchBar = () => {
  const dispatch = useSuggestionDispatch();

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    const keyword = e.target.value;
    if (!keyword) {
      dispatch(resetSuggestions());
      return;
    }

    try {
      dispatch(startLoading());
      const suggestions = await (
        await fetch(`${API.BASE_URL}/sick?q=${encodeURIComponent(keyword)}`)
      ).json();
      dispatch(setSuggestionsBy(suggestions));
    } catch (e) {
      console.error(e);
      if (e instanceof Error) dispatch(setErrorBy(e.message));
    } finally {
      dispatch(endLoading());
    }
  };

  return (
    <div className='flex h-12 items-center rounded-3xl bg-white outline-secondary focus-within:outline'>
      <MagnifyingGlassIcon className='mx-4 w-6 select-none' />
      <input
        type='text'
        placeholder='질환명을 입력해 주세요.'
        onChange={onInputChange}
        className='h-full flex-1 outline-none'
      />
      <button className='h-full rounded-r-3xl bg-secondary px-6 text-white'>검색</button>
    </div>
  );
};

export default SearchBar;
