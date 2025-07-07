'use client';

import { SearchContext } from '@/context';
import { getVideoIdFromURL } from '@/lib/getVideoIdFromURL';
import { isURL } from '@/lib/isURL';
import {
  ChangeEvent,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [inputValue, setInputValue] = useState('h');
  const [error, setError] = useState<Error | null>(null);
  const [quality, setQuality] = useState<number>(399);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (!isURL(value)) {
      setError(new Error('Невірний формат URL-адреси'));
    } else {
      setError(null);
    }
  }, []);

  const id = inputValue ? getVideoIdFromURL(inputValue) : null;

  const values = useMemo(
    () => ({ inputValue, error, handleChange, id, quality, setQuality }),
    [inputValue, error, handleChange, id, quality, setQuality],
  );

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};
