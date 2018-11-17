export default class Container {

    private static bindList: { [key: string]: any; } = {};

    static bind(key: string, instance: any) {
        Container.bindList[key] = instance;
    }

    static instance<T>(d: string): T {
        return new Container.bindList[d];
    }
}