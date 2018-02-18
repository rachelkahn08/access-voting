import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Home from '../Home/Home';
import QuickBuild from '../QuickBuild';

import './_App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'user': {
        'name': 'Buddy',
        'type': 'driver',
      },
      'homepage': {
        'login': true,
        'greeting': true,
      }
    }

    this.update = this.update.bind(this);
    // will want a function to check if already logged in and update login status before loading
  }

  update(unmount, user) { 
    console.log('update');
    let update = Object.assign({}, this.state);
        update.homepage[unmount] = false;
        user ? update.user = user : null;
    this.setState(update);
  }

  render() {

    const PropsRoute = ({component, ...rest}) => {
      let build = new QuickBuild;
          build = build.route({component, ...rest});
      return build;
    }

    return (
      <BrowserRouter>
        <div className='app'>
          <Header />
          <Switch>
            <PropsRoute exact path='/' 
              component = { Home }
              user = { this.state.user } 
              homepage = { this.state.homepage }
              update = { this.update }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
