import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FormContextProvider, UiProvider, AuthProvider } from "@/lib/context";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from "@ui/Toaster";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UiProvider>
          <FormContextProvider>
            <Component {...pageProps} />
            <Toaster />
          </FormContextProvider>
        </UiProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
