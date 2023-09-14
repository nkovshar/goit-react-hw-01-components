import ProfileModule from './profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={ProfileModule.profile}>
      <div className={ProfileModule.description}>
        <img src={avatar} alt={username} className={ProfileModule.avatar} />
        <p className={ProfileModule.name}>{username}</p>
        <p className={ProfileModule.lowerHeading}>{tag}</p>
        <p className={ProfileModule.lowerHeading}>{location}</p>
      </div>

      <ul className={ProfileModule.stats}>
        <li className={ProfileModule.listItem}>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className={ProfileModule.listItem}>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className={ProfileModule.listItem}>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
