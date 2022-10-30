import React from "react";
import BlogCard from "../components/BlogCard";
import { getAllBlogs } from "../queries/blogs";
import Head from "next/head";

export async function getStaticProps() {
  const res = await getAllBlogs();
  return {
    props: {
      blogs: res,
      revalidate: 10,
    },
  };
}

function Blogs(props: any) {
  const { blogs } = props;
  return (
    <div>
      <Head>
        <title>Perfect SAP | Blogs</title>
        <link rel="icon" href="/assets/PerfectSAP.ico" />
      </Head>
      <div className="w-3/5 mx-auto mt-24 space-y-10">
        <h1 className="text-4xl">Recent Blogs By PerfectSAP</h1>
        <div className="space-y-5">
          {blogs.map((el: any) => {
            return <BlogCard key={el.sys.id} blog={el} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
