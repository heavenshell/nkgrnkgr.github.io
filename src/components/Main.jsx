import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import '../css/Main.css';
import Contents from './Contents';
import Footer from './Footer';
import Graph from './Graph';

class Main extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="main">
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <section className="title">
                            <h1>Nokogiri<br /> Web Developer👨🏻‍💻 </h1>
                            <p>Java / Javascript / Vim</p>
                        </section>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <section className="title">
                            <Graph languageStats={this.props.languageStats} />
                        </section>
                    </Grid>
                </Grid>
                <div>
                </div>
                <Contents />
                <Footer linkList={this.props.linkList} />
            </div >
        )
    }
}

Main.propTypes = {
    linkList: PropTypes.array.isRequired,
    languageStats: PropTypes.object.isRequired,
};

export default Main;