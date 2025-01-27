import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-threeway-acuator-piston-inleft-right-75')
export class ObiThreewayAcuatorPistonInleftRight75 extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5015 1C17.0537 1 17.5015 1.44772 17.5015 2V5.00366C17.5015 5.55595 17.0538 6.00366 16.5015 6.00366H13V10H14L20.47 5.95625C21.136 5.53997 22 6.01881 22 6.80425V17.1958C22 17.9812 21.136 18.46 20.47 18.0438L14 14L18.0438 20.47C18.46 21.136 17.9812 22 17.1958 22H6.80425C6.01881 22 5.53997 21.136 5.95625 20.47L10 14L3.53 18.0438C2.86395 18.46 2 17.9812 2 17.1958V6.80425C2 6.01881 2.86395 5.53997 3.53 5.95625L9.8784 9.924C9.95786 9.97367 10.0497 10 10.1434 10H11V6.00366H7.49854C6.94625 6.00366 6.49854 5.55595 6.49854 5.00366V2C6.49854 1.44772 6.94625 1 7.49854 1H16.5015ZM7.49854 2H16.5015V5.00366H7.49854V2ZM15.2817 17.9375L17.1958 21H6.80425L8.71831 17.9375H15.2817ZM5 8.05425L9.3484 10.772C9.5868 10.921 9.86227 11 10.1434 11H14C14.1874 11 14.3711 10.9473 14.53 10.848L21 6.80425V17.1958L14.53 13.152C14.1351 12.9052 13.6222 12.9636 13.2929 13.2929C12.9636 13.6222 12.9052 14.1351 13.152 14.53L14.6567 16.9375H9.34331L10.848 14.53C11.0948 14.1351 11.0364 13.6222 10.7071 13.2929C10.3778 12.9636 9.86488 12.9052 9.47 13.152L5 15.9458V8.05425ZM4 7.42925L3 6.80425V17.1958L4 16.5708V7.42925Z" fill="currentColor"/>
<path d="M6.80431 21.0004H17.1958L15.2818 17.9379H8.71837L6.80431 21.0004Z" fill="currentColor"/>
<path d="M3.00006 17.1962V6.80469L4.00006 7.42969V16.5712L3.00006 17.1962Z" fill="currentColor"/>
<path d="M9.3484 10.772L5 8.05425V15.9458L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L9.34331 16.9375H14.6567L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L21 17.1958L21 6.80425L14.53 10.848C14.3711 10.9473 14.1874 11 14 11H10.1434C9.86227 11 9.58679 10.921 9.3484 10.772Z" fill="currentColor"/>
<path d="M16.5015 2H7.49853V5.00366H16.5015V2Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5015 1C17.0537 1 17.5015 1.44772 17.5015 2V5.00366C17.5015 5.55595 17.0538 6.00366 16.5015 6.00366H13V10H14L20.47 5.95625C21.136 5.53997 22 6.01881 22 6.80425V17.1958C22 17.9812 21.136 18.46 20.47 18.0438L14 14L18.0438 20.47C18.46 21.136 17.9812 22 17.1958 22H6.80425C6.01881 22 5.53997 21.136 5.95625 20.47L10 14L3.53 18.0438C2.86395 18.46 2 17.9812 2 17.1958V6.80425C2 6.01881 2.86395 5.53997 3.53 5.95625L9.8784 9.924C9.95786 9.97367 10.0497 10 10.1434 10H11V6.00366H7.49854C6.94625 6.00366 6.49854 5.55595 6.49854 5.00366V2C6.49854 1.44772 6.94625 1 7.49854 1H16.5015ZM7.49854 2H16.5015V5.00366H7.49854V2ZM15.2817 17.9375L17.1958 21H6.80425L8.71831 17.9375H15.2817ZM5 8.05425L9.3484 10.772C9.5868 10.921 9.86227 11 10.1434 11H14C14.1874 11 14.3711 10.9473 14.53 10.848L21 6.80425V17.1958L14.53 13.152C14.1351 12.9052 13.6222 12.9636 13.2929 13.2929C12.9636 13.6222 12.9052 14.1351 13.152 14.53L14.6567 16.9375H9.34331L10.848 14.53C11.0948 14.1351 11.0364 13.6222 10.7071 13.2929C10.3778 12.9636 9.86488 12.9052 9.47 13.152L5 15.9458V8.05425ZM4 7.42925L3 6.80425V17.1958L4 16.5708V7.42925Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M6.80431 21.0004H17.1958L15.2818 17.9379H8.71837L6.80431 21.0004Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M3.00006 17.1962V6.80469L4.00006 7.42969V16.5712L3.00006 17.1962Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M9.3484 10.772L5 8.05425V15.9458L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L9.34331 16.9375H14.6567L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L21 17.1958L21 6.80425L14.53 10.848C14.3711 10.9473 14.1874 11 14 11H10.1434C9.86227 11 9.58679 10.921 9.3484 10.772Z" style="fill: var(--automation-device-primary-color)"/>
<path d="M16.5015 2H7.49853V5.00366H16.5015V2Z" style="fill: var(--automation-device-primary-color)"/>
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
    'obi-threeway-acuator-piston-inleft-right-75': ObiThreewayAcuatorPistonInleftRight75;
  }
}
