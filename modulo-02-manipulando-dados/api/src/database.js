// Banco de dados 
export class DataBase {
    database = {}
    insert(table, data) {
        if (Array.isArray(this.database[table])) {
            this.database[table].push(data)
        } else {
            this.database[table] = [data] //Se nao existe adiciona o nome da tabela o primeiro objeto, q inclusiva eu ja paço na requisição no insominia
        }
    }

    select(table) {
        return this.database[table]
    }
}
