import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  chip: { margin: 1 }
};

const Content = props => {
  const { classes } = props;
  const { title } = props;
  const { comment } = props;
  const { date } = props;
  const { linkUrl } = props;
  const { githubUrl } = props;
  const { image } = props;
  const { chips } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image.url}
          title={image.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="subheading" component="h2">
            {date}
          </Typography>
          <Typography component="p">
            {comment}
            <br />
            <br />
          </Typography>
          {chips.map(chip => (
            <Chip key={chip} label={chip} className={classes.chip} />
          ))}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={githubUrl} target="brank">
            github
          </Button>
          <Button size="small" color="primary" href={linkUrl} target="brank">
            LinK
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

Content.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  chips: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withStyles(styles)(Content);
