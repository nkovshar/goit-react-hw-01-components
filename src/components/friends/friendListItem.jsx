import FriendsModule from './friends.module.css';

const FriendsListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={FriendsModule.item}>
      <span
        className={
          isOnline ? FriendsModule.statOnline : FriendsModule.statOffline
        }
      >
        {isOnline}
      </span>
      <img
        className={FriendsModule.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendsListItem;
