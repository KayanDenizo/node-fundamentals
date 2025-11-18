import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/extract-query-params.js";

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })

    if (route) {
        const routeParams = request.url.match(route.path)

        const { query, ...params } = routeParams.groups

        request.query = query ? extractQueryParams(query) : {}
        request.params = params

        return route.controller(request, response)
    }

    return response.writeHead(404).end('Rota não encontrada');
}