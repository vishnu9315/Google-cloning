import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Results from './Results'

const RoutesComponent = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />

        <Route exact path='/search' element={<Results />} />
        <Route exact path='/images' element={<Results />} />
        <Route exact path='/news' element={<Results />} />
        <Route exact path='/videos' element={<Results />} />


      </Routes>
    </div>
  )
}

export default RoutesComponent
