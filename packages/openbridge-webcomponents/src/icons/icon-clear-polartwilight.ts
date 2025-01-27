import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-clear-polartwilight')
export class ObiClearPolartwilight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33341 11.3334C2.96522 11.3334 2.66675 11.6319 2.66675 12C2.66675 12.3682 2.96522 12.6667 3.33341 12.6667H6.84978C6.84978 12.8968 6.75583 13.127 6.56791 13.2931L3.6164 15.9027C3.06974 16.386 3.36271 17.2916 4.08781 17.3599L8.00273 17.7286C8.50124 17.7755 8.84546 18.2514 8.73586 18.7421L7.87514 22.5958C7.71572 23.3096 8.48272 23.8693 9.1093 23.4964L12.4923 21.4834C12.923 21.227 13.48 21.4088 13.6785 21.8705L15.2373 25.4964C15.526 26.1679 16.4741 26.1679 16.7628 25.4964L18.3217 21.8705C18.5202 21.4088 19.0771 21.227 19.5079 21.4834L22.8909 23.4964C23.5174 23.8693 24.2844 23.3096 24.125 22.5958L23.2643 18.7421C23.1547 18.2514 23.4989 17.7755 23.9974 17.7286L27.9124 17.3599C28.6375 17.2916 28.9304 16.386 28.3838 15.9027L25.4323 13.2931C25.2443 13.127 25.1504 12.8968 25.1504 12.6667H28.6667C29.0349 12.6667 29.3334 12.3682 29.3334 12C29.3334 11.6319 29.0349 11.3334 28.6667 11.3334H3.33341ZM22.6667 12.6667H9.33341C9.33341 16.3486 12.3182 19.3334 16.0001 19.3334C19.682 19.3334 22.6667 16.3486 22.6667 12.6667Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33341 11.3334C2.96522 11.3334 2.66675 11.6319 2.66675 12C2.66675 12.3682 2.96522 12.6667 3.33341 12.6667H6.84978C6.84978 12.8968 6.75583 13.127 6.56791 13.2931L3.6164 15.9027C3.06974 16.386 3.36271 17.2916 4.08781 17.3599L8.00273 17.7286C8.50124 17.7755 8.84546 18.2514 8.73586 18.7421L7.87514 22.5958C7.71572 23.3096 8.48272 23.8693 9.1093 23.4964L12.4923 21.4834C12.923 21.227 13.48 21.4088 13.6785 21.8705L15.2373 25.4964C15.526 26.1679 16.4741 26.1679 16.7628 25.4964L18.3217 21.8705C18.5202 21.4088 19.0771 21.227 19.5079 21.4834L22.8909 23.4964C23.5174 23.8693 24.2844 23.3096 24.125 22.5958L23.2643 18.7421C23.1547 18.2514 23.4989 17.7755 23.9974 17.7286L27.9124 17.3599C28.6375 17.2916 28.9304 16.386 28.3838 15.9027L25.4323 13.2931C25.2443 13.127 25.1504 12.8968 25.1504 12.6667H28.6667C29.0349 12.6667 29.3334 12.3682 29.3334 12C29.3334 11.6319 29.0349 11.3334 28.6667 11.3334H3.33341ZM22.6667 12.6667H9.33341C9.33341 16.3486 12.3182 19.3334 16.0001 19.3334C19.682 19.3334 22.6667 16.3486 22.6667 12.6667Z" style="fill: var(--element-active-color)"/>
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
    'obi-clear-polartwilight': ObiClearPolartwilight;
  }
}
