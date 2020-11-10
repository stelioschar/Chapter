import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

/* eslint-disable-next-line */
export interface FeaturesProduct1Props {}

export const LoginToProduct2 = () => {
  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6">Welcome to Product2!</Typography>
        <Box marginTop={2}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              data-testid="outlined-adornment-name"
              onChange={() => null}
              startAdornment={<InputAdornment position="start">Name</InputAdornment>}
              labelWidth={60}
            />
          </FormControl>

          <Box paddingY={1.5} />

          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              data-testid="outlined-adornment-password"
              onChange={() => null}
              startAdornment={<InputAdornment position="start">Password</InputAdornment>}
              labelWidth={90}
            />
          </FormControl>
        </Box>
        <Box marginTop={4}>
          <Button variant="outlined" color="primary">
            Product2 Button
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default LoginToProduct2;
