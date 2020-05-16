import { LitElement, html, css, property } from "lit-element";
import { login } from "tplink-cloud-api";
import template from "./index.html";
import style from "./index.css";

export default class KasaDevice extends LitElement {
  private device;
  @property() private state;
  private password;
  private user;

  static styles = style;
  render = template.bind(this);

  async run(event) {
    await this.device[event.target.dataset.action]();
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
}

customElements.define("kasa-device", KasaDevice);
