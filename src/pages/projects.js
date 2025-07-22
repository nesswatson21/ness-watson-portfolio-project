import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/Proj2.jpg";
import project2 from "../../public/images/projects/slack-mockup.png";
import project3 from "../../public/images/projects/To-do-list-app.png";
import project4 from "../../public/images/projects/my-first-page.png";
import project5 from "../../public/images/projects/my-fighter.png";
import project6 from "../../public/images/projects/Proj1.jpg";


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 lg:flex-col lg:p-8 lg:min-h-[336px] xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[100.6%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark/75">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link href={githubLink} target="_blank" className="w-10">
                        <GithubIcon />
                    </Link>
                    <Link
                        href={githubLink}
                        target="_blank"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-smibold sm:px-4 sm:text-base"
                    >
                        Visit
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ type, title, summary, img, link, githubLink }) => {
    return (
        <article className="w-full  flex flex-col items-center justify-center rounded-2xl border border-soild border-dark bg-light p-6 relative md:p-4 xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101.3%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4  2xl:min-h-[172px] lg:min-h-[164px] md:min-h-[152px]">
                <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark/75 sm:text-sm">
                    {summary}
                </p>
                <div className=" w-full mt-2 flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className=" text-lg font-semibold underline md:text-base"
                    >
                        Visit
                    </Link>
                    <Link
                        href={githubLink}
                        target="_blank"
                        className="w-8 md:w-6"
                    >
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    return (
        <>
            <Head>
                <title>Ness Watson Tangsang | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="My Projects"
                        className=" mb-28 w-[90%] lg:!text-7xl sm:mb-8 sm:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Simple RSVP Tracker"
                                img={project6}
                                summary="I created an RSVP Tracker using Next.js,  integrate message sending functionality using different protocols depending on the use case — like confirmation emails, SMS, or real-time status updates."
                                link="https://rsvper.netlify.app/"
                                type="Featured Project"
                                githubLink="https://rsvper.netlify.app/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Slack recreation"
                                img={project2}
                                link="https://mellifluous-sawine-7134b3.netlify.app/"
                                type="Project"
                                githubLink="https://mellifluous-sawine-7134b3.netlify.app/"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="To-do list app with REST API"
                                img={project3}
                                link="https://todolist-fullstack.netlify.app/"
                                type="Project"
                                githubLink="https://github.com/app-HI/todolist-pernstack"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="My Portfolio"
                                img={project1}
                                summary="I wanted to create a site that showcased my skills and projects in a clean and modern way. With NextJS, I was able to build a fast and responsive site that highlights my work and experience."
                                link="/https://github.com/nesswatson21/auto_suggest-ajax-jquery-php"
                                type="Creative Style Project"
                                githubLink="/https://github.com/nesswatson21/auto_suggest-ajax-jquery-php"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Battle Arena Fighter 96"
                                img={project5}
                                link="https://jovial-moonbeam-d7fc97.netlify.app/"
                                type="Project"
                                githubLink="https://github.com/munnizashah/HyperBattle"
                            />
                        </div>
                        
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;
