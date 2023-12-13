import { randomUUID } from "crypto"

export class DatabaseMemory {
  #tenis = new Map()

  list(search) {
    return Array.from(this.#tenis.entries())
      .map((tenisArray) => {
        const id = tenisArray[0]

        const data = tenisArray[1]

        return {
          id,
          ...data,
        }
      })
      .filter((tenis) => {
        if (search) {
          return tenis.modelo.includes(search)
        }
        return true
      })
  }

  create(tenis) {
    const tenisId = randomUUID()
    this.#tenis.set(tenisId, tenis)
  }

  update(id, tenis) {
    this.#tenis.set(id, tenis)
  }

  delete(id, tenis) {
    this.#tenis.delete(id, tenis)
  }
}