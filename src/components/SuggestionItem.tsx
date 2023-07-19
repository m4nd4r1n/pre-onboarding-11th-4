import { memo } from 'react';

import { MagnifyingGlassIcon } from './Icons';

interface SuggestionItemProps {
  suggestion: string;
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({ suggestion }) => {
  return (
    <div className='flex items-center gap-3'>
      <MagnifyingGlassIcon className='w-5' />
      <span className='flex-1 overflow-y-scroll whitespace-nowrap scrollbar-hide'>
        {suggestion}
      </span>
    </div>
  );
};

export default memo(SuggestionItem);
