import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-cursor-pointing-hand-icon')
export class ObiCursorPointingHandIcon extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25137 4C7.25137 2.75736 8.25873 1.75 9.50137 1.75C10.744 1.75 11.7514 2.75736 11.7514 4V6.87803C11.986 6.79512 12.2384 6.75 12.5014 6.75C13.3771 6.75 14.136 7.25032 14.5078 7.98071C14.8074 7.83299 15.1447 7.75 15.5014 7.75C16.2815 7.75 16.9689 8.14701 17.3725 8.75H18.0014C19.5121 8.75 20.7708 9.97791 20.7322 11.5188C20.6725 13.8991 20.433 16.3278 19.3449 18.1664C18.7892 19.1054 18.014 19.8891 16.9497 20.4312C15.8924 20.9697 14.5894 21.25 13.0014 21.25C9.6983 21.25 7.51668 20.3502 5.95807 18.5403C4.45789 16.7983 3.6121 14.2875 2.74028 11.3052C2.36628 10.0258 3.07699 8.6841 4.33589 8.26395C5.44794 7.89281 6.65845 8.35139 7.25137 9.34355V4ZM17.7514 10.25V11C17.7514 11.4142 17.4156 11.75 17.0014 11.75C16.5872 11.75 16.2514 11.4142 16.2514 11V10C16.2514 9.58579 15.9156 9.25 15.5014 9.25C15.0872 9.25 14.7514 9.58579 14.7514 10V10.5C14.7514 10.9142 14.4156 11.25 14.0014 11.25C13.5872 11.25 13.2514 10.9142 13.2514 10.5V9C13.2514 8.58579 12.9156 8.25 12.5014 8.25C12.0872 8.25 11.7514 8.58579 11.7514 9V10.5C11.7514 10.9142 11.4156 11.25 11.0014 11.25C10.5872 11.25 10.2514 10.9142 10.2514 10.5V4C10.2514 3.58579 9.91558 3.25 9.50137 3.25C9.08715 3.25 8.75137 3.58579 8.75137 4V12.5C8.75137 12.8477 8.51235 13.1499 8.17395 13.2299C7.83555 13.3099 7.48653 13.1468 7.33079 12.8359L5.99965 10.1785C5.78083 9.74166 5.27419 9.53213 4.81076 9.6868C4.31133 9.85348 4.03391 10.3845 4.18002 10.8843C5.06492 13.9114 5.83887 16.1032 7.09469 17.5615C8.29208 18.9519 10.0027 19.75 13.0014 19.75C14.4164 19.75 15.4727 19.5001 16.2689 19.0946C17.0579 18.6927 17.6302 18.1185 18.0541 17.4024C18.9251 15.9306 19.173 13.8592 19.2327 11.4812C19.2494 10.8137 18.6998 10.25 18.0014 10.25H17.7514Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7509 10.2498V10.9998C17.7509 11.414 17.4151 11.7498 17.0009 11.7498C16.5867 11.7498 16.2509 11.414 16.2509 10.9998V9.99976C16.2509 9.58554 15.9151 9.24976 15.5009 9.24976C15.0867 9.24976 14.7509 9.58554 14.7509 9.99976V10.4998C14.7509 10.914 14.4151 11.2498 14.0009 11.2498C13.5867 11.2498 13.2509 10.914 13.2509 10.4998V8.99976C13.2509 8.58554 12.9151 8.24976 12.5009 8.24976C12.0867 8.24976 11.7509 8.58554 11.7509 8.99976V10.4998C11.7509 10.914 11.4151 11.2498 11.0009 11.2498C10.5867 11.2498 10.2509 10.914 10.2509 10.4998V3.99976C10.2509 3.58554 9.91509 3.24976 9.50088 3.24976C9.08667 3.24976 8.75088 3.58554 8.75088 3.99976V12.4998C8.75088 12.8475 8.51186 13.1496 8.17346 13.2296C7.83506 13.3096 7.48604 13.1466 7.33031 12.8357L5.99916 10.1782C5.78035 9.74142 5.2737 9.53189 4.81027 9.68655C4.31084 9.85323 4.03342 10.3842 4.17953 10.8841C5.06443 13.9111 5.83838 16.103 7.0942 17.5612C8.29159 18.9517 10.0022 19.7498 13.0009 19.7498C14.416 19.7498 15.4722 19.4999 16.2684 19.0943C17.0574 18.6925 17.6298 18.1183 18.0536 17.4022C18.9246 15.9303 19.1726 13.859 19.2322 11.481C19.2489 10.8134 18.6993 10.2498 18.0009 10.2498H17.7509Z" fill="currentColor"/>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25137 4C7.25137 2.75736 8.25873 1.75 9.50137 1.75C10.744 1.75 11.7514 2.75736 11.7514 4V6.87803C11.986 6.79512 12.2384 6.75 12.5014 6.75C13.3771 6.75 14.136 7.25032 14.5078 7.98071C14.8074 7.83299 15.1447 7.75 15.5014 7.75C16.2815 7.75 16.9689 8.14701 17.3725 8.75H18.0014C19.5121 8.75 20.7708 9.97791 20.7322 11.5188C20.6725 13.8991 20.433 16.3278 19.3449 18.1664C18.7892 19.1054 18.014 19.8891 16.9497 20.4312C15.8924 20.9697 14.5894 21.25 13.0014 21.25C9.6983 21.25 7.51668 20.3502 5.95807 18.5403C4.45789 16.7983 3.6121 14.2875 2.74028 11.3052C2.36628 10.0258 3.07699 8.6841 4.33589 8.26395C5.44794 7.89281 6.65845 8.35139 7.25137 9.34355V4ZM17.7514 10.25V11C17.7514 11.4142 17.4156 11.75 17.0014 11.75C16.5872 11.75 16.2514 11.4142 16.2514 11V10C16.2514 9.58579 15.9156 9.25 15.5014 9.25C15.0872 9.25 14.7514 9.58579 14.7514 10V10.5C14.7514 10.9142 14.4156 11.25 14.0014 11.25C13.5872 11.25 13.2514 10.9142 13.2514 10.5V9C13.2514 8.58579 12.9156 8.25 12.5014 8.25C12.0872 8.25 11.7514 8.58579 11.7514 9V10.5C11.7514 10.9142 11.4156 11.25 11.0014 11.25C10.5872 11.25 10.2514 10.9142 10.2514 10.5V4C10.2514 3.58579 9.91558 3.25 9.50137 3.25C9.08715 3.25 8.75137 3.58579 8.75137 4V12.5C8.75137 12.8477 8.51235 13.1499 8.17395 13.2299C7.83555 13.3099 7.48653 13.1468 7.33079 12.8359L5.99965 10.1785C5.78083 9.74166 5.27419 9.53213 4.81076 9.6868C4.31133 9.85348 4.03391 10.3845 4.18002 10.8843C5.06492 13.9114 5.83887 16.1032 7.09469 17.5615C8.29208 18.9519 10.0027 19.75 13.0014 19.75C14.4164 19.75 15.4727 19.5001 16.2689 19.0946C17.0579 18.6927 17.6302 18.1185 18.0541 17.4024C18.9251 15.9306 19.173 13.8592 19.2327 11.4812C19.2494 10.8137 18.6998 10.25 18.0014 10.25H17.7514Z" style="fill: var(--element-active-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7509 10.2498V10.9998C17.7509 11.414 17.4151 11.7498 17.0009 11.7498C16.5867 11.7498 16.2509 11.414 16.2509 10.9998V9.99976C16.2509 9.58554 15.9151 9.24976 15.5009 9.24976C15.0867 9.24976 14.7509 9.58554 14.7509 9.99976V10.4998C14.7509 10.914 14.4151 11.2498 14.0009 11.2498C13.5867 11.2498 13.2509 10.914 13.2509 10.4998V8.99976C13.2509 8.58554 12.9151 8.24976 12.5009 8.24976C12.0867 8.24976 11.7509 8.58554 11.7509 8.99976V10.4998C11.7509 10.914 11.4151 11.2498 11.0009 11.2498C10.5867 11.2498 10.2509 10.914 10.2509 10.4998V3.99976C10.2509 3.58554 9.91509 3.24976 9.50088 3.24976C9.08667 3.24976 8.75088 3.58554 8.75088 3.99976V12.4998C8.75088 12.8475 8.51186 13.1496 8.17346 13.2296C7.83506 13.3096 7.48604 13.1466 7.33031 12.8357L5.99916 10.1782C5.78035 9.74142 5.2737 9.53189 4.81027 9.68655C4.31084 9.85323 4.03342 10.3842 4.17953 10.8841C5.06443 13.9111 5.83838 16.103 7.0942 17.5612C8.29159 18.9517 10.0022 19.7498 13.0009 19.7498C14.416 19.7498 15.4722 19.4999 16.2684 19.0943C17.0574 18.6925 17.6298 18.1183 18.0536 17.4022C18.9246 15.9303 19.1726 13.859 19.2322 11.481C19.2489 10.8134 18.6993 10.2498 18.0009 10.2498H17.7509Z" style="fill: var(--element-active-inverted-color)"/>
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
    'obi-cursor-pointing-hand-icon': ObiCursorPointingHandIcon;
  }
}
