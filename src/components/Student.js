import React from "react";

const Student = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        Testimonials
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        Our users say
      </p>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/student.svg" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Martin Watson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">SDE Intern</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
           There is no way I could have get my first job without the help of the  NextCV. It helped me to improve my resume and cover letter. I got a job in a month after I started using it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
