import type { NextPage } from "next";
import styles from "./home.module.scss";
import { navs } from "./nav_links";

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <h1 style={{ paddingLeft: 20 }}>网址导航</h1>
      <div className={"relative"}>
        <div className={styles.nav_ctn}>{createNavs(navs)}</div>
      </div>
    </div>
  );
};

const navsStyles = [
  styles.nav1,
  styles.nav2,
  styles.nav3,
  styles.nav4,
  styles.nav5,
];

function createNavs(navs: any, level = 0) {
  return (
    <ul className={""}>
      {navs.map((nav: any) => (
        <li key={nav.name} className={navsStyles[level]}>
          {nav.href ? (
            <a target={"_blank"} href={nav.href}>
              {nav.icon ? <img src={nav.icon} alt="" /> : <></>}
              {nav.name}
            </a>
          ) : (
            <span>{nav.name}</span>
          )}
          {nav.children?.length > 0 ? (
            createNavs(nav.children, level + 1)
          ) : (
            <></>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Home;
