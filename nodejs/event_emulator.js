const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// Register an event
eventEmitter.on('greet', () => {
  console.log('Hello! Event triggered!');
});

// Emit the event
eventEmitter.emit('greet');
