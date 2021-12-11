import React from "react";
import Image from "next/image";
import bg from "./bg.jpg";

import s from "./Header.module.scss";
import Music from "./components/music/Music";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.bg}>
        <Image layout={"fixed"} src={bg} />
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
