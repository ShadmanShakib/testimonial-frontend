import React from "react";
import { Button, Rating } from "@/components/ui";
import ImageUploader from "./ImageUploader";
function ResponsePreview() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 pt-12 pb-8 shadow-md ">
      <div className="relative max-w-lg">
        <div className="relative flex w-full justify-items-stretch">
          <form action="flex flex-col w-full items-center ">
            <h1 className="text-lg font-medium">Write a text testimonial</h1>
            <div className="content mt-4">
              <ul>
                <li>What do you like most about us?</li>
                <li>Would you recommend us to a friend?</li>
              </ul>
            </div>
            <Rating maxRating={5} defaultRating={0} />
            <textarea
              name="testimonial"
              id="testimonial-input"
              className="mt-4 w-full rounded-md border border-gray-200 p-4 text-gray-600"
              placeholder="Write something nice ✨"
              rows={7}
            ></textarea>
            <ImageUploader onImageSelect={() => {}} />
            <Button variant="primary" title="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResponsePreview;
