import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-black
    font-medium text-lg dark:text-white dark:border-white sm:text-base "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="text-fuchsia-400 dark:text-blue-600 text-2xl px-1">
            &#9825;
          </span>{" "}
          by&nbsp;
          <Link
            href="https://devdreaming.com"
            className="underline
          underline-oofset-2"
            target={"_blank"}
          >
            CodeBucks
          </Link>
        </div>
        <Link
          href="https://devdreaming.com"
          target={"_blank"}
          className="underline
          underline-oofset-2"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
