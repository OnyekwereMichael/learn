'use client'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

const UseSuperheroes = () => {
  const {pageNumber, setPageNumber } = useState(1)
  const fetchSupHero = async (pageNumber) => {
    return await axios.get(`http://localhost:4000/superheros`);
  };

  const { data, error, isError, isLoading, isFetching, refetch, isSuccess, isLoadingError } = useQuery({
    queryKey: ['superhero'],
    queryFn: fetchSupHero(pageNumber),
    gcTime: 3000,
    retry: 5,
    enabled: false, // Do not fetch on component mount by default
    // staleTime: 4000,
  });

  const onSuccess = (data) => {
    console.log('data fetching was successful', data);
  };

  const onError = (error) => {
    console.log('data fetching failed', error);
  };

  return {
    data,
    error,
    isError,
    isLoading,
    isFetching,
    refetch,
    isSuccess,
    isLoadingError,
    onSuccess,
    onError,
  };
};

export default UseSuperheroes;