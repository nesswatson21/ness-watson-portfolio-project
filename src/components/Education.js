import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between md:w-[80%] md:mr-[20px]"
    >
      <LiIcon referance={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transtion={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between m1-4 xs:ml-2">
          <Details
            type="Bachelors of Science in Information Technology"
            time="2013"
            place="AU,Tamil Nadu"
            info="Studied core subjects such as AI Algorithms, Networking, Database Management, Web Development, and Operating Systems, while completing hands-on projects in hardware configuration, software development, and network design; also learned French as part of the curriculum, focusing on basic communication, reading, and technical vocabulary."
          />
          <Details
            type="Hardware Course and PC maintenance & Networking"
            time="2014"
            place="Guwahati, Assam"
            info="The Hardware and PC Maintenance course provides foundational and advanced knowledge in assembling, troubleshooting, and maintaining desktop and laptop systems. It covers key hardware components such as motherboards, CPUs, RAM, hard drives, power supplies, and peripherals. The course includes training in BIOS/UEFI configuration, installing and upgrading operating systems, diagnosing hardware faults, and performing preventive maintenance. Learners also gain exposure to basic networking concepts, virus removal, data backup solutions, and system optimization techniques"
          />
          <Details
            type="Arena Multi-media & VFX  & CEH Course from Symantec "
            time="2010"
            place="Shillong"
            info="Completed certified training in VFX, Graphic Design, Motion Graphics, Video Editing, Photography, and Web & Graphics Design, gaining hands-on experience with tools like Autodesk Maya, Adobe Photoshop, After Effects, Illustrator, Premiere Pro , Davinci Studio Pro, Blender, Unreal Engine. Worked on animation clips, visual composition projects, logo design, and responsive web layouts while learning the fundamentals of storytelling, 3D modeling, lighting, texturing, and compositing. Participated in workshops and peer reviews to enhance both creative thinking and technical execution & I am a tech-driven professional with hands-on experience in networking, system hardware, and cybersecurity. Alongside my background in IT infrastructure and multimedia, I have pursued specialized training as a Certified Ethical Hacker (CEH) to deepen my knowledge in ethical hacking, vulnerability assessment, and digital defense strategies. This certification has equipped me to think like a hacker to protect systems, secure data, and contribute to a safer digital environment.

.
"
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
