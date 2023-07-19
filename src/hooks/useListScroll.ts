import { useEffect, useRef } from 'react';

import { useSuggestionState } from './useSuggestionState';

export const useListScroll = <T extends HTMLElement>() => {
  const { currentIndex } = useSuggestionState();
  const listRef = useRef<T>(null);

  useEffect(() => {
    if (!listRef.current) return;
    if (currentIndex === -1) {
      listRef.current.scrollTo({ top: 0 });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          listRef.current?.scrollTo({ top: currentIndex * 48 });
        }
      });
    });

    const target = listRef.current.childNodes[currentIndex];
    target && observer.observe(target as Element);

    return () => {
      observer.disconnect();
    };
  }, [currentIndex]);

  return listRef;
};
