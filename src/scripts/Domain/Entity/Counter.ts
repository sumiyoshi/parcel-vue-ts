export default class Counter {

    public count: number;

    /**
     * @param {Number} count
     */
    constructor(count = 0) {
        this.count = count;
    }

    public countUp(): void {
        this.count++;
    }

    public countDown(): void {
        this.count--;
    }

    public getCount(): number {
        return this.count;
    }
}