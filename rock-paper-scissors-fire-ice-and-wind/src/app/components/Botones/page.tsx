import React from 'react';
import "./page.css";

interface ImageWithTextProps {
  imageUrl: string;
  text: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, text }) => {
  return (
    <div className="container">
      <img src={imageUrl} alt="Imagen" className="imagenn" />
      <p className="text">{text}</p>
    </div>
  );
};

export default ImageWithText;