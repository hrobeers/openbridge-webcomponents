import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-12-roll')
export class Obi12Roll extends LitElement {
  @property({type: Boolean, attribute: 'use-css-color'}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12.001 20.4236C13.1129 20.4236 14.2247 19.5914 15.2006 18.9345C16.1765 19.5914 17.2884 20.4545 18.4002 20.4545H20V22H18.4002C17.2964 22 16.2085 21.2373 15.2006 20.735C14.1927 21.2373 13.0969 21.9845 12.001 21.9845C10.9051 21.9845 9.80926 21.2295 8.80138 20.735C7.7935 21.2295 6.70563 22 5.60176 22H4.00195V20.4545H5.60176C6.71363 20.4545 7.8255 19.5914 8.80138 18.9345C9.77726 19.5914 10.8891 20.4236 12.001 20.4236Z" fill="currentColor"/>
<path d="M22.242 2.48697L20.8194 3.90952C17.4258 1.34969 10.2481 -0.992957 4.00399 3.66276L2.82771 2.48649L2.12061 7.43623L7.07035 6.72913L5.43563 5.0944C10.5424 1.47282 16.4194 3.22081 19.3893 5.33959L17.9993 6.72961L22.9491 7.43672L22.242 2.48697Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4007 6H9.60124V8.31818H7.20152C6.32163 8.31818 5.60171 9.01364 5.60171 9.86364V13.4336L4.56984 13.7582C4.36186 13.82 4.18588 13.9591 4.0899 14.1445C3.99391 14.33 3.96991 14.5464 4.0419 14.7473L5.06172 18.9091H6.70157L5.77763 15.0023L7.6974 14.3918L12.0009 13.0395L16.3044 14.4073L18.2161 15.01L17.3004 18.9091H18.9002H18.9402L19.952 14.7473C20.016 14.5464 20 14.33 19.904 14.1445C19.808 13.9591 19.632 13.82 19.4241 13.7582L18.4002 13.4336V9.86364C18.4002 9.01364 17.6803 8.31818 16.8004 8.31818H14.4007V6ZM12.8009 7.54545V8.31818H11.2011V7.54545H12.8009ZM7.20157 12.9314V9.86364H16.8004V12.9314L12.001 11.4091L7.20157 12.9314Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.001 20.4236C13.1129 20.4236 14.2247 19.5914 15.2006 18.9345C16.1765 19.5914 17.2884 20.4545 18.4002 20.4545H20V22H18.4002C17.2964 22 16.2085 21.2373 15.2006 20.735C14.1927 21.2373 13.0969 21.9845 12.001 21.9845C10.9051 21.9845 9.80926 21.2295 8.80138 20.735C7.7935 21.2295 6.70563 22 5.60176 22H4.00195V20.4545H5.60176C6.71363 20.4545 7.8255 19.5914 8.80138 18.9345C9.77726 19.5914 10.8891 20.4236 12.001 20.4236Z" style="fill: var(--element-active-color)"/>
<path d="M22.242 2.48697L20.8194 3.90952C17.4258 1.34969 10.2481 -0.992957 4.00399 3.66276L2.82771 2.48649L2.12061 7.43623L7.07035 6.72913L5.43563 5.0944C10.5424 1.47282 16.4194 3.22081 19.3893 5.33959L17.9993 6.72961L22.9491 7.43672L22.242 2.48697Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4007 6H9.60124V8.31818H7.20152C6.32163 8.31818 5.60171 9.01364 5.60171 9.86364V13.4336L4.56984 13.7582C4.36186 13.82 4.18588 13.9591 4.0899 14.1445C3.99391 14.33 3.96991 14.5464 4.0419 14.7473L5.06172 18.9091H6.70157L5.77763 15.0023L7.6974 14.3918L12.0009 13.0395L16.3044 14.4073L18.2161 15.01L17.3004 18.9091H18.9002H18.9402L19.952 14.7473C20.016 14.5464 20 14.33 19.904 14.1445C19.808 13.9591 19.632 13.82 19.4241 13.7582L18.4002 13.4336V9.86364C18.4002 9.01364 17.6803 8.31818 16.8004 8.31818H14.4007V6ZM12.8009 7.54545V8.31818H11.2011V7.54545H12.8009ZM7.20157 12.9314V9.86364H16.8004V12.9314L12.001 11.4091L7.20157 12.9314Z" style="fill: var(--element-active-color)"/>
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
    'obi-12-roll': Obi12Roll;
  }
}