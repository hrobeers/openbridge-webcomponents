import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-screen-full-google')
export class ObiScreenFullGoogle extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22V15.1071H4.14286V19.8571H8.89286V22H2ZM2 8.89286V2H8.89286V4.14286H4.14286V8.89286H2ZM15.1071 22V19.8571H19.8571V15.1071H22V22H15.1071ZM19.8571 8.89286V4.14286H15.1071V2H22V8.89286H19.8571Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 22V15.1071H4.14286V19.8571H8.89286V22H2ZM2 8.89286V2H8.89286V4.14286H4.14286V8.89286H2ZM15.1071 22V19.8571H19.8571V15.1071H22V22H15.1071ZM19.8571 8.89286V4.14286H15.1071V2H22V8.89286H19.8571Z" style="fill: var(--element-active-color)"/>
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
    'obi-screen-full-google': ObiScreenFullGoogle;
  }
}
