import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
  withRouter
} from 'react-router-dom';
import axios from 'axios';

import Login from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import CharacterCreation from './components/characterCreation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.submitSignUpHandler = this.submitSignUpHandler.bind(this);
    this.submitLoginHandler = this.submitLoginHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({
      username: event.target.value
    });
  }

  passwordChangeHandler(event) {
    this.setState({
      password: event.target.value
    });
  }

  submitSignUpHandler(event) {
    event.preventDefault();
    // axios here

    axios
      .post(
        '/signup',
        {
          username: this.state.username,
          password: this.state.password
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        }
      )
      .then(res => {
        console.log('frontend');
        console.log(res);
        console.log(res.data);
        if (res.status === 200) return this.props.history.push('/login');
        return this.props.history.push('/signup');
      })
      .catch(err => {
        console.log('error axios');
        console.log(err);
      })
      .finally(() => {
        this.setState({
          username: '',
          password: ''
        });
      });

    // alert('signup submit');
    // <Redirect to="/login" />;
    // console.log(this.props);

    // <Link to="/login"></Link>;
  }

  submitLoginHandler() {
    event.preventDefault();
    // axios here

    axios
      .post(
        '/login',
        {
          username: this.state.username,
          password: this.state.password
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        }
      )
      .then(res => {
        console.log('frontend');
        console.log(res);
        console.log(res.data);
        if (res.status === 200)
          return this.props.history.push('/characters/creation');
        return this.props.history.push('/login');
      })
      .catch(err => {
        console.log('error axios');
        console.log(err);
      })
      .finally(() => {
        this.setState({
          username: '',
          password: ''
        });
      });

    // console.log('hi submit');
    // this.props.history.push('/');
    // <Link to="/login"></Link>;
  }

  render() {
    return (
      <div>
        <h1>Hello please render</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signup"
            // component={signup}
            render={props => (
              <Signup
                submitSignUpHandler={this.submitSignUpHandler}
                usernameChangeHandler={this.usernameChangeHandler}
                passwordChangeHandler={this.passwordChangeHandler}
                username={this.state.username}
                password={this.state.password}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                submitLoginHandler={this.submitLoginHandler}
                usernameChangeHandler={this.usernameChangeHandler}
                passwordChangeHandler={this.passwordChangeHandler}
                username={this.state.username}
                password={this.state.password}
              />
            )}
            // component={Login}
          />
          <Route
            exact
            path="/characters/creation"
            component={CharacterCreation}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
