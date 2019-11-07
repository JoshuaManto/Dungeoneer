import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link,
  withRouter
} from 'react-router-dom';
import axios from 'axios';

import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

import Characters from './components/Characters/Characters';
import Character from './components/Characters/Character/Character';

import CharacterCreation from './components/CharacterCreation/CharacterCreation';

import Classes from './components/Classes/Classes';

import Races from './components/Races/Races';

import Alignments from './components/Alignment/Alignments';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userId: '',
      characters: [],
      classes: [],
      races: [],
      alignments: [],
      classList: {
        1: 'Bard',
        2: 'Cleric',
        3: 'Warlock',
        4: 'Wizard',
        5: 'Fighter',
        6: 'Paladin',
        7: 'Druid',
        8: 'Monk',
        9: 'Rogue',
        10: 'Ranger',
        11: 'Sorcerer',
        12: 'Barbarian'
      },
      raceList: {
        1: 'Dwarf',
        2: 'Halfling',
        3: 'Elf',
        4: 'Dragonborn',
        5: 'Half-Elf',
        6: 'Human',
        7: 'Gnome',
        8: 'Tiefling',
        9: 'Half-Orc'
      }
    };

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.submitSignUpHandler = this.submitSignUpHandler.bind(this);
    this.submitLoginHandler = this.submitLoginHandler.bind(this);
    this.classClickHandler = this.classClickHandler.bind(this);
    this.raceClickHandler = this.raceClickHandler.bind(this);
    this.alignmentClickHandler = this.alignmentClickHandler.bind(this);
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
        console.log(res.data.user_id);

        this.setState({ userId: res.data.user_id });
        console.log('state user id', res.data.user_id);

        // axios get all characters
        // save to state

        axios
          .post('/characters', {
            user_id: this.state.userId
          })
          .then(response => {
            console.log(response);
            console.log('DATAAAAA');
            console.log(response.data);

            // this.setState(prevState => ({
            //   characters: [...prevState.characters, ...response.data]
            // }));

            this.setState({
              characters: [...response.data]
            });

            console.log('state classes: ', this.state.classes);

            if (res.status === 200)
              return this.props.history.push('/characters');
            return this.props.history.push('/login');
          })
          .catch(error => {
            console.log('error axios');
            console.log(error);
          });
      })
      .catch(err => {
        console.log('error axios');
        console.log(err);
      })
      .finally(() => {
        this.setState({
          // username: '',
          password: ''
        });
      });

    // console.log('hi submit');
    // this.props.history.push('/');
    // <Link to="/login"></Link>;
  }

  classClickHandler() {
    axios
      .get('/classes')
      .then(res => {
        console.log(res);

        this.setState({
          classes: [...res.data]
        });

        return this.props.history.push('/classes');
      })
      .catch(err => {
        console.log('error axios');
        console.log(err);
      });
  }

  raceClickHandler() {
    axios
      .get('/races')
      .then(res => {
        console.log(res);

        this.setState({
          races: [...res.data]
        });

        return this.props.history.push('/races');
      })
      .catch(err => {
        console.log('error axios');
        console.log(err);
      });
  }

  alignmentClickHandler() {
    axios
      .get('/alignments')
      .then(res => {
        console.log(res.data);

        this.setState({
          alignments: [...res.data]
        });

        return this.props.history.push('/alignments');
      })
      .catch(err => {
        console.log('error axios');
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {/* <h1>
          Hello please render
          {this.state.characters &&
            this.state.characters[0] &&
            this.state.characters[0].Name}
        </h1> */}
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
            path="/characters"
            render={props => (
              <Characters
                characters={this.state.characters}
                classList={this.state.classList}
                raceList={this.state.raceList}
              ></Characters>
            )}
          ></Route>
          <Route
            exact
            path="/characters/creation"
            render={props => (
              <CharacterCreation
                classHandler={this.classClickHandler}
                raceHandler={this.raceClickHandler}
                alignmentHandler={this.alignmentClickHandler}
              ></CharacterCreation>
            )}
          ></Route>
          <Route
            exact
            path="/classes"
            render={props => <Classes classes={this.state.classes}></Classes>}
          ></Route>
          <Route
            exact
            path="/races"
            render={props => <Races races={this.state.races}></Races>}
          ></Route>
          <Route
            exact
            path="/alignments"
            render={props => (
              <Alignments alignments={this.state.alignments}></Alignments>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
