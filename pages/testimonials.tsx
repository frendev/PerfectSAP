import React, { CSSProperties } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Testimonials() {
  const flickityOptions = {
    initialIndex: 2,
  };

  const arrowStyles: CSSProperties = {
    position: "absolute",
    zIndex: 2,
    bottom: 12,
    width: 20,
    height: 20,
    cursor: "pointer",
    background: "white",
  };

  const indicatorStyles: CSSProperties = {
    background: "#fff",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
  };

  return (
    <div className="mt-24 space-y-10 w-4/5 mx-auto">
      <h1 className="text-4xl">Testimonials</h1>
      <div className="grid grid-cols-4">
        {/* left side */}
        <div className="col-span-4 md:col-span-2 bg-indigo-700 flex justify-center items-center">
          <h1 className="text-xl p-4 text-white md:text-4xl text-left md:mx-20 md:p-0">
            What Our Students Are Saying....
          </h1>
        </div>

        {/* testimonials sections */}
        <div className="col-span-4 bg-white md:col-span-2 flex flex-col justify-between p-10 text-left">
          <AliceCarousel
            infinite
            touchTracking={false}
            paddingLeft={0}
            paddingRight={0}
          >
            <div className="space-y-5 ml-2">
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring.
              </p>
              <p className="text-slate-500">John Doe | Placed in Deloitte</p>
            </div>

            <div className="space-y-5 ml-2">
              <p>
                ZenDesk’s testimonial page is beautifully laid out AND
                functional, with a silent customer video playing on loop to
                serve as the banner, a menu to filter testimonials by location,
                company size, industry, and use case, and lastly thumbnails
                linking to the full customer stories for a variety of big-name
                brands. This is a clean and concise way to showcase their happy
                customers, and help prospects gain the assurance they need
                before investing.
              </p>
              <p className="text-slate-500">John Doe | Placed in Deloitte</p>
            </div>

            <div className="space-y-5 ml-2">
              <p>
                Steve & Kate’s camp runs summer camps for children across the
                U.S. The unique thing about Steve & Kate’s camp is that their
                entire website is essentially a series of customer testimonials.
              </p>
              <p className="text-slate-500">John Doe | Placed in Deloitte</p>
            </div>
            <div className="space-y-5 ml-2">
              <p>
                ChowNow clearly invested in sending a video crew out to their
                customer restaurant locations to produce these high-quality.
              </p>
              <p className="text-slate-500">John Doe | Placed in Deloitte</p>
            </div>
          </AliceCarousel>
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-4xl">Successful Placements</h1>
        <p>
          Our Students are proudly rendering their service in the following
          companies
        </p>
        <div className="grid grid-cols-4 gap-x-5 gap-y-5 w-4/5 mx-auto">
          <div className="bg-slate-400 h-40 w-50 col-span-2 md:col-span-1"></div>
          <div className="bg-slate-400 h-40 w-50 col-span-2 md:col-span-1"></div>
          <div className="bg-slate-400 h-40 w-50 col-span-2 md:col-span-1"></div>
          <div className="bg-slate-400 h-40 w-50 col-span-2 md:col-span-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
