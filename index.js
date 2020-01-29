// Include it and extract some methods for convenience
const server = require('server');
const { get, post } = server.router;

const { header, json } = server.reply;  // OR server.reply;

const cors = [
    ctx => header("Access-Control-Allow-Origin", "*"),
    ctx => header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
    ctx => header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, HEAD"),
    ctx => ctx.method.toLowerCase() === 'options' ? 200 : false
];

// Launch server with options and a couple of routes
server({ port: 3001 }, cors, [
    get('/', ctx => `[
    {
            "id": 1,
            "name": "Mohan",
            "age": 23
        }, {
            "id": 2,
            "name": "Kumar s",
            "age": 34
        }, {
            "id": 3,
            "name": "Anitha V",
            "age": 31
        }
]`),
    post('/', ctx => {
        console.log(ctx.data);
        return 'ok';
    })
]);

// server([
//     get('/', ctx => render('mockData/contactList.json')),
//     post('/', ctx => json(ctx.data)),
//     get(ctx => status(404))
// ]);