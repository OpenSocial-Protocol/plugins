// @ts-nocheck
type IEvent = {
  [key: string]: any;
}
//  发布订阅
class PubSub {

  static instance: PubSub | null;
  public instance: PubSub | null;
  public events: IEvent = {};
  private eventPublish;

  constructor() {
    this.instance = null;
    this.events = {};
  }


  publish(event, ...args) {
    if (!Array.isArray(event)) return this.#eventPublish(event, args);
    event.forEach((eventName) => this.eventPublish(eventName, args));
  }

  // @ts-ignore
  #eventPublish(event, args) {
    this.events[event]?.forEach((cb) => cb?.(...args));
  }

  subscribe(event, cb) {
    if (!cb || typeof cb !== 'function') {
      console.error('subscribe 方法第二个参数必须是一个 function');
      return;
    }
    if (!Array.isArray(event)) return this.#eventSubscribe(event, cb);
    event.forEach((eventName) => {
      this.#eventSubscribe(eventName, cb);
    });
  }

  #eventSubscribe(event, cb) {
    if (this.events[event]) {
      this.events[event].push(cb);
    } else {
      this.events[event] = [cb];
    }
  }

  unSubscribe(event, callback) {
    if (!Array.isArray(event)) return this.#eventUnSubscribe(event, callback);
    event.forEach((eventName) => {
      this.#eventUnSubscribe(eventName, callback);
    });
  }

  // @ts-ignore
  #eventUnSubscribe(event, callback) {
    this.events[event] = this.events[event].filter((cb) => cb !== callback);
  }

  static getInstance() {
    // static getInstance(event) {
    if (!this.instance) {
      this.instance = new PubSub();
    }
    return this.instance;
  }
}

export default PubSub.getInstance();
