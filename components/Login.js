import React from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
  const paperStyle = { padding: 20, height: "73vh", width: 300, margin: "0 auto" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <>
      <Box sx={{ paddingTop: 20 }}>
        <Grid>
          <Paper style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
              <h2>Sign In</h2>
            </Grid>
            <TextField label="Username" placeholder="Enter username" fullWidth required />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth>
              Sign in
            </Button>
            <Typography>
              <Link href="#">Forgot password ?</Link>
            </Typography>
            <Typography>
              Do you have an account ?<Link href="/signup">Sign Up</Link>
            </Typography>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
