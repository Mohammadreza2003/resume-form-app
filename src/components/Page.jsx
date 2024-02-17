export default function Page({ children, className, pageNumber, isInnerPage = true }) {
    let baseInfo
    let jobTitle;
    if (localStorage.formField0) {
        baseInfo = JSON.parse(localStorage.formField0)
        jobTitle = baseInfo.jobTitle;
    }
    return (
        <div className="relative flex justify-center items-center p-10 w-[990px] max-w-[990px] max-h-[1404px] h-[1404px] border border-solid border-gray-300 shadow-sm rounded m-auto">
            {isInnerPage ?
                <div className="border-2 border-solid border-orange-500 h-[1320px] w-full">
                    <div className="relative w-full h-6 bg-orange-500 mt-6 px-12 text-white">
                        {pageNumber
                            ?
                            <div className="absolute flex justify-center items-center w-[40px] h-[40px] -top-2 left-20 bg-white shadow-lg rotate-[45deg] text-black border border-solid border-orange-600 rounded-sm">
                                <div className="-rotate-[45deg]">{pageNumber}</div>
                            </div>
                            : null
                        }
                        {jobTitle}
                    </div>
                    <div className={`${className} flex flex-col gap-6 p-6`}>
                        {children}
                    </div>
                </div>
                :
                <div className="h-[1320px] w-full">
                    {children}
                </div>
            }
        </div>
    )
}