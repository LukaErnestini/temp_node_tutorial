const { createReadStream } = require('fs');
const { urlToHttpOptions } = require('url');

const stream = createReadStream('./content/first.txt', {
  highWaterMark: 90000,
  encoding: 'utf-8',
});

stream.on('data', (result) => {
  console.log(result);
});
