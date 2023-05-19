# Evente

Evente is an extended version of the EventEmitter class from Node.js. It allows you to stop the propagation of events.

## Installation

```bash
npm install evente
```

## Usage
The usage is the same as the EventEmitter class from Node.js. The only difference is that you can stop the propagation of events by returning `false` in the event handler.

```javascript
const { EventEmitter } = require('evente');

const emitter = new EventEmitter();

emitter.on('event', () => {
    console.log('Event 1');
});

emitter.on('event', () => {
    console.log('Event 2');
    return false;
});

emitter.on('event', () => {
    // This event will not be called
    console.log('Event 3');
});

emitter.emit('event');
```

## Future plans
- Add support for event priorities