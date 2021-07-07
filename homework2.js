const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('hour', hour => {
  let timerId = setInterval(() => {
    console.log(hour + ' hour');
    hour = hour - 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(timerId);
    console.log('hour stop');
  }, hour * 1000);
});

emitter.on('day', hour => {
  let timerId = setInterval(() => {
    console.log(hour + ' day');
    hour = hour - 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(timerId);
    console.log('day stop');
  }, hour * 1000);
});
emitter.on('month', hour => {
  let timerId = setInterval(() => {
    console.log(hour + ' month');
    hour = hour - 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(timerId);
    console.log('month stop');
  }, hour * 1000);
});
emitter.on('year', hour => {
  let timerId = setInterval(() => {
    console.log(hour + ' year');
    hour = hour - 1;
  }, 1000);
  setTimeout(() => {
    clearInterval(timerId);
    console.log('year stop');
  }, hour * 1000);
});

emitter.emit('hour', process.argv[2]);
emitter.emit('day', process.argv[3]);
emitter.emit('month', process.argv[4]);
emitter.emit('year', process.argv[5]);
