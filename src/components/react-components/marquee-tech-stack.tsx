import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const techStack = [
  {
    name: "Next JS",
    img: "/tech_stack/nextjs-original.svg",
  },
  {
    name: "React",
    img: "/react.svg",
  },
  {
    name: "TypeScript",
    img: "/tech_stack/typescript-original.svg",
  },
  {
    name: "Node JS",
    img: "/tech_stack/nodejs-original.svg",
  },
  {
    name: "Supabase",
    img: "/tech_stack/supabase-original.svg",
  },
  {
    name: "Express",
    img: "/tech_stack/express-original.svg",
  },
  {
    name: "Tailwind CSS",
    img: "/tech_stack/tailwindcss-original.svg",
  },
  {
    name: "Prisma",
    img: "/tech_stack/prisma-original.svg",
  },
  {
    name: "MySQL",
    img: "/tech_stack/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    img: "/tech_stack/postgresql.svg",
  },
  {
    name: "JWT",
    img: "/tech_stack/jwt-icon.svg",
  },
  {
    name: "Playwright",
    img: "/tech_stack/playwright.svg",
  },
  {
    name: "Git",
    img: "/tech_stack/git.svg",
  },
  {
    name: "JavaScript",
    img: "/tech_stack/javascript.svg",
  },
  {
    name: "MongoDB",
    img: "/tech_stack/mongodb-icon.svg",
  },
];

const firstRow = techStack.slice(0, techStack.length / 2);
const secondRow = techStack.slice(techStack.length / 2);

const TechCard = ({
  img,
  name,

}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-44 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex justify-center flex-row items-center gap-4">
        <img className="" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function MarqueeTechStack() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
