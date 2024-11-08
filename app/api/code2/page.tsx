// 'use client'
// import { useQuery, useMutation, useQueryClient  } from '@tanstack/react-query';
// import axios from 'axios';


// const Code = () => {
//     // const { error, isLoading} = useQuery({
//     //     queryKey: ['TODO'],
//     //     queryFn: async () => {
//     //      const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
//     //      console.log(data);
         
//     //     }
//     // })

//     const { data, error, isLoading } = useQuery({
//         queryKey: ['todo'],
//         queryFn: async () =>{
//             const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
//             console.log(data);   
//         }
            

   
//         // refetchInterval: 4000
//         // refetchOnWindowFocus: false,
//         // retry: 5
//       }) 

//     if(error) return <div>Error loading page</div>
//     if(isLoading) return <div>Loading page content</div>

//       return (
//     <div>
//      <div>
//         {data?.map((todo: any) => (
//           <div key={todo.id}>{todo.name}</div>
//         ))}
//      </div>
//     </div>
//   )
//     }


// export default Code


import React from 'react'
import Link from 'next/link'
import UseSuperheroes from '@/app/hooks/useGetSuperhhero'

const page = ({propertyId}: {propertyId: string}) => {
    const { data, isError, isLoading, refetch } = UseSuperheroes(propertyId); 
  return (
    <div>
       <Link href={`/api/test2?id=${data?.id}`}>Click to move</Link>
    </div>
  )
}

export default page
