import type { NextPage } from "next";
import Home from "../routes/home/Home";
import { Head } from "next/document";

const Index: NextPage = () => {
  return (
    <div>
      <div className={""}>
        <Home />
      </div>
    </div>
  );
};

export default Index;
