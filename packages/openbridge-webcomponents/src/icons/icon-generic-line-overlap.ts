import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-generic-line-overlap')
export class ObiGenericLineOverlap extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M0 11V13H9V11H0Z" fill="currentColor"/>
<path d="M11 24V0H13V24H11Z" fill="currentColor"/>
<path d="M15 13H24V11H15V13Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 11V13H9V11H0Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M11 24V0H13V24H11Z" style="fill: var(--automation-device-tertiary-color)"/>
<path d="M15 13H24V11H15V13Z" style="fill: var(--automation-device-tertiary-color)"/>
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
    'obi-generic-line-overlap': ObiGenericLineOverlap;
  }
}
