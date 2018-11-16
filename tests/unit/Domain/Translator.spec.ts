import { expect } from 'chai'
import Translator from "@/scripts/Domain/Translator";

describe('Translator.ts', () => {
    it('create counter', () => {
        let counter: Counter = {count: 0};
        expect(counter.count).to.equal(Translator.counter().count);
        expect(counter.count).not.equal(Translator.counter(1).count);
    })
});
