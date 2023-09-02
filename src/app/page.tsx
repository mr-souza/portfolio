'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
} from '@phosphor-icons/react';
import { motion } from 'framer-motion';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Project } from '@/components/Project';
import { SkillsContainer } from '@/components/SkillsContainer';

import nftCollectionManager from '../assets/nft-collection-manager.png';
import facings from '../assets/facings-website.png';

export default function Home() {
  const projects = [
    {
      title: 'NFT Collection Manager',
      description:
        'The NFT collection manager is an open-source project developed to help creators manage their collections, funding by EOS Network Foundation.',
      image: nftCollectionManager,
      skills: ['Next.JS', 'Tailwind', 'Typescript', 'Blockchain'],
      link: 'https://creator.facings.io',
    },
    {
      title: 'FACINGS',
      description:
        'FACINGS empowers creators by giving them tools to manage NFT collections with ease, streamlining the path to rich digital experiences for everyone.',
      image: facings,
      skills: ['React', 'Emotion', 'Blockchain'],
      reverse: true,
      link: 'https://facings.io',
    },
  ];

  return (
    <div className="container mx-auto antialiased">
      <Header />
      <main className="flex flex-col md:py-40 py-20 px-8 sm:gap-60 gap-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <div className="flex sm:flex-row flex-col gap-20 justify-between items-center w-full">
            <div className="flex1">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-lg">
                  <span className="lg:text-2xl text-xl">Hi, I am</span>
                  <span className="font-abril text-7xl">Marcelo Souza,</span>
                  <span className="lg:text-2xl text-xl">
                    a <b>Frontend Engineer</b> and <b>UX/UI Designer</b>.
                  </span>
                </div>
                <div className="flex flex-row sm:gap-4 gap-[1.5rem]">
                  <Link
                    href="https://www.linkedin.com/in/mr-souza"
                    className="hover:scale-105 duration-200"
                    target="_blank"
                  >
                    <LinkedinLogo size={32} />
                  </Link>
                  <Link
                    href="https://github.com/mr-souza"
                    className="hover:scale-105 duration-200"
                    target="_blank"
                  >
                    <GithubLogo size={32} />
                  </Link>
                  <Link
                    href="mailto:marcelo.rodriguesdsa@gmail.com"
                    className="hover:scale-105 duration-200"
                    target="_blank"
                  >
                    <EnvelopeSimple size={32} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex1">
              <Image
                width={380}
                height={380}
                alt="Marcelo Souza picture"
                src="https://media.licdn.com/dms/image/D4D03AQEKxxMpg_WHZw/profile-displayphoto-shrink_400_400/0/1692297328142?e=1698278400&v=beta&t=Y-WcgaS1kcJa3ecXyE2EOHo08seYsU4Z-jeh20xPtFs"
              />
            </div>
          </div>
        </motion.div>

        <div
          id="skills"
          className="flex sm:flex-row flex-col items-center justify-between sm:gap-40 gap-20"
        >
          <div className="flex flex-col gap-2 sm:w-6/12">
            <h2 className="font-abril text-[3.5rem]">Check out my skills</h2>
            <span className="text-lg">
              I have honed my skills around JavaScript frameworks and libraries,
              such as React, Next and TypeScript among other technologies.
            </span>
          </div>
          <SkillsContainer />
        </div>

        <div id="projects" className="flex flex-col sm:gap-40 gap-20">
          <h2 className="font-abril text-[3.5rem] xl:w-2/5 sm:w-4/6 w-full">
            Take a look at some of my projects
          </h2>
          <div className="flex flex-col gap-40">
            {projects.map(project => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={{
                  offscreen: {
                    y: 200,
                  },
                  onscreen: {
                    y: 50,
                    transition: {
                      type: 'spring',
                      bounce: 0.4,
                      duration: 0.8,
                    },
                  },
                }}
              >
                <Project
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  skills={project.skills}
                  link={project.link}
                  reverse={project.reverse}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div id="contact" className="flex flex-col gap-8">
          <h2 className="font-abril text-[3.5rem] md:w-2/5 w-full">
            Let's create something great together
          </h2>
          <Link
            href="mailto:marcelo.rodriguesdsa@gmail.com"
            target="_blank"
            className="btn"
          >
            Get in touch
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
