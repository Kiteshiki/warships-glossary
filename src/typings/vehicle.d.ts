export {}
declare module 'typings/vehicle' {
    interface Icon {
        small?: string
        medium?: string
        large?: string
        default?: string
    }

    type VehicleIcon = Pick<Icon, 'medium' | 'large'>
    type VehicleTypeIcon = Pick<Icon, 'default'>
    type VehicleNationIcon = Pick<Icon, 'small' | 'medium' | 'large'>

    interface VehicleType {
        title: string
        name: string
        icons: VehicleTypeIcon
    }

    interface VehicleNation {
        title: string
        name: string
        color: string
        icons: VehicleNationIcon
    }

    interface Vehicle {
        title: string
        description: string
        icons: VehicleIcon
        level: number
        type: VehicleType
    }
}
