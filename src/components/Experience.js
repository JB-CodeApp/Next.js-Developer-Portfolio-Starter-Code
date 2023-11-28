import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs-text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-fuchsia-500 dark:text-blue-600 capitalize "
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-black/75 dark:text-white xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </div>
    </li>
  );
};
const Experience = () => {
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
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white 
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            company="Plan Left"
            // companyLink="www.google.com"
            time="May 2022 - Jun 2023"
            address="Nashville, USA"
            work="While serving as a Full Stack Developer at Plan Left, I had the opportunity to apply my expertise across multiple domains, including SaaS, Multi-tenancy, Roles-based systems, and startup MVPs. My contributions made a substantial impact on the success of the company's projects. Working at Plan Left was a valuable experience, allowing me to apply my skills to real-world projects."
          />

          <Details
            position="Full Stack Developer"
            company="Affinite Solutionss"
            // companyLink="www.google.com"
            time="Jul 2020 - Nov 2022"
            address="Singapore"
            work="As a Senior Software Developer at Affinite Solutions, I've contributed to innovative projects, enhancing my skills in PHP, Laravel, SAAS, Twilio, API integrations, CRM development, and Trello-based project management. My role extended beyond coding to actively participating in project planning and collaborating with cross-functional teams. Highlights include HRMS, Shopping Voucher Reward App, Contact Sharing Business Card, Centralized CRM, and AI-Powered Automation SalesBuilder."
          />

          <Details
            position="Full Stack Developer"
            company="Bluebell Aps"
            // companyLink="www.google.com"
            time="Jan 2020 - Apr 2020"
            address="Kobenhavn, Denmark"
            work="During my tenure at Bluebell Aps as a Full Stack Developer, I excelled by leveraging my expertise in PHP, Laravel, Vue.js, and API development to contribute significantly to various exciting projects."
          />

          <Details
            position="Full Stack Developer"
            company="A3Gate Pvt Ltd."
            // companyLink="www.google.com"
            time="Jan 2019 - Dec 2019"
            address="Bengaluru, India"
            work="While at A3Gate Solutions, I had the privilege of contributing to state-of-the-art Software as a Service (SaaS) projects, specializing in Apartment management, Security, and Visitor Management solutions. Serving as a Full-Stack Developer, my responsibilities spanned a diverse range, showcasing proficiency in PHP, Laravel, and back-end web development, coupled with expertise in API development and integration."
          />

          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
