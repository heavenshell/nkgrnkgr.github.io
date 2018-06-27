import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

const styles = {
  iconButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Menu = ({ isMenuOpen, classes, handleChangeMenuOpen }) => (
  <div>
    <IconButton
      className={classes.iconButton}
      color="inherit"
      aria-label={isMenuOpen ? 'Clear' : 'Menu'}
      onClick={() => handleChangeMenuOpen()}
    >
      {isMenuOpen ? <ClearIcon /> : <MenuIcon />}
    </IconButton>
  </div>
);

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  handleChangeMenuOpen: PropTypes.func.isRequired
};

export default withStyles(styles)(Menu);
