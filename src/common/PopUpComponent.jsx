import React from 'react'
import {Dialog, DialogContent } from '@material-ui/core'

const PopUpComponent = ({open, handleClose, children, restOfProps}) => {
    
    return (
        <Dialog
            maxWidth='xs' 
            fullWidth
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            {...restOfProps} 
        >
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
    
}



export default PopUpComponent