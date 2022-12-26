import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import { Box, Grid, Paper, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Signup = () => {
  const paperStyle = { padding: 20, height: "50vh", width: 350, margin: "0 auto" };
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Box sx={{ paddingTop: 15 }}>
        <Paper style={paperStyle}>
          <Grid align="center">
            <form className={classes.root}>
              <Typography>Sign Up Form</Typography>
              <TextField
                label="First Name"
                variant="filled"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                label="Last Name"
                variant="filled"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                variant="filled"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <Link href="#">
                  <Button variant="contained">Cancel</Button>
                </Link>
                <Link href="/signup">
                  <Button type="submit" variant="contained" color="primary">
                    Signup
                  </Button>
                </Link>
              </div>
            </form>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default Signup;
