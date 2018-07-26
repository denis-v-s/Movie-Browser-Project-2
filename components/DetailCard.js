import React from 'react'
import { ScrollView, Text, Image, StyleSheet, View } from 'react-native'
import { Dimensions } from 'react-native'

export const DetailCard = (props) => {
    const w = Dimensions.get('window').width * .8
    const h = w * 1.5

    return (
        <ScrollView style={styles.content}>

            <Image source={{ uri: props.movieData.Poster }} style={{ width: w, height: h }} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.movieData.Title}</Text>
                <Text style={styles.fontXS}>({props.movieData.Year})</Text>
            </View>
            <Text>{props.movieData.Plot}</Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        margin: 5
    },
    fontXS: {
        fontSize: 12
    },
})

export default DetailCard