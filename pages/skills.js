import SkillContent from "@/components/pages/skills/my-skills";
import Head from "next/head";
import { Fragment } from "react";

export default function MySkillsPage() {
    return <Fragment>
        <Head>
            <title>
                My Skills
            </title>
        </Head>
        <SkillContent />
    </Fragment>
}