import { Filters, SkeletonGrid, Tile } from 'components'
import { useAppSelector } from 'hooks'
import { Vehicle, VehicleNation, VehicleType } from 'typings/vehicle'

interface WallProps {
    entities?: Vehicle[]
    filters?: {
        nations: VehicleNation[]
        types: VehicleType[]
    }
    loading: boolean
}

export const Wall = ({ entities = [], loading }: WallProps) => {
    const filtersState = useAppSelector((state) => state.filters)

    const getFilteredEntities = () => {
        const { nations, vehicleTypes } = filtersState
        if (!nations.length && !vehicleTypes.length) return entities

        return entities.filter((entity) => {
            const filtered = {
                nations: nations.length > 0 ? nations.includes(entity.nation.name) : true,
                vehicleTypes:
                    vehicleTypes.length > 0 ? vehicleTypes.includes(entity.type.name) : true,
            }

            return filtered.nations && filtered.vehicleTypes
        })
    }

    return (
        <div className="container mx-auto space-y-8">
            <Filters />

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {loading && <SkeletonGrid size={9} />}

                {!loading &&
                    getFilteredEntities().map((entity, index) => (
                        <Tile key={entity.title + index} entity={entity} />
                    ))}
            </div>
        </div>
    )
}
