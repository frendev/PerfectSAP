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
    <div className="mt-40 space-y-5">
      {blogs.map((el: any) => {
        return <BlogCard key={el.sys.id} blog={el} />;
      })}
    </div>
  );
}

export default Blogs;
