import { ArrowPathIcon } from './Icons';
import SuggestionItem from './SuggestionItem';

import { useListScroll } from '@/hooks/useListScroll';
import { useSuggestionState } from '@/hooks/useSuggestionState';
import { classnames } from '@/libs/classnames';

const SuggestionList = () => {
  const { data, error, isLoading, currentIndex } = useSuggestionState();
  const listRef = useListScroll<HTMLUListElement>();

  return (
    <div className='relative mt-2 rounded-3xl bg-white p-4 shadow-lg'>
      <span className='mx-2 text-xs text-gray'>추천 검색어</span>
      {data.length ? (
        <>
          <ul ref={listRef} className='max-h-[383px] space-y-2 overflow-hidden'>
            {data.map(({ sickCd, sickNm }, index) => (
              <li
                key={sickCd}
                className={classnames(
                  'p-2',
                  index === currentIndex && 'rounded-3xl bg-secondary bg-opacity-50',
                )}
              >
                <SuggestionItem suggestion={sickNm} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div className='p-2'>검색어 없음</div>
      )}
      {!!error && (
        <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl bg-white text-red'>
          {error}
        </div>
      )}
      {isLoading && (
        <div className='absolute left-0 top-0 flex h-full w-full justify-center rounded-3xl bg-white'>
          <ArrowPathIcon className='w-6 animate-spin' />
        </div>
      )}
    </div>
  );
};

export default SuggestionList;
