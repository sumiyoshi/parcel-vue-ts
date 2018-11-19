import Translator from "@ts/Domain/Translator"

export default class TodoUseCase {

    private todoRepository: TodoRepository

    private form: TodoForm

    public constructor(
        todoRepository: TodoRepository,
        form: TodoForm
    ) {
        this.todoRepository = todoRepository
        this.form = form

        this.form.tasks = this.todoRepository.find()
    }

    public getForm(): TodoForm {
        return this.form
    }

    public addTodo(todo: Todo): void {
        this.form.tasks.push(todo)
        this.todoRepository.add(todo)

        this.form.todo = Translator.todo()
    }

    public deleteTodo(index: number): void {
        this.form.tasks.splice(index, 1)
        this.todoRepository.delete(index)
    }
}