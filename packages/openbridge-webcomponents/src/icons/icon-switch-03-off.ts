import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-switch-03-off')
export class ObiSwitch03Off extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14.5C3.34853 14.5 3.68123 14.4284 3.98346 14.299L14.5008 20.3667C15.8341 21.1359 17.5002 20.1736 17.5002 18.6343V13.5H18.9999C19.4554 14.1065 20.1815 14.5 21 14.5C22.3807 14.5 23.5 13.3807 23.5 12C23.5 10.6193 22.3807 9.5 21 9.5C20.1815 9.5 19.4554 9.89351 18.9999 10.5H16.5002C15.3956 10.5 14.5002 11.3954 14.5002 12.5V16.9029L5.48221 11.7002C5.33408 10.4608 4.27925 9.5 3 9.5C1.61929 9.5 0.5 10.6193 0.5 12C0.5 13.3807 1.61929 14.5 3 14.5Z" fill="currentColor" stroke="#373737"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.93816 14.8501C3.64243 14.9474 3.32681 15 3 15C1.34315 15 0 13.6569 0 12C0 10.3431 1.34315 9 3 9C4.44618 9 5.65335 10.0233 5.93697 11.3853L14.0002 16.0372V12.5C14.0002 11.1193 15.1195 10 16.5002 10H18.7641C19.3125 9.38731 20.1107 9 21 9C22.6569 9 24 10.3431 24 12C24 13.6569 22.6569 15 21 15C20.1107 15 19.3125 14.6127 18.7641 14H18.0002V18.6343C18.0002 20.5584 15.9176 21.7613 14.2509 20.7998L3.93816 14.8501ZM4.00099 13.7319C3.7066 13.9024 3.3647 14 3 14C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10C4.10432 10 4.99959 10.895 5 11.9992L15.0002 17.7686V12.5C15.0002 11.6716 15.6718 11 16.5002 11H19.2676C19.6134 10.4022 20.2597 10 21 10C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14C20.2597 14 19.6134 13.5978 19.2676 13H17.0002V18.6343C17.0002 19.7888 15.7506 20.5105 14.7506 19.9336L4.00099 13.7319Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 14.5C3.34853 14.5 3.68123 14.4284 3.98346 14.299L14.5008 20.3667C15.8341 21.1359 17.5002 20.1736 17.5002 18.6343V13.5H18.9999C19.4554 14.1065 20.1815 14.5 21 14.5C22.3807 14.5 23.5 13.3807 23.5 12C23.5 10.6193 22.3807 9.5 21 9.5C20.1815 9.5 19.4554 9.89351 18.9999 10.5H16.5002C15.3956 10.5 14.5002 11.3954 14.5002 12.5V16.9029L5.48221 11.7002C5.33408 10.4608 4.27925 9.5 3 9.5C1.61929 9.5 0.5 10.6193 0.5 12C0.5 13.3807 1.61929 14.5 3 14.5Z" style="fill: var(--automation-device-primary-inverted-color)" style="stroke: var(--automation-device-primary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.93816 14.8501C3.64243 14.9474 3.32681 15 3 15C1.34315 15 0 13.6569 0 12C0 10.3431 1.34315 9 3 9C4.44618 9 5.65335 10.0233 5.93697 11.3853L14.0002 16.0372V12.5C14.0002 11.1193 15.1195 10 16.5002 10H18.7641C19.3125 9.38731 20.1107 9 21 9C22.6569 9 24 10.3431 24 12C24 13.6569 22.6569 15 21 15C20.1107 15 19.3125 14.6127 18.7641 14H18.0002V18.6343C18.0002 20.5584 15.9176 21.7613 14.2509 20.7998L3.93816 14.8501ZM4.00099 13.7319C3.7066 13.9024 3.3647 14 3 14C1.89543 14 1 13.1046 1 12C1 10.8954 1.89543 10 3 10C4.10432 10 4.99959 10.895 5 11.9992L15.0002 17.7686V12.5C15.0002 11.6716 15.6718 11 16.5002 11H19.2676C19.6134 10.4022 20.2597 10 21 10C22.1046 10 23 10.8954 23 12C23 13.1046 22.1046 14 21 14C20.2597 14 19.6134 13.5978 19.2676 13H17.0002V18.6343C17.0002 19.7888 15.7506 20.5105 14.7506 19.9336L4.00099 13.7319Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
</svg>
`;

  override render() {
    return html`
      <div class="wrapper">${this.useCssColor ? this.iconCss : this.icon}</div>
    `;
  }

  static override styles = css`
    .wrapper {
      height: 100%;
      width: 100%;
      line-height: 0;
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obi-switch-03-off': ObiSwitch03Off;
  }
}
