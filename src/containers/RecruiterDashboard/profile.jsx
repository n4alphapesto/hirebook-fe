import { React, useState, useEffect } from "react";
import {
  Link,
  Typography,
  IconButton,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
//import { getUserApi } from "../../api/common";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    maxWidth: "1000px",
    height: "80%",
    //border: "2px solid blue",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  companyDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  companyName: { margin: "10px" },
  socialLinks: { margin: "10px", textAlign: "left" },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    //marginBottom: theme.spacing(1),
    fontWeight: "900",
  },
  editIcon: {
    //border: "2px solid black",
    //borderRadius: "50%",
    height: theme.spacing(4),
  },
  about: {
    width: "100%",
  },
  companyPhotos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    border: "2px solid red",
    width: "100%",
  },
}));
const RecruiterProfile = () => {
  const classes = useStyles();

  // const [recruiter, setRecruiter] = useState();
  // useEffect(() => {
  //   // getUserApi().then((res) => {
  //   //   console.log(res.data.data.recruiter);
  //   //   setRecruiter(res.data.data.recruiter);
  //   // });
  // }, [recruiter]);

  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <div className={classes.title}>
            <Typography variant="body2"></Typography>
            <IconButton>
              <Link underling="none" href="/onboarding">
                <EditIcon className={classes.editIcon} />
              </Link>
            </IconButton>
          </div>
          {/*
          <form onSubmit={handleSubmit}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} md={4} className={classes.companyDetails}>
                <Box className={classes.companyLogo}>
                  <img src={""} alt={"company logo"} width="100%" height={82} />
                </Box>
                <Box>
                  <Typography variant="h6" className={classes.title}>
                    Company Details:
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="subtitle1">Company Name:</Typography>
                  <Typography variant="body2">
                    {recruiter.companyName}
                  </Typography>

                  <Typography variant="subtitlte1">Locations:</Typography>
                  <Typography variant="body2">
                    {recruiter.locations.join(", ")}
                  </Typography>
                  <Typography variant="subtitlte1">Foundation year:</Typography>
                  <Typography variant="body2">
                    {recruiter.foundationYear}
                  </Typography>
                  <Typography variant="subtitlte1">
                    Number of employees:
                  </Typography>
                  <Typography variant="body2">
                    {recruiter.noOfEmployees}
                  </Typography>
                  <Typography variant="subtitlte1">Twitter Profile:</Typography>
                  <Typography variant="body2">
                    {recruiter.twitterProfile}
                  </Typography>
                  <Typography variant="subtitlte1">
                    Facebook Profile:
                  </Typography>
                  <Typography variant="body2">
                    {recruiter.facebookProfile}
                  </Typography>
                  <Typography variant="subtitlte1">
                    LinkedIn Profile:
                  </Typography>
                  <Typography variant="body2">
                    {recruiter.linkedInProfile}
                  </Typography>
                </Box>
                <Box></Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box>
                  <Typography variant="h6" className={classes.title}>
                    About Company
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="body2">
                    {recruiter.aboutCompany}
                  </Typography>
                </Box>
                <Box></Box>
                <Box>
                  <Typography variant="h6" className={classes.title}>
                    Office Photos
                  </Typography>
                </Box>

                <Box>
                  <ImageGrid width={500} height={450} cols={4} rowHeight={164}>
                    {recruiter.companyPhotos.map((photo, i) => (
                      <img src={photo.img} alt={`${i + 1} company`} />
                    ))}
                  </ImageGrid>
                </Box>
              </Grid>
            </Grid>
                    </form>*/}
        </CardContent>
      </Card>
    </div>
  );
};

export default RecruiterProfile;
