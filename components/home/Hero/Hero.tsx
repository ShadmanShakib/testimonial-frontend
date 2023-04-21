import React from "react";

function Hero() {
  return (
    <div className="container relative mx-auto max-w-screen-xl pt-32 ">
      <div className="max-w-4x mx-auto text-center ">
        <span className="text-lg  text-brand">
          The easiest way to showcase happy customers.
        </span>
        <h1 className="text-3xl font-semibold leading-normal md:text-5xl md:leading-snug lg:leading-snug">
          TestiWizard makes collecting and organizing testimonials easier than
          ever before
        </h1>
        <div className="mx-auto mt-4 max-w-2xl text-gray-700 sm:text-lg md:text-xl md:leading-normal">
          <p>
            Collect video and text testimonials. Share them everywhere. Convert
            more visitors and close more deals!
          </p>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <a className="rounded-md bg-black py-3 px-6 text-white shadow-md ">
            Collect testimonials for free
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
