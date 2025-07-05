import Link from 'next/link';
import { FaGithub, FaTelegram } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="mb-5 py-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-2">
        <Link className="text-2xl font-semibold" href="/">
          kikko
        </Link>

        <ul className="flex gap-4 text-2xl">
          <li className="rounded-md p-2 transition-all duration-150 ease-in-out hover:bg-black/10">
            <Link href="https://t.me/takedelight">
              <FaTelegram />
            </Link>
          </li>
          <li className="rounded-md p-2 transition-all duration-150 ease-in-out hover:bg-black/10">
            <Link href="https://github.com/OleksiyNikolaenko">
              <FaGithub />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
