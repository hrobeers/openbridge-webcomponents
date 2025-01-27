import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-lightning-heavy-rain-colour')
export class ObiLightningHeavyRainColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4967 13.4933L18.5126 7.33325L14.6667 15.1333L17.2427 16.3333L15.5738 23.3333L20.0001 14.6933L17.4967 13.4933Z" fill="currentColor"/>
<path d="M12.4613 7.11736C13.5607 4.78582 15.7935 3.33325 18.2391 3.33325C21.3735 3.33325 24.1292 5.79117 24.6554 9.10942L24.7565 9.74697L25.3791 9.91734C26.8571 10.3217 27.9999 11.7971 27.9999 13.5765C27.9999 15.6987 26.3629 17.3333 24.4823 17.3333H20.1456L21.1866 15.3012C21.3506 14.9811 21.3783 14.6082 21.2634 14.2673C21.1484 13.9264 20.9006 13.6465 20.5763 13.491L18.9748 12.7233L19.828 7.55025C19.9355 6.89826 19.5492 6.26588 18.9201 6.06382C18.291 5.86176 17.6087 6.15099 17.3165 6.74366L13.4707 14.5437C13.3121 14.8654 13.2898 15.2375 13.4089 15.5759C13.528 15.9143 13.7784 16.1904 14.1036 16.3419L15.6932 17.0825L15.6334 17.3333H7.00776C6.05989 17.3333 5.1622 16.9481 4.50388 16.25L4.49162 16.2371L4.47891 16.2245C3.77291 15.5276 3.36163 14.5558 3.33325 13.4314V13.3769C3.33325 12.3653 3.70861 11.4069 4.39048 10.657C5.08284 9.89685 6.00812 9.4871 7.00777 9.4871C7.20203 9.4871 7.27647 9.48909 7.36708 9.5051L8.19898 9.65211L8.48292 8.85646C8.78584 8.00763 9.54935 7.45799 10.4274 7.45799C10.6811 7.45799 10.9177 7.50176 11.1527 7.60555L12.0451 7.99982L12.4613 7.11736Z" fill="currentColor"/>
<path d="M12.4613 7.11736C13.5607 4.78582 15.7935 3.33325 18.2391 3.33325C21.3735 3.33325 24.1292 5.79117 24.6554 9.10942L24.7565 9.74697L25.3791 9.91734C26.8571 10.3217 27.9999 11.7971 27.9999 13.5765C27.9999 15.6987 26.3629 17.3333 24.4823 17.3333H20.1456L19.121 19.3333H24.4823C27.5585 19.3333 29.9999 16.71 29.9999 13.5765C29.9999 11.1904 28.5969 9.05046 26.5147 8.19534C25.6237 4.28953 22.243 1.33325 18.2391 1.33325C15.2593 1.33325 12.5726 2.95032 11.0542 5.50734C10.8431 5.47326 10.6338 5.45799 10.4274 5.45799C8.93634 5.45799 7.63391 6.25968 6.92191 7.48775C5.38193 7.51112 3.95619 8.16348 2.91109 9.31116C1.89899 10.424 1.33325 11.8605 1.33325 13.3769V13.4549L1.33352 13.4664C1.37015 15.059 1.95806 16.5395 3.0612 17.6353C4.09596 18.7254 5.5145 19.3333 7.00776 19.3333H15.1566L15.6334 17.3333H7.00776C6.05989 17.3333 5.1622 16.9481 4.50388 16.25L4.49162 16.2371L4.47891 16.2245C3.77291 15.5276 3.36163 14.5558 3.33325 13.4314V13.3769C3.33325 12.3653 3.70861 11.4069 4.39048 10.657C5.08283 9.89685 6.00812 9.4871 7.00777 9.4871C7.20203 9.4871 7.27647 9.48909 7.36708 9.5051L8.19898 9.65211L8.48292 8.85646C8.78584 8.00763 9.54935 7.45799 10.4274 7.45799C10.6811 7.45799 10.9177 7.50177 11.1527 7.60555L12.0451 7.99982L12.4613 7.11736Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.54466 21.3371C6.81529 20.7508 7.45443 20.531 8.02298 20.7497L8.03313 20.7536L8.043 20.7582C8.62936 21.0288 8.8491 21.6679 8.63043 22.2365L8.62502 22.2506L7.50666 24.8059C7.31985 25.2666 6.89781 25.4901 6.46332 25.4901C6.31239 25.4901 6.14314 25.4441 6.03791 25.409L6.02039 25.4032L6.00363 25.3955C5.41728 25.1248 5.19753 24.4857 5.4162 23.9172L5.42162 23.9031L6.54466 21.3371Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5447 24.0038C10.8153 23.4174 11.4544 23.1977 12.023 23.4164L12.0331 23.4203L12.043 23.4248C12.6294 23.6955 12.8491 24.3346 12.6304 24.9031L12.625 24.9172L11.5067 27.4726C11.3199 27.9333 10.8978 28.1568 10.4633 28.1568C10.3124 28.1568 10.1431 28.1108 10.0379 28.0757L10.0204 28.0699L10.0036 28.0621C9.41728 27.7915 9.19753 27.1524 9.4162 26.5838L9.42162 26.5697L10.5447 24.0038Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5447 21.3371C24.8153 20.7508 25.4544 20.531 26.023 20.7497L26.0331 20.7536L26.043 20.7582C26.6294 21.0288 26.8491 21.6679 26.6304 22.2365L26.625 22.2506L25.5067 24.8059C25.3199 25.2666 24.8978 25.4901 24.4633 25.4901C24.3124 25.4901 24.1431 25.4441 24.0379 25.409L24.0204 25.4032L24.0036 25.3955C23.4173 25.1248 23.1975 24.4857 23.4162 23.9172L23.4216 23.9031L24.5447 21.3371Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.878 26.0038C28.1486 25.4174 28.7878 25.1977 29.3563 25.4164L29.3665 25.4203L29.3763 25.4248C29.9627 25.6955 30.1824 26.3346 29.9638 26.9031L29.9583 26.9172L28.84 29.4726C28.6532 29.9333 28.2311 30.1568 27.7966 30.1568C27.6457 30.1568 27.4765 30.1108 27.3712 30.0757L27.3537 30.0699L27.337 30.0621C26.7506 29.7915 26.5309 29.1524 26.7495 28.5838L26.7549 28.5697L27.878 26.0038Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2113 22.6705C19.482 22.0841 20.1211 21.8644 20.6896 22.083L20.6998 22.0869L20.7097 22.0915C21.296 22.3621 21.5158 23.0013 21.2971 23.5698L21.2917 23.5839L20.1733 26.1393C19.9865 26.5999 19.5645 26.8235 19.13 26.8235C18.9791 26.8235 18.8098 26.7775 18.7046 26.7424L18.6871 26.7365L18.6703 26.7288C18.0839 26.4582 17.8642 25.819 18.0829 25.2505L18.0883 25.2364L19.2113 22.6705Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4967 13.4933L18.5126 7.33325L14.6667 15.1333L17.2427 16.3333L15.5738 23.3333L20.0001 14.6933L17.4967 13.4933Z" style="fill: var(--data-weather-lightning-primary-color)"/>
<path d="M12.4613 7.11736C13.5607 4.78582 15.7935 3.33325 18.2391 3.33325C21.3735 3.33325 24.1292 5.79117 24.6554 9.10942L24.7565 9.74697L25.3791 9.91734C26.8571 10.3217 27.9999 11.7971 27.9999 13.5765C27.9999 15.6987 26.3629 17.3333 24.4823 17.3333H20.1456L21.1866 15.3012C21.3506 14.9811 21.3783 14.6082 21.2634 14.2673C21.1484 13.9264 20.9006 13.6465 20.5763 13.491L18.9748 12.7233L19.828 7.55025C19.9355 6.89826 19.5492 6.26588 18.9201 6.06382C18.291 5.86176 17.6087 6.15099 17.3165 6.74366L13.4707 14.5437C13.3121 14.8654 13.2898 15.2375 13.4089 15.5759C13.528 15.9143 13.7784 16.1904 14.1036 16.3419L15.6932 17.0825L15.6334 17.3333H7.00776C6.05989 17.3333 5.1622 16.9481 4.50388 16.25L4.49162 16.2371L4.47891 16.2245C3.77291 15.5276 3.36163 14.5558 3.33325 13.4314V13.3769C3.33325 12.3653 3.70861 11.4069 4.39048 10.657C5.08284 9.89685 6.00812 9.4871 7.00777 9.4871C7.20203 9.4871 7.27647 9.48909 7.36708 9.5051L8.19898 9.65211L8.48292 8.85646C8.78584 8.00763 9.54935 7.45799 10.4274 7.45799C10.6811 7.45799 10.9177 7.50176 11.1527 7.60555L12.0451 7.99982L12.4613 7.11736Z" style="fill: var(--data-weather-cloud-heavy-primary-color)"/>
<path d="M12.4613 7.11736C13.5607 4.78582 15.7935 3.33325 18.2391 3.33325C21.3735 3.33325 24.1292 5.79117 24.6554 9.10942L24.7565 9.74697L25.3791 9.91734C26.8571 10.3217 27.9999 11.7971 27.9999 13.5765C27.9999 15.6987 26.3629 17.3333 24.4823 17.3333H20.1456L19.121 19.3333H24.4823C27.5585 19.3333 29.9999 16.71 29.9999 13.5765C29.9999 11.1904 28.5969 9.05046 26.5147 8.19534C25.6237 4.28953 22.243 1.33325 18.2391 1.33325C15.2593 1.33325 12.5726 2.95032 11.0542 5.50734C10.8431 5.47326 10.6338 5.45799 10.4274 5.45799C8.93634 5.45799 7.63391 6.25968 6.92191 7.48775C5.38193 7.51112 3.95619 8.16348 2.91109 9.31116C1.89899 10.424 1.33325 11.8605 1.33325 13.3769V13.4549L1.33352 13.4664C1.37015 15.059 1.95806 16.5395 3.0612 17.6353C4.09596 18.7254 5.5145 19.3333 7.00776 19.3333H15.1566L15.6334 17.3333H7.00776C6.05989 17.3333 5.1622 16.9481 4.50388 16.25L4.49162 16.2371L4.47891 16.2245C3.77291 15.5276 3.36163 14.5558 3.33325 13.4314V13.3769C3.33325 12.3653 3.70861 11.4069 4.39048 10.657C5.08283 9.89685 6.00812 9.4871 7.00777 9.4871C7.20203 9.4871 7.27647 9.48909 7.36708 9.5051L8.19898 9.65211L8.48292 8.85646C8.78584 8.00763 9.54935 7.45799 10.4274 7.45799C10.6811 7.45799 10.9177 7.50177 11.1527 7.60555L12.0451 7.99982L12.4613 7.11736Z" style="fill: var(--data-weather-cloud-heavy-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.54466 21.3371C6.81529 20.7508 7.45443 20.531 8.02298 20.7497L8.03313 20.7536L8.043 20.7582C8.62936 21.0288 8.8491 21.6679 8.63043 22.2365L8.62502 22.2506L7.50666 24.8059C7.31985 25.2666 6.89781 25.4901 6.46332 25.4901C6.31239 25.4901 6.14314 25.4441 6.03791 25.409L6.02039 25.4032L6.00363 25.3955C5.41728 25.1248 5.19753 24.4857 5.4162 23.9172L5.42162 23.9031L6.54466 21.3371Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5447 24.0038C10.8153 23.4174 11.4544 23.1977 12.023 23.4164L12.0331 23.4203L12.043 23.4248C12.6294 23.6955 12.8491 24.3346 12.6304 24.9031L12.625 24.9172L11.5067 27.4726C11.3199 27.9333 10.8978 28.1568 10.4633 28.1568C10.3124 28.1568 10.1431 28.1108 10.0379 28.0757L10.0204 28.0699L10.0036 28.0621C9.41728 27.7915 9.19753 27.1524 9.4162 26.5838L9.42162 26.5697L10.5447 24.0038Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5447 21.3371C24.8153 20.7508 25.4544 20.531 26.023 20.7497L26.0331 20.7536L26.043 20.7582C26.6294 21.0288 26.8491 21.6679 26.6304 22.2365L26.625 22.2506L25.5067 24.8059C25.3199 25.2666 24.8978 25.4901 24.4633 25.4901C24.3124 25.4901 24.1431 25.4441 24.0379 25.409L24.0204 25.4032L24.0036 25.3955C23.4173 25.1248 23.1975 24.4857 23.4162 23.9172L23.4216 23.9031L24.5447 21.3371Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.878 26.0038C28.1486 25.4174 28.7878 25.1977 29.3563 25.4164L29.3665 25.4203L29.3763 25.4248C29.9627 25.6955 30.1824 26.3346 29.9638 26.9031L29.9583 26.9172L28.84 29.4726C28.6532 29.9333 28.2311 30.1568 27.7966 30.1568C27.6457 30.1568 27.4765 30.1108 27.3712 30.0757L27.3537 30.0699L27.337 30.0621C26.7506 29.7915 26.5309 29.1524 26.7495 28.5838L26.7549 28.5697L27.878 26.0038Z" style="fill: var(--data-weather-rain-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.2113 22.6705C19.482 22.0841 20.1211 21.8644 20.6896 22.083L20.6998 22.0869L20.7097 22.0915C21.296 22.3621 21.5158 23.0013 21.2971 23.5698L21.2917 23.5839L20.1733 26.1393C19.9865 26.5999 19.5645 26.8235 19.13 26.8235C18.9791 26.8235 18.8098 26.7775 18.7046 26.7424L18.6871 26.7365L18.6703 26.7288C18.0839 26.4582 17.8642 25.819 18.0829 25.2505L18.0883 25.2364L19.2113 22.6705Z" style="fill: var(--data-weather-rain-primary-color)"/>
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
    'obi-lightning-heavy-rain-colour': ObiLightningHeavyRainColour;
  }
}
