import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-capacitor-03-off')
export class ObiCapacitor03Off extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7L10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19V7C8 6.44772 8.44772 6 9 6C9.55228 6 10 6.44772 10 7Z" fill="currentColor"/>
<path d="M16 7L16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19L14 7C14 6.44772 14.4477 6 15 6C15.5523 6 16 6.44772 16 7Z" fill="currentColor"/>
<path d="M23.314 0.686523L21.8998 7.75759L16.2429 2.10074L23.314 0.686523Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6768 5.90965L18.3642 4.22228L19.7784 5.6365L16.9999 8.41501L16.9999 19C16.9999 20.1046 16.1045 21 14.9999 21C13.8953 21 12.9999 20.1046 12.9999 19V12.415L10.9999 14.415V19C10.9999 20.1046 10.1045 21 8.99991 21C7.89534 21 6.99991 20.1046 6.99991 19V18.415L4.22207 21.1928L2.80786 19.7786L6.99991 15.5866V6.99998C6.99991 5.89541 7.89535 4.99998 8.99991 4.99998C10.1045 4.99998 10.9999 5.89541 10.9999 6.99998V11.5866L12.9999 9.58658V6.99998C12.9999 5.89541 13.8953 4.99998 14.9999 4.99998C15.7023 4.99998 16.3201 5.36202 16.6768 5.90965ZM15.9368 6.64966C15.7949 6.27016 15.4289 5.99998 14.9999 5.99998C14.4476 5.99998 13.9999 6.4477 13.9999 6.99998V8.58658L15.9368 6.64966ZM13.9999 11.415V19C13.9999 19.5523 14.4476 20 14.9999 20C15.5522 20 15.9999 19.5523 15.9999 19L15.9999 9.41501L13.9999 11.415ZM9.99991 12.5866L9.99991 6.99998C9.99991 6.4477 9.5522 5.99998 8.99991 5.99998C8.44763 5.99998 7.99991 6.4477 7.99991 6.99998L7.99991 14.5866L9.99991 12.5866ZM7.99991 17.415V19C7.99991 19.5523 8.44763 20 8.99991 20C9.5522 20 9.99991 19.5523 9.99991 19L9.99991 15.415L7.99991 17.415Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7L10 19C10 19.5523 9.55228 20 9 20C8.44772 20 8 19.5523 8 19V7C8 6.44772 8.44772 6 9 6C9.55228 6 10 6.44772 10 7Z" style="fill: var(--automation-device-primary-inverted-color)"/>
<path d="M16 7L16 19C16 19.5523 15.5523 20 15 20C14.4477 20 14 19.5523 14 19L14 7C14 6.44772 14.4477 6 15 6C15.5523 6 16 6.44772 16 7Z" style="fill: var(--automation-device-primary-inverted-color)"/>
<path d="M23.314 0.686523L21.8998 7.75759L16.2429 2.10074L23.314 0.686523Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6768 5.90965L18.3642 4.22228L19.7784 5.6365L16.9999 8.41501L16.9999 19C16.9999 20.1046 16.1045 21 14.9999 21C13.8953 21 12.9999 20.1046 12.9999 19V12.415L10.9999 14.415V19C10.9999 20.1046 10.1045 21 8.99991 21C7.89534 21 6.99991 20.1046 6.99991 19V18.415L4.22207 21.1928L2.80786 19.7786L6.99991 15.5866V6.99998C6.99991 5.89541 7.89535 4.99998 8.99991 4.99998C10.1045 4.99998 10.9999 5.89541 10.9999 6.99998V11.5866L12.9999 9.58658V6.99998C12.9999 5.89541 13.8953 4.99998 14.9999 4.99998C15.7023 4.99998 16.3201 5.36202 16.6768 5.90965ZM15.9368 6.64966C15.7949 6.27016 15.4289 5.99998 14.9999 5.99998C14.4476 5.99998 13.9999 6.4477 13.9999 6.99998V8.58658L15.9368 6.64966ZM13.9999 11.415V19C13.9999 19.5523 14.4476 20 14.9999 20C15.5522 20 15.9999 19.5523 15.9999 19L15.9999 9.41501L13.9999 11.415ZM9.99991 12.5866L9.99991 6.99998C9.99991 6.4477 9.5522 5.99998 8.99991 5.99998C8.44763 5.99998 7.99991 6.4477 7.99991 6.99998L7.99991 14.5866L9.99991 12.5866ZM7.99991 17.415V19C7.99991 19.5523 8.44763 20 8.99991 20C9.5522 20 9.99991 19.5523 9.99991 19L9.99991 15.415L7.99991 17.415Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
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
    'obi-capacitor-03-off': ObiCapacitor03Off;
  }
}
