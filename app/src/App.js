import React,{useState} from 'react'
import {Button,Divider,Text} from '@chakra-ui/react';
import Prime from './Components/Prime';
import Classic from './Components/Classic';
import Classic_Plus from './Components/Classic_Plus';
import Navbar from './Components/Navbar';
const App = () => {

  return (
    <>
        <div className='container mt-4 mb-5'>
          <Navbar/>
          <Divider className='mt-2' />
          <Prime/>
          <Divider className='mt-2' variant='dashed'  bgColor='black' />
          <Classic_Plus/>
          <Divider className='mt-2' variant='dashed'  bgColor='black' />
          <Classic/>
        </div>
    </>
  )
}

export default App