import BlogsContent from "@/components/pages/blog/mainblogs";
import Head from "next/head";
import { Fragment } from "react";

export default function BlogPage() {
    return <Fragment>
        <Head>
            <title>Seamoon's Blog</title>
        </Head>
        <BlogsContent />
    </Fragment>
}