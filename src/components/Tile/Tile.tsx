import { convertNumberToRoman } from 'helpers'
import { Vehicle } from 'typings/vehicle'

interface TileProps {
    entity: Vehicle
}

export const Tile = ({ entity }: TileProps) => {
    return (
        <div className="shadow rounded-md p-4 max-w-lg w-full mx-auto bg-gray-900">
            <div className="flex flex-wrap">
                <div className="w-full aspect-[435/256] relative">
                    <img
                        className="mx-auto"
                        src={entity.icons.medium}
                        alt={entity.title}
                        loading="lazy"
                    />

                    <div className="absolute top-0 right-0">
                        <img
                            width={52}
                            height={32}
                            src={entity.nation.icons.small}
                            alt={entity.nation.title}
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="flex-1 space-y-2 pt-4">
                    <div className="flex justify-between">
                        <div className="text-xl">{entity.title}</div>
                        <div className="font-light whitespace-nowrap text-cyan-300">
                            Tier {convertNumberToRoman(entity.level)}
                        </div>
                    </div>
                    <div className="font-thin">
                        {entity.type.title}
                        <img
                            className="inline-block ml-2"
                            src={entity.type.icons.default}
                            alt={entity.type.title}
                        />
                    </div>
                    <div
                        className="font-light text-gray-400"
                        dangerouslySetInnerHTML={{ __html: entity.description }}
                    />
                </div>
            </div>
        </div>
    )
}
