import PropTypes from 'prop-types';
import { Li, Name, Status } from './FriendList.styled';

export default function FriendListItem({ isOnline, src, name }) {
  return (
    <Li>
      <Status isOnline={isOnline}></Status>
      <img src={src} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Li>
  );
}

FriendListItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
