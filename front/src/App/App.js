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
        'name': null,
        'type': null,
      },
      'homepage': {
        'login': true,
        'greeting': true,
      }
    }

    // will want a function to check if already logged in and update login status before loading
    this.updateLogin = this.updateLogin.bind(this);
    this.setHomepage = this.setHomepage.bind(this);
  }

  // updateLogin({user}) {
  //   this.setState({'login': false});
  //   this.setState({'user': user});
  // }

  setHomepage(page, user) {
    return new Promise(() => {
      // console.log(page, user);
      user ? this.setState({'user' : user }) : null;  
    }).then(
      this.setState({[page]: false})
    )
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
            <PropsRoute  
              user = { this.state.user }
              update = { this.setHomepage } 
              homepage = { this.state.homepage }
              component = { Home }
              exact path='/'/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
