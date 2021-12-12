import "../styles/tailwind.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/plyr@3.6.9/dist/plyr.css"
      />
      <script
        src={"https://cdn.jsdelivr.net/npm/plyr@3.6.9/dist/plyr.min.js"}
      />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
