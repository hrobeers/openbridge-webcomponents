import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-bilge')
export class ObiBilge extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H14V4H4V15.5L12 20L20 15.5V10H22V16.5L12 22L2 16.5V2Z" fill="currentColor"/>
<path d="M21.4677 4.25577C20.9457 4.57354 20.2624 4.40912 19.9441 3.88456C19.6264 3.36091 19.7939 2.67616 20.3164 2.35811C20.8375 2.04089 21.521 2.20768 21.8387 2.73132C22.1569 3.25588 21.9893 3.93827 21.4677 4.25577Z" fill="currentColor"/>
<path d="M15.9508 5.409C16.269 5.93356 16.9523 6.09798 17.4743 5.78021C17.9959 5.46271 18.1635 4.78032 17.8453 4.25577C17.5276 3.73212 16.8441 3.56533 16.323 3.88255C15.8005 4.2006 15.6331 4.88535 15.9508 5.409Z" fill="currentColor"/>
<path d="M20.6223 8.39766C20.1003 8.71543 19.417 8.55101 19.0988 8.02645C18.7811 7.50281 18.9485 6.81805 19.471 6.5C19.9921 6.18278 20.6756 6.34957 20.9933 6.87322C21.3116 7.39777 21.1439 8.08016 20.6223 8.39766Z" fill="currentColor"/>
<path d="M18 15V10H6V15L12 18L18 15Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H14V4H4V15.5L12 20L20 15.5V10H22V16.5L12 22L2 16.5V2Z" style="fill: var(--element-active-color)"/>
<path d="M21.4677 4.25577C20.9457 4.57354 20.2624 4.40912 19.9441 3.88456C19.6264 3.36091 19.7939 2.67616 20.3164 2.35811C20.8375 2.04089 21.521 2.20768 21.8387 2.73132C22.1569 3.25588 21.9893 3.93827 21.4677 4.25577Z" style="fill: var(--element-active-color)"/>
<path d="M15.9508 5.409C16.269 5.93356 16.9523 6.09798 17.4743 5.78021C17.9959 5.46271 18.1635 4.78032 17.8453 4.25577C17.5276 3.73212 16.8441 3.56533 16.323 3.88255C15.8005 4.2006 15.6331 4.88535 15.9508 5.409Z" style="fill: var(--element-active-color)"/>
<path d="M20.6223 8.39766C20.1003 8.71543 19.417 8.55101 19.0988 8.02645C18.7811 7.50281 18.9485 6.81805 19.471 6.5C19.9921 6.18278 20.6756 6.34957 20.9933 6.87322C21.3116 7.39777 21.1439 8.08016 20.6223 8.39766Z" style="fill: var(--element-active-color)"/>
<path d="M18 15V10H6V15L12 18L18 15Z" style="fill: var(--element-active-color)"/>
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
    'obi-bilge': ObiBilge;
  }
}
