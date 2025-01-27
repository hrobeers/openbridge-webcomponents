import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-ship-tanker')
export class ObiShipTanker extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 20C19.47 20 18.44 19.75 17.5 19.25C15.61 20.25 13.39 20.25 11.5 19.25C9.61 20.25 7.39 20.25 5.5 19.25C4.55 19.75 3.53 20 2.5 20H1.5V18H2.5C3.18364 18 3.86729 17.8447 4.51684 17.5564C4.8168 17.4273 5.50533 16.996 5.50533 16.996C5.50533 16.996 6.1857 17.4227 6.48565 17.5519C7.77971 18.1102 9.21724 18.1106 10.5115 17.5532C10.8115 17.424 11.5053 16.996 11.5053 16.996C11.5053 16.996 12.1885 17.424 12.4885 17.5532C13.7809 18.1098 15.2161 18.1102 16.5086 17.5544C16.8086 17.4252 17.5047 17.0033 17.5047 17.0033C17.5047 17.0033 18.193 17.4313 18.493 17.5605C19.14 17.8461 19.8196 18 20.5 18H21.5V20H20.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 8V10.9999L8.5 10.9999V9.5C8.5 9.22386 8.72386 9 9 9H12C12.2761 9 12.5 9.22386 12.5 9.5V10.9999L13.5 10.9999V9.5C13.5 9.22386 13.7239 9 14 9H17C17.2761 9 17.5 9.22386 17.5 9.5V11L22 11C22 13.5 19.4182 13.5 19.4182 16.3724C19.1048 16.2987 18.7953 16.194 18.493 16.0605C18.193 15.9313 17.5047 15.5033 17.5047 15.5033C17.5047 15.5033 16.8086 15.9252 16.5086 16.0544C15.2161 16.6102 13.7808 16.6098 12.4885 16.0532C12.1885 15.924 11.5053 15.496 11.5053 15.496C11.5053 15.496 10.8115 15.924 10.5115 16.0532C9.21724 16.6106 7.7797 16.6102 6.48564 16.0519C6.18569 15.9227 5.50533 15.496 5.50533 15.496C5.50533 15.496 4.8168 15.9272 4.51684 16.0564C3.86729 16.3447 3.18364 16.5 2.5 16.5H1.5V11H2.5V8H6.5ZM3.5 9H5.5V11H3.5V9Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.5 20C19.47 20 18.44 19.75 17.5 19.25C15.61 20.25 13.39 20.25 11.5 19.25C9.61 20.25 7.39 20.25 5.5 19.25C4.55 19.75 3.53 20 2.5 20H1.5V18H2.5C3.18364 18 3.86729 17.8447 4.51684 17.5564C4.8168 17.4273 5.50533 16.996 5.50533 16.996C5.50533 16.996 6.1857 17.4227 6.48565 17.5519C7.77971 18.1102 9.21724 18.1106 10.5115 17.5532C10.8115 17.424 11.5053 16.996 11.5053 16.996C11.5053 16.996 12.1885 17.424 12.4885 17.5532C13.7809 18.1098 15.2161 18.1102 16.5086 17.5544C16.8086 17.4252 17.5047 17.0033 17.5047 17.0033C17.5047 17.0033 18.193 17.4313 18.493 17.5605C19.14 17.8461 19.8196 18 20.5 18H21.5V20H20.5Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 8V10.9999L8.5 10.9999V9.5C8.5 9.22386 8.72386 9 9 9H12C12.2761 9 12.5 9.22386 12.5 9.5V10.9999L13.5 10.9999V9.5C13.5 9.22386 13.7239 9 14 9H17C17.2761 9 17.5 9.22386 17.5 9.5V11L22 11C22 13.5 19.4182 13.5 19.4182 16.3724C19.1048 16.2987 18.7953 16.194 18.493 16.0605C18.193 15.9313 17.5047 15.5033 17.5047 15.5033C17.5047 15.5033 16.8086 15.9252 16.5086 16.0544C15.2161 16.6102 13.7808 16.6098 12.4885 16.0532C12.1885 15.924 11.5053 15.496 11.5053 15.496C11.5053 15.496 10.8115 15.924 10.5115 16.0532C9.21724 16.6106 7.7797 16.6102 6.48564 16.0519C6.18569 15.9227 5.50533 15.496 5.50533 15.496C5.50533 15.496 4.8168 15.9272 4.51684 16.0564C3.86729 16.3447 3.18364 16.5 2.5 16.5H1.5V11H2.5V8H6.5ZM3.5 9H5.5V11H3.5V9Z" style="fill: var(--element-active-color)"/>
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
    'obi-ship-tanker': ObiShipTanker;
  }
}
