import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark bg-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear} &copy; All Rights Reserved.</span>
        <div className="flex items-center">Buildt with NextJS</div>
        <Link
          href="https://www.linkedin.com/in/william-sinclair-2bab18153/"
          className="underline underline-offset-2"
          target="_blank"
        >
          say hello
        </Link>
      </Layout>
    </footer>
  );
}

export default Footer;
