import {LitElement, unsafeCSS, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import componentStyle from './brilliance-menu.css?inline';
import '../icon-button/icon-button';
import '../slider/slider';
import '../toggle-switch/toggle-switch';
import '../toggle-button-group/toggle-button-group';
import '../toggle-button-option/toggle-button-option';

@customElement('obc-brilliance-menu')
export class BrillianceMenu extends LitElement {
  onBrilianceChanged(event: CustomEvent) {
    this.dispatchEvent(
      new CustomEvent('brilliance-changed', {
        detail: {value: event.detail.value},
      })
    );
  }

  render() {
    return html`
      <div class="card">
        <h3>Brilliance</h3>
        <obc-slider
          iconLeft="04-brilliance-low"
          iconRight="04-brilliance-high"
        ></obc-slider>
        <obc-toggle-switch label="Auto brilliance"></obc-toggle-switch>
        <div class="divider"></div>
        <h3>Day - Night</h3>
        <obc-toggle-button-group value="day" @value=${this.onBrilianceChanged}>
          <obc-toggle-button-option
            icon="04-night"
            value="night"
          ></obc-toggle-button-option>
          <obc-toggle-button-option
            icon="04-dusk"
            value="dusk"
          ></obc-toggle-button-option>
          <obc-toggle-button-option
            icon="04-day"
            value="day"
          ></obc-toggle-button-option>
          <obc-toggle-button-option
            icon="04-day-bright"
            value="bright"
          ></obc-toggle-button-option>
        </obc-toggle-button-group>
        <obc-toggle-switch label="Auto day - night" checked></obc-toggle-switch>
      </div>
    `;
  }

  static styles = unsafeCSS(componentStyle);
}

declare global {
  interface HTMLElementTagNameMap {
    'obc-brilliance-menu': BrillianceMenu;
  }
}
