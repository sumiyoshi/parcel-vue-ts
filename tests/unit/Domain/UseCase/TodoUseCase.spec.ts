import {expect} from 'chai'
import TodoUseCase from "@/scripts/Domain/UseCase/TodoUseCase"

describe('TodoUseCase.ts', () => {
    it('add task', () => {
        let todo: Todo = {name: "some name"}
        let form: TodoForm = {
            tasks: [],
            todo: {name: 'some name'}
        }

        let todoUseCase = new TodoUseCase(new TodoStore, form)

        todoUseCase.addTodo(todo)
        expect(todoUseCase.getForm().tasks.length).to.equal(3)
        expect(todoUseCase.getForm().tasks[2].name).to.equal("some name")
    })

    it('delete task', () => {

        let form: TodoForm = {
            tasks: [],
            todo: {name: 'some name'}
        }

        let todoUseCase = new TodoUseCase(new TodoStore, form)

        todoUseCase.deleteTodo(0)

        expect(todoUseCase.getForm().tasks.length).to.equal(1)
        expect(todoUseCase.getForm().tasks[0].name).to.equal("some name2")
    })
})

class TodoStore implements TodoRepository {

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