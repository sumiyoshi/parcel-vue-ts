import {expect} from 'chai'
import TodoUseCase from "@/scripts/Domain/UseCase/TodoUseCase"
import TodoStoreStub from "@/../tests/stub/Store/TodoStoreStub"

describe('TodoUseCase.ts', () => {
    it('add task', () => {
        let form: TodoForm = {
            tasks: [],
            todo: {name: 'some name'}
        }

        let todoUseCase = new TodoUseCase(new TodoStoreStub, form)

        todoUseCase.addTodo()
        expect(todoUseCase.getForm().tasks.length).to.equal(3)
        expect(todoUseCase.getForm().tasks[2].name).to.equal("some name")
    })

    it('delete task', () => {

        let form: TodoForm = {
            tasks: [],
            todo: {name: 'some name'}
        }

        let todoUseCase = new TodoUseCase(new TodoStoreStub, form)

        todoUseCase.deleteTodo(0)

        expect(todoUseCase.getForm().tasks.length).to.equal(1)
        expect(todoUseCase.getForm().tasks[0].name).to.equal("some name2")
    })
})