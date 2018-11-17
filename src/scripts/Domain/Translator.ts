export default class Translator {

    static todo(name: string = ""): Todo {
        return {
            name: name
        };
    }

    static todoForm(): TodoForm {
        return {
            tasks: [],
            todo: Translator.todo()
        }
    }
}