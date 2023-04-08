import React from "react";
import Image from "next/image";
function Features() {
  return (
    <div className="container relative my-16  sm:my-24">
      <div className="grid gap-x-16 gap-y-8 lg:grid-cols-2">
        <div className="max-w-2xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
          <div>
            <div className="text-purple-600">Collection made easy</div>
            <h2 className="text-3xl font-semibold">
              Let your customers share what they love about you
            </h2>
            <div className=" mt-4">
              <p>
                Senja makes it easy for your happy customers to leave you a
                video or text testimonial. Your beautiful new collection form
                takes less than 30 seconds to create. <a>See an example!</a>
              </p>
              <ul>
                <li>
                  <p>Create a form in 30 seconds. Share or embed it anywhere</p>
                </li>
                <li>
                  <p>Collect video and text testimonials</p>
                </li>
                <li>
                  <p>
                    Import testimonials from 20+ social &amp; review platforms
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-5 flex gap-2">
              <a
                className="btn btn-primary "
                href="https://app.senja.io/signup"
              >
                Sign up for free
              </a>
            </div>
          </div>
        </div>
        {/* Right */}
      </div>
    </div>
  );
}

export default Features;
