const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});
const port = process.env.PORT || 4000;
const { users, messages } = require('./db.json');

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);

server.post('/login', (req, res) => {
  const { id, password } = req.body;
  const userInfo = users.find((e) => {
    return e.id === id && e.password === password;
  });
  if (userInfo.length) {
    res.send(userInfo);
  } else {
    res.send();
  }
});

server.use(router);

server.listen(port, () => {
  console.log('server is running');
});
