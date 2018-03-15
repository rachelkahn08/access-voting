import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import QuickBuild from '../QuickBuild';

import Header from './Header';
import MapWindow from '../Map/MapWindow';
import OnCall from '../Map/OnCall';
import Home from '../Home/Home';
import Schedule from '../Schedule/Schedule';


import './_App.css';

export default class App extends Component {
  state = {
      'user': {
        'name': 'Buddy',
        'type': 'driver',
      },
      'homepage': {
        'login': true,
        'greeting': true,
      },
      'mapClickable': false,
      'onCall': false,
    }
    // will want a function to check if already logged in and update login status before loading

  update = (page, unmount, user) => { 
    console.log('update');
    console.log(page);
    console.log(unmount);
    let update = Object.assign({}, this.state);
        update[page][unmount] = false;
    this.setState(update);
  }

  toggleMapMask = (val) => {
    this.setState({'mapClickable': val});
  }

  toggleOnCall = (val) => {
    this.setState({'onCall': val});
  }

  // forceClose = () => {
  //   console.log(this.props.update);
  //   if (window.location.pathname == '/on-call') {
  //     console.log('force close');
  //     return this.props.greeting 
  //       ? this.props.update('homepage', 'greeting')
  //       : null; 
  //   }
  // }

  forceClose = () => {
    
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
          <MapWindow 
            clickable = { this.state.mapClickable }
            onCall = { this.state.onCall }
          />
          <Header />
          <Switch>
            <PropsRoute exact path='/' 
              component = { Home }
              toggleMapMask = { this.toggleMapMask }
              user = { this.state.user } 
              homepage = { this.state.homepage }
              update = { this.update }
            />
            <PropsRoute exact path='/schedule/' 
              component = { Schedule }
              user = { this.state.user } 
              toggleMapMask = { this.toggleMapMask }
              mapClickable = { this.state.mapClickable }
            />
            <PropsRoute path='/schedule/offers' 
              component = { Schedule }
              user = { this.state.user } 
              toggleMapMask = { this.toggleMapMask }
              mapClickable = { this.state.mapClickable }
            />
            <PropsRoute path='/schedule/requests' 
              component = { Schedule }
              user = { this.state.user } 
              toggleMapMask = { this.toggleMapMask }
              mapClickable = { this.state.mapClickable }
            />
            <PropsRoute path='/on-call' 
              component = { OnCall }
              onCall = { this.state.onCall }
              toggleOnCall = { this.toggleOnCall }
              mapClickable = { this.state.mapClickable }
              toggleMapMask = { this.toggleMapMask }
              greeting={ this.state.homepage.greeting }
              user={ this.state.user } 
              update={ this.update } 
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
