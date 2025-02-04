import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-time-less')
export class ObiTimeLess extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 12.6849 21.931 13.3537 21.7997 14H19.7482C19.9126 13.3608 20 12.6907 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20H17.9966C16.3237 21.2557 14.2441 22 11.99 22C6.47 22 2 17.52 2 12Z" fill="currentColor"/>
<path d="M12.5 12.25L15.4494 14H12.6667L11 13V7H12.5V12.25Z" fill="currentColor"/>
<path d="M21.5 16H13.5V18H21.5V16Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 6.48 6.47 2 11.99 2C17.52 2 22 6.48 22 12C22 12.6849 21.931 13.3537 21.7997 14H19.7482C19.9126 13.3608 20 12.6907 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20H17.9966C16.3237 21.2557 14.2441 22 11.99 22C6.47 22 2 17.52 2 12Z" style="fill: var(--element-active-color)"/>
<path d="M12.5 12.25L15.4494 14H12.6667L11 13V7H12.5V12.25Z" style="fill: var(--element-active-color)"/>
<path d="M21.5 16H13.5V18H21.5V16Z" style="fill: var(--element-active-color)"/>
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
    'obi-time-less': ObiTimeLess;
  }
}
