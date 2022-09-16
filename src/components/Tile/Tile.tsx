import { Vehicle } from 'typings/vehicle'

interface TileProps {
    entity: Vehicle
}

export const Tile = ({ entity }: TileProps) => {
    return (
        <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto bg-gray-900">
            <div className="flex flex-wrap">
                <div className="w-full aspect-[109/64]">
                    <img src={entity.icons.medium} alt={entity.title} loading="lazy" />
                </div>
                <div className="flex-1 space-y-2 pt-4">
                    <div className="text-lg">{entity.title}</div>
                    <div
                        className="font-light text-gray-300"
                        dangerouslySetInnerHTML={{ __html: entity.description }}
                    />
                </div>
            </div>
        </div>
    )
}
