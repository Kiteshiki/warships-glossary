import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

interface FiltersState {
    nations: string[]
    vehicleTypes: string[]
}

const initialState: FiltersState = {
    nations: [],
    vehicleTypes: [],
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        updateFilters: (state, action: PayloadAction<FiltersState>) => {
            state.nations = action.payload.nations
            state.vehicleTypes = action.payload.vehicleTypes
        },
    },
})

export const { updateFilters } = filtersSlice.actions
export const selectFilters = (state: RootState) => state.filters

export default filtersSlice.reducer
