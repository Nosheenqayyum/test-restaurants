import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultDetailsScreen = ({ navigation }) => {
    const [result, setResult] = useState(null)
    const businessId = navigation.getParam('id')

    const getPhotos = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getPhotos(businessId)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View style={ styles.viewStyle }>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={ photo => photo }
                renderItem={ ({ item }) => {
                    return <Image source={{ uri: item }} style={ styles.imageStyle } />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 10
    },
    imageStyle: {
        width: 330,
        height: 250,
        marginBottom: 5,
        borderRadius: 25
    }
})

export default ResultDetailsScreen
