import { RouterStore } from 'mobx-react-router';
import CounterStore from './counter';

export interface IStores { 
    router: RouterStore;
    counter: CounterStore;
}

export default function createStores() : IStores { 
    return { 
       router: new RouterStore(),
       counter: new CounterStore()
    }
}