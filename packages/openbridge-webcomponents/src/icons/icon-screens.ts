import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-screens')
export class ObiScreens extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5H3C2.45 5 2 5.45 2 6V8C2 8.55 2.45 9 3 9H3.5V10H6.5V9H7C7.55 9 7.995 8.55 7.995 8L8 6C8 5.45 7.55 5 7 5ZM7 8H3V6H7V8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H10C9.45 5 9 5.45 9 6V8C9 8.55 9.45 9 10 9H10.5V10H13.5V9H14C14.55 9 14.995 8.55 14.995 8L15 6C15 5.45 14.55 5 14 5ZM14 8H10V6H14V8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 5H21C21.55 5 22 5.45 22 6L21.995 8C21.995 8.55 21.55 9 21 9H20.5V10H17.5V9H17C16.45 9 16 8.55 16 8V6C16 5.45 16.45 5 17 5ZM17 8H21V6H17V8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 13C2 12.45 2.45 12 3 12H10C10.55 12 11 12.45 11 13L10.995 17C10.995 17.55 10.55 18 10 18H8.5V19H4.5V18H3C2.45 18 2 17.55 2 17V13ZM10 16V13H3V16H10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 13C13 12.45 13.45 12 14 12H21C21.55 12 22 12.45 22 13L21.995 17C21.995 17.55 21.55 18 21 18H19.5V19H15.5V18H14C13.45 18 13 17.55 13 17V13ZM21 16V13H14V16H21Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5H3C2.45 5 2 5.45 2 6V8C2 8.55 2.45 9 3 9H3.5V10H6.5V9H7C7.55 9 7.995 8.55 7.995 8L8 6C8 5.45 7.55 5 7 5ZM7 8H3V6H7V8Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H10C9.45 5 9 5.45 9 6V8C9 8.55 9.45 9 10 9H10.5V10H13.5V9H14C14.55 9 14.995 8.55 14.995 8L15 6C15 5.45 14.55 5 14 5ZM14 8H10V6H14V8Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 5H21C21.55 5 22 5.45 22 6L21.995 8C21.995 8.55 21.55 9 21 9H20.5V10H17.5V9H17C16.45 9 16 8.55 16 8V6C16 5.45 16.45 5 17 5ZM17 8H21V6H17V8Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 13C2 12.45 2.45 12 3 12H10C10.55 12 11 12.45 11 13L10.995 17C10.995 17.55 10.55 18 10 18H8.5V19H4.5V18H3C2.45 18 2 17.55 2 17V13ZM10 16V13H3V16H10Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 13C13 12.45 13.45 12 14 12H21C21.55 12 22 12.45 22 13L21.995 17C21.995 17.55 21.55 18 21 18H19.5V19H15.5V18H14C13.45 18 13 17.55 13 17V13ZM21 16V13H14V16H21Z" style="fill: var(--element-active-color)"/>
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
    'obi-screens': ObiScreens;
  }
}
