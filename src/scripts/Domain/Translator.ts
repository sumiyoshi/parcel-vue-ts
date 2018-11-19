export default class Translator {

    public static todo(name: string = ''): Todo {
        return {
            name: name
        };
    }

    public static todoForm(): TodoForm {
        return {
            tasks: [],
            todo: Translator.todo()
        }
    }
}