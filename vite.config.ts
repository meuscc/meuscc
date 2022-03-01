import { resolve } from "path";
import _ from "lodash";
import { defineConfig } from "vite";
import { marked } from "marked";
import katex from "katex";
import hljs from "highlight.js";
import TOML from "@ltd/j-toml";
var toc = [];
const renderer = new marked.Renderer();

function frontMatter(text: string) {
  const split = text.split("---");
  return text.slice(0, 3) === "---" ? [split[2], TOML.parse(split[1])] : [text];
}

renderer.paragraph = function (text) {
  text = text
    .replace(/(\$\$(\s*.*\s*)\$\$)+/g, function ($1, $2) {
      return "<m-b>" + $2.replace(/\$/g, "").replace(/\\/g, "\\\\") + "</m-b>";
    })
    .replace(/(\$(\s*.*\s*)\$)+/g, function ($1, $2) {
      return "<m-i>" + $2.replace(/\$/g, "").replace(/\\/g, "\\\\") + "</m-i>";
    })
    .replaceAll("<pre>", "<m-b>");

  return new marked.Renderer().paragraph(text);
};
renderer.code = function (text, lang) {
  return `<c-b l="${lang}">${text}</c-b>`;
};
renderer.codespan = function (text) {
  console.log(text);

  const lang = "javascript";
  return `<c-i l="${lang}">${text}</c-i>`;
};

marked.use({
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

export default defineConfig({
  plugins: [markdown()],
  resolve: {
    alias: [
      { find: /^~/, replacement: "" },
      { find: /^src/, replacement: resolve(__dirname, "src") },
    ],
  },
  server: {
    port: 5000,
    host: "0.0.0.0",
  },
});

function markdown() {
  return {
    name: "transform-markdown",
    transform(src, id) {
      if (id.endsWith(".md")) {
        return {
          code: `export default \`${marked(frontMatter(src)[0], {
            renderer,
          })}\``,
          map: null,
        };
      }
    },
  };
}
