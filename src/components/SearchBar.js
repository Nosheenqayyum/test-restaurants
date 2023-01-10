import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {
    return (
        <View style={ styles.backgroundStyle }>
            <Feather style={ styles.iconStyle } name="search" />
            <TextInput
                style={ styles.inputStyle }
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={ false }
                value={ searchTerm }
                onChangeText={ newTerm => onTermChange(newTerm) }
                onEndEditing={ () => onTermSubmit() }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#e7e7e7',
        height: 50,
        flexDirection: 'row',
        marginHorizontal: 15,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    }
})

export default SearchBar
