'use client'
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer";
const FetchSups = async ({ pageParam = 1 }) => {
  return await axios.get(`http://localhost:4000/animals/?_limit=10&_page=${pageParam}`)
}

const Infinite = () => {

  interface st {
    id: number,
    Rname: string,
    name: string,
    Mname: string
  }

  const { 
    data, 
    error, 
    isLoading, 
    fetchNextPage, 
    hasNextPage, 
  isFetchingNextPage 
  } = useInfiniteQuery({
    queryKey: ['animal'],  
    queryFn: FetchSups,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  })

  const {ref, inView} = useInView()

  useEffect(() => {
   if(inView){
    fetchNextPage()
   }
  }, [fetchNextPage, inView])
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div >
      {data?.pages?.map((page) => {
        return page?.data.map((animal: st) => {
          return (
            <div key={animal.id} className="">
              <p className="text-2xl py-10 bg-red-600 text-white my-3">{animal.name}</p>
            </div>
          )
        })
      })}

      {/* <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load more' : 'No more data'}
      </button> */}
      <div ref={ref}>{isFetchingNextPage && "Loading"}</div>
    </div>
  )
}

export default Infinite;
