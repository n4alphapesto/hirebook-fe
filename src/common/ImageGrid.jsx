import React from 'react';
import {ImageList, ImageListItem} from '@material-ui/core';
import Image from './Image';
import PropTypes from 'prop-types';

const ImageGrid = ({width, height, cols, rowHeight, imageData}) => {
    return (
        <ImageList sx={{ width: width, height: height }} cols={cols} rowHeight={rowHeight}>
            {imageData.map((item) => (
                <ImageListItem key={item.img}>
                    <Image
                        srcSet={
                            `${item.img}?w=${item.width}&h=${item.height}&fit=crop&auto=format 1x,
                            ${item.img}?w=${item.width}&h=${item.height}&fit=crop&auto=format&dpr=2 2x`
                        }
                        alt={item.altText}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

ImageGrid.defaultProps = {
    width: 500, 
    height: 450, 
    cols: 4, 
    rowHeight: 164,

}

ImageGrid.propTypes = {
    width: PropTypes.number, 
    height: PropTypes.number, 
    cols: PropTypes.number, 
    rowHeight: PropTypes.number, 
    imageData: PropTypes.object,  

}

export default ImageGrid 