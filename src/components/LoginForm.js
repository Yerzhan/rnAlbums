import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { 
    email: '',
    password: '',
    error: ''
  };

  onButtonPress(){
    const { email, password } = this.state;

    this.setState({ error: ''});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            this.setState({error: 'Authentication Failed.'})
          });
      });
  }

  render() {
    return (
      <Card>
        <CardSection> 
          <Input 
            label='Email'
            placeholder='user@gmail.com'
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>

        <CardSection> 
          <Input 
            label='Password'
            placeholder='password'
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection> 
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;