import fs from "node:fs/promises"
const DATABASE_PATH = new URL("db.json", import.meta.url)

// Banco de dados 
export class DataBase {
    database = {}


    constructor() { //Executado automaticamente quando a classe é iniciada
        fs.readFile(DATABASE_PATH, "utf8")
            .then((data) => {
                this.database = JSON.parse(data)
            })
            .catch(() => this.persist())

    }

    persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.database))
    }

    insert(table, data) {
        if (Array.isArray(this.database[table])) {
            this.database[table].push(data)
        } else {
            this.database[table] = [data] //Se nao existe adiciona o nome da tabela o primeiro objeto, q inclusiva eu ja paço na requisição no insominia
        }
        this.persist() // Salva o conteudo no arquivo json
    }

    select(table) {
        return this.database[table]
    }
}
