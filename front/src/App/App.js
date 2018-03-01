import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import QuickBuild from '../QuickBuild';

import Header from './Header';
import MapWindow from '../Map/MapWindow';
import Home from '../Home/Home';
import Schedule from '../Schedule/Schedule';


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
        'login': false,
        'greeting': false,
      },
      'map': {
        'blocked': true,
      }
    }

    this.update = this.update.bind(this);
    this.maskMap = this.maskMap.bind(this);
    // will want a function to check if already logged in and update login status before loading
  }

  update(page, unmount, user) { 
    let update = Object.assign({}, this.state);
        update[page][unmount] = false;
    this.setState(update);
  }

  maskMap(val) {
    this.setState(() => {
      return this.state.map.blocked = val;
    })
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
          <MapWindow blocked={ this.state.map.blocked }/>
          <Header />
          <Switch>
            <PropsRoute exact path='/' 
              component = { Home }
              user = { this.state.user } 
              homepage = { this.state.homepage }
              update = { this.update }
              maskMap = { this.maskMap }
            />
            <PropsRoute exact path='/schedule' 
              component = { Schedule }
              user = { this.state.user } 
              maskMap = { this.maskMap }
            />
            <PropsRoute path='/schedule/:sub' 
              component = { Schedule }
              user = { this.state.user } 
              maskMap = { this.maskMap }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
