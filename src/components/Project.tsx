import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  image: StaticImageData;
  title: string;
  link: string;
  description: string;
  reverse?: boolean;
  skills: string[];
}

export function Project({
  link = '',
  image,
  title,
  skills,
  reverse,
  description,
}: ProjectProps) {
  return (
    <div
      className={`flex ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col xl:gap-40 gap-20 items-center justify-center`}
    >
      <div className="flex rounded overflow-hidden">
        <Image src={image} alt={`${title} - image`} width={460} height={460} />
      </div>
      <div className="flex1">
        <div className="flex flex-col gap-4 md:max-w-prose w-full">
          <h3 className="font-abril text-4xl sm:whitespace-nowrap">{title}</h3>
          <span>{description}</span>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="badge">
                {skill}
              </span>
            ))}
          </div>
          <Link
            href={link}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row gap-2 font-bold">
              <span>Visit website</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
