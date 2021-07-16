import React from "react";
import { ImageList, ImageListItem } from "@material-ui/core";
//import PropTypes from 'prop-types';

const ImageGrid = ({ width, height, cols, rowHeight, children }) => {
  return (
    <ImageList
      sx={{ width: width, height: height }}
      cols={cols}
      rowHeight={rowHeight}
    >
      {children.map((item, i) => {
        return <ImageListItem key={i}>{item}</ImageListItem>;
      })}
    </ImageList>
  );
};

/*ImageGrid.defaultProps = {
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
*/
export default ImageGrid;
