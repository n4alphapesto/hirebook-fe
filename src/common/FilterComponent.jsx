import React from 'react'
import { Card, CardContent, Typography, FormControl, Radio, RadioGroup, FormControlLabel, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}));

const FilterComponent = ({title, options}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(options[0]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" align="center">{title}</Typography>
                
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        {
                            options.map((item, i) => {
                                return (
                                    <FormControlLabel key={i} value={item} control={<Radio />} label={item} />
                                )
                            })
                        }
                        
        
                    </RadioGroup>
                </FormControl>
                {/*<Typography>{value}</Typography>*/}
            </CardContent>
        </Card>

    )
}

export default FilterComponent