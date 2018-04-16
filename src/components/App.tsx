import * as React from "react";
import { Icon, Menu, Container } from "semantic-ui-react";

import { inject } from 'mobx-react';
import { Switch, Route } from 'react-router';
import { RouterStore } from 'mobx-react-router';

import Home from './Home';
import Counter from './Counter';

interface IProps {
    router: RouterStore
};

@inject('router')
export default class App extends React.Component<IProps> {
    render() {
        const { push } = this.props.router;
        return (
            <div>
                <Menu fixed='top' inverted>
                    <Container>
                        <Menu.Item as='h2' header style={{ cursor: 'pointer' }}>
                            <a onClick={() => push('/')}>
                                <Icon name='circle thin' color='blue'>
                                </Icon>
                                Cool Company
                            </a>
                        </Menu.Item>
                        <Menu.Item position='right'>
                            Welcome, User.
                        </Menu.Item>
                    </Container>
                </Menu>
                <Container text style={{ marginTop: '7em' }}>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/counter' component={Counter} />
                    </Switch>
                </Container>
            </div >
        )
    }
} 