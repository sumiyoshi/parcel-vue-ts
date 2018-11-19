export default class Container {

    private static bindList: { [key: string]: any } = {}

    public static bind(key: string, instance: any) {
        Container.bindList[key] = instance
    }

    public static get<T>(d: string): T | null {
        return new Container.bindList[d]
    }
}