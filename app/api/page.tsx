'use client'
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import Link from 'next/link';

type Todo = {
  id: number;
  title: string;
}

const Todos = () => {
  const queryClient = useQueryClient()

  const { data, error, isLoading, } = useQuery({
    queryKey: ['api'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
    staleTime: 4000,
    gcTime: 10 * (60 * 1000),
    // refetchInterval: 4000
    refetchOnWindowFocus: false,
    // retry: 5
  })

  const {mutate, isPending, isSuccess, isError} = useMutation ({
    mutationFn: (newpost) => 
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newpost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      }).then((res) => res.json()),
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['api']})
      }
  })

  if(error || isError) return <div>Error loading data</div>
  if(isLoading) return <div>Loading...</div>
  return (
    <div>
      {isPending && <div>Adding new post</div>}
      <button onClick= {() => {
        mutate({
          userId: 5000,
          id: 4000,
          title: "hey myu name is james",
          body: "this is my first post",
        })
      }}
        
      >
        Add post</button>
      <div>
      
        {data?.map((item: Todo) => {
          return (
            <div>
              <p>{item.id}</p>
              <p>{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todos