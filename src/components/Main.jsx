import React from 'react';
import PropTypes from 'prop-types';
import '../css/Main.css';
import Contents from './Contents';
import Footer from './Footer';
import Graph from './Graph';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div>
                    <section className="title">
                        <h1>Nokogiri<br /> Web Developer👨🏻‍💻 </h1>
                        <p>Java / Javascript / Vim</p>
                    </section>
                    <Graph />
                </div>
                <Contents />
                <Footer linkList={this.props.linkList} />
            </div >
        )
    }
}

Main.propTypes = {
    linkList: PropTypes.array.isRequired,
};

export default Main;