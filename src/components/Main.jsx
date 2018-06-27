import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import '../css/Main.css';
import Contents from './Contents';
import Footer from './Footer';
import Graph from './Graph';

const Main = ({ linkList, languageStats }) => (
  <div className="main">
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <section className="title">
          <h1>
            Nokogiri
            <br />
            Web Developer👨🏻‍💻
          </h1>
          <p>
            Javascript/Java/Vim
            <br />
          </p>
        </section>
      </Grid>
      <Grid item xs={12} sm={6}>
        <section className="title">
          <Graph languageStats={languageStats} />
        </section>
      </Grid>
    </Grid>
    <div />
    <Contents />
    <Footer linkList={linkList} />
  </div>
);

Main.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.any).isRequired,
  languageStats: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Main;
