import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation'
import SearchScreen from './screens/SearchScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'

const AppNavigator = createSwitchNavigator({
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