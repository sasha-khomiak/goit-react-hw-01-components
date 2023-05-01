import cssModule from './Statistics.module.css';
import PropTypes from 'prop-types';
import getRandomHex from '../../utils/getRandomHex';

const Statistics = ({ title, stats }) => {
  return (
    <section className={cssModule.statistics}>
      {title && <h2 className={cssModule.title}>Upload stats</h2>}

      <ul className={cssModule['stat-list']}>
        {stats.map(el => (
          <li
            key={el.id}
            className={cssModule.item}
            style={{ backgroundColor: getRandomHex() }}
          >
            <span className={cssModule.label}>{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
