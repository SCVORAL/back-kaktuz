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

server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))