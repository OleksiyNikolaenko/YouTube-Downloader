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
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<Error | null>(null);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (!isURL(value)) {
      setError(new Error('Невірний формат URL-адреси'));
    } else {
      setError(null);
    }
  }, []);

  const id = getVideoIdFromURL(inputValue);

  const values = useMemo(
    () => ({ inputValue, error, handleChange, id }),
    [inputValue, error, handleChange, id],
  );

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};
