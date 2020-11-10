import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface MaterialHeaderProps {
  url: string;
  title: string;
  buttonText: string;
}

const MaterialHeader: FunctionComponent<MaterialHeaderProps> = ({ url, title, buttonText }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Box marginRight={1}>
            <Link to="/">
              <Button variant="contained" data-testid="button--home">
                Home
              </Button>
            </Link>
          </Box>
          <Link to={url}>
            <Button variant="contained" data-testid="button--feature">
              {buttonText}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MaterialHeader;
