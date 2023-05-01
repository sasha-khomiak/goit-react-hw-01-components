import PropTypes from 'prop-types';
import { Li, Name, Status } from './FriendList.styled';

export default function FriendListItem({ id, isOnline, src, name }) {
  console.log('id', id);

  return (
    <Li key={id}>
      <Status isOnline={isOnline}></Status>
      <img src={src} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
