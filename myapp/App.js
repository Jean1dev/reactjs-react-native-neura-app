/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View,
  ScrollView ,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import AddRepo from './components/newRepoModal'
import Repo from './components/repo'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state = {
    modalVisible: false, 
    repos: []
  }

  async componentDidMount() {
    const repos = JSON.parse(await AsyncStorage.getItem('repositories')) || []

    this.setState({ repos })
  }

  addRepository = async (args) => {
    const repoCall = await fetch(`http://api.github.com/repos/${args}`)
    const resp = await repoCall.json()
   
    const repository ={
      id: resp.id,
      thumbnail: resp.owner.avatar_url,
      title: resp.name,
      author: resp.owner.login
    }

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository
      ]
    })

    await AsyncStorage.setItem('@myapp:repositories', JSON.stringify(this.state.repos))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Repositorios</Text>
          <TouchableOpacity onPress={() => { this.setState({ modalVisible: true}) }}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
          <ScrollView contentContainerStyle={styles.repolist}>
            { this.state.repos.map(repo => <Repo key={repo.id} data={repo} />)}
          </ScrollView>

        <AddRepo 
        onAdd = { this.addRepository  }
        onCancel={() => {this.setState({ modalVisible: false })}} 
        visible={this.state.modalVisible}></AddRepo>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },


  header: {
    height: (Platform.OS === 'ios')? 70 : 50,
    paddingTop: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  repolist: {
    padding: 20
  },

  repo: {
    backgroundColor: '#FFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 5,
    height: 120
  }
});
