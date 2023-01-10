import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
/** useResults is custom hook */
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    
    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        <View style={ styles.containerView }>
            <SearchBar
                searchTerm={ searchTerm }
                onTermChange={ newTerm =>{ 
                    return setSearchTerm(newTerm) }}
                onTermSubmit={ () => searchApi(searchTerm) }
            />
            { errorMessage ? <Text>{ errorMessage }</Text> : null }
            <ScrollView style={ styles.results }>
                <ResultsList
                    title="Cost Effective"
                    results={ filterResultsByPrice('$') }
                />
                <ResultsList
                    title="Bit Pricier"
                    results={ filterResultsByPrice('$$') }
                />
                <ResultsList
                    title="Pricier"
                    results={ filterResultsByPrice('$$$') }
                />
                <ResultsList
                    title="Big Spender"
                    results={ filterResultsByPrice('$$$$') }
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1
    },results: {
    }
})

export default SearchScreen
