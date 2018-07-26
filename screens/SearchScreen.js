import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';
import { titleLookup, movieDetails } from '../api'
import SearchResultsViewer from '../components/SearchResultsViewer'


export default class SearchScreen extends Component {
  state = {
    title: '',
    searchResults: ''
  }

  static navigationOptions = {
    headerTitle: 'Home'
  }

  handleSearch = async (title) => {
    this.setState({ title });

    // only query results for movies with 3 or more characters
    if (title.length > 0) {
      this.setState({ searchResults: await titleLookup(this.state.title) })
    }
  }

  handleMovieSelected = async (title) => {
    const movieData = await movieDetails(title)
    this.props.navigation.navigate('Detail', { movieData })
  }

  render() {
    return (
      <View style={{ padding: Constants.statusBarHeight }}>
        <TextInput
          style={styles.inputs}
          placeholder="movie title search"
          value={this.state.title}
          onChangeText={this.handleSearch} />

        <SearchResultsViewer
          searchResults={this.state.searchResults}
          onItemSelected={this.handleMovieSelected}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    padding: 5,
    borderWidth: 1,
    marginBottom: 10,
  }
})