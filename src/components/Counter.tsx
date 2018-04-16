import * as React from "react";
import { inject, observer } from 'mobx-react';
import CounterStore from '../stores/counter';
import { Button } from 'semantic-ui-react';

interface IProps { 
    counter: CounterStore;
}

@inject('counter') @observer
export default class Counter extends React.Component<IProps> { 
    render() { 
        return (
            <div>
                <Button onClick={() => this.props.counter.decrement()}>Decrement</Button>
                <span>  {this.props.counter.counter}  </span>
                <Button onClick={() => this.props.counter.increment()}>Increment</Button>
            </div>
        );
    }
}