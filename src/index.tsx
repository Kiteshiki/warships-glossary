import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { store } from 'store'
import App from './App'
import './index.css'

const client = new ApolloClient({
    uri: process.env.REACT_APP_BASE_URL,
    cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <App></App>
        </ApolloProvider>
    </Provider>,
)
