import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImage = styled.img`
    border-radius: ${({borderRadius}) => borderRadius};
`

const Image = ({src, alt, width, height, borderRadius, restOfProps}) => {
    return (
        <StyledImage 
            src={src} 
            alt={alt} 
            width={width} 
            height={height}
            borderRadius={borderRadius}
            {...restOfProps}
        />
    )
}


Image.defaultProps = {
    borderRadius: '0%'

}

Image.propTypes = {
    borderRadius: PropTypes.string,

}


export default Image
