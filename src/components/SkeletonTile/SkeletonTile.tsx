export const SkeletonTile = () => {
    return (
        <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto bg-gray-900">
            <div className="animate-pulse flex flex-wrap">
                <div className="rounded-md bg-slate-700 h-40 flex-grow w-full"></div>
                <div className="flex-1 space-y-6 pt-3">
                    <div className="h-2 bg-slate-700 rounded"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
