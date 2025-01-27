import {LitElement, html, css, svg} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('obi-threeway-acuator-generic-closed')
export class ObiThreewayAcuatorGenericClosed extends LitElement {
  @property({type: Boolean}) useCssColor = false;

  private icon = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2539_1050)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.07799 4.49551C7.08099 4.48526 7.08828 4.46048 7.10116 4.41917C7.11834 4.36406 7.14114 4.29334 7.16704 4.21679C7.22196 4.05448 7.2791 3.90084 7.32056 3.80987C7.56636 3.27039 7.92962 2.77366 8.39471 2.35085C8.85997 1.92789 9.41736 1.58792 10.0372 1.35451C10.6571 1.12109 11.3243 1 12 1C12.6758 1 13.343 1.12109 13.9629 1.35451C14.5827 1.58791 15.1401 1.92789 15.6054 2.35085C16.0704 2.77366 16.4337 3.27038 16.6795 3.80986C16.721 3.90084 16.7781 4.05448 16.833 4.21678C16.8589 4.29334 16.8817 4.36406 16.8989 4.41917C16.9118 4.46048 16.9191 4.48526 16.9221 4.49551L7.07799 4.49551Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5146L3 6.94317V17.0568L8 13.4854V10.5146Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 17.0568L16 13.4854V10.5146L21 6.94321V17.0568Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5146 16L6.94317 21H17.0568L13.4854 16H10.5146Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5895 3.39524C17.2855 2.72796 16.8398 2.12164 16.278 1.61091C15.7162 1.1002 15.0493 0.695066 14.3153 0.418661C13.5813 0.142261 12.7945 0 12 0C11.2055 0 10.4188 0.142263 9.6848 0.418662C8.95077 0.695067 8.28383 1.1002 7.72204 1.61091C7.16023 2.12165 6.7146 2.72797 6.41056 3.39524C6.28385 3.67334 6.12943 4.16781 6.10793 4.25168C6.10051 4.2806 6.08182 4.3735 6.06052 4.50506C5.97222 5.05024 6.41807 5.5 6.97036 5.5L11 5.5V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V5.5L17.0297 5.5C17.582 5.5 18.0278 5.05024 17.9396 4.50506C17.9182 4.3735 17.8996 4.28059 17.8921 4.25167C17.8706 4.16781 17.7162 3.67333 17.5895 3.39524ZM7.07799 4.49551C7.08099 4.48526 7.08828 4.46048 7.10116 4.41917C7.11834 4.36406 7.14114 4.29334 7.16704 4.21679C7.22196 4.05448 7.2791 3.90084 7.32056 3.80987C7.56636 3.27039 7.92962 2.77366 8.39471 2.35085C8.85997 1.92789 9.41736 1.58792 10.0372 1.35451C10.6571 1.12109 11.3243 1 12 1C12.6758 1 13.343 1.12109 13.9629 1.35451C14.5827 1.58791 15.1401 1.92789 15.6054 2.35085C16.0704 2.77366 16.4337 3.27038 16.6795 3.80986C16.721 3.90084 16.7781 4.05448 16.833 4.21678C16.8589 4.29334 16.8817 4.36406 16.8989 4.41917C16.9118 4.46048 16.9191 4.48526 16.9221 4.49551L7.07799 4.49551Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.58124 6.12944C2.91937 5.65667 2 6.1298 2 6.94317V17.0568C2 17.8702 2.91937 18.3433 3.58124 17.8705L8.58124 14.2991C8.84403 14.1114 9 13.8083 9 13.4854V10.5146C9 10.1916 8.84403 9.88858 8.58124 9.70086L3.58124 6.12944ZM8 10.5146L3 6.94317V17.0568L8 13.4854V10.5146Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4188 17.8706C21.0806 18.3433 22 17.8702 22 17.0568V6.94321C22 6.12984 21.0806 5.65671 20.4188 6.12948L15.4188 9.7009C15.156 9.88862 15 10.1917 15 10.5146V13.4854C15 13.8084 15.156 14.1114 15.4188 14.2991L20.4188 17.8706ZM21 17.0568L16 13.4854V10.5146L21 6.94321V17.0568Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.12944 20.4188C5.65667 21.0806 6.1298 22 6.94317 22H17.0568C17.8702 22 18.3433 21.0806 17.8705 20.4188L14.2991 15.4188C14.1114 15.156 13.8083 15 13.4854 15H10.5146C10.1916 15 9.88858 15.156 9.70086 15.4188L6.12944 20.4188ZM10.5146 16L6.94317 21H17.0568L13.4854 16H10.5146Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2539_1050">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
