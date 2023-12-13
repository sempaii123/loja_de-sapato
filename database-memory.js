import { randomUUID } from "crypto"


export class DatabaseMemory{
    #loja_de_sapatos = new Map()

list(search){
    return Array.from(this.#loja_de_sapatos.entries()).map((tenisArray) => {
        const id = tenisArray[0]

        const data = tenisArray[1]

        return{
            id,
            ...data,
        }

        
        })
        .filter(loja_de_sapatos=> {
            if (search){
            return loja_de_sapatos.titulo.includes(search)
            }
            return true
    })
}

    create(livrloja_de_sapatos){
        const loja_de_sapatosId = randomUUID()
        this.#loja_de_sapatos.set(loja_de_sapatosId, loja_de_sapatos)
    }
    
    update(id, loja_de_sapatos){
        this.#loja_de_sapatos.set(id, loja_de_sapatos)
    }

    delete(id, loja_de_sapatos){
        this.#loja_de_sapatos.delete(id, loja_de_sapatos)
    }
}