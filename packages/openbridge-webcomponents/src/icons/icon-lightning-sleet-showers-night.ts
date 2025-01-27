import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-sleet-showers-night')
export class ObiLightningSleetShowersNight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.0223 12.9059 2.73015 13.8771 3.62234 14.6614C2.9348 15.4534 2.66667 16.437 2.66667 17.3487C2.66667 19.5578 4.45753 21.3487 6.66666 21.3487H12.0175C11.9729 21.0763 12.0137 20.7947 12.1375 20.5437L12.7267 19.3487H6.66667C5.5621 19.3487 4.66667 18.4532 4.66667 17.3487C4.66667 16.2441 5.33333 15.3487 6.66667 15.3487H9.33333C9.33333 15.3487 8.95833 14.2237 9.33333 13.3799C9.45833 13.0987 9.66667 12.8487 10 12.682C10.3898 12.4871 10.7797 12.5201 11.1362 12.6645C11.999 13.0139 12.6667 14.0153 12.6667 14.0153C12.6667 14.0153 13.0855 13.2029 13.8692 12.3089C14.8895 11.1452 16.5282 9.84326 18.6667 10.0153C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4498 15.835 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L19.243 19.491C19.5674 19.6465 19.8152 19.9264 19.9301 20.2673C20.0451 20.6082 20.0174 20.9811 19.8533 21.3012L19.829 21.3487H25.3333C27.6727 21.3487 29.178 19.4449 29.3274 17.502C29.4242 16.2438 28.7331 15.3587 28.1496 14.8675C27.5832 14.3907 26.9123 14.0915 26.3987 13.9032C26.1852 13.825 25.9743 13.7572 25.7741 13.6988C25.6451 13.1745 25.4389 12.5559 25.1071 11.9189C24.1525 10.0865 22.2421 8.29654 18.8271 8.02176C18.2154 7.97254 17.6381 8.00744 17.0969 8.10503C16.9853 5.41628 15.5526 2.94813 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" fill="currentColor"/>
<path d="M17.1791 13.3333L16.1633 19.4933L18.6667 20.6933L14.2404 29.3333L15.9093 22.3333L13.3333 21.1333L17.1791 13.3333Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5447 24.6703C20.8154 24.0839 21.4545 23.8642 22.0231 24.0829L22.0332 24.0868L22.0431 24.0913C22.6294 24.362 22.8492 25.0011 22.6305 25.5696L22.6251 25.5837L21.5067 28.1391C21.3199 28.5998 20.8979 28.8233 20.4634 28.8233C20.3125 28.8233 20.1432 28.7773 20.038 28.7422L20.0205 28.7364L20.0037 28.7286C19.4174 28.458 19.1976 27.8189 19.4163 27.2503L19.4217 27.2362L20.5447 24.6703Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2114 23.337C25.482 22.7506 26.1212 22.5309 26.6897 22.7495L26.6999 22.7534L26.7098 22.758C27.2961 23.0286 27.5159 23.6678 27.2972 24.2363L27.2918 24.2504L26.1734 26.8058C25.9866 27.2664 25.5646 27.49 25.1301 27.49C24.9791 27.49 24.8099 27.444 24.7047 27.4089L24.6871 27.403L24.6704 27.3953C24.084 27.1247 23.8643 26.4855 24.083 25.917L24.0884 25.9029L25.2114 23.337Z" fill="currentColor"/>
<path d="M8.00004 27.9005C7.68118 27.6959 7.57193 27.2426 7.75602 26.8881L8.17868 26.0743H7.33333C6.96514 26.0743 6.66667 25.7425 6.66667 25.3332C6.66667 24.9239 6.96514 24.5921 7.33333 24.5921H8.17867L7.75602 23.7784C7.57193 23.4239 7.68118 22.9706 8.00004 22.766C8.3189 22.5613 8.72663 22.6828 8.91072 23.0373L9.33337 23.851L9.75602 23.0373C9.94012 22.6828 10.3478 22.5613 10.6667 22.766C10.9856 22.9706 11.0948 23.4239 10.9107 23.7784L10.4881 24.5921H11.3333C11.7015 24.5921 12 24.9239 12 25.3332C12 25.7425 11.7015 26.0743 11.3333 26.0743H10.4881L10.9107 26.8881C11.0948 27.2426 10.9856 27.6959 10.6667 27.9005C10.3478 28.1052 9.94012 27.9837 9.75602 27.6292L9.33337 26.8155L8.91072 27.6292C8.72663 27.9837 8.3189 28.1052 8.00004 27.9005Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.0223 12.9059 2.73015 13.8771 3.62234 14.6614C2.9348 15.4534 2.66667 16.437 2.66667 17.3487C2.66667 19.5578 4.45753 21.3487 6.66666 21.3487H12.0175C11.9729 21.0763 12.0137 20.7947 12.1375 20.5437L12.7267 19.3487H6.66667C5.5621 19.3487 4.66667 18.4532 4.66667 17.3487C4.66667 16.2441 5.33333 15.3487 6.66667 15.3487H9.33333C9.33333 15.3487 8.95833 14.2237 9.33333 13.3799C9.45833 13.0987 9.66667 12.8487 10 12.682C10.3898 12.4871 10.7797 12.5201 11.1362 12.6645C11.999 13.0139 12.6667 14.0153 12.6667 14.0153C12.6667 14.0153 13.0855 13.2029 13.8692 12.3089C14.8895 11.1452 16.5282 9.84326 18.6667 10.0153C24 10.4445 24 15.3487 24 15.3487C24 15.3487 27.4498 15.835 27.3333 17.3487C27.2486 18.45 26.4379 19.3487 25.3333 19.3487H18.9461L19.243 19.491C19.5674 19.6465 19.8152 19.9264 19.9301 20.2673C20.0451 20.6082 20.0174 20.9811 19.8533 21.3012L19.829 21.3487H25.3333C27.6727 21.3487 29.178 19.4449 29.3274 17.502C29.4242 16.2438 28.7331 15.3587 28.1496 14.8675C27.5832 14.3907 26.9123 14.0915 26.3987 13.9032C26.1852 13.825 25.9743 13.7572 25.7741 13.6988C25.6451 13.1745 25.4389 12.5559 25.1071 11.9189C24.1525 10.0865 22.2421 8.29654 18.8271 8.02176C18.2154 7.97254 17.6381 8.00744 17.0969 8.10503C16.9853 5.41628 15.5526 2.94813 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" style="fill: var(--element-active-color)"/>
<path d="M17.1791 13.3333L16.1633 19.4933L18.6667 20.6933L14.2404 29.3333L15.9093 22.3333L13.3333 21.1333L17.1791 13.3333Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5447 24.6703C20.8154 24.0839 21.4545 23.8642 22.0231 24.0829L22.0332 24.0868L22.0431 24.0913C22.6294 24.362 22.8492 25.0011 22.6305 25.5696L22.6251 25.5837L21.5067 28.1391C21.3199 28.5998 20.8979 28.8233 20.4634 28.8233C20.3125 28.8233 20.1432 28.7773 20.038 28.7422L20.0205 28.7364L20.0037 28.7286C19.4174 28.458 19.1976 27.8189 19.4163 27.2503L19.4217 27.2362L20.5447 24.6703Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.2114 23.337C25.482 22.7506 26.1212 22.5309 26.6897 22.7495L26.6999 22.7534L26.7098 22.758C27.2961 23.0286 27.5159 23.6678 27.2972 24.2363L27.2918 24.2504L26.1734 26.8058C25.9866 27.2664 25.5646 27.49 25.1301 27.49C24.9791 27.49 24.8099 27.444 24.7047 27.4089L24.6871 27.403L24.6704 27.3953C24.084 27.1247 23.8643 26.4855 24.083 25.917L24.0884 25.9029L25.2114 23.337Z" style="fill: var(--element-active-color)"/>
<path d="M8.00004 27.9005C7.68118 27.6959 7.57193 27.2426 7.75602 26.8881L8.17868 26.0743H7.33333C6.96514 26.0743 6.66667 25.7425 6.66667 25.3332C6.66667 24.9239 6.96514 24.5921 7.33333 24.5921H8.17867L7.75602 23.7784C7.57193 23.4239 7.68118 22.9706 8.00004 22.766C8.3189 22.5613 8.72663 22.6828 8.91072 23.0373L9.33337 23.851L9.75602 23.0373C9.94012 22.6828 10.3478 22.5613 10.6667 22.766C10.9856 22.9706 11.0948 23.4239 10.9107 23.7784L10.4881 24.5921H11.3333C11.7015 24.5921 12 24.9239 12 25.3332C12 25.7425 11.7015 26.0743 11.3333 26.0743H10.4881L10.9107 26.8881C11.0948 27.2426 10.9856 27.6959 10.6667 27.9005C10.3478 28.1052 9.94012 27.9837 9.75602 27.6292L9.33337 26.8155L8.91072 27.6292C8.72663 27.9837 8.3189 28.1052 8.00004 27.9005Z" style="fill: var(--element-active-color)"/>
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
    'obi-lightning-sleet-showers-night': ObiLightningSleetShowersNight;
  }
}
