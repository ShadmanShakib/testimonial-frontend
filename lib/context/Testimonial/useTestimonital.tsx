import React from "react";
import TestimonialContext from "./Context";
export default function useTestimonital() {
  const context = React.useContext(TestimonialContext);
  return context;
}
