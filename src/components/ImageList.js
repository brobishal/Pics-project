import React from "react";
import './ImageList.css';
import ImageCard from "./ImageCard";
const ImageList = (props) => {
  // console.log(props.images);

  // we didn't have to alweays return div or somthing element from componet
  // rather than return that array directly that better options
  // return props.images.map((image) =>{
  //   instead of writing images three times we destructuring
  //   const images = props.images.map((image) => {
  //     return <img  alt={image.description} key={image.id} src={image.urls.regular} />;
  //   });

  // const images = props.images.map(({ description, id, urls }) => {
    const images = props.images.map((image) => {
    // return <img alt={description} key={id} src={urls.regular} />;
    return <ImageCard  key={image.id} image={image}/>;

  });

  // we didn't have to alweays return div or somthing element from componet
  // rather than return that array directly that better options
  return <div className="image-list">{images}</div>;
};

export default ImageList;
