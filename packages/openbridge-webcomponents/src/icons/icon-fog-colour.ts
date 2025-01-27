import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-fog-colour')
export class ObiFogColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 22.2502C29 22.6643 28.6643 23 28.2502 23H8.74982C8.33571 23 8 22.6643 8 22.2502C8 21.8361 8.33571 21.5004 8.74982 21.5004H28.2502C28.6643 21.5004 29 21.8361 29 22.2502Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 24.7502C25 25.1643 24.6643 25.5 24.2502 25.5H4.74982C4.33571 25.5 4 25.1643 4 24.7502C4 24.3361 4.33571 24.0004 4.74982 24.0004H24.2502C24.6643 24.0004 25 24.3361 25 24.7502Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 27.2504C27.5 27.6646 27.1643 28.0003 26.7502 28.0003H7.24982C6.83571 28.0003 6.5 27.6646 6.5 27.2504C6.5 26.8363 6.83571 26.5006 7.24982 26.5006H26.7502C27.1643 26.5006 27.5 26.8363 27.5 27.2504Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 4C15.7936 4 13.5609 5.45257 12.4614 7.78411L12.0452 8.66657L11.1528 8.2723C10.9179 8.16851 10.6813 8.12474 10.4275 8.12474C9.54947 8.12474 8.78596 8.67438 8.48304 9.52321L8.1991 10.3189L7.3672 10.1719C7.27659 10.1558 7.20215 10.1538 7.00789 10.1538C6.00825 10.1538 5.08296 10.5636 4.39061 11.3238C3.70873 12.0737 3.33337 13.0321 3.33337 14.0437V14.0982C3.36175 15.2226 3.77303 16.1943 4.47904 16.8913L4.49175 16.9038L4.504 16.9168C5.16232 17.6148 6.06001 18 7.00788 18H24.4824C26.363 18 28 16.3655 28 14.2432C28 12.4639 26.8572 10.9885 25.3793 10.5841L24.7566 10.4137L24.6555 9.77617C24.1293 6.45792 21.3737 4 18.2393 4ZM11.0544 6.17408C12.5728 3.61707 15.2594 2 18.2393 2C22.2431 2 25.6239 4.95628 26.5148 8.86208C28.597 9.71721 30 11.8572 30 14.2432C30 17.3767 27.5587 20 24.4824 20H7.00788C5.51463 20 4.09608 19.3921 3.06133 18.302C1.95818 17.2062 1.37027 15.7257 1.33364 14.1332L1.33337 14.1217V14.0437C1.33337 12.5273 1.89911 11.0908 2.91121 9.97791C3.95631 8.83023 5.38205 8.17787 6.92203 8.1545C7.63403 6.92643 8.93646 6.12474 10.4275 6.12474C10.6339 6.12474 10.8432 6.14 11.0544 6.17408Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 4C15.7936 4 13.5609 5.45257 12.4614 7.78411L12.0452 8.66657L11.1528 8.2723C10.9179 8.16851 10.6813 8.12474 10.4275 8.12474C9.54947 8.12474 8.78596 8.67438 8.48304 9.52321L8.1991 10.3189L7.3672 10.1719C7.27659 10.1558 7.20215 10.1538 7.00789 10.1538C6.00825 10.1538 5.08296 10.5636 4.39061 11.3238C3.70873 12.0737 3.33337 13.0321 3.33337 14.0437V14.0982C3.36175 15.2226 3.77303 16.1943 4.47904 16.8913L4.49175 16.9038L4.504 16.9168C5.16232 17.6148 6.06001 18 7.00788 18H24.4824C26.363 18 28 16.3655 28 14.2432C28 12.4639 26.8572 10.9885 25.3793 10.5841L24.7566 10.4137L24.6555 9.77617C24.1293 6.45792 21.3737 4 18.2393 4Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 22.2502C29 22.6643 28.6643 23 28.2502 23H8.74982C8.33571 23 8 22.6643 8 22.2502C8 21.8361 8.33571 21.5004 8.74982 21.5004H28.2502C28.6643 21.5004 29 21.8361 29 22.2502Z" style="fill: var(--data-weather-sun-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25 24.7502C25 25.1643 24.6643 25.5 24.2502 25.5H4.74982C4.33571 25.5 4 25.1643 4 24.7502C4 24.3361 4.33571 24.0004 4.74982 24.0004H24.2502C24.6643 24.0004 25 24.3361 25 24.7502Z" style="fill: var(--data-weather-sun-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 27.2504C27.5 27.6646 27.1643 28.0003 26.7502 28.0003H7.24982C6.83571 28.0003 6.5 27.6646 6.5 27.2504C6.5 26.8363 6.83571 26.5006 7.24982 26.5006H26.7502C27.1643 26.5006 27.5 26.8363 27.5 27.2504Z" style="fill: var(--data-weather-sun-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 4C15.7936 4 13.5609 5.45257 12.4614 7.78411L12.0452 8.66657L11.1528 8.2723C10.9179 8.16851 10.6813 8.12474 10.4275 8.12474C9.54947 8.12474 8.78596 8.67438 8.48304 9.52321L8.1991 10.3189L7.3672 10.1719C7.27659 10.1558 7.20215 10.1538 7.00789 10.1538C6.00825 10.1538 5.08296 10.5636 4.39061 11.3238C3.70873 12.0737 3.33337 13.0321 3.33337 14.0437V14.0982C3.36175 15.2226 3.77303 16.1943 4.47904 16.8913L4.49175 16.9038L4.504 16.9168C5.16232 17.6148 6.06001 18 7.00788 18H24.4824C26.363 18 28 16.3655 28 14.2432C28 12.4639 26.8572 10.9885 25.3793 10.5841L24.7566 10.4137L24.6555 9.77617C24.1293 6.45792 21.3737 4 18.2393 4ZM11.0544 6.17408C12.5728 3.61707 15.2594 2 18.2393 2C22.2431 2 25.6239 4.95628 26.5148 8.86208C28.597 9.71721 30 11.8572 30 14.2432C30 17.3767 27.5587 20 24.4824 20H7.00788C5.51463 20 4.09608 19.3921 3.06133 18.302C1.95818 17.2062 1.37027 15.7257 1.33364 14.1332L1.33337 14.1217V14.0437C1.33337 12.5273 1.89911 11.0908 2.91121 9.97791C3.95631 8.83023 5.38205 8.17787 6.92203 8.1545C7.63403 6.92643 8.93646 6.12474 10.4275 6.12474C10.6339 6.12474 10.8432 6.14 11.0544 6.17408Z" style="fill: var(--data-weather-cloud-light-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2393 4C15.7936 4 13.5609 5.45257 12.4614 7.78411L12.0452 8.66657L11.1528 8.2723C10.9179 8.16851 10.6813 8.12474 10.4275 8.12474C9.54947 8.12474 8.78596 8.67438 8.48304 9.52321L8.1991 10.3189L7.3672 10.1719C7.27659 10.1558 7.20215 10.1538 7.00789 10.1538C6.00825 10.1538 5.08296 10.5636 4.39061 11.3238C3.70873 12.0737 3.33337 13.0321 3.33337 14.0437V14.0982C3.36175 15.2226 3.77303 16.1943 4.47904 16.8913L4.49175 16.9038L4.504 16.9168C5.16232 17.6148 6.06001 18 7.00788 18H24.4824C26.363 18 28 16.3655 28 14.2432C28 12.4639 26.8572 10.9885 25.3793 10.5841L24.7566 10.4137L24.6555 9.77617C24.1293 6.45792 21.3737 4 18.2393 4Z" style="fill: var(--data-weather-cloud-light-seconday-color)"/>
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
    'obi-fog-colour': ObiFogColour;
  }
}
