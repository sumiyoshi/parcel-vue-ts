import { expect } from 'chai'
import CountUseCase from "@/scripts/Domain/UseCase/CountUseCase";

describe('CountUseCase.ts', () => {
    it('count up', () => {
        let counter: Counter = {count: 0};
        expect(counter.count).to.equal(0);
        expect(CountUseCase.countUp(counter).count).to.equal(1);
        expect(CountUseCase.countUp(counter).count).to.equal(2);
    });

    it('count down', () => {
        let counter: Counter = {count: 3};
        expect(counter.count).to.equal(3);
        expect(CountUseCase.countDown(counter).count).to.equal(2);
        expect(CountUseCase.countDown(counter).count).to.equal(1);
    });
});
