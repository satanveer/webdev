import React from 'react'
import Link from 'next/link'


export function Feed({videos}:{videos:any}) {
    
    return (
        <div className='w-full grid grid-rows-3 grid-cols-1 gap-4 ml-64 md:gird-cols-3 lg:gird-cols-5 xl:grid-cols-5'>
            {videos && videos.map((item:any,index:any) => (

            <div className='w-full'>
                <Link href={item.ln}>
                    <div className='flex flex-col'>
                            <div>
                                <img src={item.thumbnail} alt='thumbnail' width={288} height={192}className='rounded-xl'></img>
                            </div>
                            <div className='flex gap-2 pt-4'>
                                <div>
                                    <img src={item.creator} alt='creator' width={40} height={40} className='rounded-[1000px]'></img>
                                </div>

                                <div>
                                    <h1 className='bg-transparent flex text-gray-300 text-sm'>{item.title}</h1>
                                    <h2 className='text-gray-300 text-sm'>{item.views}</h2>
                                </div>
                            </div>
                    </div>
                    
            </Link>
            </div>
        ))}
      </div>
)
    
}
