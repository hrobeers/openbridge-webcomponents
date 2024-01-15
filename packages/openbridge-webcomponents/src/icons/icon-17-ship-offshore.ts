import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-17-ship-offshore')
export class Obi17ShipOffshore extends LitElement {
  @property({type: Boolean, attribute: 'use-css-color'}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9634 8.9999L17.9634 7L18.4634 6H14.9634L12.9634 10H1.96338L2.80314 13.3591C2.84557 13.4137 2.88576 13.4612 2.92307 13.5C3.21987 13.892 4.84615 14 5.50881 13.725C5.6851 13.6417 5.85721 13.554 6.02516 13.462C6.19375 13.3707 6.35016 13.2583 6.49439 13.125C6.6867 12.975 6.89503 12.9 7.11939 12.9C7.34375 12.9 7.55208 12.975 7.74439 13.125C8.0649 13.3917 8.41747 13.604 8.80208 13.762C9.1867 13.9207 9.58734 14 10.004 14C10.4207 14 10.8213 13.9207 11.2059 13.762C11.5905 13.604 11.9431 13.3917 12.2636 13.125C12.4559 12.975 12.6643 12.9 12.8886 12.9C13.113 12.9 13.3213 12.975 13.5136 13.125C13.8341 13.3917 14.1867 13.604 14.5713 13.762C14.9559 13.9207 15.3566 14 15.7732 14C16.1899 14 16.5905 13.9207 16.9752 13.762C17.3598 13.604 17.7123 13.3917 18.0329 13.125C18.2252 12.975 18.4335 12.9 18.6579 12.9C18.8822 12.9 19.0905 12.975 19.2829 13.125C19.2969 13.138 19.3111 13.1508 19.3254 13.1634C19.5624 12.8067 19.8914 12.3982 20.2369 11.9694C21.0542 10.9546 21.9634 9.82577 21.9634 9L18.9634 8.9999Z" fill="currentColor"/>
<path d="M20.475 17.612C20.975 17.7373 21.4833 17.8 22 17.8C22.2833 17.8 22.5207 17.704 22.712 17.512C22.904 17.3207 23 17.0833 23 16.8C23 16.5167 22.904 16.2793 22.712 16.088C22.5207 15.896 22.2833 15.8 22 15.8C21.5667 15.8 21.1373 15.7457 20.712 15.637C20.2873 15.529 19.8833 15.3583 19.5 15.125C19.35 15.0417 19.1833 15 19 15C18.8167 15 18.65 15.0417 18.5 15.125C18.1167 15.3583 17.7123 15.529 17.287 15.637C16.8623 15.7457 16.4333 15.8 16 15.8C15.5667 15.8 15.1373 15.7457 14.712 15.637C14.2873 15.529 13.8833 15.3583 13.5 15.125C13.35 15.0417 13.179 15 12.987 15C12.7957 15 12.6333 15.0417 12.5 15.125C12.1167 15.3583 11.7123 15.529 11.287 15.637C10.8623 15.7457 10.4333 15.8 10 15.8C9.56667 15.8 9.13733 15.7457 8.712 15.637C8.28733 15.529 7.88333 15.3583 7.5 15.125C7.36667 15.0417 7.2 15 7 15C6.8 15 6.63333 15.0417 6.5 15.125C6.11667 15.3583 5.71267 15.529 5.288 15.637C4.86267 15.7457 4.43333 15.8 4 15.8C3.71667 15.8 3.47933 15.896 3.288 16.088C3.096 16.2793 3 16.5167 3 16.8C3 17.0833 3.096 17.3207 3.288 17.512C3.47933 17.704 3.71667 17.8 4 17.8C4.51667 17.8 5.025 17.7373 5.525 17.612C6.025 17.4873 6.51667 17.3 7 17.05C7.48333 17.3 7.975 17.4873 8.475 17.612C8.975 17.7373 9.48333 17.8 10 17.8C10.5167 17.8 11.025 17.7373 11.525 17.612C12.025 17.4873 12.5167 17.3 13 17.05C13.4833 17.3 13.975 17.4873 14.475 17.612C14.975 17.7373 15.4833 17.8 16 17.8C16.5167 17.8 17.025 17.7373 17.525 17.612C18.025 17.4873 18.5167 17.3 19 17.05C19.4833 17.3 19.975 17.4873 20.475 17.612Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9634 8.9999L17.9634 7L18.4634 6H14.9634L12.9634 10H1.96338L2.80314 13.3591C2.84557 13.4137 2.88576 13.4612 2.92307 13.5C3.21987 13.892 4.84615 14 5.50881 13.725C5.6851 13.6417 5.85721 13.554 6.02516 13.462C6.19375 13.3707 6.35016 13.2583 6.49439 13.125C6.6867 12.975 6.89503 12.9 7.11939 12.9C7.34375 12.9 7.55208 12.975 7.74439 13.125C8.0649 13.3917 8.41747 13.604 8.80208 13.762C9.1867 13.9207 9.58734 14 10.004 14C10.4207 14 10.8213 13.9207 11.2059 13.762C11.5905 13.604 11.9431 13.3917 12.2636 13.125C12.4559 12.975 12.6643 12.9 12.8886 12.9C13.113 12.9 13.3213 12.975 13.5136 13.125C13.8341 13.3917 14.1867 13.604 14.5713 13.762C14.9559 13.9207 15.3566 14 15.7732 14C16.1899 14 16.5905 13.9207 16.9752 13.762C17.3598 13.604 17.7123 13.3917 18.0329 13.125C18.2252 12.975 18.4335 12.9 18.6579 12.9C18.8822 12.9 19.0905 12.975 19.2829 13.125C19.2969 13.138 19.3111 13.1508 19.3254 13.1634C19.5624 12.8067 19.8914 12.3982 20.2369 11.9694C21.0542 10.9546 21.9634 9.82577 21.9634 9L18.9634 8.9999Z" style="fill: var(--element-active-color)"/>
<path d="M20.475 17.612C20.975 17.7373 21.4833 17.8 22 17.8C22.2833 17.8 22.5207 17.704 22.712 17.512C22.904 17.3207 23 17.0833 23 16.8C23 16.5167 22.904 16.2793 22.712 16.088C22.5207 15.896 22.2833 15.8 22 15.8C21.5667 15.8 21.1373 15.7457 20.712 15.637C20.2873 15.529 19.8833 15.3583 19.5 15.125C19.35 15.0417 19.1833 15 19 15C18.8167 15 18.65 15.0417 18.5 15.125C18.1167 15.3583 17.7123 15.529 17.287 15.637C16.8623 15.7457 16.4333 15.8 16 15.8C15.5667 15.8 15.1373 15.7457 14.712 15.637C14.2873 15.529 13.8833 15.3583 13.5 15.125C13.35 15.0417 13.179 15 12.987 15C12.7957 15 12.6333 15.0417 12.5 15.125C12.1167 15.3583 11.7123 15.529 11.287 15.637C10.8623 15.7457 10.4333 15.8 10 15.8C9.56667 15.8 9.13733 15.7457 8.712 15.637C8.28733 15.529 7.88333 15.3583 7.5 15.125C7.36667 15.0417 7.2 15 7 15C6.8 15 6.63333 15.0417 6.5 15.125C6.11667 15.3583 5.71267 15.529 5.288 15.637C4.86267 15.7457 4.43333 15.8 4 15.8C3.71667 15.8 3.47933 15.896 3.288 16.088C3.096 16.2793 3 16.5167 3 16.8C3 17.0833 3.096 17.3207 3.288 17.512C3.47933 17.704 3.71667 17.8 4 17.8C4.51667 17.8 5.025 17.7373 5.525 17.612C6.025 17.4873 6.51667 17.3 7 17.05C7.48333 17.3 7.975 17.4873 8.475 17.612C8.975 17.7373 9.48333 17.8 10 17.8C10.5167 17.8 11.025 17.7373 11.525 17.612C12.025 17.4873 12.5167 17.3 13 17.05C13.4833 17.3 13.975 17.4873 14.475 17.612C14.975 17.7373 15.4833 17.8 16 17.8C16.5167 17.8 17.025 17.7373 17.525 17.612C18.025 17.4873 18.5167 17.3 19 17.05C19.4833 17.3 19.975 17.4873 20.475 17.612Z" style="fill: var(--element-active-color)"/>
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
    'obi-17-ship-offshore': Obi17ShipOffshore;
  }
}