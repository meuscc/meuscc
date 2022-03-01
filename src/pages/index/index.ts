import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import langs from "../langs/cheatsheets/langs.md";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

console.log(111);
console.log(langs);
console.log(222);

const tpl = html`
  <!-- prettier-ignore -->
  <c-b>
    const a = 124;
    const a = 124;
    const a = 124;
    const a = 124;
    const a = 124;

    function main() {
      console.log("你好世界sdfssdf sdf sdf sdf ~")
    }
  </c-b>
  <c-b>const a = 124;</c-b>
  <c-b>const a = 124;</c-b>
  <slot></slot>
  <m-b>f(x) = x^{932323}</m-b>
  <m-b>c = \\pm\\sqrt{a^2 + b^2}</m-b>
  ${unsafeHTML(langs)}
`;

@customElement("page-index")
export class PageIndex extends LitElement {
  static styles = [];

  // createRenderRoot() {
  //   return this;
  // }

  render() {
    return tpl;
  }
}
