import { fastify } from 'fastify'
import {DatabaseMemory} from "./database-memory.js"

const server = fastify()
const database = new DatabaseMemory()

server.get('/', () => {
    return 'Olá Mundo'
})

server.post('/tenis', (request, reply) => {
    //const body = request.body//
   //console.log(body)//
   const {modelo, marca, pares } = request.body
    database.create({
        modelo: modelo,
        marca: marca,
        pares: pares
    })
    //console.log(database.list())
    return reply.status(201).send()
})

server.get('/tenis', (request) => {
    const search = request.query.search

    const tenis = database.list(search)

    return tenis
})

server.put('tenis/:id', (request, reply) => {

    const tenisId = request.params.id
    const {modelo, marca, pares} = request.body
    const livro = database.update(tenisId, {
        modelo,
        marca,
        pares,
    })
    return reply.status(204).send()
})

server.delete('/tenis/:id', (request, reply) => {
    const livroId = request.params.id

    database.delete(tenisId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})