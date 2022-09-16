import { useQuery } from '@apollo/client'
import { DropdownFilter } from 'components'
import { GET_FILTERS } from 'gql/queries'
import { useAppDispatch, useAppSelector } from 'hooks'
import { updateFilters } from 'store/filters'
import { VehicleNation, VehicleType } from 'typings/vehicle'

interface FiltersType {
    nations: VehicleNation[]
    vehicleTypes: VehicleType[]
}

export const Filters = () => {
    const { loading, error, data } = useQuery<FiltersType>(GET_FILTERS)
    const filtersState = useAppSelector((state) => state.filters)
    const dispatch = useAppDispatch()

    const onChange = (data: string[], name: string) => {
        dispatch(updateFilters({ ...filtersState, [name]: data }))
    }

    if (loading) return <div className="animate-pulse h-16 rounded-sm bg-slate-600" />
    if (error) {
        console.error({ error })
        return null
    }

    return (
        <div className="flex flex-wrap gap-4 sticky bg-cyan-900 z-10 top-0 py-4">
            <DropdownFilter
                name="nations"
                label="Nations"
                filters={data?.nations}
                handleChange={onChange}
            />
            <DropdownFilter
                name="vehicleTypes"
                label="Vehicle types"
                filters={data?.vehicleTypes}
                handleChange={onChange}
            />
        </div>
    )
}
