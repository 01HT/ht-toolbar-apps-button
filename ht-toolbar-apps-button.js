"use strict";
import { LitElement, html, css } from "lit-element";
import { repeat } from "lit-html/directives/repeat.js";
import "@polymer/iron-iconset-svg";
import "@polymer/paper-icon-button";
import "@polymer/iron-dropdown";

import { stylesBasicWebcomponents } from "@01ht/ht-theme/styles";

class HTToolabarAppsButton extends LitElement {
  static get styles() {
    return [
      stylesBasicWebcomponents,
      css`
        paper-icon-button {
          color: var(--secondary-text-color);
        }

        iron-dropdown {
          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
            0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);
          width: 270px;
          overflow: hidden;
          background: #fff;
        }

        a {
          text-decoration: none;
          color: inherit;
          outline: none;
        }

        nav a {
          display: flex;
          flex-direction: column;
          margin: 6px 0;
          padding: 0 8px 0 32px;
          position: relative;
        }

        .border {
          border-left: 3px solid var(--accent-color);
          height: 100%;
          position: absolute;
          left: -3px;
          transform: translateX(0);
          transition: 0.5s;
        }

        a:hover .border {
          transform: translateX(3px);
          transition: 0.5s;
        }

        img {
          display: block;
          width: 18px;
          height: 18px;
          margin-right: 8px;
        }

        nav {
          min-width: 100%;
          padding: 10px 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .title {
          display: flex;
          align-items: center;
          font-size: 14px;
          margin: 2px 0;
        }

        .sub-text {
          font-size: 13px;
          font-weight: 400;
          color: var(--secondary-text-color);
        }

        #divider {
          height: 1px;
          width: 100%;
          background: var(--divider-color);
        }

        #support {
          padding: 16px 32px;
          color: var(--secondary-text-color);
          font-size: 13px;
        }

        #support a {
          text-decoration: underline;
          font-weight: 600;
        }
      `
    ];
  }

  render() {
    const { items } = this;
    return html`
      <iron-iconset-svg size="24" name="ht-toolbar-apps-button-icons">
        <svg>
          <defs>
            <g id="apps">
              <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>
            </g>
          </defs>
        </svg>
      </iron-iconset-svg>
      <div id="container">
        <paper-icon-button icon="ht-toolbar-apps-button-icons:apps" @click="${e => {
          e.preventDefault();
          this.open();
        }}"
          alt="Меню c приложениями 01HT"></paper-icon-button>
      
        <iron-dropdown horizontal-align="right" vertical-align="top" vertical-offset="40" on-click="close">
          <div slot="dropdown-content">
            <div>
              <nav>
                ${repeat(
                  items,
                  item => html`
                <a href="${item.href}" rel="noopener ${
                    item.nofollow ? "nofollow" : ""
                  }">
                  <div class="border"></div>
                  <div class="title">
                    <img src="${item.logoURL}" alt="${item.altText}">
                    <div class="app-text" style="color:${item.color};">${
                    item.appText
                  }</div>
                  </div>
                  <div class="sub-text">
                    ${item.subText}
                  </div>
                </a>
                `
                )}
              </nav>
              <!-- <div id="divider"></div>
                    <div id="support">
                      Присоединяйтесь к чату нашего сообщества в <a href="https://spectrum.chat/01ht" target="_blank" rel="noopener">Spectrum</a>
                    </div> -->
              <div>
              </div>
        </iron-dropdown>
      </div>

`;
  }

  static get properties() {
    return {
      items: { type: Array }
    };
  }

  constructor() {
    super();
    this.items = [
      {
        href: "https://elements.01.ht",
        appText: "elements.01.ht",
        altText: "Elements logo",
        // color: "#83b735",
        subText: "Маркетплейс обучения",
        logoURL: `${
          window.appConfig.cloudinary.url
        }/image/upload/v1550397149/logos/01ht/elements/logo.svg`
      },
      {
        href: "https://blog.01.ht",
        appText: "blog.01.ht",
        altText: "01HT logo",
        // color: "#8bc34a",
        subText: "Блог компании 01HT",
        logoURL: `${
          window.appConfig.cloudinary.url
        }/image/upload/v1549575496/logos/01ht/logo.svg`
      },
      {
        href: "https://spectrum.chat/01ht",
        appText: "spectrum.chat/01ht",
        altText: "Spectrum logo",
        // color: "#8bc34a",
        subText: "Форум и поддержка",
        logoURL: `${
          window.appConfig.cloudinary.url
        }/image/upload/v1558949971/logos/spectrum/logo.svg`,
        nofollow: true
      }
    ];
  }

  get dropdown() {
    return this.shadowRoot.querySelector("iron-dropdown");
  }

  open() {
    if (this.dropdown.style.display === "") {
      this.dropdown.close();
    } else {
      this.dropdown.open();
    }
  }

  close() {
    this.dropdown.close();
  }
}

customElements.define("ht-toolbar-apps-button", HTToolabarAppsButton);
