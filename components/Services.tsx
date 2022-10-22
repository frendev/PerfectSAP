import React from "react";
import Card from "./Card";

function Services() {
  return (
    <div className="p-10">
      <div>
        <h1 className="relative text-center uppercase text-4xl mb-10 font-bold underline-effect w-max mx-auto">
          What We Do?
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-10">
        <div className="grid">
          <Card>
            <h1 className="text-center text-xl font-bold">B2B Model</h1>
            <p className="p-5 text-lg">
              Where we understand the company goal and help them revolutionize
              their workforce by making them equipped with relevant knowledge
              required for effective project delivery.
            </p>
          </Card>
        </div>
        <div className="grid">
          <Card>
            <h1 className="text-center text-xl font-bold">B2C Model</h1>
            <p className="p-5 text-lg">
              Every individual student has a different career journey.
              PerfectSAP has been a faithful companion that one can rely on for
              all the educational resources that would make their journey easier
              and make their goals achievable.
            </p>
          </Card>
        </div>
        <div className="grid">
          <Card>
            <h1 className="text-center text-xl font-bold">
              Software Solutions
            </h1>
            <p className="p-5 text-lg">
              Automation of the work process is no longer optional. Software
              support has become an indispensible requirement across industries.
              Having a reliable software partner can go a long way. PerfectSAP's
              software center is just that providing custom software solution.
            </p>
          </Card>
        </div>
        <div className="grid">
          <Card>
            <h1 className="text-center text-xl font-bold">
              Staffing Solutions
            </h1>
            <p className="p-5 text-lg">
              Where workforce is believed to be pillar for any organization
              sourcing right manpower and managing it is another ball game. We
              share this responsibility via our staffing solutions. Finding a
              perfect fit for your organization on your terms had never been
              easier.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Services;
