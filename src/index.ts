import { LitElement, html, css, property } from "lit-element";
import { login } from "tplink-cloud-api";

export default class KasaDevice extends LitElement {
  private device;
  @property() private state;
  private password;
  private user;

  async run(event) {
    const method = event.target.dataset.action;
    switch (method) {
      case "on": {
        await this.device.powerOn();
        break;
      }
      case "off": {
        await this.device.powerOff();
        break;
      }
      case "toggle": {
        await this.device.toggle();
        break;
      }
    }
    this.updateState();
  }

  async updateState() {
    this.state = await this.device.getRelayState();
  }

  constructor() {
    super();
    (async () => {
      const tplink = await login("andrewbnoblet@gmail.com", "NzwxJJ*2fS_bRkY");
      await tplink.getDeviceList();
      this.device = tplink.getHS100("Air Purifier");
      this.updateState();
    })();
  }

  render() {
    return html`
      <button data-action="on" @click=${this.run}>On</button>
      <button data-action="off" @click=${this.run}>Off</button>
      <button data-action="toggle" @click=${this.run}>Toggle</button>
      State: ${this.state ? "On" : "Off"}
      <div id="clock"></div>
    `;
  }
}

customElements.define("kasa-device", KasaDevice);
