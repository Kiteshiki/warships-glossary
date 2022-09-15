import ReactDOM from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import App from './App'
import './index.css'

const client = new ApolloClient({
    uri: 'https://vortex.worldofwarships.ru/api/graphql/glossary/',
    cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <ApolloProvider client={client}>
        <App></App>
    </ApolloProvider>,
)
