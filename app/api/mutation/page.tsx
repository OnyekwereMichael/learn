'use client'
import { useInfiniteQuery, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from 'react'

const FetchPost = async () => {
  return await axios.get(`http://localhost:4000/post`)
}

const FetchPostr = async (post: any) => {
  return await axios.post(`http://localhost:4000/post`, post)
}

const Mutation = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

  interface st {
    id: number,
    title: string
    body:string
  }
  const queryClient = useQueryClient()
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['api'],
    queryFn: async () => FetchPost(),
    staleTime: 4000,
    gcTime: 10 * (60 * 1000),
    // refetchInterval: 4000
    refetchOnWindowFocus: false,
    // retry: 5
    enabled: false
  })

  const {mutate} = useMutation({
    mutationFn: async (post: any) => FetchPostr(post),
    onSuccess: (newData) => {
    //   refetch()
    // queryClient.invalidateQueries({queryKey: ['api']})


    // its used to update the query cache and refetch the query
    // queryClient.setQueryData(['api'], (oldData: any) => {
    //   return {
    //     ...oldData,
    //     data: [...oldData.data, newData.data]
    //   }
    // })

    },

    onMutate: async (newPost) => {
       await queryClient.cancelQueries({queryKey: ['api']})
       const Prev = queryClient.getQueryData(['api']);
       queryClient.setQueryData(['api'], (oldData: any) => {
        return {
          ...oldData,
          data: [...oldData.data, {...newPost, id: String(oldData?.data.length + 1)}]
        }
      })

      return {
        Prev
      }
    },

    onError: (_error, _post, context ) => {
        queryClient.setQueryData(['api'], context?.Prev)
    },

    onSettled: () => {
        queryClient.invalidateQueries(['api'])
        // refetch()
    }
  })

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const handleSubmt = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log({title, body});
//   PASSING IN THE PAYLoad
  mutate({title, body})
  setBody('')
 setTitle('')
  
  }

  return (
    <div>
        <form onSubmit={handleSubmt}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" className="border-2" />
        <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="body" className="border-2"/>
        <button type="submit">Post</button>
        </form>
     <div>
      
      {data?.data.map((item:st) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </div>
        )
      })}
    </div>
    
      <button onClick={() => refetch()}>Fetch Post</button>
    </div>
  )
}

export default Mutation;
