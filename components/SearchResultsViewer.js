import React from 'react'
import { FlatList } from 'react-native'
import Card from './Card'

export const SearchResultsViewer = props => {
  const renderItem = o => <Card {...o.item} onItemSelected={(title) => props.onItemSelected(title)} />

  return (
    <FlatList
      data={props.searchResults}
      renderItem={renderItem}
    />
  )
}

export default SearchResultsViewer