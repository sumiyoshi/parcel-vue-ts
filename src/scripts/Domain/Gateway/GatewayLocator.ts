export default class GatewayLocator {

    private static bindList: { [key: string]: any } = {}

    public static get<T>(d: string): T | null {
        return new GatewayLocator.bindList[d]
    }

    public static bind(key: string, instance: any) {
        GatewayLocator.bindList[key] = instance
    }

    public static set(bindList: { [key: string]: any }) {
        GatewayLocator.bindList = bindList
    }
}