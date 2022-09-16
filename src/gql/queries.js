import { gql } from '@apollo/client'

// Я бы предпочел сделать здесь лимит на vehicle (limit: 12), но сервер с этим параметром возвращает 400 bad request :(
export const GET_VEHICLES = gql`
    query GetVehicles {
        vehicles {
            title
            description
            icons {
                medium
            }
            level
            type {
                name
                title
                icons {
                    default
                }
            }
            nation {
                name
                title
                color
                icons {
                    small
                }
            }
        }
    }
`

export const GET_FILTERS = gql`
    query {
        vehicleTypes {
            title
            name
        }

        nations {
            title
            name
        }
    }
`
