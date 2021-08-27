import Title from './components/Title.js';
import Items from './components/Items.js';
import Component from './core/Component.js'

class App extends Component {
  setup() {
    this.state = [1, 2, 3];
  }

  mounted() {
    const titleComponent = this.target.querySelector('[data-component="title"]');
    const itemsComponent = this.target.querySelector('[data-component="items"]');

    new Items(itemsComponent, {
      items: this.state,
      removeItem: this.removeItem.bind(this),
    });
    new Title(titleComponent, {
      title: 'My App',
      addItem: this.addItem.bind(this),
      removeItem: this.popItem.bind(this)
    });
  }

  template() {
    return `
      <div data-component="title"></div>
      <div data-component="items"></div>
    `
  }

  addItem() {
    this.setState([...this.state, this.state.length + 1]);
  }

  popItem() {
    this.setState([...this.state.slice(0, -1)]);
  }

  removeItem(itemNumber) {
    this.setState(this.state.filter(item => item !== itemNumber));
  }
}

export default App;