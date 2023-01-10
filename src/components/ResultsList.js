import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultDetails from './ResultDetails'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null
    }
    return (
        <View>
            <Text style={ styles.titleStyle }>{ title} ({ results.length })</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={ false }
                data={results}
                keyExtractor={ result => result.id }
                renderItem={ ({item}) => {
                    return(
                        <TouchableOpacity onPress={ () => {
                            navigation.navigate('ResultDetails', { id: item.id })
                        }}>
                            <ResultDetails item={ item } />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        marginLeft: 15,
        marginBottom: 5,
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default withNavigation(ResultsList)
