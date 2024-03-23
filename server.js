/* eslint-disable no-unused-vars */
const app = require('./src/app');

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening port: ${port}, link -> http://localhost:${port}/welcome`);
});
