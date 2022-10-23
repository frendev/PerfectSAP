import React from "react";

function AboutUS() {
  return (
    <div
      id="about"
      className="bg-white py-5 flex flex-col justify-center items-center"
    >
      <h1 className="relative text-center text-3xl py-1 font-bold underline-effect w-max mx-auto">
        Why Choose PerfectSAP?
      </h1>
      <div className="w-4/5  text-xl mt-2">
        <div>
          <p>
            In a world where everyone wants success, only a few do the right
            thing and grab the opportunity that life gives them, to achieve it. 
            We PerfectSAP bring an agile way of learning SAP. We are certainly
            invested in our Clients and provide an upper hand to decide the
            number of hours you want to devote for learning and also the mode
            you wish us to deliver the training. We assure the quality to train
            you and bring the best for you. We are keenly working to help our
            customers recast the SAP technology workforce for this coming years.
            We thoroughly follow the process which had made us to always serve
            you the best amongst our competitors.
          </p>
          <br></br>
        </div>
        <div className="mt-5 relative flex flex-col">
          <div>
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-4" />
          </div>
          <div className="flex items-center">
            <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 flex-shrink-0 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
            </div>
            <div className="border border-blue-100 shadow-md rounded-lg py-5 px-2 mb-4 ml-10 md:ml-20">
              <div className="p-3">
                <strong>Acknowledge :</strong> All SAP modules are best in their
                own ways. But every individual has an unique goal. It is
                important what interests you and in which field you want to make
                your career. For that, We listen to your requirement and mentor
                you to take up the correct course.
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 flex-shrink-0 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <div className="border border-blue-100 shadow-md rounded-lg py-5 px-2 mb-4 ml-10 flex-1 md:ml-20">
              <div className="p-3">
                <strong>Develop :</strong> We create the curriculum based on
                your course requirement. A strategy to design course with par
                quality which fantasize you to learn more.
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 flex-shrink-0 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">3</h1>
            </div>
            <div className="border border-blue-100 shadow-md rounded-lg py-5 px-2 mb-4 ml-10 flex-1 md:ml-20">
              <div className="p-3">
                <strong>Associate :</strong> We provide you with the continuous
                feedback on your learning progress and take your feedback in
                your learning journey.
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="z-20 flex items-center bg-gray-800 shadow-xl w-8 h-8 flex-shrink-0 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
            </div>
            <div className="border border-blue-100 shadow-md rounded-lg py-5 px-2 mb-4 ml-10 flex-1 md:ml-20">
              <div className="p-3">
                <strong>Support :</strong> Our support remains endless in your
                learning journey. Continued mentorship for placements and
                provide you paid internships.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
