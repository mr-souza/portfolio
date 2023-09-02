import { useState } from 'react';
import Link from 'next/link';
import { List, X } from '@phosphor-icons/react';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between text-lg py-4 sm:px-8 px-4 top-0 left-0 sticky z-40 w-full bg-black">
      <Link href="/">{'<Marcelo Souza />'}</Link>
      <nav className="flex gap-4">
        <div
          data-open={open}
          className="flex bg-black md:items-center w-full h-[calc(100vh-6rem)] md:h-auto flex-col md:flex-row absolute right-0 top-[6rem] md:static md:transform-none data-[open=false]:-left-full duration-300 data-[open=false]:opacity-0 data-[open=false]:md:opacity-100"
        >
          <Link
            href="#skills"
            className="sm:ml-8 ml-4 py-4 hover:scale-105 duration-200"
            onClick={() => setOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="sm:ml-8 ml-4 py-4 hover:scale-105 duration-200"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="sm:ml-8 ml-4 py-4 hover:scale-105 duration-200"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
        <button
          type="button"
          className="p-3 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={32} /> : <List size={32} />}
        </button>
      </nav>
    </header>
  );
}
