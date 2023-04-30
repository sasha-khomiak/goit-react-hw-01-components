import cssModule from './FriendList.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FriendList = ({ friends }) => {
  return (
    <div>
      <h2 className={cssModule.title}>Your friends</h2>
      <ul className={cssModule[`friend-list`]}>
        {friends.map(el => (
          <li className={cssModule.item} key={el.id}>
            <span
              className={clsx(
                cssModule.status,
                el.isOnline && cssModule.statusOnline,
                !el.isOnline && cssModule.statusOffline
              )}
            ></span>
            <img
              className={cssModule.avatar}
              src={el.avatar}
              alt={el.name}
              width="48"
            />
            <p className={cssModule.name}>{el.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
