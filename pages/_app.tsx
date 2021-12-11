import "../styles/tailwind.css";
import "../styles/index.scss";
import type { AppProps } from "next/app";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
