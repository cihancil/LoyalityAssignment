import { observable, computed, action } from 'mobx';

import Api from './api';

class Store {

  @observable _rewards = []
  @observable _fetchingRewards = false

  @computed get rewards() {
    return this._rewards.slice();
  }

  @computed get fetchingRewards() {
    return this._fetchingRewards;
  }

  @action fetchRewards() {
    return new Promise((resolve, reject) => {
      this._fetchingRewards = true;
      Api.fetchRewards()
        .then(response => {
          this._rewards = response.data.Rewards;
          this._fetchingRewards = false;
          resolve();
        })
        .catch(err => {
          this._fetchingRewards = false;
          reject(err);
        })
    })
  }
}

export default new Store();