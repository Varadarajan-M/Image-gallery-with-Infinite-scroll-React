import React from 'react';
import UnsplashImage from './UnsplashImage';

const ImageGallery = ({ images }) => {
	return (
		<div className='gallery'>
			{images.map((image) => (
				<UnsplashImage
					key={image.id}
					src={image.urls.small}
					alt={image.alt_description}
				/>
			))}
		</div>
	);
};

export default ImageGallery;
