import React from 'react'
import { FlatList } from 'react-native'
import { movieDetails } from '../api'
import { Card } from './Card'

export default class SearchResultsViewer extends React.Component {
  renderItem = o => <Card { ...o.item } onItemSelected={(title) => this.getMovieDetails(title)} />

  getMovieDetails = (title) => {
    //movieDetails(title)
    
    this.props.navigation.navigate('Detail')
  }

  render() {
    return (
      <FlatList
        data={ this.props.searchResults }
        renderItem={ this.renderItem }
      />
    )
  }
}