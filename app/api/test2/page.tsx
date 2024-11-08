'use client'
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from 'react'

const fetchSups = async (pageId: number) => {
   return await axios.get(`http://localhost:4000/fruit/?_limit=2&_page=${pageId}`)
}

const Test = () => {
  const [page, setPage] = useState(1)

  interface st {
    id: number,
    Rname: string,
    name: string,
    
    Mname: string
  }

 
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['api', page],  
    queryFn: () => fetchSups(page),
    staleTime: 4000,
    gcTime: 10 * (60 * 1000),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData
  })

  return (
    <div>
      <button onClick={() => refetch()}>fetch Data</button>

      {data?.data.map((item: st, i: string) => {
        return (
          <main key={i}>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.Mname}</p>
          </main>
        )
      })}

      <button onClick={() => setPage(next => next + 1)} disabled={page === 5}>
        Next
      </button>
      <button onClick={() => setPage(prev => prev - 1)} disabled={page === 1}>
        Prev
      </button>
    </div>
  )
}

export default Test