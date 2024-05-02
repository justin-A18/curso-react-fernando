import { ImageList, ImageListItem } from '@mui/material';

export const ImageGallery = ({ images }) => {
	return (
		<ImageList
			sx={{ width: '100%', height: 400, mx: 'auto' }}
			cols={4}
			rowHeight={200}>
			{images.map((url, i) => (
				<ImageListItem key={i}>
					<img
						srcSet={`${url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
						src={`${url}?w=164&h=164&fit=crop&auto=format`}
						alt={`image-${i}`}
						loading='lazy'
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};
