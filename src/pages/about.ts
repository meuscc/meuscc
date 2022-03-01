import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("page-about")
export class SimpleGreeting extends LitElement {
  static styles = css``;

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <a href="/">到首页</a>
      <div>士大夫士大夫士大夫士大夫大师傅士大夫士大夫</div>
    `;
  }
}
