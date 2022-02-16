import PropTypes from 'prop-types';
import './FriendList.css';

function FriendListItem({ avatar, status, name }) {
  return (
    <li className="item">
      <div
        style={{
          background: status ? 'green' : 'red',
        }}
        className="status"
      >
        {status}
      </div>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
