'use client'
import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

type Todo = {
  id: number;
  title: string;
}

const FetchList = async () => {
return await axios.get('Listing/GetCatalogue/{catalogueId}')
}

const Tos = () => {
  const queryClient = useQueryClient()

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['api'],
    queryFn: () => FetchList(),
    staleTime: 4000,
    gcTime: 10 * (60 * 1000),
    // refetchInterval: 4000
    refetchOnWindowFocus: false,
    // retry: 5
  })

//   const {mutate, isPending, isSuccess, isError} = useMutation ({
//     mutationFn: (newpost) => 
//       fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify(newpost),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         }
//       }).then((res) => res.json()),
//       onSuccess: () => {
//         queryClient.invalidateQueries({queryKey: ['api']})
//       }
//   })

  if(isError) return <div>{error.message}</div>
  if(isLoading) return <div>Loading...</div>
  return (
    <div>
      <div>
      
        {data?.data.map((item: Todo) => {
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

export default Tos