</svg>
`;

  private iconCss = svg`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2539_1050)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.07799 4.49551C7.08099 4.48526 7.08828 4.46048 7.10116 4.41917C7.11834 4.36406 7.14114 4.29334 7.16704 4.21679C7.22196 4.05448 7.2791 3.90084 7.32056 3.80987C7.56636 3.27039 7.92962 2.77366 8.39471 2.35085C8.85997 1.92789 9.41736 1.58792 10.0372 1.35451C10.6571 1.12109 11.3243 1 12 1C12.6758 1 13.343 1.12109 13.9629 1.35451C14.5827 1.58791 15.1401 1.92789 15.6054 2.35085C16.0704 2.77366 16.4337 3.27038 16.6795 3.80986C16.721 3.90084 16.7781 4.05448 16.833 4.21678C16.8589 4.29334 16.8817 4.36406 16.8989 4.41917C16.9118 4.46048 16.9191 4.48526 16.9221 4.49551L7.07799 4.49551Z" style="fill: var(--automation-device-primary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.5146L3 6.94317V17.0568L8 13.4854V10.5146Z" style="fill: var(--automation-device-primary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 17.0568L16 13.4854V10.5146L21 6.94321V17.0568Z" style="fill: var(--automation-device-primary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5146 16L6.94317 21H17.0568L13.4854 16H10.5146Z" style="fill: var(--automation-device-primary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5895 3.39524C17.2855 2.72796 16.8398 2.12164 16.278 1.61091C15.7162 1.1002 15.0493 0.695066 14.3153 0.418661C13.5813 0.142261 12.7945 0 12 0C11.2055 0 10.4188 0.142263 9.6848 0.418662C8.95077 0.695067 8.28383 1.1002 7.72204 1.61091C7.16023 2.12165 6.7146 2.72797 6.41056 3.39524C6.28385 3.67334 6.12943 4.16781 6.10793 4.25168C6.10051 4.2806 6.08182 4.3735 6.06052 4.50506C5.97222 5.05024 6.41807 5.5 6.97036 5.5L11 5.5V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12V5.5L17.0297 5.5C17.582 5.5 18.0278 5.05024 17.9396 4.50506C17.9182 4.3735 17.8996 4.28059 17.8921 4.25167C17.8706 4.16781 17.7162 3.67333 17.5895 3.39524ZM7.07799 4.49551C7.08099 4.48526 7.08828 4.46048 7.10116 4.41917C7.11834 4.36406 7.14114 4.29334 7.16704 4.21679C7.22196 4.05448 7.2791 3.90084 7.32056 3.80987C7.56636 3.27039 7.92962 2.77366 8.39471 2.35085C8.85997 1.92789 9.41736 1.58792 10.0372 1.35451C10.6571 1.12109 11.3243 1 12 1C12.6758 1 13.343 1.12109 13.9629 1.35451C14.5827 1.58791 15.1401 1.92789 15.6054 2.35085C16.0704 2.77366 16.4337 3.27038 16.6795 3.80986C16.721 3.90084 16.7781 4.05448 16.833 4.21678C16.8589 4.29334 16.8817 4.36406 16.8989 4.41917C16.9118 4.46048 16.9191 4.48526 16.9221 4.49551L7.07799 4.49551Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.58124 6.12944C2.91937 5.65667 2 6.1298 2 6.94317V17.0568C2 17.8702 2.91937 18.3433 3.58124 17.8705L8.58124 14.2991C8.84403 14.1114 9 13.8083 9 13.4854V10.5146C9 10.1916 8.84403 9.88858 8.58124 9.70086L3.58124 6.12944ZM8 10.5146L3 6.94317V17.0568L8 13.4854V10.5146Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.4188 17.8706C21.0806 18.3433 22 17.8702 22 17.0568V6.94321C22 6.12984 21.0806 5.65671 20.4188 6.12948L15.4188 9.7009C15.156 9.88862 15 10.1917 15 10.5146V13.4854C15 13.8084 15.156 14.1114 15.4188 14.2991L20.4188 17.8706ZM21 17.0568L16 13.4854V10.5146L21 6.94321V17.0568Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.12944 20.4188C5.65667 21.0806 6.1298 22 6.94317 22H17.0568C17.8702 22 18.3433 21.0806 17.8705 20.4188L14.2991 15.4188C14.1114 15.156 13.8083 15 13.4854 15H10.5146C10.1916 15 9.88858 15.156 9.70086 15.4188L6.12944 20.4188ZM10.5146 16L6.94317 21H17.0568L13.4854 16H10.5146Z" style="fill: var(--automation-device-tertiary-inverted-color)"/>
</g>
<defs>
<clipPath id="clip0_2539_1050">
<rect width="24" height="24" fill="none"/>
</clipPath>
</defs>
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
    'obi-threeway-acuator-generic-closed': ObiThreewayAcuatorGenericClosed;
  }
}
