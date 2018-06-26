import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

class Graph extends React.Component {

    render() {
        const backgroundColors = {
            JavaScript: '#EBDC50',
            CSS: '#63A9D4',
            Java: '#D01D04',
            Python: '#2D435E',
            TypeScript: '#4177CB',
            Ruby: '#D35332',
        }

        const data = {
            labels: [],
            datasets: [{
                label: "languages",
                backgroundColor: [],
                data: [],
            }]
        }

        const options = {
            legend: {
                labels: {
                    fontColor: '#c9cacc',
                }
            }
        }

        const o = this.props.languageStats;
        let etcValue = 0;
        let total = 0;
        const temp = [];
        for (let [key, value] of Object.entries(o)) {
            if (temp.length >= 5) {
                etcValue += value;
            } else {
                if (key !== 'HTML' && key !== 'Objective-C' && key !== 'C') {
                    temp.push({ key, value, backgroundColor: backgroundColors[key] });
                    total += value;
                }
            }
        }
        temp.push({ key: 'etc', value: etcValue, backgroundColor: '#000' });
        total += etcValue;
        console.log(temp);

        temp.map(item => {
            setData(data, `${item.key} - ${roundPercent((item.value / total), 2)}%`, item.value, item.backgroundColor);
        });

        return (
            <div className='graph'>
                <Doughnut data={data} width={40} height={40} options={options} />
            </div>
        )
    }
}

const setData = (data, label, dataValue, backgroundColor) => {
    data.labels.push(label);
    data.datasets[0].data.push(dataValue);
    data.datasets[0].backgroundColor.push(backgroundColor);
}

const roundPercent = (num, decimalPoint) => Math.round(num * 100 * Math.pow(10, decimalPoint)) / Math.pow(10, decimalPoint);

Graph.propTypes = {
    languageStats: PropTypes.object.isRequired,
};

export default Graph;