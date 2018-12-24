import React, { Component } from 'react';
import { Card, Button, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { text: ''};

  render() {
    return (
      <Card>
        <CardSection> 
          <Input 
            label='Email'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection> 
          
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