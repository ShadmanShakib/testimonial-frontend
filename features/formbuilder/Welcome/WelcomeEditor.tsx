import React from "react";
import { useTestimonidal } from "@/lib/context/Testimonial";
export default function WelcomeEditor() {
  const { title, editTitle } = useTestimonidal();
  return (
    <div>
      <div className="w-full">
        <label>Welcome Page Tilte</label>
        <div className="flex ">
          <input
            className="flex-grow rounded-md focus:ring-purple-600"
            type="text"
            onChange={(e) => editTitle(e.target.value)}
            defaultValue={title}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-800">
          Introductory Message
        </label>
        <textarea
          name="message"
          placeholder="Have we made a positive impact on your product or service? Spread the love with a text or video shoutout!"
          className="focus:border-primary mb-6 mt-2 block h-40 w-full appearance-none rounded-md border-gray-300 py-2.5 text-sm shadow-sm focus:ring-purple-600"
        ></textarea>
      </div>
      <div className="flex items-center ">
        <input
          name=""
          id=""
          type="checkbox"
          className="mr-3 block flex-none appearance-none rounded-md border-gray-300 bg-contain bg-center bg-no-repeat text-sm shadow-sm checked:bg-purple-600 hover:checked:bg-purple-400 focus:outline-none focus:ring-0 focus:ring-transparent checked:focus:bg-purple-400 disabled:cursor-not-allowed"
        />
        <p>Collect Video Testimonial</p>
      </div>
      <div className="flex items-center">
        <input
          name=""
          id=""
          type="checkbox"
          className="mr-3 block flex-none appearance-none rounded-md border-gray-300 bg-contain bg-center bg-no-repeat text-sm shadow-sm checked:bg-purple-600 hover:checked:bg-purple-400 focus:outline-none focus:ring-0 focus:ring-transparent checked:focus:bg-purple-400 disabled:cursor-not-allowed"
        />
        <p>Collect Text Testimonial</p>
      </div>
    </div>
  );
}
