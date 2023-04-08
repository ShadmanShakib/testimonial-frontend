import React from "react";

function Hero() {
  return (
    <div className="container relative pt-32 ">
      <div className="max-w-4x mx-auto text-center">
        <span>Testimonidals Made easy</span>
        <h1 className="text-3xl leading-normal md:text-5xl md:leading-snug lg:leading-snug">
          Collecting testimonials doesnt get easier than this
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
