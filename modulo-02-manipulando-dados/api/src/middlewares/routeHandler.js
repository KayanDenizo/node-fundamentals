import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/extract-query-params.js";
import { DataBase } from "../database.js"

const database = new DataBase() // Nova Instancia

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })

    if (route) {
        const routeParams = request.url.match(route.path)

        const { query, ...params } = routeParams.groups

        request.query = query ? extractQueryParams(query) : {}
        request.params = params

        return route.controller({request, response, database}) // Se colocar entre chaves passa o parametro como objeto e consegue recuperar em qualquer sequência
    }

    return response.writeHead(404).end('Rota não encontrada');
}