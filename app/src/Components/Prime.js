import React from 'react';
import {Button,Text} from '@chakra-ui/react';
const prime1=[1,2,3,4,5,6,7,8,9];
const prime2=[10,11,12,13,14,15,16,17,18];
const Prime = () => {
  return (
    <> <div className="row mt-3">
    <div className="col-md-12 mx-auto mt-2">
      <Text as='mark' fontSize='30px' fontWeight='50' color='tomato'>Prime Seats</Text>
    </div>
  </div>

  <div className="row mt-4">
      <div className="col-md-10 col-10 col-xs-10 mx-auto d-flex justify-content-around">
        {
          prime1.map((item)=>{
            return(<Button 
            colorScheme='red'
            key={item}
            ></Button>);
          })
        }
      </div> 
      <div className="col-md-10 col-10 col-xs-10 mt-1 mx-auto d-flex justify-content-around">
        {
          prime2.map((item)=>{
            return(<Button 
            colorScheme='red'
            key={item}
            ></Button>);
          })
        }
      </div> 
  </div></>
  )
}

export default Prime