import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { 
    email: '',
    password: ''
  };

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

        <CardSection> 
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;