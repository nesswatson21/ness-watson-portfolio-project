import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/my-portfolio-thumbnail.png";
import project2 from "../../public/images/projects/slack-mockup.png";
import project3 from "../../public/images/projects/To-do-list-app.png";
import project4 from "../../public/images/projects/my-first-page.png";

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[100.6%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark/75">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-smibold"
          >
            Visit the project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, githubLink }) => {
  return (
    <article className="w-full  flex flex-col items-center justify-center rounded-2xl border border-soild border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101.3%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold ">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark/75">{summary}</p>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects() {
  return (
    <>
      <Head>
        <title>william | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className=" mb-28 w-[90%]"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="My Portfolio"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                type="Featured Project"
                githubLink="https://github.com/Willi0t/my-portfolio"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Slack recreation"
                img={project2}
                link="https://mellifluous-sawine-7134b3.netlify.app/"
                type="Featured Project"
                githubLink="https://github.com/Willi0t/slack2.0"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="To-do list app with REST API"
                img={project3}
                link="https://todolist-fullstack.netlify.app/"
                type="Featured Project"
                githubLink="https://github.com/app-HI/todolist-pernstack"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="My very first webpage"
                img={project4}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="https://bucolic-tarsier-4e2594.netlify.app/"
                type="Featured Project"
                githubLink="https://github.com/Willi0t/scandinavia"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="arcade fighter with Hyper Island theme"
                img={project1}
                link="/"
                type="Featured Project"
                githubLink="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                img={project1}
                link="/"
                type="Featured Project"
                githubLink="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
