import { SkeletonTile } from 'components'

interface SkeletonGridProps {
    size?: number
}

export const SkeletonGrid = ({ size = 9 }: SkeletonGridProps) => (
    <>
        {Array(size)
            .fill(null)
            .map((_, index) => (
                <SkeletonTile key={index} />
            ))}
    </>
)
