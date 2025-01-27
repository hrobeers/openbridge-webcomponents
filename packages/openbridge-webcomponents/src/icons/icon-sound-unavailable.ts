import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-sound-unavailable')
export class ObiSoundUnavailable extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2683 19.2687L7.99963 16H5.19963C4.07953 16 3.51948 16 3.09165 15.7821C2.71533 15.5903 2.40937 15.2843 2.21762 14.908C1.99963 14.4802 1.99963 13.9201 1.99963 12.8V11.2C1.99963 10.0799 1.99963 9.51988 2.21762 9.09206C2.40937 8.71573 2.71533 8.40977 3.09165 8.21802C3.51948 8.00004 4.07953 8.00004 5.19963 8.00004H7.99963L11.2683 4.73141C12.125 3.87466 12.5534 3.44628 12.9212 3.41733C13.2403 3.39222 13.5521 3.52139 13.76 3.7648C13.9996 4.04533 13.9996 4.65115 13.9996 5.86278V18.1373C13.9996 19.3489 13.9996 19.9547 13.76 20.2353C13.5521 20.4787 13.2403 20.6079 12.9212 20.5827C12.5534 20.5538 12.125 20.1254 11.2683 19.2687ZM8.82806 10L11.9996 6.82846V17.1716L8.82806 14H3.99963V10H8.82806Z" fill="currentColor"/>
<path d="M16.3996 16.0002L14.9996 14.6002L17.5996 12.0002L14.9996 9.40018L16.3996 8.00018L18.9996 10.6002L21.5996 8.00018L22.9996 9.40018L20.3996 12.0002L22.9996 14.6002L21.5996 16.0002L18.9996 13.4002L16.3996 16.0002Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2683 19.2687L7.99963 16H5.19963C4.07953 16 3.51948 16 3.09165 15.7821C2.71533 15.5903 2.40937 15.2843 2.21762 14.908C1.99963 14.4802 1.99963 13.9201 1.99963 12.8V11.2C1.99963 10.0799 1.99963 9.51988 2.21762 9.09206C2.40937 8.71573 2.71533 8.40977 3.09165 8.21802C3.51948 8.00004 4.07953 8.00004 5.19963 8.00004H7.99963L11.2683 4.73141C12.125 3.87466 12.5534 3.44628 12.9212 3.41733C13.2403 3.39222 13.5521 3.52139 13.76 3.7648C13.9996 4.04533 13.9996 4.65115 13.9996 5.86278V18.1373C13.9996 19.3489 13.9996 19.9547 13.76 20.2353C13.5521 20.4787 13.2403 20.6079 12.9212 20.5827C12.5534 20.5538 12.125 20.1254 11.2683 19.2687ZM8.82806 10L11.9996 6.82846V17.1716L8.82806 14H3.99963V10H8.82806Z" style="fill: var(--element-active-color)"/>
<path d="M16.3996 16.0002L14.9996 14.6002L17.5996 12.0002L14.9996 9.40018L16.3996 8.00018L18.9996 10.6002L21.5996 8.00018L22.9996 9.40018L20.3996 12.0002L22.9996 14.6002L21.5996 16.0002L18.9996 13.4002L16.3996 16.0002Z" style="fill: var(--element-active-color)"/>
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
    'obi-sound-unavailable': ObiSoundUnavailable;
  }
}
