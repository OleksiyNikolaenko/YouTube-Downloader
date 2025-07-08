import Link from 'next/link';
import { BurgerMenu } from './BurgerMenu';
import { ToggleTheme } from './ToggleTheme';

export const Header = () => {
  return (
    <header className="mb-5 py-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-2">
        <Link className="text-2xl font-semibold" href="/">
          kikko
        </Link>

        <ul className="sm: hidden items-center sm:flex">
          <li className="hover:text-primary rounded-md p-2 transition-all duration-150 ease-in-out">
            <Link href="#how-it-work">Як це працює</Link>
          </li>
          <li className="hover:text-primary rounded-md p-2 transition-all duration-150 ease-in-out">
            <Link href="#features">Особливості</Link>
          </li>
          <li className="hover:text-primary rounded-md p-2 transition-all duration-150 ease-in-out">
            <Link href="#faq">FAQ</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ToggleTheme />
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
};
