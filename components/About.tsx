import Image from 'next/image';
import React from 'react';
import sine from '../public/assets/curve.svg';

function About() {
  return (
    <div
      id="about"
      className="bg-white flex flex-col justify-center items-center"
    >
      <h1 className="relative text-center py-1 text-2xl md:text-3xl underline-effect w-max mx-auto">
        About Us
      </h1>
      <div className="sm: w-3/4 md:w-3/5 text-lg mt-2">
        <div className="body-text space-y-5">
          <p>
            In a world where everyone wants success, only a few do the right
            thing and grab the opportunity that life gives them, to achieve it.
            We <strong>PerfectSAP</strong> bring an agile way of learning SAP.
          </p>
          <p>
            We are certainly invested in our Clients and provide an upper hand
            to decide the number of hours you want to devote for learning and
            also the mode you wish us to deliver the training. We assure the
            quality to train you and bring the best for you. We are keenly
            working to help our customers recast the SAP technology workforce
            for this coming years. We all know how swiftly the SAP market has
            evolved and is progressing. We believe in imparting advanced
            knowledge and help to develop skillset.
          </p>
          <p>
            We also ensure that our participants develop additional skills along
            with the SAP certification course they attend at PerfectSAP . These
            skills are preferred by employers while hiring certified SAP
            resources to provide best value to their customers at modest cost.
            So, participants will also learn advanced skills like soft skills,
            knowledge about different domains or cross module product skills,
            understanding of technical plus functional areas and other
            interpersonal skills through our program.
          </p>

          <h1>
            Following process which had made us to always serve you the best
            amongst our competitors.
          </h1>
          <br></br>
        </div>
        <div className="grid grid-cols-1 mx-5 sm:mx-0 sm:grid-cols-2 gap-x-10 md:gap-x-10 lg:mx-10 gap-y-10 text-center">
          <div className="shadow-lg">
            <div className="bg-indigo-500 h-32 circle lg:circle-lg">
              <h1 className="py-5 text-center text-white text-4xl">1</h1>
            </div>
            <h1 className="text-xl md:text-2xl">Acknowledge</h1>
            <p className="p-4 body-text">
              All SAP modules are best in their own ways. But every individual
              has an unique goal. It is important what interests you and in
              which field you want to make your career. For that, We listen to
              your requirement and mentor you to take up the correct course.
            </p>
          </div>
          <div className="shadow-lg">
            <div className="bg-indigo-500 h-32 circle lg:circle-lg">
              <h1 className="py-5 text-center text-white text-4xl">2</h1>
            </div>
            <h1 className="text-xl md:text-2xl">Develop</h1>
            <p className="p-4 body-text">
              We create the curriculum based on your course requirement. A
              strategy to design course with par quality which fantasize you to
              learn more.
            </p>
          </div>
          <div className="shadow-lg">
            <div className="bg-indigo-500 h-32 circle lg:circle-lg">
              <h1 className="py-5 text-center text-white text-4xl">3</h1>
            </div>
            <h1 className="text-xl md:text-2xl">Associate</h1>
            <p className="p-4 body-text">
              We provide you with the continuous feedback on your learning
              progress and take your feedback in your learning journey.
            </p>
          </div>
          <div className="shadow-lg">
            <div className="bg-indigo-500 h-32 circle lg:circle-lg">
              <h1 className="py-5 text-center text-white text-4xl">4</h1>
            </div>
            <h1 className="text-xl md:text-2xl">Support</h1>
            <p className="p-4 body-text">
              Our support remains endless in your learning journey. Continued
              mentorship for placements and provide you paid internships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
