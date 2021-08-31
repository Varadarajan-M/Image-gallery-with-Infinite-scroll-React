import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import { URL } from '../constants';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';

const Container = () => {
	const [images, setImages] = useState([]);

	const fetchImages = async () => {
		const res = await fetch(URL);
		const imageData = await res.json();
		setImages((p) => [...p, ...imageData]);
	};

	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<div>
			<InfiniteScroll
				next={fetchImages}
				loader={<Loader />}
				hasMore
				dataLength={images.length}
			>
				<ImageGallery images={images} />
			</InfiniteScroll>
		</div>
	);
};

export default Container;
