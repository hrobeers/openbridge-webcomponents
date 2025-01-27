import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-palette-dimming')
export class ObiPaletteDimming extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7 17C10.3167 17 9.13755 16.5125 8.16255 15.5375C7.18755 14.5625 6.70005 13.3833 6.70005 12C6.70005 10.6166 7.18755 9.43745 8.16255 8.46245C9.13755 7.48745 10.3167 6.99995 11.7 6.99995C12.0667 6.99995 12.425 7.03745 12.775 7.11245C13.125 7.18745 13.4667 7.29995 13.8 7.44995C12.9 7.86662 12.1875 8.48328 11.6625 9.29995C11.1375 10.1166 10.875 11.0166 10.875 12C10.875 12.9833 11.1375 13.8833 11.6625 14.7C12.1875 15.5166 12.9 16.1333 13.8 16.55C13.4667 16.7 13.125 16.8125 12.775 16.8875C12.425 16.9625 12.0667 17 11.7 17ZM12 23.3L15.35 20H20V15.35L23.3 12L20 8.64995V3.99995H15.35L12 0.699951L8.65005 3.99995H4.00005V8.64995L0.700048 12L4.00005 15.35V20H8.65005L12 23.3ZM12 20.5L9.50005 18H6.00005V14.5L3.50005 12L6.00005 9.49995V5.99995H9.50005L12 3.49995L14.5 5.99995H18V9.49995L20.5 12L18 14.5V18H14.5L12 20.5Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7 17C10.3167 17 9.13755 16.5125 8.16255 15.5375C7.18755 14.5625 6.70005 13.3833 6.70005 12C6.70005 10.6166 7.18755 9.43745 8.16255 8.46245C9.13755 7.48745 10.3167 6.99995 11.7 6.99995C12.0667 6.99995 12.425 7.03745 12.775 7.11245C13.125 7.18745 13.4667 7.29995 13.8 7.44995C12.9 7.86662 12.1875 8.48328 11.6625 9.29995C11.1375 10.1166 10.875 11.0166 10.875 12C10.875 12.9833 11.1375 13.8833 11.6625 14.7C12.1875 15.5166 12.9 16.1333 13.8 16.55C13.4667 16.7 13.125 16.8125 12.775 16.8875C12.425 16.9625 12.0667 17 11.7 17ZM12 23.3L15.35 20H20V15.35L23.3 12L20 8.64995V3.99995H15.35L12 0.699951L8.65005 3.99995H4.00005V8.64995L0.700048 12L4.00005 15.35V20H8.65005L12 23.3ZM12 20.5L9.50005 18H6.00005V14.5L3.50005 12L6.00005 9.49995V5.99995H9.50005L12 3.49995L14.5 5.99995H18V9.49995L20.5 12L18 14.5V18H14.5L12 20.5Z" style="fill: var(--element-active-color)"/>
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
    'obi-palette-dimming': ObiPaletteDimming;
  }
}
