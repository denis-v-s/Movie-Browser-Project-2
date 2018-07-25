import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'

export const Card = props => {
    return (
        <TouchableOpacity style={styles.card} onPress={ () => props.onItemSelected(props.Title) }>
            <View>
                <Image 
                    source={{uri: props.Poster}} 
                    style={styles.thumbnail} />
            </View>

            <View>
                <Text>Year: { props.Year }</Text>
                <Text>Title: { props.Title }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    thumbnail: {
        height: 100, 
        width: 75
    }
})