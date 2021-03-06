import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import langs from "../langs/cheatsheets/langs.md";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

const tpl = html` <div>${unsafeHTML(langs)}</div> `;

@customElement("page-index")
export class PageIndex extends LitElement {
  static styles = [
    // language=CSS
    css`
      :host {
        color: #222;
      }
      .main {
        /* From https://css.glass */
        margin: 48px;
        padding: 16px;
        max-width: 950px;
        background: rgba(255, 255, 255, 0.25);
        border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
    `,
  ];

  render() {
    return tpl;
  }
}
