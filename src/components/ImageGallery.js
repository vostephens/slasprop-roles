import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import landImage from '../assets/land-image.jpg';
import landImage1 from "../assets/land-image-1.jpg";
import landImage2 from "../assets/land-image-2.jpg";
import landImage3 from "../assets/land-image-3.jpg";
import { Container } from "@mui/material";


const ImageGallery = () =>{
    const images = [
        {
          original: landImage,
          thumbnail: landImage,
          bnailWidth:'100px',
          thumbnailHeight:'70px',

        },
        {
            original: landImage1,
            thumbnail: landImage1,
            thumbnailWidth:'100px',
            thumbnailHeight:'70px',

            
        },
        {
            original: landImage2,
            thumbnail: landImage2,
            thumbnailWidth:'100px',
            thumbnailHeight:'70px',

            
        },
        {
            original: landImage3,
            thumbnail: landImage3,
            thumbnailWidth:'100px',
            thumbnailHeight:'70px',

            
        },
      ];
      

    return(
            <ReactImageGallery items={images} 
                            showPlayButton={false}
                            showFullscreenButton={false}
                            thumbnailPosition="right" 
                            lazyLoad={true}
                            
            />
    )
}

export default ImageGallery