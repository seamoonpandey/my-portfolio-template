import Hero from "@/components/pages/main/hero";
import Head from "next/head";
import { Fragment } from "react";



export default function MainPage() {
  return <Fragment>
    <Head>
      <title>
        Seamoon Pandey
      </title>
    </Head>
    <Hero />
  </Fragment>
}