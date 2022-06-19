import React from "react";
import { Button, Text } from "@chakra-ui/react";
const classic1 = [40, 41, 42, 43, 44, 45, 46, 47, 48];
const classic2 = [49, 50, 51, 52, 53, 54, 56, 57, 58];
const Classic = () => {
  return (
    <>
      <div className="row mt-3">
        <div className="col-md-12 mx-auto mt-2">
          <Text as="mark" fontSize="30px" fontWeight="50" color="violet">
            Classic Seats
          </Text>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-10 col-10 col-xs-10 mt-1 mx-auto d-flex justify-content-around">
          {classic1.map((item) => {
            return <Button  key={item} colorScheme="yellow"></Button>;
          })}
        </div>
        <div className="col-md-10 mt-2 col-10 col-xs-10 mt-1 mx-auto d-flex justify-content-around">
          {classic2.map((item) => {
            return <Button  key={item} colorScheme="yellow"></Button>;
          })}
        </div>
      </div>
    </>
  );
};

export default Classic;
