import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-buoy-pilar-cube')
export class ObiBuoyPilarCube extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6507 3.04939L14.049 4.55146L15.5511 7.15312L18.1528 5.65105L16.6507 3.04939ZM17.6997 1.86638C17.4236 1.38809 16.812 1.22421 16.3337 1.50035L12.866 3.50242C12.3877 3.77856 12.2239 4.39015 12.5 4.86845L14.5021 8.33613C14.7782 8.81442 15.3898 8.9783 15.8681 8.70216L19.3358 6.70009C19.8141 6.42395 19.9779 5.81236 19.7018 5.33406L17.6997 1.86638Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 20.0004H15C15 21.6572 13.6569 23.0004 12 23.0004C10.3431 23.0004 9 21.6572 9 20.0004H4V18.5004H6.375L10.5 14.0004L11.7667 10.0004H16.5L16 15.0004L17.4 18.5004H20V20.0004ZM9.40135 18.5004C9.92006 17.6037 10.8896 17.0004 12 17.0004C13.1104 17.0004 14.0799 17.6037 14.5987 18.5004H15.7845L14.4709 15.2165L14.8425 11.5004H12.8651L11.8299 14.7694L8.40985 18.5004H9.40135ZM13.5 20.0004C13.5 20.8288 12.8284 21.5004 12 21.5004C11.1716 21.5004 10.5 20.8288 10.5 20.0004C10.5 19.1719 11.1716 18.5004 12 18.5004C12.8284 18.5004 13.5 19.1719 13.5 20.0004Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6507 3.04939L14.049 4.55146L15.5511 7.15312L18.1528 5.65105L16.6507 3.04939ZM17.6997 1.86638C17.4236 1.38809 16.812 1.22421 16.3337 1.50035L12.866 3.50242C12.3877 3.77856 12.2239 4.39015 12.5 4.86845L14.5021 8.33613C14.7782 8.81442 15.3898 8.9783 15.8681 8.70216L19.3358 6.70009C19.8141 6.42395 19.9779 5.81236 19.7018 5.33406L17.6997 1.86638Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 20.0004H15C15 21.6572 13.6569 23.0004 12 23.0004C10.3431 23.0004 9 21.6572 9 20.0004H4V18.5004H6.375L10.5 14.0004L11.7667 10.0004H16.5L16 15.0004L17.4 18.5004H20V20.0004ZM9.40135 18.5004C9.92006 17.6037 10.8896 17.0004 12 17.0004C13.1104 17.0004 14.0799 17.6037 14.5987 18.5004H15.7845L14.4709 15.2165L14.8425 11.5004H12.8651L11.8299 14.7694L8.40985 18.5004H9.40135ZM13.5 20.0004C13.5 20.8288 12.8284 21.5004 12 21.5004C11.1716 21.5004 10.5 20.8288 10.5 20.0004C10.5 19.1719 11.1716 18.5004 12 18.5004C12.8284 18.5004 13.5 19.1719 13.5 20.0004Z" style="fill: var(--element-active-color)"/>
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
    'obi-buoy-pilar-cube': ObiBuoyPilarCube;
  }
}
