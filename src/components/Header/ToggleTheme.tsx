'use client';

import { useTheme } from 'next-themes';
import { MdOutlineWbSunny } from 'react-icons/md';
import { RiMoonClearLine } from 'react-icons/ri';
import { Button } from '..';

export const ToggleTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();
  console.log(resolvedTheme);
  return (
    <Button
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      variant="outline">
      {resolvedTheme === 'light' ? <MdOutlineWbSunny /> : <RiMoonClearLine />}
    </Button>
  );
};
