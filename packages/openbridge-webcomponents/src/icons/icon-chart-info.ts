import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-chart-info')
export class ObiChartInfo extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12.3464V4.3C22 3.96667 21.8472 3.72083 21.5417 3.5625C21.2361 3.40417 20.9259 3.39167 20.6111 3.525L15.6667 5.3L8.36111 3L2.75 4.775C2.52778 4.85833 2.34722 4.98333 2.20833 5.15C2.06944 5.31667 2 5.50833 2 5.725V19.675C2 20.0083 2.15278 20.2583 2.45833 20.425C2.76389 20.5917 3.07407 20.6 3.38889 20.45L9.27778 18.3478V4.85L14.7222 6.5V10.4103C15.2488 10.2132 15.8077 10.0825 16.3889 10.0284V6.5L20.3333 5.15V10.9186C20.9668 11.2978 21.5303 11.7817 22 12.3464ZM7.61111 17.475L3.66667 18.825V6.025L7.61111 4.85V17.475Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 21.5C19.7614 21.5 22 19.2614 22 16.5C22 13.7386 19.7614 11.5 17 11.5C14.2386 11.5 12 13.7386 12 16.5C12 19.2614 14.2386 21.5 17 21.5ZM16 15V13H18V15H16ZM16 20V16H18V20H16Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12.3464V4.3C22 3.96667 21.8472 3.72083 21.5417 3.5625C21.2361 3.40417 20.9259 3.39167 20.6111 3.525L15.6667 5.3L8.36111 3L2.75 4.775C2.52778 4.85833 2.34722 4.98333 2.20833 5.15C2.06944 5.31667 2 5.50833 2 5.725V19.675C2 20.0083 2.15278 20.2583 2.45833 20.425C2.76389 20.5917 3.07407 20.6 3.38889 20.45L9.27778 18.3478V4.85L14.7222 6.5V10.4103C15.2488 10.2132 15.8077 10.0825 16.3889 10.0284V6.5L20.3333 5.15V10.9186C20.9668 11.2978 21.5303 11.7817 22 12.3464ZM7.61111 17.475L3.66667 18.825V6.025L7.61111 4.85V17.475Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 21.5C19.7614 21.5 22 19.2614 22 16.5C22 13.7386 19.7614 11.5 17 11.5C14.2386 11.5 12 13.7386 12 16.5C12 19.2614 14.2386 21.5 17 21.5ZM16 15V13H18V15H16ZM16 20V16H18V20H16Z" style="fill: var(--element-active-color)"/>
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
    'obi-chart-info': ObiChartInfo;
  }
}
