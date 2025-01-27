import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-trophy')
export class ObiTrophy extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 17C8.57914 17 6.56012 15.2795 6.09893 12.9946C5.66427 12.984 5.29777 12.9529 4.96473 12.8637C3.58436 12.4938 2.50617 11.4156 2.1363 10.0353C1.99921 9.52363 1.99952 8.93296 1.99996 8.13758L2 5H6V2H18V5H22L22 8.13758C22.0005 8.93296 22.0008 9.52363 21.8637 10.0353C21.4938 11.4156 20.4156 12.4938 19.0353 12.8637C18.7022 12.9529 18.3357 12.984 17.9011 12.9946C17.4399 15.2795 15.4209 17 13 17V20H15.4C15.9601 20 16.2401 20 16.454 20.109C16.6422 20.2049 16.7951 20.3578 16.891 20.546C17 20.7599 17 21.0399 17 21.6V22H7V21.6C7 21.0399 7 20.7599 7.10899 20.546C7.20487 20.3578 7.35785 20.2049 7.54601 20.109C7.75992 20 8.03995 20 8.6 20H11V17ZM11 15H13C14.6569 15 16 13.6569 16 12V4H8V12C8 13.6569 9.34315 15 11 15ZM18 10.9901C18.2576 10.981 18.3988 10.9637 18.5176 10.9319C19.2078 10.7469 19.7469 10.2078 19.9318 9.51764C19.9914 9.29536 20 8.99435 20 8V7H18V10.9901ZM6 10.9901V7H4.00001V8C4.00001 8.99435 4.00859 9.29536 4.06815 9.51764C4.25309 10.2078 4.79218 10.7469 5.48237 10.9319C5.60116 10.9637 5.74243 10.981 6 10.9901Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 17C8.57914 17 6.56012 15.2795 6.09893 12.9946C5.66427 12.984 5.29777 12.9529 4.96473 12.8637C3.58436 12.4938 2.50617 11.4156 2.1363 10.0353C1.99921 9.52363 1.99952 8.93296 1.99996 8.13758L2 5H6V2H18V5H22L22 8.13758C22.0005 8.93296 22.0008 9.52363 21.8637 10.0353C21.4938 11.4156 20.4156 12.4938 19.0353 12.8637C18.7022 12.9529 18.3357 12.984 17.9011 12.9946C17.4399 15.2795 15.4209 17 13 17V20H15.4C15.9601 20 16.2401 20 16.454 20.109C16.6422 20.2049 16.7951 20.3578 16.891 20.546C17 20.7599 17 21.0399 17 21.6V22H7V21.6C7 21.0399 7 20.7599 7.10899 20.546C7.20487 20.3578 7.35785 20.2049 7.54601 20.109C7.75992 20 8.03995 20 8.6 20H11V17ZM11 15H13C14.6569 15 16 13.6569 16 12V4H8V12C8 13.6569 9.34315 15 11 15ZM18 10.9901C18.2576 10.981 18.3988 10.9637 18.5176 10.9319C19.2078 10.7469 19.7469 10.2078 19.9318 9.51764C19.9914 9.29536 20 8.99435 20 8V7H18V10.9901ZM6 10.9901V7H4.00001V8C4.00001 8.99435 4.00859 9.29536 4.06815 9.51764C4.25309 10.2078 4.79218 10.7469 5.48237 10.9319C5.60116 10.9637 5.74243 10.981 6 10.9901Z" style="fill: var(--element-active-color)"/>
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
    'obi-trophy': ObiTrophy;
  }
}
