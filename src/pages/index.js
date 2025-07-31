import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/ProfilePic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/Hireme";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ness Watson Tangsang | Home Page</title>
                <meta
                    name="description"
                    content="Built by Ness Watson Tangsang, a Frontend Developer with a passion for creating web applications."
                />
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen">
                <Layout className="pt-0 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2 md:w-full">
                            <Image
                                src={profilePic}
                                alt="my profile"
                                className="w-full h-auto lg:hidden md:inline-block md:w-full md:pb-[30px]"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                priority
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                            <AnimatedText
                                text="Breathing ideas to life elegant code thoughtful design."
                                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text 6xl md:!text-5xl sm:!text-3xl"
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                                                Hi, I&apos;m Ness Watson Tangsang, I am a Frontend Developer who&apos;s passionate & ethusiastic about creating web application. I am into web developement from past 2 years and I have experience working on serveral real world end-to-end project using HTML, CSS, Javascript, Python,  React JS, Typescript, Redux, Web3.js ,React Context API & Firebase . I have done my graduation in Bachelors of Science in Information Technology. And I have internships experience as a React Developer in Blockchain Technology.

I am a quick learner & have a good problem solving mindset. I am a result oriented person and have a always learning attitude. I love to learn new technologies & keep upgrading my skills!🚀
                            </p>
                            <div className=" w-80 flex justify-between items-center self-start mt-2 lg:self-center">
                                <Link
                                    href="/Ness Watson Resume.pdf" //"Ness Watson Resume.pdf"
                                    target={"_blank"}
                                    className="flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg front-semibold hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                                    download={true}
                                >
                                    Resume
                                    <LinkArrow className={"w-6 ml-1"} />
                                </Link>
                                <Link
                                    href="mailto:nesswtsn90@gmail.com"
                                    target={"_blank"}
                                    className="ml-4 font-medium capitalize text-dark underline border-2 border-solid border-transparent hover:border-dark rounded-lg text-lg front-semibold p-2.5 px-6 md:text-base"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Hireme />
            </main>
        </>
    );
}