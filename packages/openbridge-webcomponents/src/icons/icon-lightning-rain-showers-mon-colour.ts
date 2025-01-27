import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-rain-showers-mon-colour')
export class ObiLightningRainShowersMonColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.02231 12.9059 2.73016 13.8771 3.62235 14.6614C3.64624 14.6339 3.67063 14.6066 3.69553 14.5796C4.46211 13.7472 5.52698 13.3487 6.66666 13.3487H7.25987C7.43541 12.5009 7.91139 11.4903 9.10557 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275C12.4856 10.8521 12.6503 10.6731 12.8272 10.4944C13.7723 9.53953 15.2171 8.44404 17.0969 8.10506C16.9853 5.4163 15.5527 2.94814 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1632 19.4933L17.1791 13.3333L13.3333 21.1333L15.9092 22.3333L14.2403 29.3333L18.6666 20.6933L16.1632 19.4933Z" fill="currentColor"/>
<path d="M27.3334 17.3488C27.4498 15.8352 24.0001 15.3488 24.0001 15.3488C24.0001 15.3488 24.0001 10.4446 18.6667 10.0155C16.5283 9.84342 14.8896 11.1454 13.8693 12.3091C13.0855 13.2031 12.6667 14.0155 12.6667 14.0155C12.6667 14.0155 11.9991 13.014 11.1363 12.6646C10.7798 12.5203 10.3899 12.4872 10.0001 12.6822C9.66675 12.8488 9.45842 13.0988 9.33342 13.3801C8.95842 14.2238 9.33342 15.3488 9.33342 15.3488H6.66675C5.33341 15.3488 4.66675 16.2442 4.66675 17.3488C4.66675 18.4534 5.56218 19.3488 6.66675 19.3488H12.7267L12.1375 20.5438C12.0138 20.7948 11.973 21.0764 12.0176 21.3488H6.66675C4.45761 21.3488 2.66675 19.558 2.66675 17.3488C2.66675 16.4055 2.95384 15.3851 3.69561 14.5797C4.46219 13.7474 5.52707 13.3488 6.66675 13.3488H7.25995C7.4355 12.5011 7.91148 11.4904 9.10565 10.8933C10.3818 10.2552 11.5415 10.5915 12.3331 11.0276C12.4856 10.8522 12.6504 10.6732 12.8273 10.4945C14.0444 9.26475 16.0906 7.80174 18.8272 8.02193C22.2422 8.29671 24.1526 10.0867 25.1072 11.919C25.439 12.556 25.6452 13.1747 25.7742 13.699C25.9744 13.7574 26.1853 13.8252 26.3987 13.9034C26.9123 14.0917 27.5833 14.3909 28.1496 14.8677C28.7332 15.3588 29.4243 16.244 29.3275 17.5022C29.1781 19.445 27.6728 21.3488 25.3334 21.3488H19.8291L19.8534 21.3014C20.0174 20.9812 20.0451 20.6084 19.9302 20.2675C19.8153 19.9266 19.5675 19.6466 19.2431 19.4911L18.9462 19.3488H25.3334C26.438 19.3488 27.2487 18.4501 27.3334 17.3488Z" fill="currentColor"/>
<path d="M9.33342 15.3487C9.33342 15.3487 8.66675 13.3487 10.0001 12.6821C11.3334 12.0154 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 14.8856 9.71116 18.6667 10.0154C24.0001 10.4445 24.0001 15.3487 24.0001 15.3487C24.0001 15.3487 27.4498 15.8351 27.3334 17.3487C27.2487 18.45 26.438 19.3487 25.3334 19.3487H18.9462L17.6417 18.7234L18.4948 13.5503C18.6023 12.8983 18.2161 12.266 17.5869 12.0639C16.9578 11.8618 16.2756 12.1511 15.9833 12.7437L12.7267 19.3487H6.66675C5.56218 19.3487 4.66675 18.4533 4.66675 17.3487C4.66675 16.2442 5.33341 15.3487 6.66675 15.3487H9.33342Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.21141 26.0036C9.48204 25.4173 10.1212 25.1975 10.6897 25.4162L10.6999 25.4201L10.7098 25.4247C11.2961 25.6953 11.5159 26.3344 11.2972 26.903L11.2918 26.9171L10.1734 29.4724C9.9866 29.9331 9.56455 30.1567 9.13007 30.1567C8.97914 30.1567 8.80989 30.1106 8.70466 30.0755L8.68714 30.0697L8.67038 30.062C8.08402 29.7913 7.86428 29.1522 8.08295 28.5837L8.08837 28.5696L9.21141 26.0036Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8782 24.6704C20.1488 24.084 20.7879 23.8643 21.3565 24.0829L21.3666 24.0869L21.3765 24.0914C21.9629 24.362 22.1826 25.0012 21.9639 25.5697L21.9585 25.5838L20.8402 28.1392C20.6534 28.5999 20.2313 28.8234 19.7968 28.8234C19.6459 28.8234 19.4766 28.7774 19.3714 28.7423L19.3539 28.7365L19.3371 28.7287C18.7508 28.4581 18.531 27.819 18.7497 27.2504L18.7551 27.2363L19.8782 24.6704Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5447 23.3371C24.8153 22.7508 25.4544 22.531 26.023 22.7497L26.0331 22.7536L26.043 22.7582C26.6294 23.0288 26.8491 23.6679 26.6304 24.2365L26.625 24.2506L25.5067 26.8059C25.3199 27.2666 24.8978 27.4901 24.4633 27.4901C24.3124 27.4901 24.1431 27.4441 24.0379 27.409L24.0204 27.4032L24.0036 27.3955C23.4173 27.1248 23.1975 26.4857 23.4162 25.9172L23.4216 25.9031L24.5447 23.3371Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1782 5.17262C11.1299 9.43869 6.74822 12.0291 2.3916 10.9585C1.85537 10.8267 1.31873 11.3122 1.54474 11.8242C2.02231 12.9059 2.73016 13.8771 3.62235 14.6614C3.64624 14.6339 3.67063 14.6066 3.69553 14.5796C4.46211 13.7472 5.52698 13.3487 6.66666 13.3487H7.25987C7.43541 12.5009 7.91139 11.4903 9.10557 10.8932C10.3817 10.2551 11.5414 10.5914 12.333 11.0275C12.4856 10.8521 12.6503 10.6731 12.8272 10.4944C13.7723 9.53953 15.2171 8.44404 17.0969 8.10506C16.9853 5.4163 15.5527 2.94814 13.2974 1.53125C12.8169 1.22937 12.2658 1.72975 12.3402 2.30184C12.4618 3.23613 12.4158 4.20591 12.1782 5.17262Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1632 19.4933L17.1791 13.3333L13.3333 21.1333L15.9092 22.3333L14.2403 29.3333L18.6666 20.6933L16.1632 19.4933Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path d="M27.3334 17.3488C27.4498 15.8352 24.0001 15.3488 24.0001 15.3488C24.0001 15.3488 24.0001 10.4446 18.6667 10.0155C16.5283 9.84342 14.8896 11.1454 13.8693 12.3091C13.0855 13.2031 12.6667 14.0155 12.6667 14.0155C12.6667 14.0155 11.9991 13.014 11.1363 12.6646C10.7798 12.5203 10.3899 12.4872 10.0001 12.6822C9.66675 12.8488 9.45842 13.0988 9.33342 13.3801C8.95842 14.2238 9.33342 15.3488 9.33342 15.3488H6.66675C5.33341 15.3488 4.66675 16.2442 4.66675 17.3488C4.66675 18.4534 5.56218 19.3488 6.66675 19.3488H12.7267L12.1375 20.5438C12.0138 20.7948 11.973 21.0764 12.0176 21.3488H6.66675C4.45761 21.3488 2.66675 19.558 2.66675 17.3488C2.66675 16.4055 2.95384 15.3851 3.69561 14.5797C4.46219 13.7474 5.52707 13.3488 6.66675 13.3488H7.25995C7.4355 12.5011 7.91148 11.4904 9.10565 10.8933C10.3818 10.2552 11.5415 10.5915 12.3331 11.0276C12.4856 10.8522 12.6504 10.6732 12.8273 10.4945C14.0444 9.26475 16.0906 7.80174 18.8272 8.02193C22.2422 8.29671 24.1526 10.0867 25.1072 11.919C25.439 12.556 25.6452 13.1747 25.7742 13.699C25.9744 13.7574 26.1853 13.8252 26.3987 13.9034C26.9123 14.0917 27.5833 14.3909 28.1496 14.8677C28.7332 15.3588 29.4243 16.244 29.3275 17.5022C29.1781 19.445 27.6728 21.3488 25.3334 21.3488H19.8291L19.8534 21.3014C20.0174 20.9812 20.0451 20.6084 19.9302 20.2675C19.8153 19.9266 19.5675 19.6466 19.2431 19.4911L18.9462 19.3488H25.3334C26.438 19.3488 27.2487 18.4501 27.3334 17.3488Z" style="fill: var(--data-weather-cloud-rain-primary-color)"/>
<path d="M9.33342 15.3487C9.33342 15.3487 8.66675 13.3487 10.0001 12.6821C11.3334 12.0154 12.6667 14.0154 12.6667 14.0154C12.6667 14.0154 14.8856 9.71116 18.6667 10.0154C24.0001 10.4445 24.0001 15.3487 24.0001 15.3487C24.0001 15.3487 27.4498 15.8351 27.3334 17.3487C27.2487 18.45 26.438 19.3487 25.3334 19.3487H18.9462L17.6417 18.7234L18.4948 13.5503C18.6023 12.8983 18.2161 12.266 17.5869 12.0639C16.9578 11.8618 16.2756 12.1511 15.9833 12.7437L12.7267 19.3487H6.66675C5.56218 19.3487 4.66675 18.4533 4.66675 17.3487C4.66675 16.2442 5.33341 15.3487 6.66675 15.3487H9.33342Z" style="fill: var(--data-weather-cloud-rain-secondary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.21141 26.0036C9.48204 25.4173 10.1212 25.1975 10.6897 25.4162L10.6999 25.4201L10.7098 25.4247C11.2961 25.6953 11.5159 26.3344 11.2972 26.903L11.2918 26.9171L10.1734 29.4724C9.9866 29.9331 9.56455 30.1567 9.13007 30.1567C8.97914 30.1567 8.80989 30.1106 8.70466 30.0755L8.68714 30.0697L8.67038 30.062C8.08402 29.7913 7.86428 29.1522 8.08295 28.5837L8.08837 28.5696L9.21141 26.0036Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8782 24.6704C20.1488 24.084 20.7879 23.8643 21.3565 24.0829L21.3666 24.0869L21.3765 24.0914C21.9629 24.362 22.1826 25.0012 21.9639 25.5697L21.9585 25.5838L20.8402 28.1392C20.6534 28.5999 20.2313 28.8234 19.7968 28.8234C19.6459 28.8234 19.4766 28.7774 19.3714 28.7423L19.3539 28.7365L19.3371 28.7287C18.7508 28.4581 18.531 27.819 18.7497 27.2504L18.7551 27.2363L19.8782 24.6704Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5447 23.3371C24.8153 22.7508 25.4544 22.531 26.023 22.7497L26.0331 22.7536L26.043 22.7582C26.6294 23.0288 26.8491 23.6679 26.6304 24.2365L26.625 24.2506L25.5067 26.8059C25.3199 27.2666 24.8978 27.4901 24.4633 27.4901C24.3124 27.4901 24.1431 27.4441 24.0379 27.409L24.0204 27.4032L24.0036 27.3955C23.4173 27.1248 23.1975 26.4857 23.4162 25.9172L23.4216 25.9031L24.5447 23.3371Z" style="fill: var(--data-weather-rain-primary-color)"/>
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
    'obi-lightning-rain-showers-mon-colour': ObiLightningRainShowersMonColour;
  }
}
