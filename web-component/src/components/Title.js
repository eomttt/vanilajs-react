import Component from "../core/Component.js";
import Button from "./Button.js";

class Title extends Component {
  mounted() {
    const addButton = this.target.querySelector("[data-component=addButton]");
    const removeButton = this.target.querySelector("[data-component=removeButton]" );

    new Button(addButton, {
      className: 'addBtn',
      onClick: this.props.addItem.bind(this),
      title: '추가',
    });
    new Button(removeButton, {
      className: 'removeBtn',
      onClick: this.props.removeItem.bind(this),
      title: '삭제',
    });
  }

  template() {
    return `
      <h1>${this.props.title}</h1>
      <div data-component="addButton"></div>
      <div data-component="removeButton"></div>
    `
  }
}

export default Title;