import type { NextPage } from "next";
import styles from "./home.module.scss";

const navs = [
  {
    name: "语言",
    children: [
      {
        name: "文档",
        children: [
          {
            name: "C++",
            children: [
              {
                name: "C语言教程",
                icon: "https://wangdoc.com/clang/assets/icons/favicon-96x96.png",
                href: "https://wangdoc.com/clang",
              },
              {
                name: "C参考手册",
                icon: "https://c-cpp.com/icon.png",
                href: "https://c-cpp.com",
              },
              {
                name: "C++ 最新学习",
                icon: "https://github.com/favicon.ico",
                href: "https://github.com/0voice/cpp_new_features",
              },
              {
                name: "C++ 那些事",
                icon: "https://light-city.club/sc/assets/images/favicon.png",
                href: "https://light-city.club/sc/",
              },
              {
                name: "C++ 现代教程",
                icon: "https://changkun.de/modern-cpp/assets/cover-2nd-logo.png",
                href: "https://changkun.de/modern-cpp/zh-cn/00-preface/",
              },
            ],
          },
          {
            name: "Rust",
            children: [
              {
                name: "Rust语言",
                icon: "https://www.rust-lang.org/static/images/favicon.svg",
                href: "https://rustwiki.org/zh-CN/book/",
              },
              {
                name: "Rust例学",
                icon: "https://www.rust-lang.org/static/images/favicon.svg",
                href: "https://rustwiki.org/zh-CN/rust-by-example/",
              },
              {
                name: "Easy Rust",
                icon: "https://www.rust-lang.org/static/images/favicon.svg",
                href: "https://dhghomon.github.io/easy_rust/",
              },
              {
                name: "Rust Cheat Sheet",
                icon: "https://www.rust-lang.org/static/images/favicon.svg",
                href: "https://cheats.rs/",
              },
              {
                name: "Awesome Rust",
                icon: "https://www.rust-lang.org/static/images/favicon.svg",
                href: "https://github.com/rust-unofficial/awesome-rust",
              },
              {
                name: "Offensive Rust",
                icon: "https://www.rust-lang.org/static/images/favicon.svg",
                href: "https://github.com/trickster0/OffensiveRust",
              },
            ],
          },
        ],
      },
      {
        name: "深入",
        children: [],
      },
    ],
  },
  {
    name: "算法",
    children: [
      {
        name: "资料",
        children: [],
      },
      {
        name: "刷题",
        children: [],
      },
    ],
  },
  {
    name: "ML",
    children: [
      {
        name: "框架",
        children: [],
      },
      {
        name: "OCR",
        children: [],
      },
      {
        name: "NLP",
        children: [],
      },
      {
        name: "CV",
        children: [],
      },
    ],
  },
  {
    name: "bot",
    children: [
      {
        name: "图色",
        children: [],
      },
      {
        name: "AI",
        children: [],
      },
    ],
  },
  {
    name: "工具",
    children: [],
  },
  {
    name: "视觉",
    children: [
      {
        name: "D3",
        href: "https://d3js.org",
        icon: "https://d3js.org/favicon.png",
      },
    ],
  },
  {
    name: "UI",
    children: [],
  },
  {
    name: "web3",
    children: [],
  },
  {
    name: "游戏",
    children: [
      {
        name: "链游",
        children: [],
      },
      {
        name: "3A",
        children: [],
      },
    ],
  },
  {
    name: "英语",
  },
];

const Home: NextPage = () => {
  return <div className={styles.nav_ctn}>{createNavs(navs)}</div>;
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
