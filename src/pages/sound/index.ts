import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { sounds } from "./data";
import styles from "./styles";

@customElement("page-sound")
export class SimpleGreeting extends LitElement {
  static styles = styles;
  // @property({ type: Object }) location = router.location;
  @property()
  name?: string = "World";

  @property()
  currentSounds: Array<{ name: string; url: string }> = [];

  handleClick(name: string) {
    const idx = this.currentSounds.findIndex((v) => v.name === name);
    if (idx > -1) {
      this.currentSounds.splice(idx, 1);
      this.currentSounds = [...this.currentSounds];
    } else {
      this.currentSounds = [
        ...this.currentSounds,
        sounds.find((s) => s.name === name)!,
      ];
    }
  }

  render() {
    // @ts-ignore
    console.log(this.location);
    return html`
      <div class="sounds-ctn">
        ${sounds.map(
          (s) =>
            html`
              <div
                @click="${() => this.handleClick(s.name)}"
                class="sound-btn ${this.currentSounds.find(
                  (_s) => _s.name === s.name
                )
                  ? "sound-btn-active"
                  : ""}"
              >
                ${s.name}
              </div>
            `
        )}
      </div>
      ${this.currentSounds.map(
        (s) =>
          html`
            <audio
              loop="loop"
              autoplay="autoplay"
              controls="controls"
              src="${s.url}"
            ></audio>
          `
      )}
    `;
  }
}
