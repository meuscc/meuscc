import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import style from "prismjs/themes/prism.css";

declare var Prism: any;

const prismStyle = css`
  ${unsafeCSS(style)}
`;

@customElement("c-b")
export class math extends LitElement {
  static styles = [
    prismStyle,
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property()
  c?: string;

  @property()
  l: string = "javascript";

  render() {
    let trimmed = this.c ?? this.innerHTML;

    if (trimmed.indexOf("\n") === 0) {
      trimmed = trimmed.replace("\n", "");
      const match = trimmed.match(/\s+/);
      trimmed = trimmed.replaceAll(match?.[0] ?? "", "").trim();
    }

    return html`<pre class="language-${this.l}"><code class="language-${this
      .l}">${unsafeHTML(
      Prism.highlight(trimmed, Prism.languages[this.l], this.l)
    )}</code></pre>`;
  }
}

@customElement("c-i")
export class Math extends LitElement {
  static styles = [
    prismStyle,
    css`
      :host {
        display: inline-block;
      }
    `,
  ];

  @property()
  c?: string;

  @property()
  l: string = "javascript";

  render() {
    return html`<code class="language-${this.l}"
      >${unsafeHTML(
        Prism.highlight(
          this.c ?? this.innerHTML,
          Prism.languages[this.l],
          this.l
        )
      )}</code
    >`;
  }
}
