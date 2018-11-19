export default class TodoStoreStub implements TodoRepository {

    public delete(id: number): boolean {
        return true
    }

    public find(): Array<Todo> {
        return [
            {name: "some name1"},
            {name: "some name2"}
        ]
    }

    public add(todo: Todo): boolean {
        return true
    }

    private save(tasks: Array<Todo>): boolean {
        return true
    }
}