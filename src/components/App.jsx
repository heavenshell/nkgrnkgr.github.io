import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import MenuList from './MenuLIst';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    width: '32px',
    height: '32px'
  }
};

const main = (isMenuOpen) => {
  if (isMenuOpen) {
    return <MenuList />
  }
  return <div>aaa</div>
}

class App extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      isMenuOpen: false
    }
  }
  handleChangeMenuOpen() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header isMenuOpen={this.state.isMenuOpen} handleChangeMenuOpen={() => this.handleChangeMenuOpen()} />
        {main(this.state.isMenuOpen)}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);