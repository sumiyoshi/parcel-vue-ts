interface TodoRepository {
    add(todo: Todo): void

    delete(id: number): void

    find(): Array<Todo>
}