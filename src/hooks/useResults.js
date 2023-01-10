import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (s_term) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: s_term,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Something went wrong, please try again later.')
            console.log(err)
        }
        // console.log(response.data)
        // console.log('--------------------------------\n')
    }

    useEffect(() => {
        searchApi('pizza')
    }, [])

    return [searchApi, results, errorMessage]
}