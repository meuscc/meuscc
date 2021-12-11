import type { NextPage } from "next";
import Home from "../routes/home/Home";

const Index: NextPage = () => {
  return (
    <div className={"py-100px"}>
      <div className={""}>
        <Home />
      </div>
    </div>
  );
};

export default Index;
