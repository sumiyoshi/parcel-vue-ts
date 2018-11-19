import { expect } from 'chai'
import Translator from "@/scripts/Domain/Translator"

describe('Translator.ts', () => {

    it('create todo', () => {
        let todo: Todo = {name: "some name"}
        expect(todo.name).to.equal(Translator.todo("some name").name)
        expect(todo.name).not.equal(Translator.todo().name)
    })
})
