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

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 -top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between m1-4 xs:ml-2">
          <Details
            companyLink="https://aircel.com/"
            position="Aircel Telecom"
            company=" https://aircel.com/ "
           adress="Guwahati, Assam"
            work="Handled escalated customer issues and ensured SLA (Service-Level Agreement) adherences"
          />
          <Details
            companyLink="https://bsnl.co.in"
            position="Sale & Marketing"
            company="https://bsnl.co.in"
            adress="📍 Shillong, Meghalaya"
            work="Managed end-to-end customer service operations across landline, broadband, and mobile segments, leading a helpdesk team and coordinating with field technicians to ensure timely resolution of high-volume technical issues."
          />
          <Details
            companyLink="/#"
            position="Hardware & Network Engineer"
            company="https://bsnl.co.in"
            adress="📍 Shillong, Meghalaya"
            work="Maintained and supported network infrastructure, resolved LAN/WAN issues, installed CPE for FTTH, conducted cabling, met SLA targets, and provided technical support with regular reporting to the regional BSNL office."
          />
          <Details
            companyLink="/#"
            position="Database Administrator (DBA)"
            company="Database Administrator (DBA)"
            work="As a Database Administrator, I installed, configured, and maintained enterprise database systems including Oracle, MySQL, and SQL Server. I ensured high availability through replication and scheduled backups, while also managing performance tuning, query optimization, indexing, and partitioning. I enforced robust security protocols by implementing user access controls, encryption, and auditing. I automated routine maintenance tasks using shell scripts and scheduled jobs, and collaborated closely with developers to design efficient schemas and stored procedures. I handled database migrations, upgrades, and patching during maintenance windows, and maintained detailed documentation, incident logs, and audit reports to ensure compliance and operational continuity."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
