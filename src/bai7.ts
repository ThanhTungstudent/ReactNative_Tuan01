class User {
    #name: string
    constructor(name: string){
        this.#name = name
    }

    getter(): string {
        return this.#name
    }

    setter(name: string): void {
        if(!name.trim()) throw new Error("name cannot empty")
        this.#name = name
    }
}