import { React, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, adress, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="-blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm">
          {time} | {adress}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

function Experiance() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experiance
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 -top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between m1-4 xs:ml-2">
          <Details
            companyLink="www.tre.se"
            position="Business delivery"
            company="Hi3G Access AB (TRE)"
            time="2020-Present"
            adress="Stockholm, Sweden"
            work="In my current role, I'm responsible for a few selected top-priority retail partners. I provide them with anything they need to acquire new customers and help with client relations afterward. I specialize in creating and managing phone switches and helping set up IT environments when the client and retailer do not have the ability or knowledge to do it themselves"
          />
          <Details
            companyLink="www.tre.se"
            position="B2B Loyalty sales"
            company="Hi3G Access AB (TRE)"
            time="2017-2022"
            adress="Stockholm, Sweden"
            work="I was a sales representative working and managing loyal customers. I started building my own subscription base and relations with clients by providing them with top-quality service. They wanted me as their personal seller, and this made my results spike. The lesson learned here was that good service and customer relations build trust and loyalty."
          />
          <Details
            companyLink="www.tre.se"
            position="Account manager & Loyalty sales"
            company="Hi3G Access AB (TRE)"
            time="2017/June-2017/Aug"
            adress="Stockholm, Sweden"
            work="I was an account manager for new sales and retired customers, with a focus on convincing clients to switch to us from our competitors, mostly through phone calls and a few meetings."
          />
          <Details
            companyLink="www.tre.se"
            position="Customer representative"
            company="Hi3G Access AB (TRE)"
            time="2014-2017"
            adress="Stockholm, Sweden"
            work="This was my first job in the sales/service industry. It is the foundation that built my communication and relationship-building skills. This job helped me tremendously improve as a person by forcing me to handle a lot of uncomfortable situations"
          />
        </ul>
      </div>
    </div>
  );
}

export default Experiance;
