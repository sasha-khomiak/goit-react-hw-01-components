import cssModule from './FriendList.module.css';
import PropTypes from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  // console.log(friends);
  return (
    <div>
      <h2 className={cssModule.title}>Your friends</h2>
      <ul className={cssModule[`friend-list`]}>
        {friends.map(el => (
          <FriendListItem
            id={el.id}
            src={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
