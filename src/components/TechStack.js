import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class TechStack extends React.Component {
  render(){
    return (
      <View />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(TechStack);