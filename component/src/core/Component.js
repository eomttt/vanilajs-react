class Component {
  target;
  props;
  state;

  constructor(target, props) {
    this.target = target;
    this.props = props;
    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {};
  mounted() {};
  template() { return '' };
  render () {
    this.target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  setState(newState) {
    this.state = newState;
    this.render();
  }
  addEvent(eventType, selector, callback) {
    const children = [...this.target.querySelectorAll(selector)];
    // selector에 명시한 것 보다 더 하위 요소가 선택되는 경우가 있을 땐
    // closest를 이용하여 처리한다.
    const isTarget = (target) => children.includes(target) || target.closest(selector);

    this.target.addEventListener(eventType, (e) => {
      if (!isTarget(e.target)) {
        return false;
      }
      callback(e);
    });
  }
}

export default Component;
