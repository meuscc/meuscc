import React from "react";
import Image from "next/image";
import bgD from "./bg.jpg";
import bgM from "./bg-mobile.jpg";

import s from "./Header.module.scss";
import Music from "./components/music/Music";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.bg}>
        <div className={s.bgd}>
          <Image layout={"fixed"} src={bgD} />
        </div>
        <div className={s.bgm}>
          <Image layout={"fill"} src={bgM} />
        </div>
      </div>
      <div>
        <div className={s.brand}>我的门户</div>
      </div>
      <div>
        <Music />
      </div>
    </div>
  );
}
