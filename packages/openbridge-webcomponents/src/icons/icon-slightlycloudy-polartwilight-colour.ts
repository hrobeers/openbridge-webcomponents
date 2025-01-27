import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-slightlycloudy-polartwilight-colour')
export class ObiSlightlycloudyPolartwilightColour extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<rect x="2.66675" y="8.66663" width="26.6667" height="1.33333" rx="0.666667" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9294 16C19.1975 16 17.6079 17.0285 16.8221 18.6947L16.406 19.5772L15.5135 19.1829C15.3727 19.1207 15.2302 19.0936 15.0706 19.0936C14.522 19.0936 14.0408 19.4353 13.8477 19.9764L13.5638 20.7721L12.7319 20.6251C12.6883 20.6174 12.6531 20.6154 12.5059 20.6154C11.8278 20.6154 11.2006 20.8921 10.7278 21.4111C10.2577 21.9281 10 22.5872 10 23.2827V23.3204C10.0205 24.1038 10.3062 24.768 10.7849 25.2405L10.7976 25.2531L10.8098 25.2661C11.2564 25.7395 11.8639 26 12.5059 26H25.6118C26.8728 26 28 24.8977 28 23.4324C28 22.2019 27.2101 21.2005 26.2184 20.9292L25.5958 20.7588L25.4947 20.1213C25.1175 17.7427 23.1462 16 20.9294 16ZM15.4122 17.1113C16.6076 15.2038 18.6569 14 20.9294 14C24.0167 14 26.6153 16.2451 27.3502 19.2163C28.9443 19.9289 30 21.5932 30 23.4324C30 25.9089 28.0684 28 25.6118 28H12.5059C11.3185 28 10.1902 27.5169 9.36718 26.6513C8.49152 25.7801 8.02906 24.6073 8.00026 23.3556L8 23.3441V23.2827C8 22.0824 8.44809 20.9452 9.24843 20.0652C10.0464 19.1889 11.1267 18.6745 12.2984 18.6202C12.8888 17.6934 13.9085 17.0936 15.0706 17.0936C15.1832 17.0936 15.2972 17.0992 15.4122 17.1113Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9294 16C19.1975 16 17.6079 17.0285 16.8221 18.6947L16.406 19.5772L15.5135 19.1829C15.3727 19.1207 15.2302 19.0936 15.0706 19.0936C14.522 19.0936 14.0408 19.4353 13.8477 19.9764L13.5638 20.7721L12.7319 20.6251C12.6883 20.6174 12.6531 20.6154 12.5059 20.6154C11.8278 20.6154 11.2006 20.8921 10.7278 21.4111C10.2577 21.9281 10 22.5872 10 23.2827V23.3204C10.0205 24.1038 10.3062 24.768 10.7849 25.2405L10.7976 25.2531L10.8098 25.2661C11.2564 25.7395 11.8639 26 12.5059 26H25.6118C26.8728 26 28 24.8977 28 23.4324C28 22.2019 27.2101 21.2005 26.2184 20.9292L25.5958 20.7588L25.4947 20.1213C25.1175 17.7427 23.1462 16 20.9294 16Z" fill="currentColor"/>
<path d="M6.56775 10.6264C6.75566 10.4603 6.84962 10.2301 6.84962 10H9.33325C9.33325 13.5881 12.1678 16.5141 15.7198 16.6609C15.6119 16.8062 15.5092 16.9564 15.4121 17.1113C15.2971 17.0992 15.1832 17.0936 15.0705 17.0936C13.9085 17.0936 12.8887 17.6934 12.2983 18.6202C11.1267 18.6745 10.0463 19.1889 9.24835 20.0652C9.00201 20.3361 8.78904 20.6313 8.61223 20.9453C8.14721 20.9021 7.75688 20.4579 7.87498 19.9291L8.7357 16.0754C8.8453 15.5847 8.50107 15.1088 8.00257 15.0619L4.08764 14.6932C3.36254 14.6249 3.06958 13.7193 3.61624 13.236L6.56775 10.6264Z" fill="currentColor"/>
<path d="M24.3825 15.0256L27.9122 14.6932C28.6373 14.6249 28.9303 13.7193 28.3836 13.236L25.4321 10.6264C25.2442 10.4603 25.1502 10.2301 25.1502 10H22.6666C22.6666 11.5063 22.167 12.896 21.3245 14.0123C22.44 14.082 23.4819 14.4447 24.3825 15.0256Z" fill="currentColor"/>
<path d="M22.1591 12.5512C22.4941 11.7424 22.6666 10.8755 22.6666 10H9.33325C9.33325 10.8755 9.50569 11.7424 9.84072 12.5512C10.1758 13.3601 10.6668 14.095 11.2859 14.714C11.9049 15.3331 12.6399 15.8242 13.4487 16.1592C14.1712 16.4585 14.94 16.628 15.7199 16.6608C16.9418 15.0163 18.8413 14 20.9293 14C21.0618 14 21.1934 14.0041 21.324 14.0123C21.6622 13.5635 21.9431 13.0727 22.1591 12.5512Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.66675" y="8.66663" width="26.6667" height="1.33333" rx="0.666667" style="fill: var(--data-weather-sun-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9294 16C19.1975 16 17.6079 17.0285 16.8221 18.6947L16.406 19.5772L15.5135 19.1829C15.3727 19.1207 15.2302 19.0936 15.0706 19.0936C14.522 19.0936 14.0408 19.4353 13.8477 19.9764L13.5638 20.7721L12.7319 20.6251C12.6883 20.6174 12.6531 20.6154 12.5059 20.6154C11.8278 20.6154 11.2006 20.8921 10.7278 21.4111C10.2577 21.9281 10 22.5872 10 23.2827V23.3204C10.0205 24.1038 10.3062 24.768 10.7849 25.2405L10.7976 25.2531L10.8098 25.2661C11.2564 25.7395 11.8639 26 12.5059 26H25.6118C26.8728 26 28 24.8977 28 23.4324C28 22.2019 27.2101 21.2005 26.2184 20.9292L25.5958 20.7588L25.4947 20.1213C25.1175 17.7427 23.1462 16 20.9294 16ZM15.4122 17.1113C16.6076 15.2038 18.6569 14 20.9294 14C24.0167 14 26.6153 16.2451 27.3502 19.2163C28.9443 19.9289 30 21.5932 30 23.4324C30 25.9089 28.0684 28 25.6118 28H12.5059C11.3185 28 10.1902 27.5169 9.36718 26.6513C8.49152 25.7801 8.02906 24.6073 8.00026 23.3556L8 23.3441V23.2827C8 22.0824 8.44809 20.9452 9.24843 20.0652C10.0464 19.1889 11.1267 18.6745 12.2984 18.6202C12.8888 17.6934 13.9085 17.0936 15.0706 17.0936C15.1832 17.0936 15.2972 17.0992 15.4122 17.1113Z" style="fill: var(--data-weather-cloud-light-primary-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9294 16C19.1975 16 17.6079 17.0285 16.8221 18.6947L16.406 19.5772L15.5135 19.1829C15.3727 19.1207 15.2302 19.0936 15.0706 19.0936C14.522 19.0936 14.0408 19.4353 13.8477 19.9764L13.5638 20.7721L12.7319 20.6251C12.6883 20.6174 12.6531 20.6154 12.5059 20.6154C11.8278 20.6154 11.2006 20.8921 10.7278 21.4111C10.2577 21.9281 10 22.5872 10 23.2827V23.3204C10.0205 24.1038 10.3062 24.768 10.7849 25.2405L10.7976 25.2531L10.8098 25.2661C11.2564 25.7395 11.8639 26 12.5059 26H25.6118C26.8728 26 28 24.8977 28 23.4324C28 22.2019 27.2101 21.2005 26.2184 20.9292L25.5958 20.7588L25.4947 20.1213C25.1175 17.7427 23.1462 16 20.9294 16Z" style="fill: var(--data-weather-cloud-light-seconday-color)"/>
<path d="M6.56775 10.6264C6.75566 10.4603 6.84962 10.2301 6.84962 10H9.33325C9.33325 13.5881 12.1678 16.5141 15.7198 16.6609C15.6119 16.8062 15.5092 16.9564 15.4121 17.1113C15.2971 17.0992 15.1832 17.0936 15.0705 17.0936C13.9085 17.0936 12.8887 17.6934 12.2983 18.6202C11.1267 18.6745 10.0463 19.1889 9.24835 20.0652C9.00201 20.3361 8.78904 20.6313 8.61223 20.9453C8.14721 20.9021 7.75688 20.4579 7.87498 19.9291L8.7357 16.0754C8.8453 15.5847 8.50107 15.1088 8.00257 15.0619L4.08764 14.6932C3.36254 14.6249 3.06958 13.7193 3.61624 13.236L6.56775 10.6264Z" style="fill: var(--data-weather-sun-primary-color)"/>
<path d="M24.3825 15.0256L27.9122 14.6932C28.6373 14.6249 28.9303 13.7193 28.3836 13.236L25.4321 10.6264C25.2442 10.4603 25.1502 10.2301 25.1502 10H22.6666C22.6666 11.5063 22.167 12.896 21.3245 14.0123C22.44 14.082 23.4819 14.4447 24.3825 15.0256Z" style="fill: var(--data-weather-sun-primary-color)"/>
<path d="M22.1591 12.5512C22.4941 11.7424 22.6666 10.8755 22.6666 10H9.33325C9.33325 10.8755 9.50569 11.7424 9.84072 12.5512C10.1758 13.3601 10.6668 14.095 11.2859 14.714C11.9049 15.3331 12.6399 15.8242 13.4487 16.1592C14.1712 16.4585 14.94 16.628 15.7199 16.6608C16.9418 15.0163 18.8413 14 20.9293 14C21.0618 14 21.1934 14.0041 21.324 14.0123C21.6622 13.5635 21.9431 13.0727 22.1591 12.5512Z" style="fill: var(--data-weather-sun-secondary-color)"/>
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
    'obi-slightlycloudy-polartwilight-colour': ObiSlightlycloudyPolartwilightColour;
  }
}
