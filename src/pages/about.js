import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile-pic.jpg";
import Image from "next/image";
import { spring, useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experiance from "@/components/Experiance";
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
        <title>william | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion fuels purpose!" className="mb-20" />
          <div className="grid w-full grid-cols-9 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                biography
              </h2>
              <p className="font-medium text-dark/75 ">
                Hello, my name is William amd i currently study front end
                development at Hyper Island. My passion lies in creating and
                designing applications and games that not only look visually
                appealing but are also intuitive, fun, and engaging for users.
              </p>
              <p className="font-medium my-4 text-dark/75">
                I&apos;ve always been curious about how things work, which led
                me to pursue a degree in development. Over the years, I&apos;ve
                honed my skills in HTML, CSS, JavaScript, React, and NextJS
                through various online courses, workshops, and personal
                projects..
              </p>
              <p className="font-medium my-4 text-dark/75">
                As a web developer, I believe that great design is about more
                than just aesthetics - it&apos;s about creating experiences that
                are intuitive, accessible, and meaningful for users. Whether
                I&apos;m working on a small website or a complex web
                application, I always strive to put the user first.
              </p>
              <p className="font-medium my-4 text-dark/75">
                I&apos;m excited about the opportunities that lie ahead and look
                forward to contributing my skills and passion to create
                innovative digital solutions.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                priority={true}
                src={profilePic}
                alt="william sinclair"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-3 flex flex-col items-center justify-between">
              <div className="flex flex-col items-end justify-end">
                <span className="iniline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="iniline-block text-7xl font-bold">
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="iniline-block text-7xl font-bold">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  years of expierance
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experiance />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default about;
