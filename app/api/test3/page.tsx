'use client'
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React from 'react'

const FetchSups = async ({ pageParam = 1 }) => {
  return await axios.get(`http://localhost:4000/animals/?_limit=2&_page=${pageParam}`)
}

const InfiniteQueries = () => {

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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      {data?.pages?.map((page) => {
        return page?.data.map((fruit: st) => {
          return (
            <div key={fruit.id}>
              <p>{fruit.name}</p>
            </div>
          )
        })
      })}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load more' : 'No more data'}
      </button>
    </div>
  )
}

export default InfiniteQueries;
