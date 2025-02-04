import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-router-component')
export class ObiRouterComponent extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
<path d="M15.0623 7.5L12.0311 4.5L9 7.5H11.0311V10.5H13.0311V7.5H15.0623Z" fill="currentColor"/>
<path d="M16 8.93782L13 11.9689L16 15V12.9689H19V10.9689H16V8.93782Z" fill="currentColor"/>
<path d="M8 15.0622L11 12.0311L8 9V11.0311H5V13.0311H8V15.0622Z" fill="currentColor"/>
<path d="M9.00012 16.5L12.0312 19.5L15.0623 16.5H13.0312V13.5H11.0312V16.5H9.00012Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" style="fill: var(--element-active-color)"/>
<path d="M15.0623 7.5L12.0311 4.5L9 7.5H11.0311V10.5H13.0311V7.5H15.0623Z" style="fill: var(--element-active-color)"/>
<path d="M16 8.93782L13 11.9689L16 15V12.9689H19V10.9689H16V8.93782Z" style="fill: var(--element-active-color)"/>
<path d="M8 15.0622L11 12.0311L8 9V11.0311H5V13.0311H8V15.0622Z" style="fill: var(--element-active-color)"/>
<path d="M9.00012 16.5L12.0312 19.5L15.0623 16.5H13.0312V13.5H11.0312V16.5H9.00012Z" style="fill: var(--element-active-color)"/>
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
    'obi-router-component': ObiRouterComponent;
  }
}
