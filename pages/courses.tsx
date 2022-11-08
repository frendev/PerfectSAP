import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import apolloClient from '../config/apollo-client-config';
import { GET_ALL_COURSES } from '../queries/courses';
import Head from 'next/head';

export const getStaticProps = async (context: any) => {
  const { data } = await apolloClient.query({
    query: GET_ALL_COURSES,
  });

  return {
    props: {
      courses: data.courses.items,
      revalidate: 10,
    },
  };
};

function Courses(props: any) {
  const router = useRouter();
  const { courses } = props;

  useEffect(() => {
    if (JSON.stringify(router.query) === '{}') {
      router.push(
        `/courses?slug=${courses[0].slug}`,
        `/courses?slug=${courses[0].slug}`,
        {
          shallow: true,
        },
      );
    }
  }, [router.query]);

  const selectedCourse = courses.filter((el: any) => {
    return el.slug === router.query.slug;
  });

  const changeCourseHandler = (slug: string) => {
    router.push(`/courses?slug=${slug}`, `/courses?slug=${slug}`, {
      shallow: true,
    });
  };

  return (
    <>
      <Head>
        <title>Perfect SAP | Courses</title>
        <link rel="icon" href="/assets/PerfectSAP.ico" />
      </Head>
      <div className="grid grid-cols-4 w-4/5 mx-auto space-x-5">
        <div className="col-span-1">
          <h1 className="text-white mb-5 p-2 text-xl bg-indigo-500">
            Our Courses
          </h1>
          <div className="space-y-5">
            {courses.map((el: any) => {
              return (
                <>
                  <p
                    key={el.slug}
                    className={`flex flex-shrink-0 bg-white p-2 cursor-pointer transition duration-300 
                    ${
                      router.query.slug === el.slug
                        ? 'bg-[#6366f1] text-white'
                        : 'text-black'
                    }`}
                    onClick={() => changeCourseHandler(el.slug)}
                  >
                    {el.title}
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <div className="col-span-3">
          <h1 className="bg-indigo-500 text-white mb-5 text-xl p-2">
            {selectedCourse[0]?.title}
          </h1>
          <div className="bg-white p-4">
            {documentToReactComponents(selectedCourse[0]?.description.json)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
