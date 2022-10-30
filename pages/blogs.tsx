import React, { useState } from "react";
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

  const [searchBlogByTitle, setSearchBlogByTitle] = useState("");

  const searchHandler = (e: any) => {
    console.log(e.target.value);
    setSearchBlogByTitle(e.target.value);
  };

  const filteredBlogs = blogs.filter((blog: any) => {
    return blog.title.toLowerCase().includes(searchBlogByTitle.toLowerCase());
  });

  return (
    <div>
      <Head>
        <title>Perfect SAP | Blogs</title>
        <link rel="icon" href="/assets/PerfectSAP.ico" />
      </Head>
      <div className="w-3/5 mx-auto space-y-5">
        <h1 className="text-2xl md:text-3xl lg:text-4xl">
          Recent Blogs By PerfectSAP
        </h1>
        <div className="space-y-2">
          <label className="text-gray-600 font-semibold">
            Search Blog By Title
          </label>
          <input
            onChange={(e) => searchHandler(e)}
            className="bg-white text-gray-900 p-3 rounded-lg w-full outline-none"
            placeholder="Search Blog By Title"
          />
        </div>
        <div className="space-y-5">
          {filteredBlogs.map((el: any) => {
            return <BlogCard key={el.sys.id} blog={el} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
