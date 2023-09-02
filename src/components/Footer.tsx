import Link from 'next/link';
import {
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
} from '@phosphor-icons/react';

export function Footer() {
  return (
    <footer className="flex flex-row gap-8 py-10 px-8 justify-between border-t border-white/20">
      <span className="text-sm">© 2023 - Marcelo Souza</span>
      <div className="flex flex-row gap-4">
        <Link
          href="https://www.linkedin.com/in/mr-souza"
          className="hover:scale-105 duration-200"
          target="_blank"
        >
          <LinkedinLogo size={24} />
        </Link>
        <Link
          href="https://github.com/mr-souza"
          className="hover:scale-105 duration-200"
          target="_blank"
        >
          <GithubLogo size={24} />
        </Link>
        <Link
          href="mailto:marcelo.rodriguesdsa@gmail.com"
          className="hover:scale-105 duration-200"
          target="_blank"
        >
          <EnvelopeSimple size={24} />
        </Link>
      </div>
    </footer>
  );
}
