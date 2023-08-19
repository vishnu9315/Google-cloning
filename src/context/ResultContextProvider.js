import { useContext, createContext, useState } from "react";


//creating the context which will be used to store and share the state between different components
const ResultContext = createContext()
const baseUrl = "https://google-search72.p.rapidapi.com"


//we will use this resultContextProvider to wrap the children component..we use it pass the props from parent to child component
export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

//videos //images //news
const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'Api_key',
            'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
          }
    })


    const data = await response.json();
    console.log(data)
    setIsLoading(false)
    setResults(data)

}

    return (
        <ResultContext.Provider value = { {results, getResults, isLoading, searchTerm, setSearchTerm}}>
            {children}
        </ResultContext.Provider>
    )

}

export const useResultsContext = () => useContext(ResultContext)

