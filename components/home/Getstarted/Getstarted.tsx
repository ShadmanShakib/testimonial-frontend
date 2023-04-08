import React from "react";

function Getstarted() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-purple-600/40 py-12">
      <div className="col-span-3">
        <h2 className="text-2xl sm:text-3xl sm:leading-tight md:text-4xl md:leading-tight">
          The faster, easier way to collect testimonials
        </h2>{" "}
        <div className="mt-4 max-w-lg text-base text-white/90 sm:text-lg md:text-xl">
          <p>
            Jump in today and see how easy it is to collect testimonials with
            Senja.
          </p>
        </div>{" "}
        <div className="flex">
          <a
            href="https://app.senja.io/signup?ref=cta"
            className="btn btn-secondary mt-4 w-full sm:w-auto"
          >
            <span className="px-8">Get started. Its Free</span>
          </a>
        </div>{" "}
        <div className="small mt-4 text-sm text-white/80 sm:text-base">
          <p>
            No credit card required •{" "}
            <a href="/pricing" target="_self">
              See plans &amp; pricing →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
