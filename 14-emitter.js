const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', () => {
  console.log(`data recieved `);
});
customEmitter.on('response', (name, sex) => {
  console.log(`some other data recieved ${name} ${sex}`);
});

customEmitter.emit('response', 'john', 69);
