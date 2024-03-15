const SkeletonCard = () => {
    return (
        <div className="border shadow rounded-md w-full h-[450px] lg:w-[700px] lg:h-[250px] my-2">
            <div className="animate-pulse flex space-x-4 h-full">
                <div className="lg:w-[300px] h-full bg-slate-300"></div>
                <div className='absolute top-2 px-2 flex gap-2font-bold'>
                    <div className='border w-14 py-1 px-2 bg-slate-300 rounded-full'>
                    </div>
                    <div className='border w-14 py-1 px-2 bg-slate-300 rounded-full'>
                    </div>
                </div>
                <div className="flex-1 space-y-6 py-1">
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


export default SkeletonCard;