import React from 'react'
import { ScrollView, Text, Image, StyleSheet } from 'react-native'

export const DetailCard = props => {
    return(
        <ScrollView>
            <Image source={{uri: props.Poster}} style={styles.poster} />
            <Text>{props.Title}</Text>
            <Text>{props.Plot}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    poster: {
        height: 150,
        width: 100
    }
})