/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, SafeAreaView} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

import { Header, Button, Spinner } from './src/components/common';
import keys from './config/keys'
import LoginForm from './src/components/LoginForm';
import TechStack from './src/components/TechStack';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = { loggedIn: null }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: keys.apiKey,
      authDomain: keys.authDomain,
      databaseURL: keys.databaseURL,
      projectId: keys.projectId,
      storageBucket: keys.storageBucket,
      messagingSenderId: keys.storageBucket
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent(){
    //header: Authentication
    switch(this.state.loggedIn){
      case true: {
        return (
          <Button onPress={() => { firebase.auth().signOut() }}>
            Log Out
          </Button>
        );
      }
      case false: 
        return <LoginForm />;
      default: 
        return <Spinner />;
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
        <Header headerText={'Tech Stack'}/>
        {/* {this.renderContent()} */}

        <Provider store={createStore(reducers)}>
          <TechStack />
        </Provider>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
