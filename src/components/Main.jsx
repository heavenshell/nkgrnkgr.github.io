import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import '../css/Main.css';
import Contents from './Contents';
import Footer from './Footer';
import Graph from './Graph';

const Main = ({ linkList, languageStats }) => (
  <div className="main">
    <section className="portfolio">
      <Grid container spacing={24} alignItems="center">
        <Grid item xs={12} sm={6}>
          <h1>
            Nokogiri
            <br />
            Web Developer👨🏻‍💻
          </h1>
          <p>
            Javascript/Java/Vim
            <br />
          </p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Graph languageStats={languageStats} />
        </Grid>
      </Grid>
    </section>
    <Contents />
    <Footer linkList={linkList} />
  </div>
);

Main.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.any).isRequired,
  languageStats: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Main;
