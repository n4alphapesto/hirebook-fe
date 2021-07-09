import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`


`
const Image = ({srcComponent, altText, width, height, restOfProps}) => {
    return (
        <StyledImage 
            src={srcComponent} 
            alt={altText} 
            width={width} 
            height={height}
            {...restOfProps}
        />
    )
}

export default Image
