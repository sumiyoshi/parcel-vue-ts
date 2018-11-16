import Counter from "@ts/Domain/Entity/Counter";

export default class CountUseCase {

    public counter: Counter;

    constructor(counter: Counter) {
        this.counter = counter;
    }

    public up(): void {
        this.counter.countUp();
    }

    public down(): void {
        this.counter.countDown();
    }

    public count(): number {
        return this.counter.getCount()
    }

}