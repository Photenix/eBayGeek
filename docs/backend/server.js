const jsonServer = require('json-server')

const server = jsonServer.create()

const route = jsonServer.router('./data/shopping.json')


const middlewared = jsonServer.defaults()

const port = process.env.PORT  || 4040

server.use(middlewared)
server.use(route)
server.listen(port, () => console.log('Online server'))