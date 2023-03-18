const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data.json');
const cors = require('cors');
const users = require('./data.json');
const port = 3000;

server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());
server.get('/users', (req, res, next) => {
    return res.status(200).send(users);
});

server.get('/users/:id', (req, res, next) => {
    const userId = +req.params.id;
    const errMessage = `user with id ${userId} was not found`;
    if (userId) {
        const user = users.find(user => user.id === userId);
        return user ? res.status(200).send(user) : res.status(404).send({message: errMessage});
    }
    return res.status(404).send({message: errMessage});
});

server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running on port: ${port}`);
});

