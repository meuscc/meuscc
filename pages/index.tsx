import type { NextPage } from "next";
import Home from "../routes/home/Home";
import Script from "next/script";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>我的web导航</title>
      </Head>
      <div className={"py-100px"}>
        <div className={""}>
          <Home />
        </div>
      </div>
    </>
  );
};

export default Index;
