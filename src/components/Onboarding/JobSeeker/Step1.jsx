import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  MenuItem,
  Radio,
  Select,
  Typography,
  RadioGroup,
  OutlinedInput,
  InputAdornment,
  Grid,
  makeStyles,
  Button,
  Box,
  IconButton,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { useSnackbar } from "notistack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { randomNumber } from "../../../utils/common";

const expertiseOptions = [
  { value: "FRESHER", label: "Fresher" },
  { value: "INTERMEDIATE", label: "Intermediate" },
  { value: "EXPERIENCED", label: "Experienced" },
];

const Step1 = ({ next, initialData }) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [experienceType, _setExperienceType] = useState("PROFESSIONAL");
  const [experience, _setTotalexperience] = useState();
  const [currentRole, _setCurrentRole] = useState(10);
  const [skills, _setSkills] = useState([
    { _id: randomNumber(4), title: "", expertiseLevel: "FRESHER" },
  ]);

  useEffect(() => {
    if (initialData.experienceType)
      _setExperienceType(initialData.experienceType);
    if (initialData.experience) _setTotalexperience(initialData.experience);
    if (initialData.currentRole) _setCurrentRole(initialData.currentRole);
    if (initialData.skills) {
      const initialSkills = initialData.skills.map((skill) => ({
        ...skill,
        _id: randomNumber(4),
      }));
      _setSkills(initialSkills);
    }
  }, []);

  const addSkillsRow = () => {
    if (skills.length === 4)
      return enqueueSnackbar("Maximum Skills Added", { variant: "error" });

    _setSkills([
      ...skills,
      { _id: randomNumber(4), title: "", expertiseLevel: "fresher" },
    ]);
  };

  const removeSkillsRow = (_id) => {
    if (skills.length === 1)
      return enqueueSnackbar("You must have to add atlease one skill.", {
        variant: "error",
      });

    const updatedSkills = skills.filter((skill) => skill._id !== _id);

    _setSkills(updatedSkills);
  };

  const handleSkillChange = ({ _id, key, value }) => {
    let updatedSkills = skills.map((skill) => {
      if (skill._id === _id) return { ...skill, [key]: value };

      return skill;
    });

    _setSkills(updatedSkills);
  };

  const handleNext = () => {
    if (!experienceType)
      return enqueueSnackbar("Experience Type is Required.", {
        variant: "error",
      });
    if (!experience)
      return enqueueSnackbar("Total Experience is Required.", {
        variant: "error",
      });
    if (experience && (experience > 80 || experience < 0))
      return enqueueSnackbar("Total Experience must be between 0 to 80.", {
        variant: "error",
      });
    if (!currentRole)
      return enqueueSnackbar("Current Role is Required.", { variant: "error" });
    if (skills.filter((skill) => skill.title).length === 0)
      return enqueueSnackbar("You mush add atleast one Skill.", {
        variant: "error",
      });

    const data = {
      experienceType,
      experience,
      currentRole,
    };

    data.skills = skills
      .filter((skill) => skill.title)
      .map((skill) => ({
        title: skill.title,
        expertiseLevel: skill.expertiseLevel,
      }));

    next(data);
  };

  return (
    <>
      <Box mb={5} align="center">
        <Typography variant="h4" className="skill_form_titile">
          Step 1/3 : Add Your Skills
        </Typography>
        <Typography variant="subtitle2" className="skill_form_titile">
          We just need quick info of your expertiese.
        </Typography>
      </Box>

      <Grid item>
        <Grid container direction="column">
          <form>
            <Grid item>
              <FormControl component="fieldset">
                <Typography variant="subtitle2" className={classes.label}>
                  Are You a working professional or fresher?
                </Typography>
                <RadioGroup
                  value={experienceType}
                  onChange={({ target }) => _setExperienceType(target.value)}
                >
                  <FormControlLabel
                    value="PROFESSIONAL"
                    control={<Radio />}
                    label="I am a working professonal"
                  />
                  <FormControlLabel
                    value="FRESHER"
                    control={<Radio />}
                    label="I am a fresher"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  How Many Years of experience do you have ? Dont't include
                  internships
                </Typography>
                <FormControl variant="outlined">
                  <OutlinedInput
                    value={experience}
                    placeholder="e.g, 2.4"
                    max={80}
                    type="number"
                    endAdornment={
                      <InputAdornment position="end">Years</InputAdornment>
                    }
                    inputProps={{
                      "aria-label": "experience",
                    }}
                    labelWidth={0}
                    onChange={({ target }) => _setTotalexperience(target.value)}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <FormControl variant="outlined">
                  <Typography variant="subtitle2" className={classes.label}>
                    Select Your Current role :
                  </Typography>
                  <Select
                    required
                    value={currentRole}
                    onChange={({ target }) => _setCurrentRole(target.value)}
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                  >
                    <MenuItem value={10}>Full-Stack Developer</MenuItem>
                    <MenuItem value={20}>React Developer</MenuItem>
                    <MenuItem value={30}>NodeJs Developer</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item>
              <Box mt={2}>
                <Typography variant="subtitle2" className={classes.label}>
                  Add up to 4 skills and how much expertise you have with each.
                </Typography>
                {skills.map((skill) => (
                  <Grid
                    container
                    spacing={2}
                    key={skill._id}
                    justifyContent="space-between"
                  >
                    <Grid item xs={5}>
                      <TextField
                        fullWidth
                        required
                        id={"skill" + skill._id}
                        placeholder="Skill"
                        type="text"
                        size="medium"
                        variant="outlined"
                        value={skill.title}
                        onChange={({ target }) =>
                          handleSkillChange({
                            _id: skill._id,
                            key: "title",
                            value: target.value,
                          })
                        }
                      />
                    </Grid>

                    <Grid item xs={5}>
                      <FormControl fullWidth variant="outlined">
                        <Select
                          value={skill.expertiseLevel}
                          labelId="expertiseOptions"
                          id="expertise"
                          onChange={({ target }) =>
                            handleSkillChange({
                              _id: skill._id,
                              key: "expertiseLevel",
                              value: target.value,
                            })
                          }
                        >
                          {expertiseOptions.map((expOption) => (
                            <MenuItem
                              key={expOption.value}
                              value={expOption.value}
                            >
                              {expOption.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                      {skills.length > 1 && (
                        <IconButton
                          color="secondary"
                          onClick={() => removeSkillsRow(skill._id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </Grid>
                  </Grid>
                ))}

                <Box my={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={skills.length == 4}
                    className={classes.button}
                    startIcon={<AddIcon />}
                    onClick={addSkillsRow}
                  >
                    Add Skill
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid item>
              <Box
                mt={4}
                justifyContent="flex-end"
                className={classes.buttonContainer}
              >
                <Button
                  size="large"
                  onClick={handleNext}
                  endIcon={<ArrowForwardIcon />}
                  variant="outlined"
                  color="primary"
                >
                  Next
                </Button>
              </Box>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Step1;

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },

  buttonContainer: {
    display: "flex",
  },
}));
