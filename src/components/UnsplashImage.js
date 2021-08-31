import React from 'react';

const UnsplashImage = ({ src, alt }) => {
	return (
		<div className='card'>
			<div>
				<img className='card-image' src={src} alt={alt} />
			</div>
		</div>
	);
};

export default UnsplashImage;
