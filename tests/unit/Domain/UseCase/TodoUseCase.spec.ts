import { expect } from 'chai'
import TodoUseCase from "@/scripts/Domain/UseCase/TodoUseCase";

describe('TodoUseCase.ts', () => {
    it('add task', () => {
        let tasks: Array<Todo> = [];
        let todo: Todo = {name: "some name"};

        TodoUseCase.addTodo(tasks, todo);
        expect(tasks.length).to.equal(1);
        expect(tasks[0].name).to.equal("some name");
    });

    it('delete task', () => {
        let tasks: Array<Todo> = [
            {name: "some name1"},
            {name: "some name2"}
        ];

        TodoUseCase.deleteTodo(tasks, 0);
        expect(tasks.length).to.equal(1);
        expect(tasks[0].name).to.equal("some name2");
    });
});
