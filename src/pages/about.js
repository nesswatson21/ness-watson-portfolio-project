import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/Biography.jpeg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref} />;
};

function about() {
    return (
        <>
            <Head>
                <title>Ness Watson Tangsang | About Page</title>
                <meta name="description" content="Ness Watson About Page" />
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Passion fuels purpose!"
                        className="mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />
                    <div className="grid w-full grid-cols-9 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start 2xl:col-span-4 xl:col-span-4 lg:order-2 lg:col-span-9 md:order-2 md:col-span-9">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                                Biography
                            </h2>
                            <p className="font-medium text-dark/75 ">
                                Hello, my name is Ness Watson Tangsang and I'm Full Stack Developer and My
                                passion lies in creating and designing
                                applications and games that not only look
                                visually appealing but are also intuitive, fun,
                                and engaging for users.
                            </p>
                            <p className="font-medium my-4 text-dark/75">
                                I&apos;ve always been curious about how things
                                work, which led me to pursue a degree in
                                development. Over the years, I&apos;ve honed my
                                skills in HTML, CSS, JavaScript, React, and
                                NextJS through various online courses,
                                workshops, and personal projects..
                            </p>
                            <p className="font-medium my-4 text-dark/75">
                                As a web developer, I believe that great design
                                is about more than just aesthetics - it&apos;s
                                about creating experiences that are intuitive,
                                accessible, and meaningful for users. Whether
                                I&apos;m working on a small website or a complex
                                web application, I always strive to put the user
                                first.
                            </p>
                            <p className="font-medium my-4 text-dark/75">
                                I&apos;m excited about the opportunities that
                                lie ahead and look forward to contributing my
                                skills and passion to create innovative digital
                                solutions.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 2xl:col-span-5 xl:col-span-5 lg:order-1 lg:col-span-9 md:order-1 md:col-span-9 md:p-4">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark md:w-[103%] md:h-[104%]" />
                            <Image
                                src={profilePic}
                                alt="my profile picture"
                                className="w-full h-auto rounded-2xl"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                priority
                            />
                        </div>
                        <div className="col-span-3 flex flex-col items-center justify-between border-r-2 2xl:col-span-9 xl:col-span-9 2xl:p-16 2xl:flex-row 2xl:items-center xl:flex-row xl:items-center lg:order-3 md:order-3 md:p-0 md:py-10 L-infinate:border-r-0">
                            <div className="flex flex-col items-end justify-center 2xl:items-center xl:items-center">
                                <span className="iniline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="iniline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={6} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    projects completed
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="iniline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    years of Experience
                                </h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    );
}

export default about;
