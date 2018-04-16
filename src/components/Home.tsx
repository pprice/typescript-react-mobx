import * as React from "react";
import { RouterStore } from 'mobx-react-router';
import { inject } from 'mobx-react';
import { Button } from 'semantic-ui-react';

interface IProps {
    router: RouterStore
}

@inject('router')
export default class Home extends React.Component<IProps>  {

    render() {
        const { push } = this.props.router;

        return (
            <div>
                <h2>Welcome!</h2>
                <p>
                    Example of child page navigation
                    <Button onClick={() => push('/counter')}>Use a cool counter!</Button>
                </p>
            </div>
        )
    }
}