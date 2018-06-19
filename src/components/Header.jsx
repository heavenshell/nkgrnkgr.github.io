import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import logo from '../svg/logo.svg';
import '../css/Header.css';

const styles = {
    iconButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    diplayNone: {
        display: 'none',
    }
};

const Menu = (props, classes) => {
    if (props.isMenuOpen === false) {
        return (
            <IconButton className={classNames(classes.iconButton)} color="inherit" aria-label="Clear" onClick={() => props.handleChangeMenuOpen()}>
                <MenuIcon />
            </IconButton>
        )
    }
    return (
        <IconButton className={classNames(classes.iconButton)} color="inherit" aria-label="Menu" onClick={() => props.handleChangeMenuOpen()}>
            <ClearIcon />
        </IconButton>
    )
}

class Header extends React.Component {


    render() {
        const { classes } = this.props;
        return (
            <header className="header">
                <a href="./">
                    <img src={logo} className="logo" alt="logo" />
                </a>
                {Menu(this.props, classes)}
            </header >
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
    handleChangeMenuOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);