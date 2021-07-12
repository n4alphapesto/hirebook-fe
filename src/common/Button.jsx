import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const MaterialUIButton = ({ buttonText, ...restOfProps }) => {
    return (
        <Button variant="contained" {...restOfProps} >{buttonText}</Button>
    )
}

MaterialUIButton.defaultProps = {
    buttonText: 'Click Me'

}

MaterialUIButton.propTypes = {
    buttonText: PropTypes.string
}

export { MaterialUIButton as Button }

