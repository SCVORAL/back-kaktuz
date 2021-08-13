const Fastify = require('fastify')
const server = Fastify({ logger: true })

const PORT = process.env.PORT || 8080

server.register(require('fastify-http-proxy'), {
  upstream: 'https://api.kaktuz5.online',
  prefix: '/',
  rewritePrefix: '/v3/'
})

server.register(require('fastify-cors'), {
  origin: '*',
  methods: ['GET', 'HEAD', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
})

server.listen("127.0.0.1", function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})