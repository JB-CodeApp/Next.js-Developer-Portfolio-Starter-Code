import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between  md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs-text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-black/75 dark:text-white/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
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
            type="M.Sc.IT (Information Technology), Computer Science"
            time="2010 - 2012"
            place="Veer Narmad South Gujarat University, Surat"
            info="A B.Sc. in Information Technology or Computer Science includes courses like Data Structures, Web Development, Operating Systems, and Artificial Intelligence, providing a comprehensive foundation in computer science principles and applications.
            "
          />

          <Details
            type="Bachelor of Science (Information Technology), Computer Science"
            time="2007 - 2010"
            place="Veer Narmad South Gujarat University, Surat"
            info="An M.Sc. in Information Technology or Computer Science encompasses advanced courses like Machine Learning, Cybersecurity, and Big Data Analytics, offering in-depth expertise in cutting-edge technologies and specialized areas within the field."
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
