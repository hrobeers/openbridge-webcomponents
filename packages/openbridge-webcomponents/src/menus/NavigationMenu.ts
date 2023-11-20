import { LitElement, unsafeCSS, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import compentStyle from "./NavigationMenu.css?inline";

@customElement('ob-navigation-menu')
export class NavigationMenu extends LitElement {

  render() {
    return html`
        <div class="wrapper">
            <nav class="main">
                <ol>
                    <slot name="main"></slot>
                </ol>
            </nav>
            <div class="footer">
                <nav>
                    <ol>
                        <slot name="footer"></slot>
                    </ol>
                </nav>
                <div class="logo">
                    <slot name="logo"></slot>
                </div>
            </div>  
        </div>
    `
  }

  static styles = unsafeCSS(compentStyle);
}

declare global {
  interface HTMLElementTagNameMap {
    'ob-navigation-menu': NavigationMenu
  }
}