import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native'
import { observer } from 'mobx-react/native';

@observer
export default class RewardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    let { store } = this.props;
    store.fetchRewards()
  }

  render() {
    let { rewards, fetchingRewards } = this.props.store;
    if (fetchingRewards) {
      return (
        <ActivityIndicator style={{ flex: 1, }} />
      )
    }

    return (
      <FlatList
        style={styles.listContainer}
        data={rewards}
        renderItem={this.renderReward.bind(this)}
        keyExtractor={item => item.Id}
        ItemSeparatorComponent={this.renderSeparator}
      />
    )
  }

  renderReward({ item }) {
    return (
      <View key={item.Id} style={styles.rewardContainer}>
        <Text style={styles.headerText}>{item.Title}</Text>
        <Text style={styles.subText}>{item.PointsRequired + ' pts required to unlock'}</Text>
      </View>
    )
  }

  renderSeparator = () => {
    return (
      <View style={styles.seperator} />
    );
  };
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingTop: 20,
  },
  rewardContainer: {
    padding: 16,
  },
  headerText: {
    fontWeight: "bold",
  },
  subText: {
    color: "#BBBBBB",
  },
  seperator: {
    height: 1,
    width: "96%",
    marginHorizontal: "2%",
    backgroundColor: "#CED0CE",
  },
})