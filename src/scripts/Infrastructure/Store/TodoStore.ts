export default class TodoStore implements TodoRepository {

    private key: string

    public constructor() {
        this.key = 'todo'
    }

    public delete(id: number): boolean {

        let list = this.find()
        list.splice(id, 1)

        return this.save(list)
    }

    public find(): Array<Todo> {
        const item: string | null = localStorage.getItem(this.key)

        if (item === null) {
            return []
        }

        return JSON.parse(item)
    }

    public add(todo: Todo): boolean {

        let list = this.find()
        list.push(todo)

        return this.save(list)
    }

    private save(tasks: Array<Todo>): boolean {
        localStorage.setItem(this.key, JSON.stringify(tasks))
        return true
    }


}