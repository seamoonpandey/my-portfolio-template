import WorkContent from "@/components/pages/work/work-main";
import Head from "next/head";
import { Fragment } from "react";

export default function WorkPage() {
    return <Fragment>
        <Head>
            <title>
                Seamoon (My Works)
            </title>
        </Head>
        <WorkContent />
    </Fragment>
}