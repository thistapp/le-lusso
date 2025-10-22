'use client'

import { CategoryConstructionType } from '@/models/partconstruction/CategoryConstruc'
import { useContext, useEffect, useState } from 'react'
import { ConstrucContext } from '../Utils/ConstructionContext'
import { useSearchParams } from 'next/navigation'

const StepIconComponents = ({
    category,
    IconFunc,
}: {
    category: CategoryConstructionType[]
    IconFunc: (value: string) => React.ReactNode
}) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('type')
    const [active, setActive] = useState(category[0].value)
    const [filterCate, setFilterCate] = useState<CategoryConstructionType[]>([])
    const context = useContext(ConstrucContext)
    if (!context) {
        throw new Error('PortContext must be used within a PortProvider')
    }
    const { setIsCate } = context

    const handleChange = (type: string) => {
        setActive(type)
        setIsCate(type)
    }

    useEffect(() => {
        setActive(search ? search : category[0].value)
        setIsCate(search ? search : category[0].value)
        setFilterCate(category.filter((data) => data.value !== 'work-flow'))
    }, [search])
    // console.log(context)
    return (
        <>
            <div className="w-full hidden lg:flex flex-wrap justify-center relative">
                {filterCate.map((o, i) => (
                    <div
                        className="flex flex-col transition-[0.3s] relative w-1/5 mpy-3 items-center px-2 mb-4"
                        key={i}
                    >
                        <div
                            className={`w-[60px] p-2 icon-part rounded-full border-2 ${
                                active !== o.value
                                    ? 'bg-white text-black'
                                    : 'bg-black text-[#DFD9CA]'
                            } border hover:bg-white hover:text-black hover:border-black transition-[0.3s] shadow-lg mb-3`}
                            onClick={() => handleChange(o.value)}
                        >
                            {IconFunc(o.value)}
                        </div>
                        <p>{o.title}</p>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-wrap lg:hidden">
                {filterCate.map((o, i) => (
                    <div
                        className="relative w-1/2 p-1"
                        key={i}
                        onClick={() => handleChange(o.value)}
                    >
                        <div
                            className={`flex flex-col transition-[0.3s] py-3 items-center ${
                                active !== o.value
                                    ? 'border'
                                    : 'border border-[#dfd1af] bg-[#DFD9CA]'
                            } px-2 shadow-lg rounded-lg`}
                        >
                            <div
                                className={`w-[60px] p-2 icon-part rounded-full border-2 text-black ${
                                    active !== o.value
                                        ? 'bg-white'
                                        : 'bg-[#dfd1af] border-[#dfd1af]'
                                } transition-[0.3s] shadow-lg mb-3`}
                            >
                                {IconFunc(o.value)}
                            </div>
                            <p className="text-xs">{o.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default StepIconComponents
