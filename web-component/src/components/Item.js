import Component from "../core/Component.js";

class Item extends Component {
  template() {
    return `
      <div>
        <p>
          ${this.props.item}
        </p>
        <button class=button${this.props.item}>삭제</button>
      </div>
    `
  }

  setEvent() {
    this.addEvent('click', `.button${this.props.item}`, (e) => {
      this.props.removeItem(this.props.item);
    });
  }
}

export default Item;