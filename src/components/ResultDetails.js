import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ResultDetails = ({ item }) => {
    // console.log(item)
    return (
        <View style={ styles.viewStyle }>
            <Image source={{ uri: item.image_url }} style={ styles.imageStyle } />
            <Text style={ styles.nameStyle }>{ item.name }</Text>
            <Text>{ item.rating } Stars, { item.review_count } Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        marginHorizontal: 15,
        marginBottom: 10
    },
    imageStyle: {
        width: 190,
        height: 130,
        borderRadius: 5,
        marginBottom: 5
    },
    nameStyle: {
        fontSize: 15,
        fontWeight: '700'
    }
})

export default ResultDetails
