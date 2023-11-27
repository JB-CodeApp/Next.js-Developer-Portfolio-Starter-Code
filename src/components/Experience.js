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
            companyLink="www.google.com"
            time="May 2022 - Jun 2023"
            address="Nashville, USA"
            work="Joining PlanLeft as a ull Stack evelo er means harnessing m e ertise in P P and
            Laravel s eciali ing in SAAS and multi tenant s stems With skills in ree e AP
            develo ment and ira ro ect management ll craft d namic web a s bring an
            SE calculator and le management ro cienc to o timi e digital solutions."
          />

          <Details
            position="Full Stack Developer"
            company="Affinite Solutionss"
            // companyLink="www.google.com"
            time="Jul 2020 - Nov 2022"
            address="Singapore"
            work="As a ull Stack evelo er at Af nite Solutions e cel in P P and Laravel crafting
d namic web solutions Pro cient in REST AP integration and AWS de lo ment with
s eciali ation in SES email services
e ertise e tends to CR
R S ERP and
Twilio communication"
          />

          <Details
            position="Full Stack Developer"
            company="Bluebell Aps"
            // companyLink="www.google.com"
            time="Jan 2020 - Apr 2020"
            address="Kobenhavn, Denmark"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />

          <Details
            position="Full Stack Developer"
            company="A3Gate Pvt Ltd."
            // companyLink="www.google.com"
            time="Jan 2019 - Dec 2019"
            address="Bengaluru, India"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          />

          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
