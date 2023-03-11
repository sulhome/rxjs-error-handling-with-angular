const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data.json');
const users = require('./data.json');


server.get('/users', (req, res, next) => {
  return res.status(200).send(users);
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

