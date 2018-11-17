export default class TodoUseCase {

    static addTodo(tasks: Array<Todo>, todo: Todo): void {
        tasks.push(todo);
    }

    static deleteTodo(tasks: Array<Todo>, index: number): void {
        tasks.splice(index, 1);
    }
}