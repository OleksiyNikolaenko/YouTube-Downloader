'use client';

import { ChangeEvent, createContext, Dispatch, SetStateAction } from 'react';

interface Context {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: Error | null;
  id: string | null;
  quality: number | null;
  setQuality: Dispatch<SetStateAction<number>>;
}

export const SearchContext = createContext<Context | null>(null);
