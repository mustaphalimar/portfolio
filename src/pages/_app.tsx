import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-primaryDark py-6">
      <Layout>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </main>
  );
}
