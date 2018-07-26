import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import SearchScreen from './screens/SearchScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'

const AppNavigator = createStackNavigator({
  Search: SearchScreen,
  Detail: MovieDetailScreen
}, {
    initialRouteName: 'Search'
  })

export default class App extends Component {
  render() {
    return <AppNavigator />
  }
}