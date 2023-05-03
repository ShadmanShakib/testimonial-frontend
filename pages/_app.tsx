import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { TestimonialProvider } from "@/lib/context/Testimonial";
import { FormContextProvider, UiProvider, AuthProvider } from "@/lib/context";
import { QueryClientProvider, QueryClient } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UiProvider>
          <TestimonialProvider>
            <FormContextProvider>
              <Component {...pageProps} />
            </FormContextProvider>
          </TestimonialProvider>
        </UiProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
