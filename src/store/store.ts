export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initalState = {}) {
    this.state = initalState;
  }

  get value() {
    return this.state;
  }
}
