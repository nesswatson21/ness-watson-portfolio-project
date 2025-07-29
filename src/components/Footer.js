import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark bg-dark font-medium text-lg sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 md:py-6">
        <span> {new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">Designed By Ness Watson Tangsang</div>
            
        
      
      </Layout>
    </footer>
  );
}

export default Footer;
