import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

/* eslint-disable */
const Contents = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <section>xs=12 sm=4</section>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <section>xs=12 sm=4</section>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <section>xs=12 sm=4</section>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

Contents.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withStyles(styles)(Contents);
