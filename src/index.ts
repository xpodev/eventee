import { EventEmitter } from 'events';

EventEmitter.prototype.emit = function (
  eventName: string | symbol,
  ...args: any[]
): boolean {
  const listeners = this.listeners(eventName);
  for (let i = 0; i < listeners.length; i++) {
    const result = listeners[i](...args);
    if (result === false) {
      break;
    }
  }
  return listeners.length > 0;
};

export { EventEmitter };