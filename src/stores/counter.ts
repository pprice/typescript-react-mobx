import { observable } from 'mobx';

export default class CounterStore {
    @observable counter = 0;

    public increment() {
        this.counter++;
    }

    public decrement() {
        this.counter--;
    }
}