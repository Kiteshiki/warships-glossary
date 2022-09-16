import { SkeletonGrid, Tile } from 'components'
import { Vehicle } from 'typings/vehicle'

interface WallProps {
    entities?: Vehicle[]
    loading: boolean
}

export const Wall = ({ entities = [], loading }: WallProps) => {
    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {loading && <SkeletonGrid size={9} />}

            {!loading &&
                entities.map((entity, index) => (
                    <Tile key={entity.title + index} entity={entity} />
                ))}
        </div>
    )
}
