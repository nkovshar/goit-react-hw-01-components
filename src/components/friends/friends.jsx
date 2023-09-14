import FriendsListItem from './friendListItem';
import FriendsModule from './friends.module.css';

const Friends = ({ friends }) => {
  return (
    <div>
      <ul className={FriendsModule.friendList}>
        {friends.map(friend => (
          <FriendsListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default Friends;
