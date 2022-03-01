import { css } from "lit";

// language=css
const styles = css`
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
