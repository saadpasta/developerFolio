import Head from "next/head";
import {Inter} from "@next/font/google";
import Skills from "../containers/Skills/Skills";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <Head>
        <title>DeveloperFolio</title>
      </Head>
      <div>DeveloperFolio Migration to be done</div>
      <Skills />
    </>
  );
}
