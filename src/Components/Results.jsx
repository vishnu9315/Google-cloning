import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {useResultsContext} from '../context/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
  const { results, getResults, isLoading, searchTerm } = useResultsContext();
  const location = useLocation();

  useEffect(() => {
    getResults(`/search?q=${searchTerm}&num=5`);
  }, [searchTerm]);

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case '/search':
      // Results >> Items >> Items array
      return (
        <div className='flex flex-wrap justify-between mt-10 space-y-6 sm:px-56'>
          {results?.items?.map(({ link, title, snippet}, index) => ( //checking if result is undefined or null the it will return undefined else it will map over the result.
            <div key={index} className='md:w-2/5 w-full'>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <p className='text-sm'>
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>
                <p className='text-sm dark:text-white'>
                  {
                    snippet
                  }
                </p>
              </a>
            </div>
          ))}
        </div>
      );

      // case '/image':
      //   return (
      //     //s
      //   )

    default:
      return 'ERROR';
  }
};

export default Results;
