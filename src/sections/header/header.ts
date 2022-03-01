import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("m-header")
export class Header extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
      .header {
        display: flex;
        justify-content: space-between;
        background-color: rgba(0, 191, 255, 1);
        height: 50px;
        align-items: center;
      }
      .header-left {
        display: flex;
      }
      .header-right {
        display: flex;
      }
      a {
        height: 50px;
        align-items: center;
        display: flex;
        text-decoration: none;
        color: #fff;
        padding-left: 16px;
        padding-right: 16px;
      }
      a:hover {
        background-color: rgba(0, 0, 0, 0.25);
      }
    `,
  ];

  render() {
    return html`<div class="header">
      <div class="header-left">
        <div>
          <a href="/">乐色</a>
        </div>
        <div>
          <a href="/sound">音声</a>
        </div>
        <div>
          <a href="">美文</a>
        </div>
      </div>
      <div class="header-right">
        <div>
          <a href="/about">关于</a>
        </div>
      </div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "m-header": Header;
  }
}
