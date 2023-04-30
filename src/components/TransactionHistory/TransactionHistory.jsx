import clsx from 'clsx';
import cssModule from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <h2 className={cssModule.title}>transaction-history</h2>
      <table className={cssModule['transaction-history']}>
        <thead className={cssModule.header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((el, ind) => (
            <tr
              key={el.id}
              className={clsx(
                ind % 2 === 0 && cssModule['odd-row'],
                ind % 2 !== 0 && cssModule['pair-row']
              )}
            >
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
