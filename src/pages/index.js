import Head from "next/head";
import {Inter} from "@next/font/google";
import SoftwareSkills from "@/components/SoftwareSkills/SoftwareSkills";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <Head>
        <title>DeveloperFolio</title>
      </Head>
      <div>DeveloperFolio Migration to be done</div>
      <SoftwareSkills />
    </>
  );
}
