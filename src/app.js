import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import RewardList from './rewardList';
import Store from './store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RewardList store={Store} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})