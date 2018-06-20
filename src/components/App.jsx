import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import MenuList from './MenuLIst';
import Main from './Main';
import github from '../svg/github-logo.svg';
import blog from '../svg/blog.svg';
import qiita from '../svg/qiita.svg';
import twitter from '../svg/twitter.svg';
import speaker from '../svg/speaker.svg';

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

const linkList = [
  {
    title: 'Github',
    href: 'https://github.com/nkgrnkgr',
    imgSrc: github
  },
  {
    title: 'Blog',
    href: 'https://nkgr.hatenablog.com/',
    imgSrc: blog
  },
  {
    title: 'Qiita',
    href: 'https://qiita.com/nkgr',
    imgSrc: qiita
  },
  {
    title: 'Twiiter',
    href: 'https://twitter.com/nkgrnkgr',
    imgSrc: twitter
  },
  {
    title: 'SpeakerDeck',
    href: 'https://speakerdeck.com/undefined_name',
    imgSrc: speaker
  },
]

const main = (isMenuOpen) => {
  if (isMenuOpen) {
    return <MenuList linkList={linkList} />
  }
  return <Main linkList={linkList} />
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