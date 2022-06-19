import React from "react";
import { Button, Text } from "@chakra-ui/react";
const classic_plus1 = [19, 20, 21, 22, 23, 24,25];
const classic_plus2 = [ 26, 27, 28, 29, 30,31,32];
const classic_plus3 = [33, 34, 35, 36,37,38,39];
const Classic_Plus = () => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-md-12 mx-auto mt-2">
          <Text as="mark" fontSize="30px" fontWeight="50" color="green">
            Classic Plus Seats
          </Text>
        </div>
      </div>
      <div className="row mt-4">
          <div className="col-md-10 col-10 col-xs-10 mx-auto d-flex justify-content-around">
            {
                classic_plus1.map((item)=>{
                    return(<Button 
                     key={item}
                    colorScheme='green'
                    ></Button>);
                })
            }
          </div>
          <div className="col-md-10 col-10 mt-2 col-xs-10 mx-auto d-flex justify-content-around">
            {
                classic_plus2.map((item)=>{
                    return(<Button
                     key={item} 
                    colorScheme='green'
                    ></Button>);
                })
            }
          </div>
          <div className="col-md-10 mt-2 col-10 col-xs-10 mx-auto d-flex justify-content-around">
            {
                classic_plus3.map((item)=>{
                    return(<Button 
                     key={item}
                    colorScheme='green'
                    ></Button>);
                })
            }
          </div>
        </div>
    </>
  );
};

export default Classic_Plus;
