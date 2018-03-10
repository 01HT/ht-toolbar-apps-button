"use strict";
import { LitElement, html } from "@polymer/lit-element";
import "@polymer/iron-iconset-svg";
import "@polymer/paper-icon-button";
import "@polymer/paper-styles/default-theme.js";

class HTToolabarAppsButton extends LitElement {
  render() {
    return html`
      <style>
        :host {
            display: block;
            position: relative;
            box-sizing: border-box;
        }

        paper-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <iron-iconset-svg size="24" name="ht-toolbar-apps-button-icons">
    <svg>
        <defs>
            <g id="apps">
                <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
            </g>
        </defs>
    </svg>
</iron-iconset-svg>
<paper-icon-button icon="ht-toolbar-apps-button-icons:apps" on-click=${e => {this.toggle(e)}}></paper-icon-button>
`;
  }

  static get is() {
    return "ht-toolbar-apps-button";
  }

  toggle(e) {
    e.preventDefault();
    this.dispatchEvent(
      new CustomEvent("toggle", {
        bubbles: false
      })
    );
  }
}

customElements.define(HTToolabarAppsButton.is, HTToolabarAppsButton);
