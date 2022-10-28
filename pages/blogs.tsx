import React from "react";
import BlogCard from "../components/BlogCard";
import { getAllBlogs } from "../queries/blogs";

export async function getStaticProps() {
  const res = await getAllBlogs();
  return {
    props: {
      blogs: res,
    },
  };
}

function Blogs(props: any) {
  const { blogs } = props;
  return (
    <div className="w-3/5 mx-auto mt-40 space-y-10">
      <h1 className="text-4xl">Recent Blogs By PerfectSAP</h1>
      <div className="space-y-5">
        {blogs.map((el: any) => {
          return <BlogCard key={el.sys.id} blog={el} />;
        })}
      </div>
    </div>
  );
}

export default Blogs;
