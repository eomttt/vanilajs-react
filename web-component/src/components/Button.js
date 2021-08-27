import Component from "../core/Component.js";

class Button extends Component {
  template() {
    return `
      <button class="${this.props.className}">${this.props.title}</button>
    `
  }

  setEvent() {
    this.addEvent('click', `.${this.props.className}`, () => {
      this.props.onClick();
    });
  }
}

export default Button;