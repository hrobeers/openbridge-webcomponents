import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-beacon-tower-square')
export class ObiBeaconTowerSquare extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.5V6.5H13.5V2.5H10.5ZM10 1C9.44772 1 9 1.44772 9 2V7C9 7.55228 9.44772 8 10 8H14C14.5523 8 15 7.55228 15 7V2C15 1.44772 14.5523 1 14 1H10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 10L17.5909 19.5H19V21H14.8293C14.4175 22.1652 13.3062 23 12 23C10.6938 23 9.58254 22.1652 9.17071 21H5V19.5H6.40909L9 10H15ZM9.04148 19.5H7.96388L10.1457 11.5H13.8543L16.0361 19.5H14.9585C14.7205 18.0811 13.4865 17 12 17C10.5135 17 9.27952 18.0811 9.04148 19.5ZM13.5 20C13.5 20.8284 12.8284 21.5 12 21.5C11.1716 21.5 10.5 20.8284 10.5 20C10.5 19.1716 11.1716 18.5 12 18.5C12.8284 18.5 13.5 19.1716 13.5 20Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.5V6.5H13.5V2.5H10.5ZM10 1C9.44772 1 9 1.44772 9 2V7C9 7.55228 9.44772 8 10 8H14C14.5523 8 15 7.55228 15 7V2C15 1.44772 14.5523 1 14 1H10Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 10L17.5909 19.5H19V21H14.8293C14.4175 22.1652 13.3062 23 12 23C10.6938 23 9.58254 22.1652 9.17071 21H5V19.5H6.40909L9 10H15ZM9.04148 19.5H7.96388L10.1457 11.5H13.8543L16.0361 19.5H14.9585C14.7205 18.0811 13.4865 17 12 17C10.5135 17 9.27952 18.0811 9.04148 19.5ZM13.5 20C13.5 20.8284 12.8284 21.5 12 21.5C11.1716 21.5 10.5 20.8284 10.5 20C10.5 19.1716 11.1716 18.5 12 18.5C12.8284 18.5 13.5 19.1716 13.5 20Z" style="fill: var(--element-active-color)"/>
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
    'obi-beacon-tower-square': ObiBeaconTowerSquare;
  }
}
