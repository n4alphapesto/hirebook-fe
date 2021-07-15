import React, { useState } from 'react';
import {
    Typography,
    Grid,
    Box,
    Button,
    CircularProgress,
    makeStyles
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Step3 = ({ back, finish }) => {
    const classes = useStyles();
    const [file, _setFile] = useState();
    const [isUploading, _setIsUploading] = useState(false);

    const transformData = () => {
        const data = {
            fileId: file._id
        }

        return data
    }

    const handleBack = () => {
        // const data = transformData();

        back();
    }

    const handleSubmit = () => {
        const data = transformData();

        finish(data)
    }

    const handleFileChange = (event) => {
        _setIsUploading(true);

        const file = event.target.files[0]

        _setFile(file);
        //TODO: Write Logic to File Upload 
    }

    return (
        <>
            <Box mb={5} align="center">
                <Typography
                    variant="h4"
                    className="skill_form_titile"
                >
                    Step 3/3: Upload Resume
                </Typography>
                <Typography
                    variant="subtitle2"
                    className="skill_form_titile"
                >
                    An updated resume is key to being shortlisted.
                </Typography>
            </Box>


            <Grid item>
                <Grid container direction="column">
                    <form>
                        <Grid item>
                            <div className={classes.fileDropZone}>
                                <input className={classes.fileInputControl} onChange={handleFileChange} type="file" accept="application/pdf, text/docx, image/jpeg, image/png" />
                                {
                                    isUploading &&
                                    <div className={classes.loadingOverlay}>
                                        <CircularProgress />
                                    </div>
                                }

                            </div>
                        </Grid>

                        <Grid item>
                            <Box mt={4} justifyContent="space-between" className={classes.buttonContainer}>
                                <Button onClick={handleBack} endIcon={<ArrowBackIcon />} variant="outlined" color="primary"  >
                                    Back
                                </Button>

                                <Button type="submit" onClick={handleSubmit} endIcon={<ArrowForwardIcon />} variant="outlined" color="primary"  >
                                    Finish
                                </Button>
                            </Box>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </>
    );
}

export default Step3;

const useStyles = makeStyles((theme) => ({
    label: {
        fontWeight: 'bold',
    },

    fileDropZone: {
        minHeight: 200,
        width: 'auto',
        border: '2px dashed grey',
        borderRadius: 5,
        position: 'relative',
    },

    fileInputControl: {
        minHeight: 200,
        height: '100%',
        width: '100%',
        opacity: 0
    },
    buttonContainer: {
        display: 'flex'
    },

    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,0.1)'
    }
}));