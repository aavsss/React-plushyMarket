import React from "react";
// Images
import NoImage from "../images/no_image.jpg";
// Components
import Grid from "./Grid";
import Product from "./Product";
import Spinner from "./Spinner";
import Upload from "./Upload";
// hooks
import usePlushiesFetch from "../hooks/usePlushiesFetch";

const SellerHome = () => {
  // const { 
  //   data, 
  //   error, 
  //   isError, 
  //   isLoading
  // } = usePlushiesFetch();

  // if (isLoading) return (
  //   <Spinner />
  // )

  // if (isError) return (
  //   <div> Something went wrong! {error}</div>
  // )

  return (
    <>
      {/* <Grid header="Your Products">
        {data.map(plushy => (
          <Product
              key={plushy.id}
              plushyId={plushy.id}
              name={plushy.name}
              price={plushy.price}
              imageUrl={plushy.imageUrl? plushy.imageUrl : NoImage}
              clickable={true}
          />
          ))}
        </Grid> */}
        <Upload />
    </>
  )
};

export default SellerHome;
