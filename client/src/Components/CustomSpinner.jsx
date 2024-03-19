import React from 'react';
import { Spinner } from '@chakra-ui/react';

const CustomSpinner = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
    <Spinner
      color="blue.500"
      boxSize="150px"
      speed="0.7s"
      thickness="5px"
    />
  </div>
  )
}

export default CustomSpinner;