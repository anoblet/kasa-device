import { html } from "lit-element";

export default function () {
  return html`
    <button data-action="powerOn" @click=${this.run}>On</button>
    <button data-action="powerOff" @click=${this.run}>Off</button>
    <button data-action="toggle" @click=${this.run}>Toggle</button>
    State: ${this.state ? "On" : "Off"}
    <div id="clock"></div>
  `;
}
