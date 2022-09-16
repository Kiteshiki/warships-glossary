import { useQuery } from '@apollo/client'
import { GET_VEHICLES } from 'gql/queries'
import { Vehicle } from 'typings/vehicle'
import { Wall } from 'components'

const Error = () => (
    <div className="text-3xl text-red-800 text-center">Oops, something went wrong.</div>
)

function App() {
    const { loading, error, data } = useQuery<{ vehicles: Vehicle[] }>(GET_VEHICLES)

    return (
        <div className="bg-cyan-900 min-h-screen relative text-white p-4">
            <h1 className="my-6 md:my-12 text-4xl text-center block">Warships Glossary</h1>

            {error ? <Error /> : <Wall entities={data?.vehicles} loading={loading} />}
        </div>
    )
}

export default App
