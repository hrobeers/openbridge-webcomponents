import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-threeway-stacked-inleft-right-50')
export class ObiThreewayStackedInleftRight50 extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 0V10H14L20.47 5.95625C21.136 5.53997 22 6.01881 22 6.80425V17.1958C22 17.9812 21.136 18.46 20.47 18.0438L14 14L18.0438 20.47C18.46 21.136 17.9812 22 17.1958 22H6.80425C6.01881 22 5.53997 21.136 5.95625 20.47L10 14L3.53 18.0438C2.86395 18.46 2 17.9812 2 17.1958V6.80425C2 6.01881 2.86395 5.53997 3.53 5.95625L9.8784 9.924C9.95786 9.97367 10.0497 10 10.1434 10H11V0H13ZM15.9458 19H8.05425L6.80425 21H17.1958L15.9458 19ZM9.3484 10.772L6 8.67925V15.3208L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L8.67925 18H15.3208L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L21 17.1958V6.80425L14.53 10.848C14.3711 10.9473 14.1874 11 14 11H10.1434C9.86227 11 9.5868 10.921 9.3484 10.772ZM5 8.05425V15.9458L3 17.1958V6.80425L5 8.05425Z" fill="currentColor"/>
<path d="M8.05425 19.0004H15.9458L17.1958 21.0004H6.80425L8.05425 19.0004Z" fill="currentColor"/>
<path d="M5 15.9462V8.05469L3 6.80469V17.1962L5 15.9462Z" fill="currentColor"/>
<path d="M6 8.67969L9.3484 10.7724C9.5868 10.9214 9.86227 11.0004 10.1434 11.0004H14C14.1874 11.0004 14.3711 10.9478 14.53 10.8484L21 6.80469L21 17.1962L14.53 13.1524C14.1351 12.9056 13.6222 12.9641 13.2929 13.2933C12.9636 13.6226 12.9052 14.1356 13.152 14.5304L15.3208 18.0004H8.67925L10.848 14.5304C11.0948 14.1356 11.0364 13.6226 10.7071 13.2933C10.3778 12.9641 9.86488 12.9056 9.47 13.1524L6 15.3212V8.67969Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 0V10H14L20.47 5.95625C21.136 5.53997 22 6.01881 22 6.80425V17.1958C22 17.9812 21.136 18.46 20.47 18.0438L14 14L18.0438 20.47C18.46 21.136 17.9812 22 17.1958 22H6.80425C6.01881 22 5.53997 21.136 5.95625 20.47L10 14L3.53 18.0438C2.86395 18.46 2 17.9812 2 17.1958V6.80425C2 6.01881 2.86395 5.53997 3.53 5.95625L9.8784 9.924C9.95786 9.97367 10.0497 10 10.1434 10H11V0H13ZM15.9458 19H8.05425L6.80425 21H17.1958L15.9458 19ZM9.3484 10.772L6 8.67925V15.3208L9.47 13.152C9.86488 12.9052 10.3778 12.9636 10.7071 13.2929C11.0364 13.6222 11.0948 14.1351 10.848 14.53L8.67925 18H15.3208L13.152 14.53C12.9052 14.1351 12.9636 13.6222 13.2929 13.2929C13.6222 12.9636 14.1351 12.9052 14.53 13.152L21 17.1958V6.80425L14.53 10.848C14.3711 10.9473 14.1874 11 14 11H10.1434C9.86227 11 9.5868 10.921 9.3484 10.772ZM5 8.05425V15.9458L3 17.1958V6.80425L5 8.05425Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M8.05425 19.0004H15.9458L17.1958 21.0004H6.80425L8.05425 19.0004Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M5 15.9462V8.05469L3 6.80469V17.1962L5 15.9462Z" style="fill: var(--automation-device-secondary-color)"/>
<path d="M6 8.67969L9.3484 10.7724C9.5868 10.9214 9.86227 11.0004 10.1434 11.0004H14C14.1874 11.0004 14.3711 10.9478 14.53 10.8484L21 6.80469L21 17.1962L14.53 13.1524C14.1351 12.9056 13.6222 12.9641 13.2929 13.2933C12.9636 13.6226 12.9052 14.1356 13.152 14.5304L15.3208 18.0004H8.67925L10.848 14.5304C11.0948 14.1356 11.0364 13.6226 10.7071 13.2933C10.3778 12.9641 9.86488 12.9056 9.47 13.1524L6 15.3212V8.67969Z" style="fill: var(--automation-device-primary-color)"/>
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
    'obi-threeway-stacked-inleft-right-50': ObiThreewayStackedInleftRight50;
  }
}
