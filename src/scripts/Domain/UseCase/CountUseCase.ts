export default class CountUseCase {

    static countUp(counter: Counter): Counter {
        counter.count++;
        return counter;
    }

    static countDown(counter: Counter): Counter {
        counter.count--;
        return counter;
    }
}