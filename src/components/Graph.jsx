import React from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const roundPercent = (num, decimalPoint) =>
  Math.round(num * 100 * 10 ** decimalPoint) / 10 ** decimalPoint;

const setData = (data, label, dataValue, backgroundColor) => {
  data.labels.push(label);
  data.datasets[0].data.push(dataValue);
  data.datasets[0].backgroundColor.push(backgroundColor);
};

const Graph = props => {
  const backgroundColors = {
    JavaScript: '#EBDC50',
    CSS: '#63A9D4',
    Java: '#D01D04',
    Python: '#2D435E',
    TypeScript: '#4177CB',
    Ruby: '#D35332'
  };

  const data = {
    labels: [],
    datasets: [
      {
        label: 'languages',
        backgroundColor: [],
        data: []
      }
    ]
  };

  const options = {
    legend: {
      labels: {
        fontColor: '#c9cacc'
      }
    }
  };

  let etcValue = 0;
  let total = 0;
  const temp = [];
  /* eslint-disable */
  for (const [key, value] of Object.entries(props.languageStats)) {
    if (temp.length >= 5) {
      etcValue += value;
    } else if (key !== 'HTML' && key !== 'Objective-C' && key !== 'C') {
      temp.push({ key, value, backgroundColor: backgroundColors[key] });
      total += value;
    }
  }
  /* eslint-enable */
  temp.push({ key: 'etc', value: etcValue, backgroundColor: '#000' });
  total += etcValue;

  temp.map(item =>
    setData(
      data,
      `${item.key} - ${roundPercent(item.value / total, 2)}%`,
      item.value,
      item.backgroundColor
    )
  );

  return (
    <div>
      <Doughnut data={data} width={20} height={20} options={options} />
    </div>
  );
};

Graph.propTypes = {
  languageStats: PropTypes.objectOf(PropTypes.number).isRequired
};

export default Graph;
