export default class Translator {

    static counter(count: number = 0): Counter {
        return {
            count: count
        };
    }

    static todo(name: string = ""): Todo {
        return {
            name: name
        };
    }
}