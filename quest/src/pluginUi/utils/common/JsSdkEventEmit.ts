import EventEmitter from "eventemitter3";

export const PluginEventName = {
  plugin_env_imageIdsrefresh: "plugin_env_imageIdsrefresh",
};

class JsPluginUIEventEmit {
  remoteHttpEmitter: EventEmitter;
  constructor() {
    this.remoteHttpEmitter = new EventEmitter();
  }

  addEventListener = (
    eventName: string,
    callBack: (event: any) => void
  ): { (): void } => {
    this.remoteHttpEmitter.addListener(eventName, callBack);
    return () => {
      this.remoteHttpEmitter.removeListener(eventName, callBack);
    };
  };

  emitEvent = (eventName: string, eventData: any) => {
    this.remoteHttpEmitter.emit(eventName, eventData);
  };

  removeAllListener = () => {
    this.remoteHttpEmitter.removeAllListeners();
  };
}

export default JsPluginUIEventEmit;

export const JsPluginUIEventEmitInstance = new JsPluginUIEventEmit();
