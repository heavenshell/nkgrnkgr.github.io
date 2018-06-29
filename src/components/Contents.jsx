import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Content from './Content';
import data from '../data/data';

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

const Contents = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" spacing={24}>
        {data.map(item => (
          <Grid item xs={12} md={4} lg={3} key={item.title}>
            <Content
              key={item.title}
              title={item.title}
              date={item.date}
              comment={item.comment}
              linkUrl={item.linkUrl}
              githubUrl={item.githubUrl}
              image={item.image}
              chips={item.chips}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Contents.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired
};

export default withStyles(styles)(Contents);
