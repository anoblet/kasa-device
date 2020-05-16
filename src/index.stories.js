import "./index.ts";
import { html } from "lit-html";
import { centered } from "@webcomponents-dev/decorators-lit";

export default {
  decorators: [centered],
};

export const story1 = () => html` <kasa-device></kasa-device> `;
