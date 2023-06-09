import Head from "next/head";
import Image from "next/image";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import MoreInfoModal from "../components/MoreInfoModal";

import Student from "../components/Student";


import Example from "../components/Hero2";
import Features from "@/components/Features";
export default function Home() {
  return (
    <div>
      <Head>
        <title>NextCV</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <Example/>
  <Features/>
    {/* <Values/> */}
    {/* <Teacher/> */}
    <Student/>
   <MoreInfoModal/>
   <Cta/>
   <Footer/>
    </div>
  );
}
