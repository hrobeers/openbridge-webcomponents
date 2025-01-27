import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-radar-target-acquisition-state-iec')
export class ObiRadarTargetAcquisitionStateIec extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1779 5.76285C14.5234 5.42937 13.8205 5.20099 13.095 5.08608L13.2515 4.09839C14.0806 4.22971 14.8839 4.49073 15.6319 4.87184L15.1779 5.76285ZM10.9049 5.08616C10.1794 5.20107 9.47653 5.42946 8.82204 5.76294L8.36805 4.87193C9.11604 4.49081 9.91935 4.2298 10.7485 4.09847L10.9049 5.08616ZM7.05015 7.05026C6.53074 7.56966 6.09633 8.16758 5.76285 8.82207L4.87184 8.36808C5.25296 7.62009 5.74943 6.93675 6.34304 6.34315L7.05015 7.05026ZM18.2369 8.82207C17.9035 8.16758 17.469 7.56966 16.9496 7.05026L17.6567 6.34315C18.2504 6.93675 18.7468 7.62009 19.1279 8.36808L18.2369 8.82207ZM5.08618 10.9049C4.97127 11.6304 4.97127 12.3694 5.08618 13.0949L4.09849 13.2514C3.96717 12.4222 3.96717 11.5776 4.09849 10.7484L5.08618 10.9049ZM18.9137 13.0951C19.0286 12.3696 19.0286 11.6306 18.9137 10.905L19.9014 10.7486C20.0327 11.5778 20.0327 12.4224 19.9014 13.2516L18.9137 13.0951ZM5.76283 15.1778C6.09631 15.8323 6.53072 16.4302 7.05013 16.9496L6.34302 17.6568C5.74942 17.0632 5.25294 16.3798 4.87182 15.6318L5.76283 15.1778ZM16.9496 16.9497C17.469 16.4302 17.9034 15.8323 18.2369 15.1778L19.1279 15.6318C18.7468 16.3798 18.2503 17.0632 17.6567 17.6568L16.9496 16.9497ZM8.82197 18.2369C9.47645 18.5704 10.1794 18.7988 10.9049 18.9137L10.7484 19.9014C9.91927 19.7701 9.11596 19.5091 8.36797 19.1279L8.82197 18.2369ZM13.0949 18.9138C13.8204 18.7989 14.5233 18.5705 15.1778 18.237L15.6318 19.1281C14.8838 19.5092 14.0805 19.7702 13.2514 19.9015L13.0949 18.9138Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1779 5.76285C14.5234 5.42937 13.8205 5.20099 13.095 5.08608L13.2515 4.09839C14.0806 4.22971 14.8839 4.49073 15.6319 4.87184L15.1779 5.76285ZM10.9049 5.08616C10.1794 5.20107 9.47653 5.42946 8.82204 5.76294L8.36805 4.87193C9.11604 4.49081 9.91935 4.2298 10.7485 4.09847L10.9049 5.08616ZM7.05015 7.05026C6.53074 7.56966 6.09633 8.16758 5.76285 8.82207L4.87184 8.36808C5.25296 7.62009 5.74943 6.93675 6.34304 6.34315L7.05015 7.05026ZM18.2369 8.82207C17.9035 8.16758 17.469 7.56966 16.9496 7.05026L17.6567 6.34315C18.2504 6.93675 18.7468 7.62009 19.1279 8.36808L18.2369 8.82207ZM5.08618 10.9049C4.97127 11.6304 4.97127 12.3694 5.08618 13.0949L4.09849 13.2514C3.96717 12.4222 3.96717 11.5776 4.09849 10.7484L5.08618 10.9049ZM18.9137 13.0951C19.0286 12.3696 19.0286 11.6306 18.9137 10.905L19.9014 10.7486C20.0327 11.5778 20.0327 12.4224 19.9014 13.2516L18.9137 13.0951ZM5.76283 15.1778C6.09631 15.8323 6.53072 16.4302 7.05013 16.9496L6.34302 17.6568C5.74942 17.0632 5.25294 16.3798 4.87182 15.6318L5.76283 15.1778ZM16.9496 16.9497C17.469 16.4302 17.9034 15.8323 18.2369 15.1778L19.1279 15.6318C18.7468 16.3798 18.2503 17.0632 17.6567 17.6568L16.9496 16.9497ZM8.82197 18.2369C9.47645 18.5704 10.1794 18.7988 10.9049 18.9137L10.7484 19.9014C9.91927 19.7701 9.11596 19.5091 8.36797 19.1279L8.82197 18.2369ZM13.0949 18.9138C13.8204 18.7989 14.5233 18.5705 15.1778 18.237L15.6318 19.1281C14.8838 19.5092 14.0805 19.7702 13.2514 19.9015L13.0949 18.9138Z" style="fill: var(--element-active-color)"/>
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
    'obi-radar-target-acquisition-state-iec': ObiRadarTargetAcquisitionStateIec;
  }
}
