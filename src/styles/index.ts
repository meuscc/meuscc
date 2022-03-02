import { css } from "lit";

// language=css
const styles = css`
  @font-face {
    font-family: "KaTeX_AMS";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_AMS-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_AMS-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_AMS-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Caligraphic";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Caligraphic-Bold.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Caligraphic-Bold.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Caligraphic-Bold.ttf)
        format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Caligraphic";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Caligraphic-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Caligraphic-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Caligraphic-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Fraktur";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Fraktur-Bold.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Fraktur-Bold.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Fraktur-Bold.ttf)
        format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Fraktur";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Fraktur-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Fraktur-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Fraktur-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Main";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-Bold.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-Bold.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-Bold.ttf)
        format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Main";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-BoldItalic.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-BoldItalic.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-BoldItalic.ttf)
        format("truetype");
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: "KaTeX_Main";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-Italic.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-Italic.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-Italic.ttf)
        format("truetype");
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: "KaTeX_Main";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Main-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Math";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Math-BoldItalic.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Math-BoldItalic.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Math-BoldItalic.ttf)
        format("truetype");
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: "KaTeX_Math";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Math-Italic.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Math-Italic.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Math-Italic.ttf)
        format("truetype");
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: "KaTeX_SansSerif";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_SansSerif-Bold.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_SansSerif-Bold.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_SansSerif-Bold.ttf)
        format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_SansSerif";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_SansSerif-Italic.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_SansSerif-Italic.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_SansSerif-Italic.ttf)
        format("truetype");
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: "KaTeX_SansSerif";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_SansSerif-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_SansSerif-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_SansSerif-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Script";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Script-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Script-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Script-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Size1";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size1-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size1-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size1-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Size2";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size2-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size2-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size2-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Size3";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size3-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size3-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size3-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Size4";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size4-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size4-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Size4-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "KaTeX_Typewriter";
    src: url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Typewriter-Regular.woff2)
        format("woff2"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Typewriter-Regular.woff)
        format("woff"),
      url(https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/fonts/KaTeX_Typewriter-Regular.ttf)
        format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    color: #505050;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
  }
  code,
  pre {
    font-family: Consolas, Monaco, "Andale Mono", "Lucida Console", monospace;
    hyphens: none;
  }
`;

// @ts-ignore
document.adoptedStyleSheets = [styles.styleSheet];
