import Component from "../core/Component.js";
import Item from './Item.js';

class Items extends Component {
  mounted() {
    this.props.items.forEach((item) => {
      const itemComponent = this.target.querySelector(`[data-item='${item}']`);

      new Item(itemComponent, {
        item,
        removeItem: this.props.removeItem.bind(this),
      })
    }, this);
  }

  template() {
    return `
      <ul class="items">
        ${this.props.items.map((item) => `
            <li data-item=${item}>
            </li>
        `)}
      </ul>
    `
  }

  setEvent() {
    this.addEvent('click', '.items', (e) => {
      const itemNumber = e.target.closest('[data-item]').dataset.item;
      this.props.removeItem(Number(itemNumber));
    });
  }
}

export default Items;