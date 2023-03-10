import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TestimonialProvider } from "@/lib/context/Testimonial";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <TestimonialProvider>
      <Component {...pageProps} />
    </TestimonialProvider>
  );
}
