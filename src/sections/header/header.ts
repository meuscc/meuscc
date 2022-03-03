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
        background: rgba(255, 255, 255, 0.25);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        height: 40px;
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
        padding-left: 16px;
        padding-right: 16px;
        color: #555;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
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
