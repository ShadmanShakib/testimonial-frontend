import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TestimonialProvider } from "@/lib/context/Testimonial";
import { FormContextProvider, UiProvider, AuthProvider } from "@/lib/context";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UiProvider>
        <TestimonialProvider>
          <FormContextProvider>
            <Component {...pageProps} />
          </FormContextProvider>
        </TestimonialProvider>
      </UiProvider>
    </AuthProvider>
  );
}
