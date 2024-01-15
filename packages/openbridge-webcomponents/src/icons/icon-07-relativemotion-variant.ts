import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-07-relativemotion-variant')
export class Obi07RelativemotionVariant extends LitElement {
  @property({type: Boolean, attribute: 'use-css-color'}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.0267 6.04433L9.04944 6.02167L9.05694 6.01416L9.07846 5.99268L9.07938 5.99178C10.2466 4.84409 11.6469 4.09072 13.0479 3.79248L14.555 3.47168L14.2342 4.97876C13.936 6.37979 13.1827 7.78014 12.035 8.94735C12.0293 8.95312 12.0237 8.95869 12.0189 8.96358C12.0143 8.96813 12.0103 8.9721 12.0073 8.97512L12.0062 8.9762L11.9959 8.98648L11.9945 8.98786L5.54156 15.4408L2.58594 12.4851L9.00106 6.07007L9.0027 6.06843L9.0267 6.04433ZM9.70981 6.77554L4.00015 12.4851L5.54156 14.0266L11.2607 8.30743L11.2739 8.2943L11.287 8.28117L11.3011 8.26706L11.3219 8.24623C12.0245 7.5317 12.5533 6.72694 12.8987 5.90366C13.0564 5.52755 13.1759 5.14758 13.2561 4.77057C12.8791 4.85082 12.4992 4.9703 12.123 5.12807C11.2998 5.47341 10.495 6.00224 9.78051 6.70482L9.76591 6.71939L9.75515 6.73018L9.7324 6.75283L9.70981 6.77554Z" fill="currentColor"/>
<path d="M21 12.9999C21 14.6567 19.6569 15.9999 18 15.9999C16.3431 15.9999 15 14.6567 15 12.9999C15 11.343 16.3431 9.99988 18 9.99988C19.6569 9.99988 21 11.343 21 12.9999Z" fill="currentColor"/>
<path d="M8.70441 22.1179L9.38448 16.029L11.4339 18.0784L13.463 16.0493L14.8772 17.4635L12.8481 19.4926L14.7933 21.4378L8.70441 22.1179Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.0267 6.04433L9.04944 6.02167L9.05694 6.01416L9.07846 5.99268L9.07938 5.99178C10.2466 4.84409 11.6469 4.09072 13.0479 3.79248L14.555 3.47168L14.2342 4.97876C13.936 6.37979 13.1827 7.78014 12.035 8.94735C12.0293 8.95312 12.0237 8.95869 12.0189 8.96358C12.0143 8.96813 12.0103 8.9721 12.0073 8.97512L12.0062 8.9762L11.9959 8.98648L11.9945 8.98786L5.54156 15.4408L2.58594 12.4851L9.00106 6.07007L9.0027 6.06843L9.0267 6.04433ZM9.70981 6.77554L4.00015 12.4851L5.54156 14.0266L11.2607 8.30743L11.2739 8.2943L11.287 8.28117L11.3011 8.26706L11.3219 8.24623C12.0245 7.5317 12.5533 6.72694 12.8987 5.90366C13.0564 5.52755 13.1759 5.14758 13.2561 4.77057C12.8791 4.85082 12.4992 4.9703 12.123 5.12807C11.2998 5.47341 10.495 6.00224 9.78051 6.70482L9.76591 6.71939L9.75515 6.73018L9.7324 6.75283L9.70981 6.77554Z" style="fill: var(--element-active-color)"/>
<path d="M21 12.9999C21 14.6567 19.6569 15.9999 18 15.9999C16.3431 15.9999 15 14.6567 15 12.9999C15 11.343 16.3431 9.99988 18 9.99988C19.6569 9.99988 21 11.343 21 12.9999Z" style="fill: var(--element-active-color)"/>
<path d="M8.70441 22.1179L9.38448 16.029L11.4339 18.0784L13.463 16.0493L14.8772 17.4635L12.8481 19.4926L14.7933 21.4378L8.70441 22.1179Z" style="fill: var(--element-active-color)"/>
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
    }
    .wrapper > * {
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'obi-07-relativemotion-variant': Obi07RelativemotionVariant;
  }
}