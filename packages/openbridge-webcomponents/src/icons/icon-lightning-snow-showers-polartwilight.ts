import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-snow-showers-polartwilight')
export class ObiLightningSnowShowersPolartwilight extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66675 5.33341C2.66675 4.96522 2.96522 4.66675 3.33341 4.66675H18.0001C18.3683 4.66675 18.6667 4.96522 18.6667 5.33341C18.6667 5.7016 18.3683 6.00008 18.0001 6.00008H16.4459C16.4459 6.13816 16.5052 6.27623 16.6239 6.37592L18.488 7.94166C18.5119 7.96174 18.5333 7.98304 18.5522 8.0053C18.6431 8.00897 18.7347 8.01449 18.8272 8.02193C22.2422 8.29671 24.1526 10.0867 25.1072 11.919C25.439 12.556 25.6452 13.1747 25.7742 13.699C25.9744 13.7574 26.1853 13.8252 26.3987 13.9034C26.9123 14.0917 27.5833 14.3909 28.1496 14.8677C28.7332 15.3588 29.4243 16.244 29.3275 17.5022C29.1781 19.445 27.6728 21.3488 25.3334 21.3488H19.8291L19.8534 21.3014C20.0174 20.9812 20.0451 20.6084 19.9302 20.2675C19.8153 19.9266 19.5675 19.6466 19.2431 19.4911L18.9462 19.3488H25.3334C26.438 19.3488 27.2487 18.4501 27.3334 17.3488C27.4498 15.8352 24.0001 15.3488 24.0001 15.3488C24.0001 15.3488 24.0001 10.4446 18.6667 10.0155C16.5283 9.84342 14.8896 11.1454 13.8693 12.3091C13.0855 13.2031 12.6667 14.0155 12.6667 14.0155C12.6667 14.0155 11.9991 13.014 11.1363 12.6646C10.7798 12.5203 10.3899 12.4872 10.0001 12.6822C9.66675 12.8488 9.45842 13.0988 9.33342 13.3801C8.95842 14.2238 9.33342 15.3488 9.33342 15.3488H6.66675C5.33341 15.3488 4.66675 16.2442 4.66675 17.3488C4.66675 18.4534 5.56218 19.3488 6.66675 19.3488H12.7267L12.1375 20.5438C12.0138 20.7948 11.973 21.0765 12.0176 21.3488H6.66675C4.45761 21.3488 2.66675 19.558 2.66675 17.3488C2.66675 16.4055 2.95384 15.3851 3.69561 14.5797C4.46219 13.7474 5.52707 13.3488 6.66675 13.3488H7.25995C7.40364 12.6549 7.74859 11.8519 8.5239 11.2558C8.49923 11.2653 8.47495 11.2767 8.45129 11.2901L6.31467 12.4979C5.91894 12.7216 5.43452 12.3858 5.53521 11.9575L6.07882 9.64532C6.14804 9.35089 5.93064 9.06536 5.61579 9.0372L3.14321 8.81601C2.68525 8.77504 2.50022 8.23165 2.84548 7.94165L4.70959 6.37592C4.82827 6.27623 4.88761 6.13816 4.88761 6.00008H3.33342C2.96523 6.00008 2.66675 5.7016 2.66675 5.33341ZM6.45622 6.00008H14.8773C14.8773 8.20922 12.9922 10.0001 10.6667 10.0001C8.34134 10.0001 6.45622 8.20922 6.45622 6.00008Z" fill="currentColor"/>
<path d="M17.1792 13.3334L16.1633 19.4934L18.6667 20.6934L14.2404 29.3334L15.9094 22.3334L13.3334 21.1334L17.1792 13.3334Z" fill="currentColor"/>
<path d="M8.00012 29.234C7.68126 29.0294 7.57201 28.5761 7.7561 28.2216L8.17876 27.4078H7.33342C6.96523 27.4078 6.66675 27.076 6.66675 26.6667C6.66675 26.2574 6.96523 25.9256 7.33342 25.9256H8.17875L7.7561 25.1119C7.57201 24.7574 7.68126 24.3041 8.00012 24.0995C8.31898 23.8948 8.72671 24.0163 8.9108 24.3708L9.33345 25.1845L9.7561 24.3708C9.9402 24.0163 10.3479 23.8948 10.6668 24.0995C10.9856 24.3041 11.0949 24.7574 10.9108 25.1119L10.4882 25.9256H11.3334C11.7016 25.9256 12.0001 26.2574 12.0001 26.6667C12.0001 27.076 11.7016 27.4078 11.3334 27.4078H10.4882L10.9108 28.2216C11.0949 28.5761 10.9856 29.0294 10.6668 29.234C10.3479 29.4387 9.9402 29.3172 9.7561 28.9627L9.33345 28.149L8.9108 28.9627C8.72671 29.3172 8.31898 29.4387 8.00012 29.234Z" fill="currentColor"/>
<path d="M19.3335 29.9007C19.0146 29.696 18.9053 29.2428 19.0894 28.8883L19.5121 28.0745H18.6667C18.2986 28.0745 18.0001 27.7427 18.0001 27.3334C18.0001 26.9241 18.2986 26.5923 18.6667 26.5923H19.5121L19.0894 25.7785C18.9053 25.4241 19.0146 24.9708 19.3335 24.7662C19.6523 24.5615 20.06 24.683 20.2441 25.0374L20.6668 25.8512L21.0894 25.0374C21.2735 24.683 21.6813 24.5615 22.0001 24.7662C22.319 24.9708 22.4282 25.4241 22.2441 25.7785L21.8215 26.5923H22.6667C23.0349 26.5923 23.3334 26.9241 23.3334 27.3334C23.3334 27.7427 23.0349 28.0745 22.6667 28.0745H21.8215L22.2441 28.8883C22.4282 29.2428 22.319 29.696 22.0001 29.9007C21.6813 30.1053 21.2735 29.9839 21.0894 29.6294L20.6668 28.8156L20.2441 29.6294C20.06 29.9839 19.6523 30.1053 19.3335 29.9007Z" fill="currentColor"/>
<path d="M26.0001 27.9007C25.6813 27.696 25.572 27.2428 25.7561 26.8883L26.1788 26.0745H25.3334C24.9652 26.0745 24.6667 25.7427 24.6667 25.3334C24.6667 24.9241 24.9652 24.5923 25.3334 24.5923H26.1787L25.7561 23.7785C25.572 23.4241 25.6813 22.9708 26.0001 22.7662C26.319 22.5615 26.7267 22.683 26.9108 23.0374L27.3335 23.8512L27.7561 23.0374C27.9402 22.683 28.3479 22.5615 28.6668 22.7662C28.9856 22.9708 29.0949 23.4241 28.9108 23.7785L28.4882 24.5923H29.3334C29.7016 24.5923 30.0001 24.9241 30.0001 25.3334C30.0001 25.7427 29.7016 26.0745 29.3334 26.0745H28.4882L28.9108 26.8883C29.0949 27.2428 28.9856 27.696 28.6668 27.9007C28.3479 28.1053 27.9402 27.9839 27.7561 27.6294L27.3335 26.8156L26.9108 27.6294C26.7267 27.9839 26.319 28.1053 26.0001 27.9007Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66675 5.33341C2.66675 4.96522 2.96522 4.66675 3.33341 4.66675H18.0001C18.3683 4.66675 18.6667 4.96522 18.6667 5.33341C18.6667 5.7016 18.3683 6.00008 18.0001 6.00008H16.4459C16.4459 6.13816 16.5052 6.27623 16.6239 6.37592L18.488 7.94166C18.5119 7.96174 18.5333 7.98304 18.5522 8.0053C18.6431 8.00897 18.7347 8.01449 18.8272 8.02193C22.2422 8.29671 24.1526 10.0867 25.1072 11.919C25.439 12.556 25.6452 13.1747 25.7742 13.699C25.9744 13.7574 26.1853 13.8252 26.3987 13.9034C26.9123 14.0917 27.5833 14.3909 28.1496 14.8677C28.7332 15.3588 29.4243 16.244 29.3275 17.5022C29.1781 19.445 27.6728 21.3488 25.3334 21.3488H19.8291L19.8534 21.3014C20.0174 20.9812 20.0451 20.6084 19.9302 20.2675C19.8153 19.9266 19.5675 19.6466 19.2431 19.4911L18.9462 19.3488H25.3334C26.438 19.3488 27.2487 18.4501 27.3334 17.3488C27.4498 15.8352 24.0001 15.3488 24.0001 15.3488C24.0001 15.3488 24.0001 10.4446 18.6667 10.0155C16.5283 9.84342 14.8896 11.1454 13.8693 12.3091C13.0855 13.2031 12.6667 14.0155 12.6667 14.0155C12.6667 14.0155 11.9991 13.014 11.1363 12.6646C10.7798 12.5203 10.3899 12.4872 10.0001 12.6822C9.66675 12.8488 9.45842 13.0988 9.33342 13.3801C8.95842 14.2238 9.33342 15.3488 9.33342 15.3488H6.66675C5.33341 15.3488 4.66675 16.2442 4.66675 17.3488C4.66675 18.4534 5.56218 19.3488 6.66675 19.3488H12.7267L12.1375 20.5438C12.0138 20.7948 11.973 21.0765 12.0176 21.3488H6.66675C4.45761 21.3488 2.66675 19.558 2.66675 17.3488C2.66675 16.4055 2.95384 15.3851 3.69561 14.5797C4.46219 13.7474 5.52707 13.3488 6.66675 13.3488H7.25995C7.40364 12.6549 7.74859 11.8519 8.5239 11.2558C8.49923 11.2653 8.47495 11.2767 8.45129 11.2901L6.31467 12.4979C5.91894 12.7216 5.43452 12.3858 5.53521 11.9575L6.07882 9.64532C6.14804 9.35089 5.93064 9.06536 5.61579 9.0372L3.14321 8.81601C2.68525 8.77504 2.50022 8.23165 2.84548 7.94165L4.70959 6.37592C4.82827 6.27623 4.88761 6.13816 4.88761 6.00008H3.33342C2.96523 6.00008 2.66675 5.7016 2.66675 5.33341ZM6.45622 6.00008H14.8773C14.8773 8.20922 12.9922 10.0001 10.6667 10.0001C8.34134 10.0001 6.45622 8.20922 6.45622 6.00008Z" style="fill: var(--element-active-color)"/>
<path d="M17.1792 13.3334L16.1633 19.4934L18.6667 20.6934L14.2404 29.3334L15.9094 22.3334L13.3334 21.1334L17.1792 13.3334Z" style="fill: var(--element-active-color)"/>
<path d="M8.00012 29.234C7.68126 29.0294 7.57201 28.5761 7.7561 28.2216L8.17876 27.4078H7.33342C6.96523 27.4078 6.66675 27.076 6.66675 26.6667C6.66675 26.2574 6.96523 25.9256 7.33342 25.9256H8.17875L7.7561 25.1119C7.57201 24.7574 7.68126 24.3041 8.00012 24.0995C8.31898 23.8948 8.72671 24.0163 8.9108 24.3708L9.33345 25.1845L9.7561 24.3708C9.9402 24.0163 10.3479 23.8948 10.6668 24.0995C10.9856 24.3041 11.0949 24.7574 10.9108 25.1119L10.4882 25.9256H11.3334C11.7016 25.9256 12.0001 26.2574 12.0001 26.6667C12.0001 27.076 11.7016 27.4078 11.3334 27.4078H10.4882L10.9108 28.2216C11.0949 28.5761 10.9856 29.0294 10.6668 29.234C10.3479 29.4387 9.9402 29.3172 9.7561 28.9627L9.33345 28.149L8.9108 28.9627C8.72671 29.3172 8.31898 29.4387 8.00012 29.234Z" style="fill: var(--element-active-color)"/>
<path d="M19.3335 29.9007C19.0146 29.696 18.9053 29.2428 19.0894 28.8883L19.5121 28.0745H18.6667C18.2986 28.0745 18.0001 27.7427 18.0001 27.3334C18.0001 26.9241 18.2986 26.5923 18.6667 26.5923H19.5121L19.0894 25.7785C18.9053 25.4241 19.0146 24.9708 19.3335 24.7662C19.6523 24.5615 20.06 24.683 20.2441 25.0374L20.6668 25.8512L21.0894 25.0374C21.2735 24.683 21.6813 24.5615 22.0001 24.7662C22.319 24.9708 22.4282 25.4241 22.2441 25.7785L21.8215 26.5923H22.6667C23.0349 26.5923 23.3334 26.9241 23.3334 27.3334C23.3334 27.7427 23.0349 28.0745 22.6667 28.0745H21.8215L22.2441 28.8883C22.4282 29.2428 22.319 29.696 22.0001 29.9007C21.6813 30.1053 21.2735 29.9839 21.0894 29.6294L20.6668 28.8156L20.2441 29.6294C20.06 29.9839 19.6523 30.1053 19.3335 29.9007Z" style="fill: var(--element-active-color)"/>
<path d="M26.0001 27.9007C25.6813 27.696 25.572 27.2428 25.7561 26.8883L26.1788 26.0745H25.3334C24.9652 26.0745 24.6667 25.7427 24.6667 25.3334C24.6667 24.9241 24.9652 24.5923 25.3334 24.5923H26.1787L25.7561 23.7785C25.572 23.4241 25.6813 22.9708 26.0001 22.7662C26.319 22.5615 26.7267 22.683 26.9108 23.0374L27.3335 23.8512L27.7561 23.0374C27.9402 22.683 28.3479 22.5615 28.6668 22.7662C28.9856 22.9708 29.0949 23.4241 28.9108 23.7785L28.4882 24.5923H29.3334C29.7016 24.5923 30.0001 24.9241 30.0001 25.3334C30.0001 25.7427 29.7016 26.0745 29.3334 26.0745H28.4882L28.9108 26.8883C29.0949 27.2428 28.9856 27.696 28.6668 27.9007C28.3479 28.1053 27.9402 27.9839 27.7561 27.6294L27.3335 26.8156L26.9108 27.6294C26.7267 27.9839 26.319 28.1053 26.0001 27.9007Z" style="fill: var(--element-active-color)"/>
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
    'obi-lightning-snow-showers-polartwilight': ObiLightningSnowShowersPolartwilight;
  }
}
