'use client';

import Image from 'next/image';

import next from '../assets/icons/next.png';
import react from '../assets/icons/react.png';
import javascript from '../assets/icons/javascript.png';
import typescript from '../assets/icons/typescript.png';
import figma from '../assets/icons/figma.png';
import tailwind from '../assets/icons/tailwind.png';
import git from '../assets/icons/git.png';
import gitlab from '../assets/icons/gitlab.png';
import vue from '../assets/icons/vue.png';
import node from '../assets/icons/node.png';
import mysql from '../assets/icons/mysql.png';

export function SkillsContainer() {
  const skills = [
    { label: 'Next', img: next },
    { label: 'React', img: react },
    { label: 'JavaScript', img: javascript },
    { label: 'TypeScript', img: typescript },
    { label: 'Figma', img: figma },
    { label: 'Tailwind', img: tailwind },
    { label: 'Git', img: git },
    { label: 'GitLab', img: gitlab },
    { label: 'Vue', img: vue },
    { label: 'Node', img: node },
    { label: 'MySQL', img: mysql },
  ];

  return (
    <div className="flex flex-wrap xl:w-1/4 sm:w-3/6 w-full gap-4 sm:justify-end justify-start">
      {skills.map(skill => (
        <div className="flex p-4 w-20 h-20 bg-zinc-900 rounded justify-center items-center">
          <Image
            src={skill.img}
            alt={skill.label}
            style={{ objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  );
}
