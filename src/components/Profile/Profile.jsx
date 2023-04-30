import cssModule from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  //   console.log(props);
  return (
    <div className={cssModule.profile}>
      <div className={cssModule.description}>
        <img
          src={avatar}
          alt={`${username} avatar`}
          className={cssModule.avatar}
        />
        <p className={cssModule.name}>{username}</p>
        <p className={cssModule.tag}>@{tag}</p>
        <p className={cssModule.location}>{location}</p>
      </div>

      <ul class={cssModule.stats}>
        <li class={cssModule.stat}>
          <span className={cssModule.label}>Followers</span>
          <span className={cssModule.quantity}>{stats.followers}</span>
        </li>
        <li class={cssModule.stat}>
          <span className={cssModule.label}>Views</span>
          <span className={cssModule.quantity}>{stats.views}</span>
        </li>
        <li class={cssModule.stat}>
          <span className={cssModule.label}>Likes</span>
          <span className={cssModule.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.number.isRequired,
  location: PropTypes.string,
  stats: PropTypes.array,
};

export default Profile;
